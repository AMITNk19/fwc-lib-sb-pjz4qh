import { css, LitElement, html } from 'lit-element';
import * as d3 from 'd3';

const sharedStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :host {
    display: block;
    width: 100%;
    line-height: calc(2.75 * var(--fwcu));
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

class FwcChartDateRangeComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
      :host {
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        margin-bottom: calc(1.75*var(--fwcu));;
        flex-basis: 65%;
     }
      @media screen and (max-width: 600px) {
        :host{
          flex-basis: 100%;
          flex-wrap: wrap;
          justify-content: center;
       }
     }
      .fwc-date-range-selector button {
        margin: 0px;
        appearance: none;
        background: #fff;
        border-top: 1px solid var(--color-primary);
        border-bottom: 1px solid var(--color-primary);
        border-left: 1px solid var(--color-primary);
        border-right: none;
        font-size: calc(1.5*var(--fwcu));
        height: calc(3.75*var(--fwcu));
        color: var(--color-primary);
        padding: 0 calc(2.5*var(--fwcu));
        font-weight: 700;
      }
      .fwc-date-range-selector button:last-child{border-right: 1px solid var(--color-primary);}
      .fwc-date-range-selector button.current {
        font-size: calc(1.5*var(--fwcu));
        color: #fff;
        background: var(--color-primary);
        font-weight: 700;
     }
     .fwc-date-range-selector {
        display: flex;
     }
     .fwc-date-selector-nav {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        height: calc(3.75*var(--fwcu));
        margin-left: 10%;
        flex-shrink: 0;
     }
      @media screen and (max-width: 600px) {
        .fwc-date-selector-nav {
          flex-basis: 100%;
          margin-top: calc(3*var(--fwcu));
          margin-left: 0;
       }
     }
      .fwc-date-selector-nav button {
        appearance: none;
        border: none;
        background: none;
        height: calc(4*var(--fwcu));
        margin: 0px calc(.5*var(--fwcu));
     }
      .fwc-date-selector-nav svg {
        font-family: none;
        display: inline-block;
        font-size: calc(2.5*var(--fwcu));
        margin: 0 spacer(1);
        fill: var(--color-primary);
     }
      .fwc-date-selector-nav button:hover,
      .fwc-date-range-selector button:hover {
        cursor: pointer;
      }
      .fwc-date-selector-nav .next svg {
        transform: rotate(-90deg);
     }
      .fwc-date-selector-nav .prev svg {
        transform: rotate(90deg);
     }
     .disabled {
      opacity: 0.3;
      pointer-events: none;
     } 
      `,
    ];
  }

  static get properties() {
    return {
      date: { attribute: 'date', type: Date },
      navLabels: {attribute: 'nav-labels', type: Object}
    }
  }

  constructor() {
    super();
    this.DateNavObject = {
      year: '',
      month: '',
      week: '',
      day: ''
    };
    this.DateRangeType = {
      Year: 'year',
      Month: 'month',
      Week: 'week',
      Day: 'day'
    };
    this._dateNavCurrent = new Date();
    this.dateRangeType = this.DateRangeType.Year;
    this.disableNextArrow = false;
  
    this.date = new Date();
    this.navLabels = {
      year: 'Year',
      month: 'Month',
      week: 'Week',
      day: 'Day'
    };
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if(name === 'date'){
      this.setDateTimeNavigationObject(this._dateNavCurrent);
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  // handles the 4 buttons to change a date range (Year, Month, Week, Day)
  handleDateRangeChange(e) {
    switch (e.target.value) {
      case 'year':
        this.dateRangeType = this.DateRangeType.Year;
        break;
      case 'month':
        this.dateRangeType = this.DateRangeType.Month;
        break;
      case 'week':
        this.dateRangeType = this.DateRangeType.Week;
        break;
      case 'day':
        this.dateRangeType = this.DateRangeType.Day;
        break;
    }
    this.setNavAndEmit();
  }

  setNavAndEmit() {
    this.setDateTimeNavigationObject(this._dateNavCurrent);
    
    this.dispatchEvent(
      new CustomEvent('fwc-date-range', {
        detail: {
          dateRangeType: this.dateRangeType,
          dateNavCurrent: this._dateNavCurrent,
          weekRange: this.getCurrentWeekRange(this._dateNavCurrent)
        },
        bubbles: true
      })
    );
    // disable next arrow if there is no date to go to
    this.checkNextArrowState(this._dateNavCurrent, this.dateRangeType);
  }

  // handle the prev and next arrow buttons to change dates
  handlePrevNextDateChange(dir) {
    const increment = dir === 'next' ? 1 : -1;

    // increment the current date
    this._dateNavCurrent = this.incrementDate(this._dateNavCurrent, increment);
    this.setNavAndEmit();
  }

  incrementDate(date, increment) {
    let incrementedDate = new Date(date);

    switch (this.dateRangeType) {
      case this.DateRangeType.Year:
        incrementedDate.setFullYear(incrementedDate.getFullYear() + increment);
        break;
      case this.DateRangeType.Month:
       incrementedDate.setMonth(incrementedDate.getMonth() + increment);
        break;
      case this.DateRangeType.Week:
       incrementedDate.setDate(incrementedDate.getDate() + (increment * 7));
        break;
      case this.DateRangeType.Day:
       incrementedDate.setDate(incrementedDate.getDate() + increment);
        break;
    }

    return incrementedDate;
  }

  checkNextArrowState(date, dateRangeTypeRangeType) {
    this.disableNextArrow = this.isFutureDate(this.dateRangeType, date);
  }

  isFutureDate(dateRangeTypeRangeType, dateNavCurrent) {
    const today = new Date();
    let isFuture = false;

    switch (this.dateRangeType) {
      case this.DateRangeType.Year:
        // check if the next nav year is greater than the current year
        isFuture = today.getFullYear() < (dateNavCurrent.getFullYear() + 1);
        break;
      case this.DateRangeType.Month:
        // check if current nav year is the same as current year
        // check if next nav month is greater than current month
        isFuture = today.getFullYear() === dateNavCurrent.getFullYear() && today.getMonth() < (dateNavCurrent.getMonth() + 1);
        break;
      case this.DateRangeType.Week:
        //check if first day of the week in our range in greater than today
        const d = new Date(dateNavCurrent);
        d.setDate(d.getDate() + 7);
        const { firstDayOfWeek } = this.getCurrentWeekRange(d);
        isFuture = today < firstDayOfWeek;
        break;
      case this.DateRangeType.Day:
        // check if current nav year is the same as current year
        // check if current nav month is the same as current month
        // check if next nav day is greater than today
        isFuture =
          (today.getFullYear() === dateNavCurrent.getFullYear() && today.getMonth() === dateNavCurrent.getMonth())
          &&
          today.getDate() < (dateNavCurrent.getDate() + 1);
        break;
    }
    return isFuture;
  }

  // given a date, returns it formatted as mm/dd/yyyy
  getFormattedDate(date) {
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    let day = date.getDate().toString();
    month = month.length > 1 ? month : '0' + month;
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day + '/' + year;
  }

  // sets an object that we can pull formatted date strings, year, month, week and day
  setDateTimeNavigationObject(date) {
    const locale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;
    let year;
    let month;
    let day;
    let weekRange;
    let week;

    // sometimes navigating between ranges we can end up with a future date
    // if today is nov 10 and we change from a week range of oct 21 - oct 28
    // if we get a future date, reset it to today
    if (this.isFutureDate(this.dateRangeType, date)) {
      date = new Date();
      this._dateNavCurrent = date;
    }

    year = date.getFullYear();
    month = date.toLocaleDateString(locale, { month: 'long' });
    day = this.getFormattedDate(date);
    weekRange = this.getCurrentWeekRange(date);
    week = this.getFormattedDate(weekRange.firstDayOfWeek) + ' - ' + this.getFormattedDate(weekRange.lastDayOfWeek);

    this._dateNavObject = {
      year: year,
      month: month,
      week: week,
      day: day
    };
    // set the displayed date text for each date range, text in between the prev/next arrows
    switch (this.dateRangeType) {
      case this.DateRangeType.Year:
        this.dateNavDisplayText = this._dateNavObject.year;
        this.requestUpdate();
        break;
      case this.DateRangeType.Month:
        this.dateNavDisplayText = this._dateNavObject.month;
        this.requestUpdate();
        break;
      case this.DateRangeType.Week:
        this.dateNavDisplayText = this._dateNavObject.week;
        this.requestUpdate();
        break;
      case this.DateRangeType.Day:
        this.dateNavDisplayText = this._dateNavObject.day;
        this.requestUpdate();
        break;
    }
    // disable next arrow if there is no date to go to
    this.checkNextArrowState(this._dateNavCurrent, this.dateRangeType);
  }

  // given a date, returns the first (Sunday) and last (Saturday) days of the week
  getCurrentWeekRange(date) {
    const curr = new Date(date);
    const day = curr.getDay();
    let firstDayOfWeek = new Date(curr.getTime() - 60 * 60 * 24 * day * 1000); // will return first day (i.e. Sunday) of the week
    let lastDayOfWeek = new Date(firstDayOfWeek.getTime() + 60 * 60 * 24 * 6 * 1000); // will return  last day (Saturday) of the week

    firstDayOfWeek = new Date(firstDayOfWeek.setHours(0, 0, 0, 0)); // set it to beginning of the day
    lastDayOfWeek = new Date(lastDayOfWeek.setHours(23, 59, 59, 999)); // set it to the end of the day

    return {
      firstDayOfWeek: firstDayOfWeek,
      lastDayOfWeek: lastDayOfWeek
    };
  }

  render() {
    return html`
      <div class="fwc-date-range-selector" @click="${event => this.handleDateRangeChange(event)}">
        <button class="btn ${this.dateRangeType === 'day' ? 'current' : ''}" value="day">${this.navLabels.day}</button>
        <button class="btn ${this.dateRangeType === 'week' ? 'current' : ''}" value="week">${this.navLabels.week}</button>
        <button class="btn ${this.dateRangeType === 'month' ? 'current' : ''}" value="month">${this.navLabels.month}</button>
        <button class="btn ${this.dateRangeType === 'year' ? 'current' : ''}" value="year">${this.navLabels.year}</button>
      </div>
      <div class="fwc-date-selector-nav">

        <button class="prev" value="prev" @click="${() => this.handlePrevNextDateChange('prev')}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="20"
          viewBox="0 0 50 50"
        >
          <polygon
            points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378"
            transform="matrix(1 0 0 -1 0 51.66)"
          />
        </svg></button>
        <span class="current">${this.dateNavDisplayText}</span>
        <button class="next ${this.disableNextArrow ? 'disabled' : ''}" value="next" @click="${() => this.handlePrevNextDateChange('next')}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="20"
          viewBox="0 0 50 50"
        >
          <polygon
            points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378"
            transform="matrix(1 0 0 -1 0 51.66)"
          />
        </svg></button>
      </div>

    `;
  }
}

class FwcBase {
  constructor(name, component) {
    this.element = customElements.get(name);
    this.name = name;
    this.component = component;
  }

  build() {
    if (!this.element) {
      customElements.define(this.name, this.component);
    }
  }
}

class FwcChartDateRange extends FwcBase {
  constructor() {
    super('fwc-chart-date-range', FwcChartDateRangeComponent);
  }
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

class FwcChartBiometricComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          color: var(--color-gray-one);
        }
        svg {
          overflow: hidden;
        }
        .fwc-biometric-chart {
          position: relative;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
        .fwc-biometric-chart .range-key {
          flex: 1;
          display: flex;
          align-items: center;
          height: calc(3.75 * var(--fwcu));
        }
        .range-key .block {
          height: 100%;
          width: calc(7.5 * var(--fwcu));
          background: rgba(var(--color-rgb-dviz-one), 0.1);
          border-top: 1px dashed var(--color-dviz-two);
          border-bottom: 1px dashed var(--color-dviz-two);
          margin-right: calc(1.25 * var(--fwcu));
        }
        .range-key .text {
          font-size: calc(1.5 * var(--fwcu));
        }

        .fwc-biometric-chart .date-range-selector .date-selector-range .btn.current {
          color: var(--color-white);
          background: var(--color-primary);
        }
        .fwc-biometric-chart .date-range-selector .date-selector-nav {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          height: calc(3.75 * var(--fwcu));
          margin-left: 10%;
          flex-shrink: 0;
        }
        .fwc-biometric-chart .svg-biometric {
          position: relative;
          flex-basis: 100%;
        }
        .fwc-biometric-chart .axis--x path {
          display: none;
        }
        .fwc-biometric-chart .axis--x line {
          display: none;
        }
        .fwc-biometric-chart .axis--x text {
          font-weight: 700;
        }
        .fwc-biometric-chart .axis--y path,
        .fwc-biometric-chart .axis--y line {
          display: none;
        }
        .fwc-biometric-chart .axis--y text {
          font-weight: 700;
        }
        .fwc-biometric-chart .y-axis-grid text,
        .fwc-biometric-chart .y-axis-grid path {
          display: none;
        }
        .fwc-biometric-chart .y-axis-grid line {
          opacity: 0.05;
        }
        .fwc-biometric-chart .tool-tip {
          position: absolute;
          width: 0;
          height: 0;
          overflow: visible;
          background-color: var(--color-black);
        }
        .fwc-biometric-chart .tool-tip .arrow_box {
          position: absolute;
          background: var(--color-white);
          border: 1px solid var(--color-primary);
          padding: calc(1.25 * var(--fwcu));
          text-align: center;
          min-width: calc(15.5 * var(--fwcu));
          transform: translate(-50%, -115%);
          left: 0;
          top: 0;
        }
        .fwc-biometric-chart .tool-tip .arrow_box:after {
          top: calc(100% - 2px);
          left: 50%;
          content: '';
          height: 0;
          width: 0;
          position: absolute;
          border-left: calc(1.25 * var(--fwcu)) solid transparent;
          border-right: calc(1.25 * var(--fwcu)) solid transparent;
          border-top: calc(1.25 * var(--fwcu)) solid var(--color-white);
          transform: translateX(-50%);
        }
        .fwc-biometric-chart .tool-tip .arrow_box:before {
          top: 100%;
          left: 50%;
          content: '';
          height: 0;
          width: 0;
          position: absolute;
          border-left: calc(1.25 * var(--fwcu)) solid transparent;
          border-right: calc(1.25 * var(--fwcu)) solid transparent;
          border-top: calc(1.25 * var(--fwcu)) solid var(--color-primary);
          transform: translateX(-50%);
        }
        .fwc-biometric-chart .tool-tip .bio-value {
          font-size: calc(1.5 * var(--fwcu));
          font-weight: 700;
          margin: calc(0.75 * var(--fwcu)) 0;
        }
        .fwc-biometric-chart .tool-tip .bio-label,
        .fwc-biometric-chart .tool-tip .bio-date {
          font-size: calc(1.5 * var(--fwcu));
        }
        .mhr-area-chart {
          fill: var(--color-dviz-one);
          opacity: 0.1;
        }
        .biometric-dot {
          fill: var(--color-primary);
        }
        .biometric-limit-line {
          fill: none;
          stroke: var(--color-dviz-two);
          stroke-width: 1;
          stroke-dasharray: 4, 4;
        }
        @media screen and (max-width: 600px) {
          .fwc-biometric-chart .axis--y .tick:nth-child(odd) {
            opacity: 0;
          }
          .fwc-biometric-chart .date-range-selector .date-selector-nav {
            flex-basis: 100%;
            margin-top: calc(3 * var(--fwcu));
            margin-left: 0;
          }
          .fwc-biometric-chart .range-key {
            order: 4;
            margin-top: calc(3 * var(--fwcu));
            flex-basis: 100%;
          }
        }
      `,
    ];
  }

  // TODO: Aria live / region, ets
  static get properties() {
    return {
      data: { type: Array },
      leftMargin: { attribute: 'left-margin', type: String },
      extent: { attribute: 'extent', type: Number },
      startDate: { attribute: 'start-date', type: String },
      yAxisLabel: { attribute: 'y-axis-label', type: String },
      averageDaily: { attribute: 'average-daily', type: Boolean },
      locale: { attribute: 'locale', type: Object },
      navLabels: { attribute: 'nav-labels', type: Object },
    };
  }

  constructor() {
    super();
    this.fwcChartDateRange = new FwcChartDateRange();
    this.fwcChartDateRange.build();
    this.DateRangeType = {
      Year: 'year',
      Month: 'month',
      Week: 'week',
      Day: 'day',
    };
    this._masterData;
    this._svg;
    this._chart;
    this._margin = { top: 30, right: 0, bottom: 50, left: 60 };
    this._width;
    this._height;
    this._innerWidth;
    this._innerHeight;
    this._tooltip;
    this._xDomain;
    this._yDomain;
    this._xScale;
    this._yScale;
    this._xAxis;
    this._yAxis;
    this._yAxisGrid;
    this._gX;
    this._gY;
    this._gYGrid;
    this._dataView;
    this._dateRangeType = this.DateRangeType.Year;
    this._currentNavDate = new Date();
    this._currentNavWeekRange;
    this._isMobile = false; // mobile will be anything less than 600px

    // the user data
    this.data = [];
    // a custom range for the y-axis max and min
    this.extent;
    // a start date to begin the chart on
    this.startDate = new Date();
    // the y-axis label, ie mg/dL
    this.yAxisLabel;
    // if true, will take an average of all data for the same day
    // only averages the data for year, month and week views
    this.averageDaily;
    // a custom set of terms used for the date and time
    this.locale = {};
    // nav label text options
    this.navLabels = {
      key: 'Standard Range',
      year: 'Year',
      month: 'Month',
      week: 'Week',
      day: 'Day',
    };
    this._handleWindowResize = debounce(() => {
      this.init();
    }, 250);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleWindowResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleWindowResize);
    super.disconnectedCallback();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'data' && oldVal !== newVal) {
      this.data = JSON.parse(newVal);
      this._masterData = this.data;
      this.init();
      if (this._masterData) {
        this.handleDateRangeChange({ dateNavCurrent: this._currentNavDate, dateRangeType: this._dateRangeType, weekRange: this._currentNavWeekRange });
      }
    }

    if (name === 'left-margin' && oldVal !== newVal) {
      this._margin.left = newVal;
    }

    super.attributeChangedCallback(name, oldVal, newVal);
  }

  firstUpdated() {
    this.attachToolTip();
    const dateRangeCmp = this.shadowRoot.querySelector('fwc-chart-date-range');
    dateRangeCmp.addEventListener('fwc-date-range', (e) => {
      this.handleDateRangeChange(e.detail);
    });
    this._masterData = this.data;
    this.init();
    //After initial load, pass data into date range cmp so it can filter initial year data
    this.handleDateRangeChange({ dateNavCurrent: this._currentNavDate, dateRangeType: this._dateRangeType, weekRange: this._currentNavWeekRange });
  }

  init() {
    this._isMobile = window.innerWidth < 600;
    this.setUpData();
    this.initSvgDimensions();
    this.initDomainScales();
    this.initSvg();
    this.drawAxisGrid();
    this.plotData();
  }

  setUpData() {
    this.data
      .sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      })
      .map((item) => {
        item.date = new Date(item.date);
        return item;
      });

    // only average set daily average when date range selector is year, month or week
    if (this.averageDaily && this._dateRangeType !== this.DateRangeType.Day) {
      this.averageDailyData();
    }
  }

  initSvgDimensions() {
    this._width = this.shadowRoot.host.clientWidth;
    this._height = this._isMobile ? this._width : this._width * 0.5;
    this._innerWidth = this._width - this._margin.left - this._margin.right;
    this._innerHeight = this._height - this._margin.top - this._margin.bottom;
  }

  initSvg() {
    // if there is an svg, remove it and start over
    if (this._svg) {
      this._svg.remove();
    }
    // init and append the svg
    this._svg = d3.select(this.shadowRoot.getElementById('svg-biometric')).append('svg').attr('width', this._width).attr('height', this._height);

    // add a group for the chart
    this._chart = this._svg.append('g').attr('transform', 'translate(0, 0)');
  }

  initDomainScales() {
    // set d3 domains and scales
    this._xDomain = this.getXDomain();
    this._yDomain = this.getYDomain(this.data);
    this._xScale = d3
      .scaleTime()
      .domain(this._xDomain)
      .range([this._margin.left, this._width - this._margin.right]);
    this._yScale = d3
      .scaleLinear()
      .domain(this._yDomain)
      .nice()
      .range([this._height - this._margin.bottom, this._margin.top]);
  }

  getXDomain() {
    const year = this._currentNavDate.getFullYear();
    const monthFirstDay = new Date(this._currentNavDate.getFullYear(), this._currentNavDate.getMonth(), 1);
    const monthLastDay = new Date(this._currentNavDate.getFullYear(), this._currentNavDate.getMonth() + 1, 0);
    // this offset and the ones below add small padding on the ends of the x axis
    // else the dates will set to the very edges of the chart
    // dates must be yyyy-mm-dd or else IOS will not work
    let domain = [d3.timeDay.offset(new Date(`${year}-01-01`), -15), new Date(`${year}-12-31`)];

    switch (this._dateRangeType) {
      case this.DateRangeType.Year:
        // just use default domain range
        break;
      case this.DateRangeType.Month:
        domain = [d3.timeHour.offset(monthFirstDay, -12), d3.timeHour.offset(monthLastDay, 12)];
        break;
      case this.DateRangeType.Week:
        domain = [d3.timeHour.offset(this._currentNavWeekRange.firstDayOfWeek, -12), this._currentNavWeekRange.lastDayOfWeek];
        break;
      case this.DateRangeType.Day:
        const start = new Date(this._currentNavDate.setHours(0, 0, 0, 0)); // set it to beginning of the day
        const end = new Date(this._currentNavDate.setHours(23, 59, 59, 999)); // set it to the end of the day
        domain = [d3.timeMinute.offset(start, this._isMobile ? -59 : -30), d3.timeMinute.offset(end, this._isMobile ? 59 : 30)];
        break;
    }

    return domain;
  }

  getYDomain(data) {
    let stdRangeMin = d3.min(data, (d) => d.range.low);
    let stdRangeMax = d3.max(data, (d) => d.range.high);
    let minValue = d3.min(data, (d) => d.value) || 0;
    let maxValue = d3.max(data, (d) => d.value) || 0;
    let padding;

    // if the project has passed a custom extent, just use it
    // else we will calculate it on our own
    if (this.extent) {
      return [this.extent.min, this.extent.max];
    }

    if (stdRangeMin < minValue) {
      minValue = stdRangeMin;
    }
    if (stdRangeMax > maxValue) {
      maxValue = stdRangeMax;
    }

    if (minValue === 0 && maxValue === 0) {
      if (this._yDomain) {
        // if there is empty data, use the previous domain to keep the scale the same
        return this._yDomain;
      } else {
        // if there is empty data and no prev domain, just set it to 0 - 100
        minValue = 0;
        maxValue = 100;
      }
    }

    // give 20% padding to the top and bottom of the range
    padding = (maxValue - minValue) * 0.2;
    minValue -= Math.abs(padding);
    maxValue += Math.abs(padding);

    return [Math.round(minValue), Math.round(maxValue)];
  }

  setLocale() {
    // a default locale to fall back on, standard
    const defaultLocale = {
      decimal: '.',
      thousands: ',',
      grouping: [3],
      currency: ['$', ''],
      dateTime: '%a %b %e %X %Y',
      date: '%m/%d/%Y',
      time: '%H:%M:%S',
      periods: ['AM', 'PM'],
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      shortMonths: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    };

    return d3.timeFormatLocale({ ...defaultLocale, ...this.locale });
  }

  multiFormat(date) {
    const locale = this.setLocale();
    let format;

    // format of y-axis date/times
    switch (this._dateRangeType) {
      case this.DateRangeType.Year:
        format = locale.format(this._isMobile ? '%b' : '%B')(date);
        break;
      case this.DateRangeType.Month:
        format = locale.format('%e')(date);
        break;
      case this.DateRangeType.Week:
        format = locale.format(this._isMobile ? '%a' : '%A')(date);
        break;
      case this.DateRangeType.Day:
        // remove the m from am and pm for mobile
        format = this._isMobile ? locale.format('%-I %p')(date).slice(0, -1) : locale.format('%-I %p')(date);
        break;
    }
    return format;
  }

  drawAxisGrid() {
    let numXAxisTicks;
    let tickSpacing;

    switch (this._dateRangeType) {
      case this.DateRangeType.Year:
        numXAxisTicks = d3.timeMonth;
        tickSpacing = 1;
        break;
      case this.DateRangeType.Month:
        numXAxisTicks = d3.timeDay;
        tickSpacing = this._isMobile ? 5 : 1;
        break;
      case this.DateRangeType.Week:
        numXAxisTicks = d3.timeDay;
        tickSpacing = 1;
        break;
      case this.DateRangeType.Day:
        numXAxisTicks = d3.timeHour;
        tickSpacing = this._isMobile ? 3 : 2;
        break;
    }
    // build a 3rd axis for horizontal grid lines
    // this was originally done cause we had zooming and needed a clip-path to stop the grid from bleeding onto the axis ticks
    this._yAxisGrid = d3.axisLeft(this._yScale).tickSize(-this._innerWidth).tickFormat('');
    this._xAxis = d3
      .axisBottom(this._xScale)
      .ticks(numXAxisTicks.every(tickSpacing))
      .tickFormat((d) => this.multiFormat(d));

    this._yAxis = d3.axisLeft(this._yScale).tickFormat((d, i) => {
      // set first value to the yAxisLabel, ie mg/dL
      return i === 0 && this.yAxisLabel ? this.yAxisLabel : d;
    });

    // Graphics for Y axis
    this._gY = this._chart
      .append('g')
      .attr('class', 'axis axis--y')
      // give it a little (15) padding from the chart
      .attr('transform', `translate(${this._margin.left - 15},0)`)
      .call(this._yAxis);

    // Graphics for X axis
    this._gX = this._chart
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0, ${this._height - this._margin.top})`)
      .call(this._xAxis);

    // Graphics for Y axis grid
    this._gYGrid = this._chart.append('g').attr('class', 'y-axis-grid').attr('transform', `translate(${this._margin.left},0)`).call(this._yAxisGrid);
  }

  plotData() {
    // we cannot add the clip path to the dataView, so we create a wrapper for it
    // the clip-paths were originally with the zoom option
    const dataViewWrapper = this._chart.append('g').attr('class', 'view-wrapper');

    this._dataView = dataViewWrapper.append('g').attr('class', 'view').attr('x', 0.5).attr('y', 0.5).attr('width', this._innerWidth).attr('height', this._innerHeight);
    // Add the background area chart first so that points on top are clickable and handle mouseover
    if (this.data.length) {
      this.drawStandardRange();
    }

    // Add the points
    this._dataView
      .append('g')
      .selectAll('dot')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('cx', (d) => this._xScale(d.date))
      .attr('cy', (d) => this._yScale(d.value))
      .attr('r', this._isMobile ? 4 : 8)
      .attr('class', 'biometric-dot')
      .on('mouseover', (d) => this.mouseover(d))
      .on('mousemove', (event, d) => this.mousemove(event, d))
      .on('mouseout', (d) => this.mouseout(d));
  }

  drawStandardRange() {
    const data = this.data.map((x) => Object.assign({}, x));
    let areaStart = { ...data[0] };
    let areaEnd = { ...data[0] };
    let areaData;
    let highRange = null;
    let lowRange = null;
    let curveFunc;
    let showLowLine = true;
    let showHighLine = true;

    // we need to extend the range to the full width of the chart
    // so we extend the dataset by copying an item twice and setting their dates to the start and end domain
    // then prepend and append them to our data set, now area() will span the width we need
    areaStart.date = this._xDomain[0];
    areaEnd.date = this._xDomain[1];
    areaData = [areaStart, ...this.data, areaEnd];

    // we need to check for high and low range, sometimes data comes in with nothing or just one of the values
    // if values are inconsistent then we will take the extreme
    areaData.forEach((d) => {
      if (d.range.low != null) {
        if (lowRange == null) {
          lowRange = d.range.low;
        }
        lowRange = lowRange < d.range.low ? lowRange : d.range.low;
      }

      if (d.range.high != null) {
        if (highRange == null) {
          highRange = d.range.high;
        }
        highRange = highRange > d.range.high ? highRange : d.range.high;
      }
    });

    // if lowRange is missing set it to the bottom of the chart
    // and remove the dashed line
    if (typeof highRange === 'number' && lowRange == null) {
      showLowLine = false;
      lowRange = this._yScale.domain()[0];
    }

    // if highRange is missing set it to the top of the chart
    // and remove the dashed line
    if (typeof lowRange === 'number' && highRange == null) {
      showHighLine = false;
      highRange = this._yScale.domain()[1];
    }

    // if there is no range do not draw it
    if (typeof lowRange !== 'number' && typeof highRange !== 'number') {
      return;
    }

    // the range area
    curveFunc = d3
      .area()
      .x((d) => this._xScale(d.date))
      .y1(this._yScale(highRange))
      .y0(this._yScale(lowRange));

    this._dataView.append('path').attr('class', 'mhr-area-chart').attr('d', curveFunc(areaData));

    if (showHighLine) {
      // top dashed line
      this._dataView
        .append('path')
        .datum(areaData)
        .attr('class', 'biometric-limit-line')
        .attr(
          'd',
          d3
            .line()
            .x((d) => this._xScale(d.date))
            .y(this._yScale(highRange))
        );
    }

    if (showLowLine) {
      // bottom dashed line
      this._dataView
        .append('path')
        .datum(areaData)
        .attr('class', 'biometric-limit-line')
        .attr(
          'd',
          d3
            .line()
            .x((d) => this._xScale(d.date))
            .y(this._yScale(lowRange))
        );
    }
  }

  attachToolTip() {
    this._tooltip = d3.select(this.shadowRoot.getElementById('svg-biometric')).append('div').attr('class', 'tool-tip').style('display', 'none').html(`
        <div class="arrow_box">
          <div class="bio-label"></div>
          <div class="bio-value"></div>
          <div class="bio-date"></div>
        </div>
      `);
  }

  mouseover() {
    this._tooltip.style('display', null);
  }

  mousemove(event, d) {
    const locale = this.setLocale();
    const xPosition = d3.pointer(event)[0];
    const yPosition = d3.pointer(event)[1];

    this._tooltip.style('transform', `translate(${xPosition}px, ${yPosition}px)`);
    this._tooltip.select('.bio-label').text(d.name);
    this._tooltip.select('.bio-value').text(d.value);

    this._tooltip.select('.bio-date').text(locale.format('%x')(d.date));
  }

  mouseout() {
    this._tooltip.style('display', 'none');
  }

  // filter the master data array based on the current date range
  handleDateRangeChange(obj) {
    this._dateRangeType = obj.dateRangeType;
    this._currentNavDate = obj.dateNavCurrent;
    this._currentNavWeekRange = obj.weekRange;

    switch (obj.dateRangeType) {
      case this.DateRangeType.Year:
        this.data = this._masterData.filter((data) => {
          return data.date.getFullYear() === obj.dateNavCurrent.getFullYear();
        });
        break;
      case this.DateRangeType.Month:
        this.data = this._masterData
          .filter((data) => {
            return data.date.getFullYear() === obj.dateNavCurrent.getFullYear();
          })
          .filter((data) => {
            return data.date.getMonth() === obj.dateNavCurrent.getMonth();
          });
        break;
      case this.DateRangeType.Week:
        this.data = this._masterData.filter((data) => {
          return data.date.getTime() <= obj.weekRange.lastDayOfWeek.getTime() && data.date.getTime() >= obj.weekRange.firstDayOfWeek.getTime();
        });
        break;
      case this.DateRangeType.Day:
        this.data = this._masterData
          .filter((data) => {
            return data.date.getFullYear() === obj.dateNavCurrent.getFullYear();
          })
          .filter((data) => {
            return data.date.getMonth() === obj.dateNavCurrent.getMonth();
          })
          .filter((data) => {
            return data.date.getDate() === obj.dateNavCurrent.getDate();
          });
        break;
    }
    this.init();
  }

  averageDailyData() {
    // deep copy the data
    const data = this.data.map((x) => Object.assign({}, x));
    // an array of arrays by the same day
    let daysArray = [];
    // group data by the same day
    data.forEach((d) => {
      let found = false;

      if (!daysArray.length) {
        daysArray.push([d]);
      } else {
        for (let i = 0; i < daysArray.length; i++) {
          // is it the same day
          found = Math.abs(daysArray[i][0].date - d.date) < 1000 * 3600 * 24 && daysArray[i][0].date.getDay() === d.date.getDay();

          if (found) {
            daysArray[i].push(d);
            break;
          }
        }
        if (!found) {
          daysArray.push([d]);
        }
      }
    });

    // total and average each days values
    this.data = daysArray.map((day) => {
      const average = day.reduce((tot, cur) => tot + cur.value, 0) / day.length;
      // just use the first piece of data in the array to set the new average value and return it
      day[0].value = Math.round(average);
      return day[0];
    });
  }

  render() {
    return html`
      <div class="fwc-biometric-chart">
        <div class="range-key">
          <div class="block"></div>
          <div class="text">${this.navLabels.key}</div>
        </div>
        <fwc-chart-date-range date=${this.startDate} nav-labels=${JSON.stringify(this.navLabels)}></fwc-chart-date-range>
        <div id="svg-biometric" class="svg-biometric"></div>
      </div>
    `;
  }
}

class FwcChartBiometric extends FwcBase {
  constructor() {
    super('fwc-chart-biometric', FwcChartBiometricComponent);
  }
}

const breakpoints = {
  'md': 900,
  'sm': 600
};

const baseUnit = 8;

!!(window.CSS && CSS.supports('color', 'var(--primary)'));

class FwcChartBarCompareComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-chart-bar-compare {
          display: block;
          width: 100%;
          position: relative;
        }

        .values {
          display: flex;
        }

        .legend {
          display: flex;
          justify-content: space-between;
        }

        .legend-item span {
          position: relative;
          font-size: calc(1.75 * var(--fwcu));
          font-weight: 700;
          padding: 0 calc(2.75 * var(--fwcu));
        }
        .legend-item div {
          padding: 0 calc(2.75 * var(--fwcu));
        }

        .legend-item span:before {
          content: '';
          width: calc(1.5 * var(--fwcu));
          height: calc(1.5 * var(--fwcu));
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border-radius: 50%;
        }
        .chart-bar:nth-child(1) {
          fill: var(--color-dviz-seven);
        }
        .chart-bar:nth-child(2) {
          fill: var(--color-dviz-four);
        }

        .legend-item:nth-child(2) span:before {
          background-color: var(--color-dviz-four);
        }

        .legend-item:nth-child(1) span:before {
          background-color: var(--color-dviz-seven);
        }

        #svg-wrapper {
          position: relative;
          margin-top: calc(6.25 * var(--fwcu));
        }

        .chart-grid line {
          stroke: lightgrey;
          stroke-opacity: 0.7;
          shape-rendering: crispEdges;
        }

        svg {
          overflow: visible;
        }

        .x-axis,
        .y-axis {
          font-size: calc(1.5 * var(--fwcu));
          font-family: var(--font-sans-serif);
          font-weight: 700;
          color: var(--color-gray-one);
        }
        .key {
          text-anchor: middle;
          font-size: calc(1.5 * var(--fwcu));
        }
        .keyVal {
          text-anchor: middle;
          font-size: calc(1.75 * var(--fwcu));
          font-weight: bold;
        }
        .axis-grid {
          opacity: 0.1;
          stroke-width: 0.5;
        }
        .chart-polyline {
          fill: var(--color-white);
          stroke: var(--color-primary);
          stroke-width: 1px;
          pointer-events: none;
        }
      `,
    ];
  }

  static get properties() {
    return {
      data: { type: Array },
      showChart: { attribute: 'show-chart', type: Boolean },
    };
  }

  constructor() {
    super();
    this.data;
    this.showChart;
    this._data = null;
    this._width = null;
    this._height = null;
    this._innerWidth = null;
    this._innerHeight = null;
    this._margin = { top: 20, right: 10, bottom: 20, left: 10 };
    this._x0 = null; // using to defined domain
    this._x1 = null; // using to defined domain and range
    this._y = null;
    this._yAxisGrid = null;
    this._xAxisLabelList = [];
    this._svg = null;
    this._chart = null;
    this._xAxis = null;
    this._yAxis = null;
    this._barNames = null;
    this._xAxisLabel = null;

    this._stack = null;
    this._tooltip = null;
    this.yAxisLabelMaxWidth = 0;
    this._DELAY_BETWEEN_BAR_ANIMATIONS = 50;
    this._BAR_ANIMATION_DURATION = 200;
    this.valueKeys = null;
    this._handleWindowResize = debounce(() => {
      this.init();
    }, 250);
  }

  firstUpdated() {
    if (this.data && this.isValidData(this.data)) {
      this._data = this.data.graphData;
      this.prepData(this._data);
      this._xAxisLabelList = this.data.xAxisLabels;
    }
    this.init();
  }

  attributeChangedCallback(name, oldval, newval) {
    if (name === 'show-chart' && oldval) {
      this.showChart = JSON.parse(newval);
    }
    if (name === 'data' && oldval && this.showChart) {
      if (name === 'data') {
        this.data = [];
        this.data = JSON.parse(newval);
        this._data = this.data.graphData;
        this.prepData(this._data);
        this._xAxisLabelList = this.data.xAxisLabels;
      }
      this.init();
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleWindowResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleWindowResize);
    super.disconnectedCallback();
  }

  prepData(obj) {
    let res =
      obj &&
      obj.reduce((arr, o) => {
        return Object.keys(o).reduce((a, k) => {
          if (k !== 'element' && a.indexOf(k) == -1) a.push(k);
          return a;
        }, arr);
      }, []);
    this.valueKeys = res;
    this._stack = d3.stack().keys(this.valueKeys);
  }

  init() {
    if (this._svg) {
      this._svg.remove();
    }

    this.initDimensions();
    this.initScales();
    this.initSvg();
    this.attachToolTip();
    this.setDomain();
    this.drawAxis();
    this.drawChart();
  }

  initDimensions() {
    this._width = this.clientWidth;
    const h = window.innerWidth > breakpoints.sm ? 0.6923 : 1.23;
    this._height = this._width * h;
    this._innerWidth = this._width - this._margin.left - this._margin.right;
    this._innerHeight = this._height - this._margin.top - this._margin.bottom;
    this._xAxisLabel = window.innerWidth > breakpoints.sm ? 'desktop' : 'mobile';
  }

  initScales() {
    // x-axis domain defined below
    this._x0 = d3
      .scaleBand()
      .domain(this._xAxisLabelList.map((d) => d))
      .rangeRound([0, this._width - this._margin.right])
      .padding(0.5);

    // x-axis domain and range defined below
    this._x1 = d3.scaleBand().rangeRound([0, this._x0.bandwidth()]).padding(0.5);

    //y position calculation function
    this._y = d3.scaleLinear().range([this._innerHeight, 0]).nice();
  }

  initSvg() {
    this._svg = d3
      .select(this.shadowRoot.getElementById('svg-wrapper'))
      .append('svg')
      .attr('class', 'chart')
      .attr('width', this._width)
      .attr('height', this._height)
      .on('click', () => {
        // hide tool tip on mobile if clicking on svg background
        // we prevent the propagation from a click on a bar in drawChart()
        this._tooltip.style('display', 'none');
      });

    this._chart = this._svg.append('g');

    this._stack = d3.stack().keys(this.valueKeys);
    const maxLabel = d3.max(this._stack(this._data), (d) => {
      return d3.max(d, (d) => {
        return d[1];
      });
    });

    let maxWidth;
    this._svg
      .append('text')
      .text(maxLabel)
      .each(function () {
        maxWidth = this.getBBox().width;
      })
      .remove();

    this.yAxisLabelMaxWidth = maxWidth;
  }

  attachToolTip() {
    this._tooltip = this._svg.append('g').attr('class', 'tool-tip').style('display', 'none');

    this._tooltip.append('polyline').attr('points', '0,0  0,110 47,110 57,120 67,110 114,110 114,0 0,0').attr('class', 'chart-polyline');

    this._tooltip.append('text').attr('class', 'key key1').attr('y', 24).attr('x', 55);

    this._tooltip.append('text').attr('class', 'keyVal value1').attr('y', 44).attr('x', 55);

    this._tooltip.append('text').attr('class', 'key key2').attr('y', 72).attr('x', 55);

    this._tooltip.append('text').attr('class', 'keyVal value2').attr('y', 92).attr('x', 55);
  }

  setDomain() {
    this._barNames = this.valueKeys;

    this._data.forEach((d) => {
      d.element = this._barNames.map((name) => {
        return { name: name, value: +d[name] };
      });
    });

    //use new array from just values for the bottom x-axis
    this._x0.domain(
      this._data.map((d, i) => {
        return this._xAxisLabelList[i];
      })
    );

    //array of bar names value names, fitted in the available bottom categories (x0.bandwidth())
    this._x1.domain(this._barNames).rangeRound([0, this._x0.bandwidth()]);

    this._y.domain([
      0,
      d3.max(this._data, (d) => {
        return d3.max(d.element, (d) => {
          return d.value;
        });
      }),
    ]);
  }

  drawAxis() {
    const xAxis = d3
      .axisBottom(this._x0)
      .tickSize(0)
      .tickFormat((d) => {
        // because we need to override the default x-axis labeling for d3
        // you are not allowed to have duplicates (ie 'J' for June and July does not work), so we track them by id and then change the label here
        return this._xAxisLabelList
          .filter((data) => {
            return data === d;
          })
          .reduce((tot, cur) => {
            return this._xAxisLabel === 'desktop' ? cur : cur.charAt(0);
          }, '');
      });

    this._yAxis = d3
      .axisLeft(this._y)
      .tickSize(0)
      .tickFormat((d) => {
        return this._getFormattedCurrency(d);
      });

    const yAxisGrid = d3
      .axisLeft(this._y)
      .tickSize(-(this._width - (this.yAxisLabelMaxWidth + 40)))
      .tickFormat('')
      .ticks(10);

    this._xAxis = this._chart
      .append('g')
      .classed('x-axis', true)
      .attr('transform', 'translate(44,' + (this._innerHeight + 10) + ')')
      .attr('aria-label', 'Range of the X-axis')
      .call(xAxis);

    this._yAxis = this._chart
      .append('g')
      .classed('y-axis', true)
      .attr('transform', `translate(${this.yAxisLabelMaxWidth + 10}, 0)`)
      .attr('aria-label', 'Range of the Y-axis')
      .call(this._yAxis);

    this._yAxisGrid = this._chart
      .append('g')
      .attr('transform', `translate(${this.yAxisLabelMaxWidth + 35}, 0)`)
      .attr('class', 'y axis-grid')
      .call(yAxisGrid);

    //remove domain lines
    this._xAxis.select('.domain').attr('stroke-width', 0);
    this._yAxis.select('.domain').attr('stroke-width', 0);
    this._yAxisGrid.select('.domain').attr('stroke-width', 0);
  }

  drawChart() {
    const layersBarArea = this._chart.append('g').classed('layers', true).attr('transform', 'translate(40,0)');

    let state = layersBarArea
      .selectAll('.state')
      .data(this._data)
      .enter()
      .append('g')
      .attr('class', 'state')
      .attr('transform', (d, i) => {
        return 'translate(' + this._x0(this._xAxisLabelList[i]) + ',0)';
      });

    state
      .selectAll('rect')
      .data((d) => {
        return d.element;
      })
      .enter()
      .append('rect')
      .attr('class', 'chart-bar')
      .on('mouseover', () => {
        this._tooltip.style('display', null);
      })
      .on('mouseout', () => {
        this._tooltip.style('display', 'none');
      })
      .on('mousemove', (event, d) => {
        const data = d3.select(event.currentTarget.parentNode).datum().element;
        const xPosition = event.layerX - 58;
        const [x, y] = d3.pointer(event);
        this._tooltip.attr('transform', 'translate(' + xPosition + ',' + (y - 120) + ')');
        data.map((d, idx) => {
          this._tooltip.select(`.key${idx + 1}`).text(d.name || 0);
          this._tooltip.select(`.value${idx + 1}`).text(this._getFormattedCurrency(d.value));
        });
      })
      .on('click', (e) => {
        // because we want to grab the click on the svg bg to hide tooltip on mobile, see initSvg()
        // but here we stop it from bubbling cause we want the click on the rect bar
        e.stopPropagation();
      })
      .attr('x', (d) => {
        return this._x1(d.name) + 4;
      })
      //set height and y to initial values you can transition from
      .attr('height', 0)
      .attr('y', this._innerHeight)
      .attr('width', this._x1.bandwidth() + 2)
      .transition()
      .delay((d, i) => i * this._DELAY_BETWEEN_BAR_ANIMATIONS)
      .duration(this._BAR_ANIMATION_DURATION)
      // transition to values for y and height
      .attr('y', (d) => {
        return this._y(d.value || 0);
      })
      .attr('height', (d) => {
        return this._innerHeight - this._y(d.value || 0);
      });
  }

  /* c8 ignore next 34 */
  isValidData(obj) {
    let errors = false;
    try {
      if (obj.graphData && obj.graphData.length === 0) {
        errors = true;
        throw new Error(`graphData is an empty array or is missing, valid numbers of labels allowed (1, 2 or 3)`);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (obj.graphData.length < 3 || obj.graphData.length > 12) {
        errors = true;
        throw new Error(`the required number of bars for the chart: min = 3, max = 12, you passed in ${obj.graphData.length}`);
      }
    } catch (error) {
      console.error(error);
    }
    return !errors;
  }

  //convert value into currency format
  _getFormattedCurrency(value) {
    if (!value) {
      return 0;
    }
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
  }

  _getTotalValue(obj) {
    let ele = {};
    obj &&
      obj.map((item) => {
        this.valueKeys.map((key) => {
          return (ele[key] = parseInt(ele[key] ? ele[key] : 0) + parseInt(item[key]));
        });
      });
    return ele;
  }

  _buildKeys() {
    this.prepData(this.data.graphData);
    const totalObj = this._getTotalValue(this.data.graphData);
    const keys = html`${this.valueKeys &&
    this.valueKeys.map((key) => {
      return html` <div class="legend-item">
        <span>${key}</span>
        <div>${this._getFormattedCurrency(totalObj[key])}</div>
      </div>`;
    })}`;
    return keys;
  }

  render() {
    return html`
      <div class="fwc-chart-bar-compare">
        <div class="legend">
          <div class="values">${this._buildKeys()}</div>
        </div>
        <div id="svg-wrapper"></div>
      </div>
    `;
  }
}

class FwcChartBarCompare extends FwcBase {
  constructor() {
    super('fwc-chart-bar-compare', FwcChartBarCompareComponent);
  }
}

class FwcChartCorrelationComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-correlation-chart-container {
          min-height: calc(62.5 * var(--fwcu));
          position: relative;
          color: var(--color-gray-one);
        }
        svg {
          display: block;
        }
        path.arc {
          opacity: 0.9;
          transition: opacity 0.5s;
        }
        path.arc:hover {
          opacity: 0.6;
          transition: opacity 0.5s;
        }
        .center-circle {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: calc(15 * var(--fwcu));
          height: calc(15 * var(--fwcu));
          border-radius: calc(7.5 * var(--fwcu));
          background-color: var(--color-white);
          position: absolute;
          top: calc(14.5 * var(--fwcu));
          left: calc(14.5 * var(--fwcu));
          padding: calc(2.5 * var(--fwcu));
          text-align: center;
        }
        .percentageText {
          font-family: var(--font-serif);
          margin-bottom: calc(var(--fwcu));
          font-size: calc(3.5 * var(--fwcu));
          font-weight: 500;
          text-anchor: start;
          color: var(--color-gray-one);
        }
        .completionText {
          font-family: var(--font-sans-serif);
          color: var(--color-gray-two);
          font-size: calc(1.75 * var(--fwcu));
          line-height: calc(2 * var(--fwcu));
        }
        .r.axis text {
          text-anchor: end;
        }
        .fwc-correlation-chart-tooltip {
          color: var(--color-black);
          position: absolute;
          display: none;
          background: var(--color-white);
          border: 1px solid var(--color-primary);
          border-radius: calc(0.25 * var(--fwcu));
          padding: calc(2.5 * var(--fwcu));
          text-align: center;
        }

        .fwc-correlation-chart-tooltip::after {
          content: '';
          width: calc(2 * var(--fwcu));
          height: calc(2 * var(--fwcu));
          transform: rotate(45deg);
          position: absolute;
          bottom: calc(-1.07 * var(--fwcu));
          left: 43.8%;
          background: white;
          border-right: 1px solid var(--color-primary);
          border-bottom: 1px solid var(--color-primary);
        }
        .arc-label {
          font-size: calc(1.75 * var(--fwcu));
          font-weight: 600;
        }
        .fwc-correlation-chart-legend-container-host {
          position: absolute;
          bottom: calc(9.5 * var(--fwcu));
        }
        .fwc-correlation-chart-legend-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0;
        }
        .legend-item {
          margin-left: calc(1.75 * var(--fwcu));
        }
        .legend-item:first-child {
          margin-left: 0;
        }
        .title-wrapper {
          display: flex;
          align-items: center;
        }
        .label-title {
          margin-left: calc(1.25 * var(--fwcu));
        }
        .label-icon {
          position: relative;
          width: calc(3 * var(--fwcu));
          height: calc(3 * var(--fwcu));
          border-radius: 50%;
          border-width: 2px;
          border-style: solid;
        }
        .label-icon span {
          position: absolute;
          top: -1px;
          left: 5px;
        }
        .label-value {
          margin-left: calc(4.5 * var(--fwcu));
          margin-top: calc(0.5 * var(--fwcu));
          width: 100%;
        }
        .circle {
          fill-opacity: 0.9;
        }
        .fill-color-white {
          fill: var(--color-white);
        }
        .fill-color-gray-five {
          fill: var(--color-gray-five);
        }
        .fill-color-dviz-one {
          fill: var(--color-dviz-one);
        }
        .fill-color-dviz-seven {
          fill: var(--color-dviz-seven);
        }
        .fill-color-dviz-four {
          fill: var(--color-dviz-four);
        }
        .border-color-dviz-one {
          border-color: var(--color-dviz-one);
        }
        .border-color-dviz-seven {
          border-color: var(--color-dviz-seven);
        }
        .border-color-dviz-four {
          border-color: var(--color-dviz-four);
        }
      `,
    ];
  }

  // TODO: Aria live / region, ets
  static get properties() {
    return {
      data: { type: Array },
      label: { type: String },
      max: { type: Number },
      units: { type: String },
    };
  }

  constructor() {
    super();
    this.data = [];
    this.colors = ['fill-color-dviz-one', 'fill-color-dviz-seven', 'fill-color-dviz-four'];
    this._width = '';
    this._height = '';
    this._chartRadius = '';
    this._color = '';
    this._element = '';
    this._tooltip = '';
    this._pi = '';
    this._arcMinRadius = '';
    this._arcPadding = '';
    this._labelPadding = '';
    this._arcWidth = '';
    this._numArcs = '';
    this._labelColors = ['border-color-dviz-one', 'border-color-dviz-seven', 'border-color-dviz-four'];
  }

  attributeChangedCallback(name, oldval, newval) {
    if ((name === 'data' || name === 'colors' || name === 'max' || name === 'label' || name === 'units') && oldval) {
      if (name === 'data' || name === 'colors') {
        this[name] = JSON.parse(newval);
      } else {
        this[name] = newval;
      }
      this.removeChart();
      this.initValues();
      this.renderSvgContainer();
      this.renderCorrelationChart();
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  firstUpdated() {
    this._element = this.shadowRoot.querySelector('.fwc-correlation-chart-container');

    if (this.data) {
      this.initValues();
      this.renderSvgContainer();
      this.renderCorrelationChart();
    }
  }

  /** Initializes various values for the rendering of the svg element. */
  initValues() {
    this._pi = Math.PI;
    this._arcMinRadius = 60;
    this._arcPadding = 5;
    this._labelPadding = -5;
    this._arcWidth = 20;

    // this._element = this.chartContainer.nativeElement;
    this.height = 350;
    this.width = this.height;
    this._chartRadius = Math.min(this.height / 2) - 40;
    this._color = d3.scaleOrdinal(this.colors);
  }

  renderSvgContainer() {
    this._tooltip = d3.select(this._element).append('div').attr('class', 'fwc-correlation-chart-tooltip');

    this._svg = d3
      .select(this._element)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('class', 'main-chart-g')
      .append('g')
      .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
  }

  renderCorrelationChart() {
    let scale = d3
      .scaleLinear()
      .domain([0, d3.max(this.data, (d) => d.value) * 1.03])
      .range([0, 2 * this._pi]);

    let keys = this.data.map((d, i) => d.name);

    // get number of arcs and determine arc width
    this._numArcs = keys.length;

    // Create the base arc svg element for all for all of the other arc elements to
    // painted onto
    let arc = this.initArc(scale, this._numArcs, this._arcWidth);

    // Paints grey background onto arc svg
    this.initRadialAxis(this._numArcs, this._arcWidth);

    // Paints colored arc onto the grey background arc
    this.initArcs(arc);

    // Calculates average of all data values and displays it in center of svg
    this.initPercentage();

    // Creates label icons and displays them at beginning of arcs
    this.initLabels();
  }

  initPercentage() {
    d3.select(this._element)
      .append('div')
      .attr('class', 'center-circle')
      // TODO Mark Inserted HTML
      .html('<div class="percentageText">' + this.getAggregatePercentage() + '</div> <div class="completionText">' + this.label + '</div>');
  }

  initLabels() {
    let heightAdjustCircle = 25;
    let heightAdjustText = 25.7;
    let heightAdjustborderColor = 23;
    let borderColorheight = this._numArcs === 3 ? 72 : 50;
    let borderColorStartPosition = this._numArcs === 3 ? 132 : 132 - heightAdjustborderColor;
    let circleLabelStartPosition = this._numArcs === 3 ? 119.5 : 119.5 - heightAdjustCircle;
    let textLabelStartPosition = this._numArcs === 3 ? 115 : 115 - heightAdjustText;

    this._svg.append('g').attr('transform', 'translate(-10, 0)').append('rect').attr('class', 'fill-color-gray-five').attr('width', 12).attr('height', borderColorheight).attr('x', -2).attr('y', -borderColorStartPosition);

    let labelCircle = this._svg
      .append('g')
      .attr('transform', 'translate(-10, 0)')
      .selectAll('g')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('class', 'circle')
      .attr('r', 10)
      .attr('class', (d, i) => this._color(i))
      .attr('cx', 10)
      .attr('cy', (d, i) => -circleLabelStartPosition + i * heightAdjustCircle);

    labelCircle.on('mousemove', (d) => this.showTooltip(d));
    labelCircle.on('mouseout', (d) => this.hideTooltip());

    let labelContainer = this._svg
      .append('g')
      .attr('transform', 'translate(-10, 0)')
      .selectAll('g')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('class', 'fill-color-white')
      .attr('r', 8)
      .attr('cx', 10)
      .attr('cy', (d, i) => -circleLabelStartPosition + i * heightAdjustCircle);

    labelContainer.on('mousemove', (d) => this.showTooltip(d));
    labelContainer.on('mouseout', (d) => this.hideTooltip());

    let labelText = this._svg
      .append('g')
      .attr('transform', 'translate(-10, 0)')
      .selectAll('g')
      .data(this.data)
      .enter()
      .append('text')
      .attr('class', 'arc-label')
      .attr('y', (d, i) => -textLabelStartPosition + i * heightAdjustText)
      .attr('x', 5.5)
      .text((d) => d.name);

    labelText.on('mousemove', (d) => this.showTooltip(d));
    labelText.on('mouseout', (d) => this.hideTooltip());
  }

  initArc(scale, numArcs, arcWidth) {
    return d3
      .arc()
      .innerRadius((d, i) => this.getInnerRadius(i, numArcs, arcWidth))
      .outerRadius((d, i) => this.getOuterRadius(i, numArcs, arcWidth))
      .cornerRadius(30)
      .startAngle(-0.1)
      .endAngle((d, i) => scale(d));
  }

  initRadialAxis(numArcs, arcWidth) {
    let radialAxis = this._svg.append('g').attr('class', 'r axis').selectAll('g').data(this.data).enter().append('g');

    radialAxis
      .append('circle')
      .attr('class', 'fill-color-gray-five')
      .attr('r', (d, i) => this.getOuterRadius(i, numArcs, arcWidth) + this._arcPadding);
  }

  initArcs(arc) {
    let arcs = this._svg
      .append('g')
      .attr('class', 'data')
      .selectAll('path')
      .data(this.data)
      .enter()
      .append('path')
      .attr('class', (d, i) => 'arc arc-' + (i + 1))
      .attr('class', (d, i) => this._color(i));

    arcs
      .transition()
      .delay((d, i) => i * 200)
      .duration(1000)
      .attrTween('d', (d, i) => this.arcTween(arc, d, i));

    arcs.on('mousemove', (d) => this.showTooltip(d));
    arcs.on('mouseout', (d) => this.hideTooltip());
  }

  getInnerRadius(index, numArcs, arcWidth) {
    return this._arcMinRadius + (numArcs - (index + 1)) * (arcWidth + this._arcPadding);
  }

  getOuterRadius(index, numArcs, arcWidth) {
    return this.getInnerRadius(index, numArcs, arcWidth) + arcWidth;
  }

  arcTween(arc, d, i) {
    let interpolate = d3.interpolate(0, d.value);
    return (t) => arc(interpolate(t), i);
  }

  getAggregatePercentage() {
    let total = 0;
    let dataArray = this.data;

    for (let i = 0; i < dataArray.length; i++) {
      total += dataArray[i].value;
    }

    return Math.floor(total / dataArray.length) + '%';
  }

  showTooltip(d) {
    this._tooltip
      .style('display', 'inline-block')
      .style('min-width', 'calc(15.75 * var(--fwcu))')
      .style('height', 'calc(10.5 * var(--fwcu))')
      .style('left', 'calc(14 * var(--fwcu))')
      .style('top', this.getTooltipPosition(d) + 'px')
      // TODO Mark Inserted HTML
      .html('<div>Value</div> <div>' + this.getTooltipText(d) + '</div>');
  }

  hideTooltip() {
    this._tooltip.style('display', 'none');
  }

  getTooltipPosition(d) {
    let heightAdjust = 26;
    let startPosition = this._numArcs === 3 ? 40 : 40 - heightAdjust;
    for (let i = 0; i < this.data.length; i++) {
      if (d.target.__data__.name === this.data[i].name) {
        return -startPosition + heightAdjust * i - 8;
      }
    }
  }

  getTooltipText(d) {
    return d.target.__data__.value + this.units + ' / ' + this.max + this.units;
  }

  getLabelName(label) {
    return 'Value ' + label.name;
  }

  getLabelValue(label) {
    return label.value + this.units + ' / ' + this.max + this.units;
  }

  removeChart() {
    this.shadowRoot.querySelector('svg').remove();
    this.shadowRoot.querySelector('.center-circle').remove();
    this.shadowRoot.querySelector('.fwc-correlation-chart-tooltip').remove();
  }

  buildKeyChart() {
    const slots = html`${this.data &&
    this.data.map((label, i) => {
      return html`
        <div class="legend-item">
          <div class="title-wrapper">
            <div class="label-icon ${this._labelColors[i]}">
              <span>${label.name}</span>
            </div>
            <div class="label-title arc-label">${this.getLabelName(label)}</div>
          </div>
          <div class="label-value">${this.getLabelValue(label)}</div>
        </div>
      `;
    })}`;
    return slots;
  }

  render() {
    return html`
      <div class="fwc-correlation-chart-container" #chart>
        <div class="fwc-correlation-chart-legend-container-host">
          <div class="fwc-correlation-chart-legend-container">${this.buildKeyChart()}</div>
        </div>
      </div>
    `;
  }
}

class FwcChartCorrelation extends FwcBase {
  constructor() {
    super('fwc-chart-correlation', FwcChartCorrelationComponent);
  }
}

class FwcChartDonutComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          color: var(--color-gray-one);
        }
        .wrapper.legend-right {
          display: flex;
          align-items: flex-start;
        }
        .legend-right .container,
        .legend-right .legend {
          flex: 1 1 auto;
        }
        .legend-right .legend {
          margin-left: calc(2 * var(--fwcu));
        }
        .legend:not(.legend-right) {
          margin-top: calc(2 * var(--fwcu));
        }
        .container {
          position: relative;
        }
        .container svg {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          overflow: visible;
        }
        .chart-unit {
          color: var(--color-gray-five);
          margin: 0;
        }
        .chart-text {
          color: var(--color-gray-four);
        }
        canvas {
          display: block;
          visibility: hidden;
          width: 100%;
          height: 100%;
        }
        .tool-tip {
          position: absolute;
          width: 0;
          height: 0;
          overflow: visible;
          background-color: black;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
        .arrow_box {
          position: absolute;
          background: var(--color-white);
          border: 1px solid var(--color-primary);
          padding: calc(1.25 * var(--fwcu));
          text-align: center;
          width: 125px;
          transform: translate(-50%, -115%);
          left: 0;
          top: 0;
          border-radius: var(--border-radius);
        }
        .arrow_box::after {
          top: calc(100% - 1px);
          left: 50%;
          content: '';
          height: 0;
          width: 0;
          position: absolute;
          border-left: calc(1.25 * var(--fwcu)) solid transparent;
          border-right: calc(1.25 * var(--fwcu)) solid transparent;
          border-top: calc(1.25 * var(--fwcu)) solid var(--color-white);
          transform: translateX(-50%);
        }
        .arrow_box::before {
          top: 100%;
          left: 50%;
          content: '';
          height: 0;
          width: 0;
          position: absolute;
          border-left: calc(1.25 * var(--fwcu)) solid transparent;
          border-right: calc(1.25 * var(--fwcu)) solid transparent;
          border-top: calc(1.25 * var(--fwcu)) solid var(--color-primary);
          transform: translateX(-50%);
        }
        .donut-value {
          font-size: calc(1.75 * var(--fwcu));
          font-weight: 700;
          margin: calc(0.5 * var(--fwcu));
          line-height: calc(2 * var(--fwcu));
        }
        .donut-label {
          font-size: calc(1.5 * var(--fwcu));
          line-height: calc(2 * var(--fwcu));
        }
        .fwc-donut-chart {
          position: absolute;
          z-index: 1;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .fwc-donut-chart g.empty path {
          fill: var(--color-gray-four);
        }
        .fwc-donut-chart .radial-progress-0 path {
          fill: var(--color-dviz-seven);
        }
        .fwc-donut-chart .radial-progress-1 path {
          fill: var(--color-dviz-one);
        }
        .fwc-donut-chart .radial-progress-2 path {
          fill: var(--color-dviz-four);
        }
        .fwc-donut-chart .radial-progress-3 path {
          fill: var(--color-dviz-eight);
        }
        .fwc-donut-chart .radial-progress-4 path {
          fill: var(--color-dviz-five);
        }
        .legend {
          width: 100%;
        }
        .legend .legend-title {
          font-weight: 700;
        }
        .legend dl {
          border-top: 1px solid var(--color-gray-four);
        }
        .legend dl div {
          display: flex;
          justify-content: space-between;
          width: 100%;
          overflow: visible;
          border-bottom: 1px solid var(--color-gray-four);
        }
        .legend dl dt {
          padding: calc(2.25 * var(--fwcu)) 0;
          flex-grow: 0;
          flex-shrink: 1;
          flex-basis: calc(75% - (4.5 * var(--fwcu)));
          text-overflow: ellipsis;
          overflow: hidden;
          font-weight: 400;
        }
        .legend dl dd {
          padding: calc(2.25 * var(--fwcu)) 0;
          flex: 0 1 25%;
          font-size: calc(2.25 * var(--fwcu));
          text-align: right;
        }
        .legend dl .key {
          display: flex;
        }
        .legend .key-color {
          height: calc(0.75 * var(--fwcu));
          width: calc(4.25 * var(--fwcu));
          margin-right: calc(1.75 * var(--fwcu));
          display: inline-block;
          border-radius: calc(0.75 * var(--fwcu));
          position: relative;
          top: calc(0.75 * var(--fwcu));
        }
        .legend dl .key-color-0 {
          background-color: var(--color-dviz-seven);
        }
        .legend dl .key-color-1 {
          background-color: var(--color-dviz-one);
        }
        .legend dl .key-color-2 {
          background-color: var(--color-dviz-four);
        }
        .legend dl .key-color-3 {
          background-color: var(--color-dviz-eight);
        }
        .legend dl .key-color-4 {
          background-color: var(--color-dviz-five);
        }
        .legend dl .key-term {
          flex: 1;
        }
        .radial-text-total {
          fill: var(--color-gray-one);
          font-size: calc(4 * var(--fwcu));
          font-family: var(--font-serif);
          font-weight: 500;
          text-anchor: middle;
        }
        .radial-text-title {
          fill: var(--color-gray-two);
          font-size: var(--default-font-size);
          font-family: var(--font-sans-serif);
          font-weight: 300;
          text-anchor: middle;
        }
        .hide {
          display: none;
        }
      `,
    ];
  }

  // TODO: Aria live / region, ets
  static get properties() {
    return {
      labels: { type: Array },
      legend: { type: String },
      legendPos: { attribute: 'legend-pos', type: String }, // bottom | right
      legendHide: { attribute: 'legend-hide', type: Boolean },
      percentages: { type: Array },
      symbol: { type: String }, // currency | percent | none
      text: { type: String },
      title: { type: String },
      tooltipLabel: { attribute: 'tooltip-label', type: String },
    };
  }

  set percentages(val) {
    let oldVal = this._percentages;
    this._percentages = this._transformData(val);
    this.requestUpdate('prop', oldVal);
  }

  get percentages() {
    return this._percentages;
  }

  constructor() {
    super();
    // TODO: This doesn't do anything
    this.animationDuration = 500;
    this.text = '';
    this.percentages = [];
    this._percentages = [];
    this.labels = [];
    this.labelData = [];
    this.symbol = '';
    this.legend = 'Legend';
    this.legendHide = false;
    this.legendPos = 'bottom';
    this.tooltipLabel = 'Value';
    this.title = '';
    this.pi = Math.PI;
    this.size = 200;
    this.thickness = 8;
    this.radius = this.size / 2;
    this.innerRadius = this.radius - this.thickness;
    this.cfr = 360 / 100;
    this.start = 0;
    this.sum = 0;
    this._valueCount = 0;
    this._singleTrack = false;
    this._isEmpty = false;
    this._isPercentage = false;
    this._tooltip;
    this._svg;
    this._handleWindowResize = debounce(() => {
      this._initChart();
    }, 250);
  }

  firstUpdated() {
    this.chartContainer = this.shadowRoot.querySelector('.fwc-donut-chart');
    this._initChart();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleWindowResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleWindowResize);
    super.disconnectedCallback();
  }

  attributeChangedCallback(name, oldval, newval) {
    if (name === 'percentages' && oldval) {
      this.percentages = JSON.parse(newval);
      this._initChart();
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  _transformData(data) {
    let transformed = [];
    this.labelData = [];
    this.sum = this._calcSum(data);
    this._valueCount = data.filter((val) => val > 0).length;
    this._singleTrack = this._setSingleTrack(data);
    this._isPercentage = false;
    this._isEmpty = false;

    if (this._checkForEmpty(data)) {
      transformed = this._emptyChartConfig();
    } else if (data.length === 1) {
      transformed = this._singleValueConfig(data);
    } else {
      transformed = this._multiValueConfig(data);
    }

    return transformed;
  }

  _initChart() {
    // Update chart after DOM has fully updated.
    // Allows for correct position of tool-tip after layout has been changed
    // due to differences in sizing or position of legend.
    setTimeout(() => {
      if (this.isValidData()) {
        this.createSVGElement();
        this.createChart();
        this.attachToolTip();
      }
    }, 0);
  }

  _calcSum(data) {
    return data.reduce(this._getSum, 0);
  }

  _getSum(total, num) {
    return total + num;
  }

  _checkForEmpty(val) {
    let empty = false;
    if (val.length < 1) {
      empty = true;
    }
    if (this.sum === 0) {
      empty = true;
    }
    if (this._valueCount.length < 1) {
      empty = true;
    }
    return empty;
  }

  _setSingleTrack(data) {
    let track = false;
    if (data.length === 1 && this.sum === 100) {
      track = true;
    }
    if (data.length > 1 && this._valueCount === 1) {
      track = true;
    }
    return track;
  }

  _emptyChartConfig() {
    this._isEmpty = true;
    this._singleTrack = true;
    this.animationDuration = 0;
    return [100];
  }

  /* c8 ignore next 4 */
  _singleValueConfig(val) {
    if (val[0] > 100) {
      return val;
    }
    this._isPercentage = true;
    this.sum = 100;
    val[1] = this.sum - val[0];
    this.labelData = val;
    return val;
  }

  _multiValueConfig(data) {
    const sum = data.reduce(this._getSum, 0);
    const computed = data.map((val) => {
      return Math.round(((val * 100) / sum) * 100) / 100;
    });
    this.labelData = this.symbol !== 'percent' ? data : computed;

    return computed;
  }

  /* eslint-disable no-console */
  isValidData() {
    let errors = false;
    try {
      if (this.percentages.length > 5) {
        errors = true;
        throw new Error(`max of 5 values allowed to be based in to [percentages], you passed ${this.percentages.length}`);
      }
    } catch (error) {
      console.error(error);
    }
    try {
      if (this.symbol !== null && this.symbol !== '' && this.symbol !== 'currency' && this.symbol !== 'percent' && this.symbol !== 'none') {
        errors = true;
        throw new Error(`invalid string passed for [symbol], valid values are 'percent', currency' or 'none' you passed '${this.symbol}'`);
      }
    } catch (error) {
      console.error(error);
    }
    return !errors;
  }
  /* eslint-enable no-console */

  createSVGElement() {
    if (this._svg) {
      this._svg.remove();
    }
    this._svg = d3.select(this.chartContainer).append('svg').attr('width', '100%').attr('preserveAspectRatio', 'xMinYMin meet').attr('viewBox', '-100 -100 200 200');

    return;
  }

  _setSymbol(val) {
    val = this._isEmpty ? 0 : val;
    switch (this.symbol) {
      case 'currency':
        val = '$' + val;
        break;
      case 'percent':
        val = val + '%';
        break;
    }
    return val;
  }

  _setLegendPos() {
    let pos = '';
    switch (this.legendPos) {
      case 'right':
        pos = 'legend-right';
        break;
    }
    return pos;
  }

  createChart() {
    const g = this._svg.append('g');
    const arc = this.initArc();
    const width = this.chartContainer.offsetWidth;
    this.percentages.forEach((v, x) => {
      // don't build the track if the value is 0
      if (v === 0) {
        return;
      }

      let v1, v2;
      v1 = this.start;
      v2 = v1 + v;
      this.start = v2;
      let startAngle = this.cfr * v1 * (this.pi / 180);
      let endAngle = this.cfr * v2 * (this.pi / 180);

      // remove gaps when displaying an empty chart
      if (!this._singleTrack) {
        endAngle = endAngle - 0.03;
      }

      const track = g.append('g').attr('class', 'radial-progress-' + x);

      if (this._isPercentage && x === 1) {
        track.attr('class', 'empty radial-progress-' + x);
      }
      if (this._isEmpty) {
        track.attr('class', 'empty radial-progress-' + x);
      }

      track
        .append('path')
        .on('mouseover', (event) => {
          const classNames = event.currentTarget.parentNode.className;
          const isEmpty = classNames.baseVal.indexOf('empty') > -1;

          if (!isEmpty) {
            this._tooltip.style('display', null);
          }
        })
        .on('mouseout', () => {
          this._tooltip.style('display', 'none');
        })
        .on('mousemove', (event) => {
          const xPosition = ((d3.pointer(event)[0] / 100) * width) / 2;
          const yPosition = ((d3.pointer(event)[1] / 100) * width) / 2;
          let value = this._setSymbol(this.labelData[x]);

          this._tooltip.style('transform', `translate(${xPosition}px, ${yPosition}px)`);
          this._tooltip.select('.donut-label').text(this.labels[x]);
          this._tooltip.select('.donut-value').text(value);
        })
        .datum({
          startAngle: startAngle,
          endAngle: endAngle,
        })

        .transition()
        .duration(this.animationDuration)
        .attrTween('d', (d) => {
          let interpolate = d3.interpolate(d.startAngle, d.endAngle);
          return (t) => {
            d.endAngle = interpolate(t);
            return arc(d);
          };
        });
    });
    if (this.text) {
      /* eslint-disable no-unused-vars */
      g
        .append('text')
        .text(this.text)
        .attr('class', 'radial-text-total')
        .attr('dy', baseUnit / 2 + 'px');
      g
        .append('text')
        .text(this.title)
        .attr('class', 'radial-text-title')
        .attr('dy', baseUnit * 2.5 + 'px');
      /* eslint-enable no-unused-vars */
    }
  }

  attachToolTip() {
    this._tooltip = d3.select(this.chartContainer).append('div').attr('class', 'tool-tip').style('display', 'none').html(`
        <div class="arrow_box">
          <div class="donut-title">${this.tooltipLabel}</div>
          <div class="donut-value"></div>
          <div class="donut-label"></div>
        </div>
      `);
  }

  initArc() {
    const arc = d3.arc();
    arc.innerRadius(this.innerRadius).outerRadius(this.radius);

    if (!this._singleTrack) {
      arc.cornerRadius(12);
    }

    return arc;
  }

  buildKeyChart() {
    return html`
      <div class="legend ${this._setLegendPos()} ${this.legendHide ? 'hide' : ''}">
        <div class="legend-title">${this.legend}</div>
        <dl>
          ${this.labels.map(
            (item, i) => html`
              <div>
                <dt>
                  <span class="key">
                    <span class="key-color key-color-${i}"></span>
                    ${item}
                  </span>
                </dt>
                <dd>${this._setSymbol(this.labelData[i])}</dd>
              </div>
            `
          )}
        </dl>
      </div>
    `;
  }

  // Use of canvas is a hack for ie11, it does not read the 100% width and scale svg -->
  // http://nicolasgallagher.com/canvas-fix-svg-scaling-in-internet-explorer/ -->
  // TODO: remove after 12/09/21

  render() {
    return html`
      <div class="wrapper ${this._setLegendPos()}">
        <div class="container">
          <canvas width="200" height="200"></canvas>
          <div class="fwc-donut-chart" #chart></div>
        </div>
        ${this.buildKeyChart()}
      </div>
    `;
  }
}

class FwcChartDonut extends FwcBase {
  constructor() {
    super('fwc-chart-donut', FwcChartDonutComponent);
  }
}

class FwcChartStackedBarComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-stacked-bar-chart {
          display: block;
          width: 100%;
          position: relative;
          z-index: 1;
        }
        .legend {
          position: relative;
          display: flex;
          justify-content: space-between;
        }
        .values {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          width: 50%;
        }
        .values span {
          position: relative;
          font-size: calc(1.75 * var(--fwcu));
          font-weight: 700;
          display: inline-block;
          padding-left: calc(2.75 * var(--fwcu));
        }
        .values span:before {
          content: '';
          width: calc(1.5 * var(--fwcu));
          height: calc(1.5 * var(--fwcu));
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border-radius: 50%;
        }
        .values span:nth-child(3):before {
          background-color: var(--color-dviz-one);
        }
        .values span:nth-child(2):before {
          background-color: var(--color-dviz-eight);
        }
        .values span:nth-child(1):before {
          background-color: var(--color-dviz-seven);
        }
        #svg-wrapper {
          position: relative;
          margin-top: 50px;
        }
        svg {
          overflow: visible;
        }
        .key {
          text-anchor: middle;
          font-size: calc(1.5 * var(--fwcu));
        }
        .value {
          text-anchor: middle;
          font-size: calc(1.75 * var(--fwcu));
          font-weight: bold;
        }
        .tooltip-polyline {
          fill: var(--color-white);
          stroke: var(--color-primary);
          stroke-width: 1;
          pointer-events: none;
        }
        .fwc-stacked-bar-chart-axis {
          font-size: calc(1.5 * var(--fwcu));
          font-family: 'Lato';
          font-weight: bold;
          color: var(--color-gray-one);
        }
        .axis-grid {
          stroke-width: 0.5;
          opacity: 0.1;
        }
        .fill-color-dviz-seven {
          fill: var(--color-dviz-seven);
        }
        .fill-color-dviz-eight {
          fill: var(--color-dviz-eight);
        }
        .fill-color-dviz-one {
          fill: var(--color-dviz-one);
        }
        @media screen and (max-width: 600px) {
          .values {
            width: 100%;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      data: { type: Array },
      showChart: { attribute: 'show-chart', type: Boolean },
    };
  }

  constructor() {
    super();
    this.data;
    this.showChart;
    this._data = null;
    this._width = null;
    this._height = null;
    this._innerWidth = null;
    this._innerHeight = null;
    this._margin = { top: 20, right: 20, bottom: 20, left: 20 };
    this._x = null;
    this._y = null;
    this._svg = null;
    this._stack = null;
    this._chart = null;
    this._xAxis = null;
    this._yAxis = null;
    this._yAxisGrid = null;
    this._tooltip = null;
    this._stackedSeries = null;
    this._colors = ['fill-color-dviz-seven', 'fill-color-dviz-eight', 'fill-color-dviz-one'];
    this._xAxisLabel = null;
    this.yAxisLabelMaxWidth = 0;
    this._DELAY_BETWEEN_BAR_ANIMATIONS = 50;
    this._BAR_ANIMATION_DURATION = 200;
    this.valueKeys = null;
    this._handleWindowResize = debounce(() => {
      this.init();
    }, 250);
  }

  firstUpdated() {
    if (this.data && this.isValidData(this.data)) {
      this._data = this.prepData(this.data);
    }
    this.init();
  }

  attributeChangedCallback(name, oldval, newval) {
    if (name === 'show-chart' && oldval) {
      this.showChart = newval;
    }
    if (name === 'data' && oldval && this.showChart) {
      if (name === 'data') {
        this.data = JSON.parse(newval);
        this._data = this.prepData(this.data);
      }
      this.init();
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleWindowResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleWindowResize);
    super.disconnectedCallback();
  }

  prepData(obj) {
    this.valueKeys = obj.barSectionLabels;
    this._stack = d3.stack().keys(this.valueKeys);

    //re-format the incoming data
    return obj.data.map((d, i) => {
      let obj = {};
      obj.values = [];
      obj.id = i;
      obj.xAxisLabel = d.xAxisLabel ? d.xAxisLabel : null;
      obj.xAxisLabelMobile = d.xAxisLabelMobile ? d.xAxisLabelMobile : null;
      for (let i = 0; i < d.values.length; i++) {
        obj[this.valueKeys[i]] = d.values[i];
        obj.values.push(d.values[i]);
      }
      obj.valuesTotal = obj.values.reduce((acc, val) => acc + val, 0);
      return obj;
    });
  }

  init() {
    if (this._svg) {
      this._svg.remove();
    }

    this.initDimensions();
    this.initScales();
    this.initSvg();
    this.setDomain();
    this.attachToolTip();
    this.drawAxis();
    this.drawChart();
  }

  initDimensions() {
    this._width = this.clientWidth;
    this._height = this._width * 0.6923;
    this._innerWidth = this._width - this._margin.left - this._margin.right;
    this._innerHeight = this._height - this._margin.top - this._margin.bottom;
    this._xAxisLabel = window.innerWidth > breakpoints.sm ? 'xAxisLabel' : 'xAxisLabelMobile';
  }

  initScales() {
    //this formula sets the bar width, .65 is the padding necessary for 12 20px bars
    const scaledBarWidth = 1 - (this._data.length * (1 - 0.65)) / 12;

    this._x = d3
      .scaleBand()
      .rangeRound([0, this._width - this._margin.right])
      .padding(scaledBarWidth);

    this._y = d3.scaleLinear().range([this._innerHeight, 0]);
  }

  initSvg() {
    this._svg = d3
      .select(this.shadowRoot.getElementById('svg-wrapper'))
      .append('svg')
      .attr('class', 'chart')
      .attr('width', this._width)
      .attr('height', this._height)
      .on('click', () => {
        // hide tool tip on mobile if clicking on svg background
        // we prevent the propagation from a click on a bar in drawChart()
        this._tooltip.style('display', 'none');
      });

    this._chart = this._svg.append('g');

    // calculate longest y-axis label
    const maxLabel = d3.max(this._stack(this._data), (d) => {
      return d3.max(d, (d) => {
        return d[1];
      });
    });
    let maxWidth;
    this._svg
      .append('text')
      .text(maxLabel)
      .each(function () {
        maxWidth = this.getBBox().width;
      })
      .remove();

    this.yAxisLabelMaxWidth = maxWidth;
  }

  setDomain() {
    this._stackedSeries = this._stack(this._data);
    this._x.domain(
      this._data.map((d) => {
        return d.id;
      })
    );

    this._y.domain([
      0,
      +d3.max(this._stackedSeries, (d) => {
        return d3.max(d, (d) => {
          return d[1];
        });
      }),
    ]);
  }

  attachToolTip() {
    this._tooltip = this._svg.append('g').attr('class', 'tool-tip').style('display', 'none');

    this._tooltip.append('polyline').attr('class', 'tooltip-polyline').attr('points', '0,0  0,82 47,82 57,92 67,82 114,82 114,0 0,0');

    this._tooltip.append('text').attr('class', 'key').attr('y', 34).attr('x', 55);

    this._tooltip.append('text').attr('class', 'value').attr('y', 56).attr('x', 55);
  }

  drawAxis() {
    const xAxis = d3
      .axisBottom(this._x)
      .tickSize(0)
      .tickFormat((d) => {
        // because we need to override the default x-axis labeling for d3
        // you are not allowed to have duplicates (ie 'J' for June and July does not work), so we track them by id and then change the label here
        return this._data
          .filter((data) => {
            return data.id === d;
          })
          .reduce((tot, cur) => {
            return cur[this._xAxisLabel] ? cur[this._xAxisLabel] : cur['xAxisLabel'];
          }, '');
      });
    const yAxis = d3.axisLeft(this._y).tickSize(0);
    const yAxisGrid = d3
      .axisLeft(this._y)
      .tickSize(-(this._width - (this.yAxisLabelMaxWidth + 40)))
      .tickFormat('')
      .ticks(10);

    this._xAxis = this._chart
      .append('g')
      .classed('x axis', true)
      .attr('class', 'fwc-stacked-bar-chart-axis')
      .attr('transform', 'translate(40,' + (this._innerHeight + 10) + ')')
      .attr('aria-label', 'Range of the X-axis') // TODO: make parameter
      .call(xAxis);

    this._yAxis = this._chart
      .append('g')
      .classed('y axis', true)
      .attr('class', 'fwc-stacked-bar-chart-axis')
      .attr('transform', `translate(${this.yAxisLabelMaxWidth}, 0)`)
      .attr('aria-label', 'Range of the Y-axis') // TODO: make paramter
      .call(yAxis);

    this._yAxisGrid = this._chart
      .append('g')
      .attr('transform', `translate(${this.yAxisLabelMaxWidth + 25}, 0)`)
      .attr('class', 'y axis-grid')
      .call(yAxisGrid);

    //remove domain lines
    this._xAxis.select('.domain').attr('stroke-width', 0);
    this._yAxis.select('.domain').attr('stroke-width', 0);
    this._yAxisGrid.select('.domain').attr('stroke-width', 0);
  }

  drawChart() {
    const layersBarArea = this._chart.append('g').classed('layers', true).attr('transform', 'translate(40,0)');
    const layersBar = layersBarArea
      .selectAll('.layer')
      .data(this._stackedSeries)
      .enter()
      .append('g')
      .classed('layer', true)
      .attr('class', (d, i) => {
        return this._colors[i];
      });
    layersBar
      .selectAll('rect')
      .data((d) => {
        return d;
      })
      .enter()
      .append('rect')
      .on('mouseover', () => {
        this._tooltip.style('display', null);
      })
      .on('mouseout', () => {
        this._tooltip.style('display', 'none');
      })
      .on('mousemove', (event, d) => {
        const total = d.data.values.reduce((a, b) => a + b, 0);
        const key = d3.select(event.currentTarget.parentNode).datum().key;
        const xPosition = d3.pointer(event, event.currentTarget)[0] - 18;
        const yPosition = d3.pointer(event, event.currentTarget)[1] - 100;
        this._tooltip.attr('transform', 'translate(' + xPosition + ',' + yPosition + ')');
        this._tooltip.select('.value').text(`${d[1] - d[0]} / ${total}`);
        this._tooltip.select('.key').text(key);
      })
      .on('click', (e) => {
        // because we want to grab the click on the svg bg to hide tooltip on mobile, see initSvg()
        // but here we stop it from bubbling cause we want the click on the rect bar
        e.stopPropagation();
      })
      .attr('x', (d, i) => {
        return this._x(d.data.id);
      })
      //set height and y to initial values you can transition from
      .attr('height', 0)
      .attr('y', this._innerHeight)
      .attr('width', this._x.bandwidth())
      .transition()
      .delay((d, i) => i * this._DELAY_BETWEEN_BAR_ANIMATIONS)
      .duration(this._BAR_ANIMATION_DURATION)
      // transition to values for y and height
      .attr('y', (d) => {
        return this._y(d[1]);
      })
      .attr('height', (d, i) => {
        return this._y(d[0]) - this._y(d[1]);
      });
  }
  /* c8 ignore next 34 */
  isValidData(obj) {
    let errors = false;
    try {
      if (obj.barSectionLabels && obj.barSectionLabels.length === 0) {
        errors = true;
        throw new Error(`barSectionLabels is an empty array or is missing, valid numbers of labels allowed (1, 2 or 3)`);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (obj.data.length < 3 || obj.data.length > 12) {
        errors = true;
        throw new Error(`the required number of bars for the chart: min = 3, max = 12, you passed in ${obj.data.length}`);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      obj.data.forEach((item) => {
        if (item.values.length !== obj.barSectionLabels.length) {
          errors = true;
          throw new Error(`the number of 'barSectionLabels'(${obj.barSectionLabels.length}) does not equal the number of 'values'(${item.values.length}) passed in`);
        }
      });
    } catch (error) {
      console.error(error);
    }

    return !errors;
  }

  _buildKeys() {
    const keys = html`${this.data.barSectionLabels.map((key) => {
      return html` <span>${key}</span> `;
    })}`;
    return keys;
  }

  render() {
    return html`
      <div class="fwc-stacked-bar-chart">
        <div class="legend">
          <div class="values">${this._buildKeys()}</div>
        </div>

        <div id="svg-wrapper"></div>
      </div>
    `;
  }
}

class FwcChartStackedBar extends FwcBase {
  constructor() {
    super('fwc-chart-stacked-bar', FwcChartStackedBarComponent);
  }
}

class FwcChartLineComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-svg-wrapper {
          position: relative;
        }
        .fwc-legend {
          margin-bottom: calc(2 * var(--fwcu));
        }
        .fwc-legend-dot {
          height: calc(1.25 * var(--fwcu));
          width: calc(1.25 * var(--fwcu));
          border: 1px solid transparent;
          border-radius: 50%;
          display: inline-block;
          margin-right: var(--fwcu);
        }
        .fwc-legend-label {
          display: inline-block;
          margin-right: var(--fwcu);
        }
        .fwc-dot-0 {
          background-color: var(--color-dviz-one);
        }
        .fwc-dot-1 {
          background-color: var(--color-dviz-five);
        }
        .fwc-dot-2 {
          background-color: var(--color-dviz-four);
        }
        .line {
          fill: none;
          stroke-width: calc(0.5 * var(--fwcu));
        }
        .line-0 {
          stroke: var(--color-dviz-one);
        }
        .line-1 {
          stroke: var(--color-dviz-five);
        }
        .line-2 {
          stroke: var(--color-dviz-four);
        }
        .horizontal-label,
        .vertical-label,
        .horizontal-axis,
        .vertical-axis {
          font-size: calc(1.75 * var(--fwcu));
        }
        .horizontal-label,
        .vertical-label {
          fill: var(--color-black);
          text-anchor: middle;
          font-weight: 600;
        }
        .axis-line {
          stroke-opacity: 0.3;
          stroke: var(--color-gray-four);
          stroke-width: calc(0.25 * var(--fwcu));
        }
        .domain {
          display: none;
        }
        canvas {
          display: block;
          visibility: hidden;
          width: 100%;
          height: 100%;
        }
        svg {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          overflow: visible;
        }
        @media screen and (max-width: 600px) {
          .tick {
            font-size: calc(1.25 * var(--fwcu));
          }
          .line {
            stroke-width: calc(0.25 * var(--fwcu));
          }
          .fwc-legend-label {
            font-size: calc(1.5 * var(--fwcu));
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      dataLineOne: { attribute: 'data-line-one', type: Array },
      dataLineTwo: { attribute: 'data-line-two', type: Array },
      dataLineThree: { attribute: 'data-line-three', type: Array },
      legend: { type: Array },
      labelHorizontal: { attribute: 'label-horizontal', type: String },
      labelVertical: { attribute: 'label-vertical', type: String },
      width: {},
      height: {},
    };
  }

  constructor() {
    super();
    this.dataLineOne = [];
    this.dataLineTwo = [];
    this.dataLineThree = [];
    this.legend = [];
    this.labelHorizontal = '';
    this.labelVertical = '';
    this._data = [];
    this._margin = { top: 20, right: 20, bottom: 60, left: 60 };
    this.width = 0;
    this._height = 0;
    this._chartOptions = {};
    this._element = null;
    this._svg = null;
    this._scaleHorizontal = 0;
    this._scaleVertical = 0;
    this._line = d3
      .line()
      .x((coordinates) => {
        return this._scaleHorizontal(+coordinates[0]);
      })
      .y((coordinates) => {
        return this._scaleVertical(+coordinates[1]);
      })
      .curve(d3.curveCardinal);
  }

  firstUpdated() {
    this.initChart();
  }

  attributeChangedCallback(name, oldval, newval) {
    if ((name === 'data-line-one' && oldval) || (name === 'data-line-two' && oldval) || (name === 'data-line-three' && oldval)) {
      // need to wait til all attributes have changed
      setTimeout(() => {
        this.initChart();
      }, 0);
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  initChart() {
    this._prepData();
    /** Initialize height, width, element container, and scale functions. */
    this._initValues();
    /** Initialize the scaleLinear (or scaleTime) for horizontal/vertical axes. */
    this._initScales();
    /** Initialize parent svg to append line chart. */
    this._renderSvgContainer();
    /** Render line chart(s). */
    this._renderLineChart();
    /** Render horizontal/vertical axes. */
    this._renderAxes();
  }

  _prepData() {
    // we need to parse the date strings back to dates from the JSON.stringify
    this.dataLineOne = this.dataLineOne.map((val) => {
      const isDate = this._isIsoDate(val[0]);
      return isDate ? [new Date(val[0]), val[1]] : val;
    });
    this.dataLineTwo = this.dataLineTwo.map((val) => {
      const isDate = this._isIsoDate(val[0]);
      return isDate ? [new Date(val[0]), val[1]] : val;
    });
    this.dataLineThree = this.dataLineThree.map((val) => {
      const isDate = this._isIsoDate(val[0]);
      return isDate ? [new Date(val[0]), val[1]] : val;
    });
  }

  /** Initializes various values for the rendering of the svg element. */
  _initValues() {
    this._element = this;
    this.width = this._element.offsetWidth;
    this.height = this._element.offsetWidth * 0.75;
    this._margin.left + this._margin.right;
    let verticalMargin = this._margin.top + this._margin.bottom;

    /** Add additional bottom margin for axis label. */
    if (this.labelHorizontal) {
      this._margin.bottom = 80;
    }

    /** Add additional left margin for axis label. */
    if (this.labelVertical) {
      this._margin.left = 80;
    }

    this.height = this.height - verticalMargin;
  }

  _initScales() {
    if (this.dataLineOne.length && this.dataLineOne[0][0] instanceof Date) {
      this._scaleHorizontal = d3.scaleTime().range([0, this.width]);
    } else {
      this._scaleHorizontal = d3.scaleLinear().range([0, this.width]);
    }

    this._scaleVertical = d3.scaleLinear().range([this.height, 0]);
  }

  _isIsoDate(str) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d = new Date(str);
    return d.toISOString() === str;
  }

  _renderSvgContainer() {
    /** Build the svg parent container */
    if (this._svg) {
      this.shadowRoot.querySelector('svg#fwc-chart').remove();
    }
    this._svg = d3
      .select(this.shadowRoot.querySelector('.fwc-svg-wrapper'))
      .append('svg')
      .attr('id', 'fwc-chart')
      .attr('viewBox', `0 0 ${this.width + this._margin.left + this._margin.right} ${this.height + this._margin.top + this._margin.bottom}`)
      .append('g')
      .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');
  }

  /** Renders the line chart. */
  _renderLineChart() {
    if (this.dataLineOne.length === 0) {
      console.error('ERROR: Chart data was not provided. *the attribute data-line-one is required.');
      this._renderErrorChart();
      return;
    }

    /** Min & Max to build the horizontal domain. */
    let horizontalMin = this.dataLineOne[0][0];
    let horizontalMax = this.dataLineOne[0][0];

    /** Min & Max to build the vertical domain. */
    let verticalMin = 0;
    let verticalMax = this.dataLineOne[0][1];

    [[...this.dataLineOne], [...this.dataLineTwo], [...this.dataLineThree]].forEach((tupleList, index) => {
      /** Find min and max ranges from list of lines. */
      tupleList.forEach((tuple) => {
        if (tuple[0] < horizontalMin) {
          horizontalMin = tuple[0];
        }
        if (tuple[0] > horizontalMax) {
          horizontalMax = tuple[0];
        }
        if (tuple[1] < verticalMin) {
          verticalMin = tuple[1];
        }
        if (tuple[1] > verticalMax) {
          verticalMax = tuple[1];
        }
      });

      /** Apply the scale to the horizontal domain. */
      this._scaleHorizontal.domain([horizontalMin, horizontalMax]);

      /** Apply the scale to the vertical domain. */
      this._scaleVertical.domain([verticalMin, verticalMax]);
      /** Build the line graphs and attach. */
      this._svg
        .append('path')
        .data([tupleList])
        .attr('data', tupleList)
        .attr('class', 'line line-' + index)
        .attr('d', this._line);
    });
  }

  /** Renders axis labels, axis ticks and scales the axis. */
  _renderAxes() {
    this._initHorizontalAxis();
    this._initVerticalAxis();

    /** Remove domain line from axes. */
    d3.selectAll('.domain').remove();
  }

  /** Initialize the necessary styles and classes for the horizontal axis. */
  _initHorizontalAxis() {
    /** Build  the string to translate horizontal axis label. */
    let horizontalTransform = 'translate(' + this.width / 2 + ', ' + (this.height + this._margin.bottom - 10) + ')';

    /** Build the x-axis and label. */
    this._svg
      .append('g')
      .attr('class', 'horizontal-axis')
      .call(d3.axisBottom(this._scaleHorizontal).tickFormat(d3.timeFormat('%m-%d')).tickSizeInner(this.height).tickPadding(20))
      .append('text')
      .text(this.labelHorizontal)
      .attr('class', 'horizontal-label')
      .attr('transform', horizontalTransform);
    /** Attach classes to horizontal lines. */
    this._svg.selectAll('.horizontal-axis .tick > line').attr('class', 'axis-line');
  }

  /** Initialize the necessary styles and classes for the vertical axis. */
  _initVerticalAxis() {
    /** Build the string to translate vertical axis label. */
    let verticalTransform = 'translate(' + -this._margin.left * 0.85 + ', ' + this.height / 2 + ') ' + 'rotate(-90)';

    /** Build the y-axis and label. */
    this._svg.append('g').attr('class', 'vertical-axis').call(d3.axisLeft(this._scaleVertical).tickPadding(20)).append('text').text(this.labelVertical).attr('class', 'vertical-label').attr('transform', verticalTransform);

    /** Remove ticks on vertical axis. */
    this._svg.selectAll('.vertical-axis .tick > line').remove();
  }

  /** Render backup chart for when data is not provided as input. */
  _renderErrorChart() {
    /** Default scale for horizontal range. */
    this._scaleHorizontal.domain([0, 10]);

    /** Default scale for vertical range. */
    this._scaleVertical.domain([0, 10]);

    /** Build placeholder axes. */
    this._svg
      .append('g')
      .attr('transform', 'translate(0, ' + this.height + ')')
      .call(d3.axisBottom(this._scaleHorizontal));

    this._svg.append('g').call(d3.axisLeft(this._scaleVertical));
  }

  render() {
    return html`
      <div class="fwc-legend">
        ${this.legend.map((item, i) => {
          return html`
            <span class="fwc-legend-dot fwc-dot-${i}"></span>
            <span class="fwc-legend-label">${item}</span>
          `;
        })}
      </div>
      <div class="fwc-svg-wrapper">
        <!-- this canvas is a hack for ie11, it does not read the 100% width and scale svg -->
        <!-- http://nicolasgallagher.com/canvas-fix-svg-scaling-in-internet-explorer/ -->
        <canvas width="${this.width}" height="${this.height}"></canvas>
      </div>
    `;
  }
}

class FwcChartLine extends FwcBase {
  constructor() {
    super('fwc-chart-line', FwcChartLineComponent);
  }
}

class FwcChartPipelineComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-pipeline-chart {
          width: 100%;
          display: block;
        }
        .fwc-pipeline-chart .text-value {
          fill: var(--color-gray-one);
          font-size: calc(2 * var(--fwcu));
          transform: translate(0, calc(-1 * var(--fwcu)));
        }
        .fwc-pipeline-chart .text-label {
          fill: var(--color-gray-one);
          font-size: calc(1.5 * var(--fwcu));
          transform: translate(0, calc(-3.5 * var(--fwcu)));
          text-anchor: end;
          fill: var(--color-gray-one);
          pointer-events: none;
        }
        @media screen and (max-width: 600px) {
          .fwc-pipeline-chart .text-value {
            font-size: calc(1.5 * var(--fwcu));
            transform: translate(0, calc(-0.75 * var(--fwcu)));
          }
          .fwc-pipeline-chart .text-label {
            transform: translate(0, calc(-2.25 * var(--fwcu)));
          }
        }
        .fwc-pipeline-legend {
          display: flex;
          flex-wrap: wrap;
          list-style-type: none;
          margin-top: calc(3.75 * var(--fwcu));
          padding: 0;
        }
        .fwc-pipeline-legend li {
          margin: 0 calc(3 * var(--fwcu)) calc(1.25 * var(--fwcu)) 0;
          font-size: calc(1.5 * var(--fwcu));
        }
        .fwc-pipeline-legend li:last-child {
          margin-right: 0;
        }
        .fwc-pipeline-legend .color-dot {
          display: inline-block;
          position: relative;
          width: calc(1.5 * var(--fwcu));
          height: calc(1.5 * var(--fwcu));
          top: 1px;
          border-radius: 50%;
          margin-right: calc(0.5 * var(--fwcu));
        }
        .pipeline-separator {
          stroke: var(--color-white);
          stroke-width: 3px;
        }
        .text-line {
          stroke-width: 1;
          stroke: var(--color-gray-four);
        }
        .fill-color-dviz-one {
          fill: var(--color-dviz-one);
        }
        .fill-color-dviz-three {
          fill: var(--color-dviz-three);
        }
        .fill-color-dviz-four {
          fill: var(--color-dviz-four);
        }
        .fill-color-dviz-six {
          fill: var(--color-dviz-six);
        }
        .fill-color-dviz-seven {
          fill: var(--color-dviz-seven);
        }
        .fill-color-dviz-eight {
          fill: var(--color-dviz-eight);
        }
        .background-color-dviz-one {
          background-color: var(--color-dviz-one);
        }
        .background-color-dviz-three {
          background-color: var(--color-dviz-three);
        }
        .background-color-dviz-four {
          background-color: var(--color-dviz-four);
        }
        .background-color-dviz-six {
          background-color: var(--color-dviz-six);
        }
        .background-color-dviz-seven {
          background-color: var(--color-dviz-seven);
        }
        .background-color-dviz-eight {
          background-color: var(--color-dviz-eight);
        }
      `,
    ];
  }

  static get properties() {
    return {
      data: { type: Array },
      isCurrency: { type: Boolean },
    };
  }

  constructor() {
    super();
    this._data = null;
    this.isCurrency = false;
    this._colors = ['fill-color-dviz-one', 'fill-color-dviz-three', 'fill-color-dviz-four', 'fill-color-dviz-six', 'fill-color-dviz-seven', 'fill-color-dviz-eight'];
    this._labelColors = ['background-color-dviz-one', 'background-color-dviz-three', 'background-color-dviz-four', 'background-color-dviz-six', 'background-color-dviz-seven', 'background-color-dviz-eight'];
    this._viewHasInit = false;
    this._width = null;
    this._height = null;
    this._bottomLeftX = null;
    this._dx = null;
    this._dy = null;
    this._element = null;
    this._handleWindowResize = debounce(() => {
      this.init();
    }, 500);
    this._currency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      // These options are needed to round to whole numbers
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    // scale the width of the funnel to allow for svg text on the right
    this._TEXT_SPACING_OFFSET = 0.75;
    this._ANIMATION_TRANSITION = 100;
  }

  firstUpdated() {
    this.init();
  }

  attributeChangedCallback(name, oldval, newval) {
    if (name === 'data' && oldval !== newval) {
      this.data = JSON.parse(newval);
      this.init();
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleWindowResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleWindowResize);
    super.disconnectedCallback();
  }

  init() {
    this.initDimensions();
    this.draw();
  }

  initDimensions() {
    // the wrapping container sets the width
    this._element = this;
    this._width = this._element.offsetWidth;

    // make the height 80% of the width for a wider funnel
    this._height = this._width * 0.8;

    // Calculate the bottom left x position
    this._bottomLeftX = (this._width * this._TEXT_SPACING_OFFSET) / 2;

    // Change in x direction
    this._dx = this._bottomLeftX / this.data.length;

    // Change in y direction
    this._dy = this._height / this.data.length;
  }

  draw() {
    // Remove any previous drawings
    d3.select(this.shadowRoot.getElementById('svg-pipeline')).selectAll('svg').remove();
    // Add the SVG and group element
    const svg = d3.select(this.shadowRoot.getElementById('svg-pipeline')).append('svg').attr('width', this._width).attr('height', this._height).append('g');
    const group = svg.append('g');
    const sectionPaths = this.makePaths();
    const data = this.prepData(sectionPaths);

    // Draw the sections path and append the data
    group
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('class', (d, i) => {
        return this._colors[i] + ' pipeline-separator';
      })
      .attr('d', (d, i) => {
        return d.pathStrStart;
      })
      .transition()
      .delay((d, i) => (i * this._ANIMATION_TRANSITION) / 2)
      .duration(this._ANIMATION_TRANSITION)
      .attr('d', (d, i) => {
        return d.pathStrEnd;
      });

    // attach line from chart below the text
    group
      .selectAll('line')
      .data(data)
      .enter()
      .append('line')
      .attr('class', 'text-line')
      .attr('x1', (d, i) => {
        return d.sectionPaths[2][0];
      })
      .attr('y1', (d, i) => {
        return d.sectionPaths[2][1] - 2;
      })
      .attr('x2', this._width)
      .attr('y2', (d, i) => {
        return d.sectionPaths[2][1] - 2;
      })
      .style('opacity', 0)
      .transition()
      .duration(this._ANIMATION_TRANSITION * data.length)
      .style('opacity', 1);

    // attach the text value
    const textValueGroup = svg.append('g');
    textValueGroup
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'text-value')
      .text((d, i) => {
        return this.isCurrency ? this._currency.format(d.value) : d.value;
      })
      .attr('x', this._width)
      .attr('y', (d, i) => {
        return d.sectionPaths[3][1];
      })
      .attr('text-anchor', 'end')
      .attr('pointer-events', 'none')
      .style('opacity', 0)
      .transition()
      .duration(this._ANIMATION_TRANSITION * data.length)
      .style('opacity', 1);

    // attach the text label
    const textLabelGroup = svg.append('g');
    textLabelGroup
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'text-label')
      .text((d, i) => {
        return d.label;
      })
      .attr('x', this._width)
      .attr('y', (d, i) => {
        return d.sectionPaths[3][1];
      })
      .style('opacity', 0)
      .transition()
      .duration(this._ANIMATION_TRANSITION * data.length)
      .style('opacity', 1);

    this.setIE11Transforms();
  } // end draw()
  makePaths() {
    const paths = [];

    // Initialize starting positions
    let prevLeftX = 0;
    let prevRightX = this._width * this._TEXT_SPACING_OFFSET;
    let prevHeight = 0;

    // Initialize next positions
    let nextLeftX = 0;
    let nextRightX = 0;
    let nextHeight = 0;

    // Create the path definition for each funnel section
    // Remember to loop back to the beginning point for a closed path
    for (let i = 0; i < this.data.length; i++) {
      this._dy = this._dy;
      // Calculate the position of next section
      nextLeftX = prevLeftX + this._dx;
      nextRightX = prevRightX - this._dx;
      nextHeight = prevHeight + this._dy;

      paths.push([
        // Start position
        [prevLeftX, prevHeight, 'M'],
        // Move to right
        [prevRightX, prevHeight, 'L'],
        // Move down
        [nextRightX, nextHeight, 'L'],
        // Move to left
        [nextLeftX, nextHeight, 'L'],
        // Wrap back to top
        [prevLeftX, prevHeight, 'L'],
      ]);

      // Set the next section's previous position
      prevLeftX = nextLeftX;
      prevRightX = nextRightX;
      prevHeight = nextHeight;
    } // End for

    return paths;
  } // end makePaths()

  prepData(sectionPaths) {
    const data = [];
    // Add each block section
    for (let i = 0; i < sectionPaths.length; i++) {
      // Construct path string
      const paths = sectionPaths[i];
      let pathStrEnd = '';
      let path;
      let pathStrStart = '';

      // set end path string
      for (let i = 0; i < paths.length; i++) {
        path = paths[i];
        pathStrEnd += path[2] + path[0] + ',' + path[1] + ' ';
      }

      // set start path string, draw a 1px high section to animate from
      for (let i = 0; i < paths.length; i++) {
        if (i === 2) {
          path = paths[i - 1];
          path[1] += 1;
        } else if (i === 3) {
          path = paths[0];
          path[0] += 1;
          path[1] += 1;
        } else {
          path = paths[i];
        }
        pathStrStart += path[2] + path[0] + ',' + path[1] + ' ';
      }

      // Prepare data to assign to the section
      data.push({
        index: i,
        label: this.data[i].label,
        value: this.data[i].value,
        pathStrStart: pathStrStart,
        pathStrEnd: pathStrEnd,
        sectionPaths: sectionPaths[i],
      });
    }
    return data;
  }

  /* c8 ignore next 13 */
  isValidData() {
    let errors = false;
    try {
      if (this.data.length > 6 || this.data.length < 3) {
        errors = true;
        throw new Error(`invalid number of items, data must contain between 3 and 6 items, you passed ${this.data.length}`);
      }
    } catch (error) {
      console.error(error);
    }
    return !errors;
  }

  setIE11Transforms() {
    // grab the computed css style and set it directly as an attribute
    // ie 11 does not read css transform on svg's, must be a direct attribute
    let textElements = this.shadowRoot.querySelectorAll('.text-label, .text-value');
    textElements = [].slice.call(textElements);

    textElements.forEach((element) => {
      const transform = getComputedStyle(element).getPropertyValue('transform');
      element.setAttribute('transform', transform);
    });
  }

  _buildLabels() {
    const labels = html`${this.data.map((item, i) => {
      return html` <li><span class="color-dot ${this._labelColors[this._labelColors.length - this.data.length + i]}"></span>${item.label}</li> `;
    })}`;
    return labels;
  }

  render() {
    return html`
      <div class="fwc-pipeline-chart">
        <div id="svg-pipeline"></div>
        <ul class="fwc-pipeline-legend">
          ${this._buildLabels()}
        </ul>
      </div>
    `;
  }
}

class FwcChartPipeline extends FwcBase {
  constructor() {
    super('fwc-chart-pipeline', FwcChartPipelineComponent);
  }
}

export { FwcChartBarCompare, FwcChartBiometric, FwcChartCorrelation, FwcChartDonut, FwcChartLine, FwcChartPipeline, FwcChartStackedBar };
