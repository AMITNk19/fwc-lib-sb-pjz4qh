import { css, LitElement, html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { styleMap } from 'lit-html/directives/style-map';

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

class FwcAlertComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          max-width: 1920px;
          margin: 0 auto;
          display: block;
          overflow: hidden;
          position: relative;
        }
        .fwc-alert-flex svg {
          flex-shrink: 0;
          margin-right: calc(1.5 * var(--fwcu));
        }
        .fwc-alert-highlight {
          position: absolute;
          box-sizing: content-box;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        .fwc-alert-highlight.show {
          animation-name: fwcHighlight;
          animation-delay: 0ms;
          animation-duration: 2s;
          animation-timing-function: ease-out;
          animation-fill-mode: both;
          transform-origin: 50% 50%;
        }

        .fwc-alert-row {
          margin-top: 0;
          transition: all 1s ease-in;
          margin-bottom: calc(0.25 * var(--fwcu));
        }

        .fwc-alert-row-full {
          animation-name: fwcGrow;
          animation-delay: 0ms;
          animation-duration: 2s;
          animation-timing-function: ease-out;
          animation-fill-mode: none;
          transform-origin: 0% 50%;
        }
        .fwc-alert-row-full .fwc-alert-wrapper {
          max-width: calc(144 * var(--fwcu));
          margin: 0 auto;
        }
        .fwc-alert-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          line-height: 1;
          padding: calc(var(--fwcu)) calc(1.5 * var(--fwcu));
          font-size: calc(2 * var(--fwcu));
        }

        @media screen and (max-width: 600px) {
          .fwc-alert-wrapper {
            /*
              There is no col padding to add to:
              4*fwcu = 32px for mobile
            */
            padding-right: calc(4 * var(--fwcu));
            padding-left: calc(4 * var(--fwcu));
          }
        }

        .fwc-alert-row.remove {
          margin-top: -100%;
          overflow: hidden;
        }
        .fwc-alert-flex {
          display: flex;
          align-items: center;
        }

        .success-fill {
          fill: var(--color-alert-success);
        }
        .success-color {
          color: var(--color-alert-success);
        }

        .info-fill {
          fill: var(--color-alert-info);
        }
        .info-color {
          color: var(--color-alert-info);
        }

        .red-fill {
          fill: var(--color-alert-error);
        }
        .red-color {
          color: var(--color-alert-error);
        }

        .close-fill {
          fill: var(--color-gray-two);
        }

        .bg-white {
          background-color: var(--color-white);
        }
        .bg-default {
          background-color: var(--color-gray-five);
        }

        button {
          border: none;
          background: transparent;
          cursor: pointer;
          right: var(--fwcu);
          padding: calc(0.5 * var(--fwcu));
          display: flex;
          align-items: center;
        }

        button svg {
          width: calc(2 * var(--fwcu));
          height: calc(2 * var(--fwcu));
        }

        @keyframes fwcHighlight {
          from {
            background: var(--color-dviz-eight);
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes fwcGrow {
          from {
            max-height: 0;
          }
          to {
            max-height: 25rem;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      type: { type: String }, // urgent | success | info | error
      area: { type: String }, // global | inline
      labelAriaCloseBtn: { attribute: 'label-aria-close-btn', type: String },
      bgColor: { attribute: 'bg-color', type: String }, // white | null
    };
  }

  constructor() {
    super();
    this._refocusElem = null;
    this.type = 'info';
    this.area = 'inline';
    this.labelAriaCloseBtn = 'Close Alert';
    this.bgColor = '';
    this.closing = false;
    this._onEnd = () => {
      if (this.parentElement && this.closing) {
        this.parentElement.removeChild(this);
        this.closing = false;
        const event = new CustomEvent('fwc-alert-closed', {
          detail: this,
          bubbles: true,
        });
        this.dispatchEvent(event);
        this._returnFocus();
      }
    };
  }

  firstUpdated() {
    const wrapper = this.shadowRoot.getElementById('fwcAlertRow');
    wrapper.addEventListener('transitionend', this._onEnd);
  }

  _xIcon(color = '') {
    const style = color === 'red' ? 'red-fill' : 'close-fill';
    return html`
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" focusable="false">
        <polygon class="${style}" points="3.523 50 0 46.477 21.477 25 0 3.523 3.523 0 25 21.477 46.477 0 50 3.523 28.523 25 50 46.477 46.477 50 25 28.523" />
      </svg>
    `;
  }

  _setBackground() {
    let bg = '';
    switch (this.bgColor) {
      case 'white':
        bg = 'bg-white';
        break;
      default:
        bg = 'bg-default';
    }
    return bg;
  }

  _buildIcon() {
    const success = html`
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" focusable="false">
        <polygon class="success-fill" points="47.38 43.674 15.888 12.182 2.62 25.451 0 22.831 14.579 8.253 15.888 7 17.198 8.253 50 41.055" transform="matrix(1 0 0 -1 0 50.674)" />
      </svg>
    `;
    const info = html`
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" focusable="false">
        <path class="info-fill" d="M25,50 C11.2154447,50 0,38.7845553 0,25 C0,11.2154447 11.2154447,0 25,0 C38.7845553,0 50,11.2154447 50,25 C50,38.7845553 38.7845553,50 25,50 Z M25,46.1538462 C36.703726,46.1538462 46.1538462,36.703726 46.1538462,25 C46.1538462,13.296274 36.703726,3.84615385 25,3.84615385 C13.296274,3.84615385 3.84615385,13.296274 3.84615385,25 C3.84615385,36.703726 13.296274,46.1538462 25,46.1538462 Z M23.0769231,36.5384615 L23.0769231,32.6923077 L26.9230769,32.6923077 L26.9230769,36.5384615 L23.0769231,36.5384615 Z M23.0769231,28.8461538 L23.0769231,13.4615385 L26.9230769,13.4615385 L26.9230769,28.8461538 L23.0769231,28.8461538 Z" transform="matrix(1 0 0 -1 0 50)" />
      </svg>
    `;
    const error = this._xIcon('red');
    const urgent = html`
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" focusable="false">
        <path class="red-fill" d="M25,46.3371298 L23.405467,43.6036446 L1.53758542,5.73348519 L0,3 L50,3 L48.4624146,5.73348519 L26.594533,43.6036446 L25,46.3371298 Z M25,39.047836 L43.6788155,6.64464692 L6.32118451,6.64464692 L25,39.047836 Z M23.1776765,26.690205 L23.1776765,15.7562642 L26.8223235,15.7562642 L26.8223235,26.690205 L23.1776765,26.690205 Z M23.1776765,13.9339408 L23.1776765,10.2892938 L26.8223235,10.2892938 L26.8223235,13.9339408 L23.1776765,13.9339408 Z" transform="matrix(1 0 0 -1 0 49.337)" />
      </svg>
    `;
    const icons = {
      success: success,
      info: info,
      error: error,
      urgent: urgent,
    };
    return icons[this.type];
  }

  _onCloseClick() {
    this.closing = true;
    this.shadowRoot.getElementById('fwcAlertRow').classList.add('remove');
  }

  // a public func allowing projects to close the alert
  closeAlert() {
    this._onCloseClick();
  }

  // a public function allowing projects to put focus on the alert close button when opened
  focusOnCloseBtn() {
    setTimeout(() => {
      this.shadowRoot.getElementById('fwc-alert-close-button').focus();
    }, 250);
  }

  //private method to return focus to a element
  _returnFocus() {
    if (this._refocusElem) {
      // Return focus to calling element
      this._refocusElem.focus();
    }
  }

  // a public func allowing projects to set the refocus element can call private _returnfocus method
  setReFocus(elem) {
    this._refocusElem = elem;
  }

  render() {
    return html`
      <div class="fwc-alert-row ${this.area === 'global' ? 'fwc-alert-row-full' : ''} ${this._setBackground()}" id="fwcAlertRow" role="alert">
        <div class="fwc-alert-wrapper">
          <div class="fwc-alert-flex">
            ${this._buildIcon()}
            <slot id="alertMessage"></slot>
          </div>
          <button id="fwc-alert-close-button" type="button" role="button" aria-label="${this.labelAriaCloseBtn}" aria-describedby="alertMessage" @click="${this._onCloseClick}">${this._xIcon()}</button>
        </div>
      </div>
      <div class="fwc-alert-highlight ${this.area === 'global' ? 'show' : ''}"></div>
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

class FwcAlert extends FwcBase {
  constructor() {
    super('fwc-alert', FwcAlertComponent);
  }
}

class FwcAlertSnackbarItemComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
      .fwc-alert-snackbar {
        margin-top: calc(1.5*var(--fwcu));
        border: 1px solid var(--color-gray-four);
        border-left: 5px solid var(--color-gray-four);
        color: var(--color-gray-one);
        font-size: calc(1.25*var(--fwcu));
        background: var(--color-white);
        animation-name: show-snackbar;
        animation-duration: 500ms;
        box-shadow: var(--box-shadow);
      }
      .fwc-alert-snackbar.remove {
        animation-name: close-snackbar;
        animation-duration: 500ms;
        animation-fill-mode: forwards;
      }
      .fwc-alert-snackbar.info {
        border-left-color: var(--color-alert-info);
      }
      .fwc-alert-snackbar.success {
        border-left-color: var(--color-alert-success);
      }
      .fwc-alert-snackbar.error {
        border-left-color: var(--color-alert-error);
      }
      .fwc-alert-snackbar-body {
        padding: calc(3.75*var(--fwcu)) calc(3.5*var(--fwcu));
        position: relative;
      }
      .dismiss-button {
        padding: 0px;
        position: absolute;
        top: calc(1.25*var(--fwcu));
        right: calc(1.75*var(--fwcu));
        background: none;
        font-size: calc(4.5*var(--fwcu));
        font-weight: 300;
        color: gray;
        border: none;
        line-height: calc(1.75*var(--fwcu));
        margin: auto;
      }
      .dismiss-button:hover {
        cursor: pointer;
      }
      @keyframes show-snackbar {
        0% {
          opacity: 0;
          transform: scale(0.5);
          offset: 0;
        }
        100% {
          opacity: 1;
          transform: scale(1);
          offset: 1;
        }
      }
      @keyframes close-snackbar {
        0% {
          opacity: 1;
          offset: 0;
        }
        100% {
          opacity: 0;
          offset: 1;
        }
      }
      `,
    ];
  }

  // TODO: Aria live / region, ets
  static get properties() {
    return {
      type: { type: String },
      labelAriaCloseBtn: { attribute: 'label-aria-close-btn', type: String },
      labelAriaLive: { attribute: 'label-aria-live', type: String },
      timer: { attribute: 'timer', type: Number },
    };
  }

  constructor() {
    super();
    this.type = 'info';
    this.labelAriaCloseBtn = 'close snack bar';
    this.timer = 30000;
    this.labelAriaLive = 'assertive';
    this.closeSnackbar = () => {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  firstUpdated() {
    //listen for animation end
    const wrapper = this.shadowRoot.getElementById('fwc-alert-snackbar-item');
    wrapper.addEventListener('animationend', (e) => {
      // on setTimout auto close snackbar
      if (e.animationName.indexOf('show-snackbar') > -1) {
        setTimeout(() => {
          this._onCloseClick();
        }, this.timer);
      }
      // if animation close, trigger close function
      if (e.animationName.indexOf('close-snackbar') > -1) {
        this.closeSnackbar();
      }
    });
  }

  // click close function which outputs an event and triggers close animation
  _onCloseClick() {
    this.shadowRoot.getElementById('fwc-alert-snackbar-item').classList.add('remove');
    const event = new CustomEvent('fwc-alert-snackbar-removed', {
      detail: this,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="fwc-alert-snackbar ${this.type}" id="fwc-alert-snackbar-item" aria-live="${this.labelAriaLive}">
        <div class="fwc-alert-snackbar-body">
          <slot></slot>
          <button type="button" class="dismiss-button" aria-label="${this.labelAriaCloseBtn}" @click="${this._onCloseClick}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 50 50" focusable="false">
              <polygon points="3.523 50 0 46.477 21.477 25 0 3.523 3.523 0 25 21.477 46.477 0 50 3.523 28.523 25 50 46.477 46.477 50 25 28.523" />
            </svg>
          </button>
        </div>
      </div>
    `;
  }
}

const FOCUSABLE_ELEMENT_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[contenteditable]',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

const KEY_CODE_MAP = {
  TAB: 9,
};

let keyboardHandler = null;
let containerElementRef = null;
let ignoredSelectorsRef = null;
let targetTrap = null;

function getActiveElement() {
  let activeElement;

  try {
    activeElement = document.activeElement;
  } catch (e) {
    activeElement = document.body || null;
  }

  while (
    activeElement &&
    activeElement.shadowRoot &&
    activeElement.shadowRoot.activeElement
  ) {
    activeElement = activeElement.shadowRoot.activeElement;
  }

  return activeElement;
}

function getFocusableElements(containerElement, ignoreSelectors) {
  if (!containerElement) {
    throw new Error(
      'Could not initialize focus-trapping - Container Element Missing'
    );
  }

  // store a ref for refresh
  containerElementRef = containerElement;
  ignoredSelectorsRef = ignoreSelectors;

  // convert nodeList to array because ie11
  let focusableElements = [].slice.call(
    containerElement.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)
  );

  // if there is a shadowRoot we need a separate query
  if (containerElement.shadowRoot) {
    const shadowEls = [].slice.call(
      containerElement.shadowRoot.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)
    );
    // shadow elements need to be at the beginning
    focusableElements = shadowEls.concat(focusableElements);
  }

  // remove ignored elements
  if (ignoreSelectors) {
    const ignoredShadowElements = [].slice.call(
      containerElement.shadowRoot.querySelectorAll(ignoreSelectors.join(','))
    );
    const ignoredElements = [].slice
      .call(containerElement.querySelectorAll(ignoreSelectors.join(',')))
      .concat(ignoredShadowElements);

    focusableElements = focusableElements.filter(focusableEl => {
      return !ignoredElements.some(ignoredEl => ignoredEl === focusableEl);
    });
  }

  // order by tabindex
  return focusableElements.sort(
    (a, b) =>
      Number(a.getAttribute('tabindex')) - Number(b.getAttribute('tabindex'))
  );
}

// ignoreSelectors is an array of strings, a list of css selectors to be ignored by the focus trap
// ['.someElement button']
function focusTrap(containerElement, ignoreSelectors) {
  const focusableElements = getFocusableElements(
    containerElement,
    ignoreSelectors
  );

  targetTrap = focusTrap;

  if (focusableElements.length > 0) {
    const firstFocusableEl = focusableElements[0];
    const lastFocusableEl = focusableElements[focusableElements.length - 1];
    keyboardHandler = function keyboardHandler(e) {
      const activeElem = getActiveElement();
      if (e.keyCode === KEY_CODE_MAP.TAB) {
        // Rotate Focus
        if (e.shiftKey && activeElem === firstFocusableEl) {
          e.preventDefault();
          lastFocusableEl.focus();
        } else if (!e.shiftKey && activeElem === lastFocusableEl) {
          e.preventDefault();
          firstFocusableEl.focus();
        }
      }
    };

    firstFocusableEl.focus();
    containerElement.addEventListener('keydown', keyboardHandler);
  }
}

function focusTrapCustomTabs(containerElement, ignoreSelectors) {
  const focusableElements = getFocusableElements(
    containerElement,
    ignoreSelectors
  );
    
  targetTrap = focusTrapCustomTabs;

  if (focusableElements.length > 0) {
    const firstFocusableEl = focusableElements[0];
    const lastFocusableEl = focusableElements[focusableElements.length - 1];
    firstFocusableEl.focus();
    keyboardHandler = function keyboardHandler(e) {
      const activeElem = getActiveElement();
      if (e.keyCode === KEY_CODE_MAP.TAB) {
        // Rotate Focus
        if (e.shiftKey && activeElem === firstFocusableEl) {
          e.preventDefault();
          lastFocusableEl.focus();
        } else if (!e.shiftKey && activeElem === lastFocusableEl) {
          e.preventDefault();
          firstFocusableEl.focus();
        } else if (e.shiftKey) {
          // custom tabbing, move to previous tab item on keydown
          e.preventDefault();
          for (let i = focusableElements.length; i > 0; i--) {
            if (activeElem === focusableElements[i]) {
              focusableElements[i - 1].focus();
              return;
            }
          }
        } else {
          // this is the custom tabbing, move to next tab item on keydown
          e.preventDefault();
          for (let i = 0; i < focusableElements.length; i++) {
            if (activeElem === focusableElements[i]) {
              focusableElements[i + 1].focus();
              return;
            }
          }
        }
      }
    };

    // firstFocusableEl.focus();
    containerElement.addEventListener('keydown', keyboardHandler);
  }
}

function resetFocusTrap() {
  removeFocusTrapListener(containerElementRef);
  setTimeout(() => {
    targetTrap(containerElementRef, ignoredSelectorsRef);
  }, 0);
}

function removeFocusTrapListener(containerElement) {
  if (containerElement && keyboardHandler) {
    containerElement.removeEventListener('keydown', keyboardHandler);
  }
}

class FwcAlertSnackbarComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-alert-snackbar-container {
          display: flex;
          flex-direction: column-reverse;
          position: fixed;
          left: 0px;
          bottom: 0;
          z-index: 5;
          padding: 0px;
          margin: 0 calc(3 * var(--fwcu)) calc(3 * var(--fwcu)) calc(3 * var(--fwcu));
          background: transparent;
        }
        @media screen and (min-width: 900px) {
          .fwc-alert-snackbar-container {
            width: calc(41.75 * var(--fwcu));
            margin: 0 0 calc(3 * var(--fwcu)) calc(3 * var(--fwcu));
          }
        }
      `,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="fwc-alert-snackbar-container">
        <slot></slot>
      </div>
    `;
  }
}

class FwcAlertSnackbar extends FwcBase {
  constructor() {
    super('fwc-alert-snackbar', FwcAlertSnackbarComponent);
    const FwcAlertSnackbarItem = new FwcBase('fwc-alert-snackbar-item', FwcAlertSnackbarItemComponent);
    FwcAlertSnackbarItem.build();
  }
}

class FwcAnimBlobComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          width: 100%;
          display: block;
        }
        .slot-wrapper {
          position: relative;
          z-index: 1;
        }
        .fwc-anim-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        [class*='fwc-blob-'] {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          overflow: visible;
        }
        .fwc-blob-5 {
          left: 85%;
          opacity: 1;
          width: 41%;
          padding-top: 43%;
        }
        .fwc-blob-4 {
          left: 8.5%;
          opacity: 0.78;
          width: 38%;
          padding-top: 38%;
        }
        .fwc-blob-3 {
          left: 54%;
          opacity: 0.63;
          width: 60%;
          padding-top: 38%;
        }
        .fwc-blob-2 {
          left: -20%;
          opacity: 0.73;
          width: 43%;
          padding-top: 40%;
        }
        .fwc-blob-1 {
          left: 31%;
          opacity: 0.9;
          width: 50%;
          padding-top: 41%;
        }
        [class*='fwc-blob-'] svg {
          position: absolute;
          top: 0;
          left: 0;
          animation: rotation 12s infinite linear;
        }
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }
        @media (max-width: 768px) {
          .fwc-anim-wrapper {
            min-height: 512px;
            background: var(--color-gray-five);
          }
          [class*='fwc-blob-'] {
            width: 150%;
            left: 50%;
            transform: translateY(0%) translateX(-50%);
          }
          .fwc-blob-1 {
            top: 50%;
          }
          .fwc-blob-2 {
            top: 35%;
          }
          .fwc-blob-3 {
            display: none;
          }
          .fwc-blob-4 {
            top: 9%;
          }
          .fwc-blob-5 {
            top: 7%;
          }
        }
      `,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="fwc-anim-wrapper">
        <div class="fwc-blob-5">
          <svg width="100%" viewBox="0 0 627 673" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <path opacity="0.05" fill-rule="evenodd" clip-rule="evenodd" d="M329.175 0.0542232C397.298 -2.27704 440.409 71.0981 490.729 117.077C534.726 157.277 580.859 195.147 603.172 250.41C626.669 308.601 634.518 372.764 618.466 433.433C601.802 496.418 563.04 550.688 512.764 592.125C459.986 635.624 397.457 667.964 329.175 671.866C258.316 675.915 185.848 657.406 129.681 614.017C74.4426 571.347 46.6163 504.625 26.2512 437.863C6.22109 372.198 -15.0133 299.136 14.7607 237.277C43.5707 177.421 122.431 167.875 175.459 127.866C229.988 86.7239 260.906 2.39047 329.175 0.0542232Z" fill="#E54C80" />
          </svg>
        </div>
        <div class="fwc-blob-4">
          <svg width="100%" viewBox="0 0 523 592" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <path opacity="0.05" fill-rule="evenodd" clip-rule="evenodd" d="M277.948 15.0032C353.422 20.2842 437.12 13.6358 486.242 71.1794C536.697 130.286 521.626 213.778 513.615 291.078C503.356 390.067 519.634 511.141 435.189 563.802C346.494 619.112 226.406 582.698 139.775 524.207C65.8688 474.308 53.7962 379.916 34.0393 292.959C14.3216 206.173 -29.1134 106.12 29.5866 39.2266C87.3079 -26.552 190.648 8.89466 277.948 15.0032Z" fill="#804CE6" />
          </svg>
        </div>
        <div class="fwc-blob-3">
          <svg width="100%" viewBox="0 0 585 583" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <path opacity="0.05" fill-rule="evenodd" clip-rule="evenodd" d="M289.771 0.0541782C394.697 -1.38101 512.454 25.4011 565.681 115.835C614.827 199.335 553.464 297.778 518.093 387.98C491.691 455.311 458.57 519.758 394.293 552.911C327.732 587.241 248.849 593.436 180.929 561.88C111.891 529.804 72.3643 463.002 46.5997 391.369C14.6548 302.554 -26.6525 203.423 23.1651 123.256C77.5289 35.7729 186.782 1.46288 289.771 0.0541782Z" fill="#E54C4D" />
          </svg>
        </div>
        <div class="fwc-blob-2">
          <svg width="100%" viewBox="0 0 629 617" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <path opacity="0.05" fill-rule="evenodd" clip-rule="evenodd" d="M275.349 0.448552C366.623 3.80122 448.347 45.746 510.264 112.891C579.452 187.923 642.99 279.594 625.474 380.143C607.133 485.43 525.805 576.497 423.896 608.69C333.581 637.22 244.299 579.859 167.139 524.931C108.356 483.084 83.3975 417.607 59.7239 349.444C30.0293 263.946 -29.8228 171.798 17.7498 94.8003C68.3186 12.9532 179.205 -3.08302 275.349 0.448552Z" fill="#55BD55" />
          </svg>
        </div>
        <div class="fwc-blob-1">
          <svg width="100%" viewBox="0 0 649 631" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <path opacity="0.05" fill-rule="evenodd" clip-rule="evenodd" d="M311.605 0.0275336C407.042 1.89478 457.166 104.346 516.738 178.932C576.403 253.634 665.635 325.279 646.141 418.876C626.462 513.355 520.003 553.13 431.018 590.483C349.728 624.607 262.184 648.022 180.755 614.232C93.7943 578.147 20.7728 505.41 3.13194 412.927C-13.9178 323.542 41.6916 243.602 96.1534 170.703C153.846 93.4803 215.229 -1.85806 311.605 0.0275336Z" fill="#42AADE" />
          </svg>
        </div>
        <div class="slot-wrapper">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

class FwcAnimBlob extends FwcBase {
  constructor() {
    super('fwc-anim-blob', FwcAnimBlobComponent);
  }
}

const breakpoints = {
  'md': 900,
  'sm': 600
};

const baseUnit = 8;

const supportsCssVars = !!(window.CSS && CSS.supports('color', 'var(--primary)'));

class FwcAnimColDropComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          width: 100%;
          display: block;
        }
        .fwc-anim-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: var(--fwcu2);
          overflow: hidden;
        }
        .fwc-anim-bar {
          width: 100%;
          height: 2px;
          margin: 0 auto;
          margin-bottom: calc(var(--fwcu) + var(--fwcu05));
          background: var(--color-gray-five, #f7f7f7);
        }
        .fwc-anim-bar.prep-animate {
          width: 0%;
        }
        .fwc-anim-bar.animate {
          width: 100%;
          transition: width 500ms ease-in-out;
        }
        .fwc-anim-content {
          padding: calc(1.5 * var(--fwcu)) 0;
        }
        .fwc-anim-content.prep-animate {
          transform: translateY(-125%);
        }
        .fwc-anim-content.animate {
          animation: slideIn 1s ease-in-out 1;
          transform: translateY(0%);
        }

        @keyframes slideIn {
          0% {
            transform: translateY(-125%);
          }
          33% {
            transform: translateY(20%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      delay: { type: Number },
      triggerAnimate: { attribute: 'trigger-animate', type: Boolean },
      disableAnimateMobile: { attribute: 'disable-animate-mobile', type: String }, // small, medium
    };
  }

  constructor() {
    super();
    this.delay = 0;
    this.bar = null;
    this.content = null;
    this.disableAnimateMobile = ''; // small, medium
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === 'trigger-animate') {
      this.startAnimation();
    }
  }

  firstUpdated() {
    const isAnimationDisabled = this.checkAnimationDisabled();
    this.bar = this.shadowRoot.querySelector('.fwc-anim-bar');
    this.content = this.shadowRoot.querySelector('.fwc-anim-content');
    this.bar.addEventListener('transitionend', (e) => {
      this.content.classList.add('animate');
    });

    if (!isAnimationDisabled) {
      this.bar.classList.add('prep-animate');
      this.content.classList.add('prep-animate');
    }

    if (this.triggerAnimate) {
      this.startAnimation();
    }
  }

  checkAnimationDisabled() {
    if (window.innerWidth <= breakpoints.md && this.disableAnimateMobile === 'medium') {
      return true;
    }
    if (window.innerWidth <= breakpoints.sm && this.disableAnimateMobile === 'small') {
      return true;
    }
    return false;
  }

  startAnimation() {
    setTimeout(() => {
      this.bar.classList.add('animate');
    }, this.delay);
  }

  render() {
    return html`
      <div class="fwc-anim-wrapper">
        <div class="fwc-anim-bar"></div>
        <div class="fwc-anim-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

class FwcAnimColDrop extends FwcBase {
  constructor() {
    super('fwc-anim-col-drop', FwcAnimColDropComponent);
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

class FwcBackToTopComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .back-to-top {
          font-family: var(--font-sans-serif);
          position: fixed;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          opacity: 0.85;
          background: var(--color-util-four);
          display: flex;
          line-height: calc(2 * var(--fwcu));
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: calc(1.25 * var(--fwcu)) calc(2 * var(--fwcu));
          text-decoration: none;
          border-radius: calc(3.25 * var(--fwcu));
          z-index: 1;
          font-weight: 700;
          font-size: calc(1.75 * var(--fwcu));
          border: none;
        }
        .back-to-top:hover,
        .back-to-top:focus,
        .back-to-top:active,
        .back-to-top:active:focus {
          color: var(--color-white);
        }
        .back-to-top:hover {
          opacity: 1;
          background: var(--color-util-four);
          cursor: pointer;
        }
        .fwc-icon-arrow {
          transform: rotate(-90deg);
          font-size: calc(2.25 * var(--fwcu));
          fill: var(--color-white);
        }
        .back-to-top.hidden {
          display: none;
        }
        span {
          display: block;
          margin-left: calc(1.25 * var(--fwcu));
        }
        @media screen and (max-width: 600px) {
          .back-to-top {
            bottom: 10%;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      labelBtn: { attribute: 'label-btn', type: String },
      showButtonAtPx: { attribute: 'show-button-at-px', type: Number },
      _hideButton: {},
    };
  }

  constructor() {
    super();
    this._bodyEle = document.documentElement;
    this._hideButton = true;
    this.labelBtn = 'Back to Top';
    this.showButtonAtPx = 1000;
    //listen for scroll every 250ms
    this._handleScroll = debounce(() => {
      this.checkScrollPos();
    }, 250);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', () => {
      this._handleScroll();
    });
  }
  disconnectedCallback() {
    window.removeEventListener('scroll', () => {
      this._handleScroll();
    });
    super.disconnectedCallback();
  }

  // check if we show or hide btn based on if page is scrolled past showButtonAtPx
  checkScrollPos() {
    this._hideButton = window.pageYOffset >= this.showButtonAtPx ? false : true;
  }

  scrollToTopOfWindow() {
    this._hideButton = true;
    //passing in reference of (this) since setInterval takes scope of this keyword
    this.fadeOut(this._bodyEle, this.fadeIn, this);
  }

  //fade out body
  fadeOut(element, callback, _this) {
    let op = 1; // initial opacity
    let increment = 0.05;
    let timer = setInterval(() => {
      if (op <= 0) {
        clearInterval(timer);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        callback(element, _this);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op + ')';
      op = op - increment;
    }, 15);
  }

  //fade in body
  fadeIn(element, _this) {
    let op = 0; // initial opacity
    let increment = 0.05;
    let timer = setInterval(() => {
      if (op >= 1) {
        clearInterval(timer);
        /* c8 ignore next 2 */
        _this._returnFocus();
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op + ')';
      op = op + increment;
    }, 15);
  }

  _returnFocus() {
    if (this._refocusElem) {
      // Return focus to calling element
      this._refocusElem.focus();
    }
  }

  // a public func allowing projects to set the refocus element
  setReFocus(elem) {
    this._refocusElem = elem;
  }

  render() {
    return html`
      <button role="button" class="back-to-top ${this._hideButton ? 'hidden' : ''} " @click="${this.scrollToTopOfWindow}">
        <svg class="fwc-icon-arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" focusable="false">
          <polygon id="Path" points="30.7843137 5 27.7777778 8.00653595 41.9607843 22.1895425 0 22.1895425 0 26.372549 41.9607843 26.372549 27.7777778 40.5555556 30.7843137 43.5620915 48.5620915 25.7843137 50 24.2810458 48.5620915 22.7777778"></polygon>
        </svg>
        <span>${this.labelBtn}</span>
      </button>
    `;
  }
}

class FwcBackToTop extends FwcBase {
  constructor() {
    super('fwc-back-to-top', FwcBackToTopComponent);
  }
}

class FwcBarsComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-cb-flex {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .fwc-cb-container {
          width: calc(100% - 1.5 * var(--fwcu));
          height: calc(2.75 * var(--fwcu));
          display: flex;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          border: 1px solid transparent;
          border-radius: calc(2.75 * var(--fwcu));
          background-color: var(--color-gray-five);
        }
        .fwc-cb-bar {
          height: calc(2.75 * var(--fwcu));
          border: 1px solid transparent;
          border-radius: calc(2.75 * var(--fwcu));
          transition: width 500ms cubic-bezier(0.2, -0.02, 0.8, 1.4);
          background-color: var(--color-dviz-one);
        }
        dl {
          color: var(--color-gray-one);
          font-size: var(--default-font-size);
        }

        dl .fwc-cb-flex:nth-of-type(2n) .fwc-cb-bar {
          background-color: var(--color-dviz-four);
        }
        dl .fwc-cb-flex:nth-of-type(3n) .fwc-cb-bar {
          background-color: var(--color-dviz-eight);
        }
        dl .fwc-cb-flex:nth-of-type(4n) .fwc-cb-bar {
          background-color: var(--color-dviz-seven);
        }

        dl,
        dt,
        dd {
          margin: 0;
          padding: 0;
        }
        strong {
          padding-left: calc(1.5 * var(--fwcu));
        }
        @media screen and (max-width: 900px) {
          .fwc-cb-flex {
            flex-direction: column;
          }
          .fwc-cb-container {
            width: 100%;
          }
          strong {
            padding-left: 0;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      bars: { type: Array },
    };
  }

  constructor() {
    super();
    this.bars = [];
  }

  attributeChangedCallback(name, oldval, newval) {
    if (name === 'bars' && oldval) {
      this.bars = JSON.parse(newval);
      this._buildBars();
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  _buildBars() {
    // TODO: Num types: $, %, etc
    // TODO: Aria

    const bars = html`${this.bars.map((bar) => {
      const w = Math.floor((bar.value / bar.max) * 100);
      return html`
        <dt>${bar.title}</dt>
        <dd class="fwc-cb-flex">
          <div class="fwc-cb-container">
            <div class="fwc-cb-bar" style="width:${w}%"></div>
          </div>
          <div><strong>${bar.value}</strong><span>/${bar.max}</span></div>
        </dd>
      `;
    })}`;

    return bars;
  }

  render() {
    return html` <dl>${this._buildBars()}</dl> `;
  }
}

class FwcBars extends FwcBase {
  constructor() {
    super('fwc-bars', FwcBarsComponent);
  }
}

class FwcCardCircleComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          position: relative;
          padding-top: calc(16 * var(--fwcu));
          padding-bottom: calc(4 * var(--fwcu));
          height: 100%;
        }
        ::slotted(button) {
          margin-bottom: calc(2 * var(--fwcu));
        }
        p {
          padding-bottom: calc(3 * var(--fwcu));
          font-size: var(--default-font-size);
        }
        h3 {
          text-align: center;
          font-size: calc(3 * var(--fwcu));
          line-height: calc(3.75 * var(--fwcu));
          font-weight: 500;
          font-family: var(--font-serif);
        }
        .circle-bg,
        .circle-white,
        .circle-img {
          border-radius: 50%;
          position: absolute;
          background-color: var(--color-white);
        }
        .circle-bg {
          border: solid 2px rgba(var(--color-rgb-black), 0.1);
          z-index: 0;
          width: calc(30 * var(--fwcu));
          height: calc(30 * var(--fwcu));
          left: calc(50% - (15 * var(--fwcu)));
          top: 0;
          box-shadow: 0 0 12px 4px rgba(var(--color-rgb-black), 0.08);
        }
        .circle-white {
          z-index: 1;
          background-color: var(--color-white);
          width: calc(30 * var(--fwcu) - 2px);
          height: calc(30 * var(--fwcu) - 2px);
          left: calc(50% - (15 * var(--fwcu)) + 1px);
          top: 2px;
        }
        .circle-img {
          width: calc(28 * var(--fwcu));
          height: calc(28 * var(--fwcu));
          left: calc(50% - (14 * var(--fwcu)));
          top: var(--fwcu);
          background-color: var(--color-gray-four);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50%;
          z-index: 1;
        }

        .fwc-card-generic {
          padding: calc(6 * var(--fwcu));
          position: relative;
          min-height: calc(16 * var(--fwcu));
          height: 100%;
        }

        .fwc-card-generic .content {
          padding-top: calc(7 * var(--fwcu));
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: wrap;
        }

        @media screen and (max-width: 600px) {
          .fwc-card-generic {
            padding: calc(3 * var(--fwcu));
          }
          .circle-bg {
            width: calc(25 * var(--fwcu));
            height: calc(25 * var(--fwcu));
            left: calc(50% - (11.5 * var(--fwcu)));
            top: 0;
          }
          .circle-white {
            width: calc(25 * var(--fwcu) - 2px);
            height: calc(25 * var(--fwcu) - 2px);
            left: calc(50% - (11.5 * var(--fwcu)) + 1px);
            top: 2px;
          }
          .circle-img {
            width: calc(23 * var(--fwcu));
            height: calc(23 * var(--fwcu));
            left: calc(50% - (10.5 * var(--fwcu)));
            top: var(--fwcu);
          }
          .fwc-card-generic .content {
            padding-top: calc(10.5 * var(--fwcu));
          }
        }
        @media screen and (max-width: 600px) and (hover: none) and (pointer: coarse) {
          h3 {
            font-size: calc(2.25 * var(--fwcu));
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      image: { type: String },
      title: { type: String },
      content: { type: String },
    };
  }

  constructor() {
    super();
    this.image = '';
    this.title = '';
    this.content = '';
  }

  contentFromProps() {
    return html`
      <h3>${this.title}</h3>
      <p>${this.content}</p>
    `;
  }

  contentFromSlot() {
    return html`
      <h3>${this.title}</h3>
      <slot name="fwc-card-circle-content"></slot>
    `;
  }

  renderProps() {
    const content = this.content ? this.contentFromProps() : this.contentFromSlot();
    return content;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/components/fwc-cards.css" />
      <div class="circle-bg"></div>
      <div class="circle-white"></div>
      <div class="circle-img" style=${`background-image: url(${this.image})`}></div>
      <div class="fwc-card-generic">
        <div class="content">
          <div>${this.renderProps()}</div>
          <div>
            <slot class="actions" name="fwc-card-circle-actions"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

class FwcCardCircle extends FwcBase {
  constructor() {
    super('fwc-card-circle', FwcCardCircleComponent);
  }
}

/* Deprecate when image and video cards are finished */

class FwcCardMediaComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          width: 100%;
          height: 100%;
          display: block;
          padding-bottom: calc(4 * var(--fwcu));
        }
        .fwc-mcard {
          height: 100%;
          box-shadow: var(--box-shadow);
          border-radius: calc(1.5 * var(--fwcu));
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: var(--color-white);
        }
        .fwc-mcard.fwc-full {
          flex-direction: row-reverse;
          min-height: calc(34 * var(--fwcu));
        }
        .fwc-mcard .fwc-image-section {
          position: relative;
        }
        .fwc-mcard.fwc-full .fwc-image-section {
          flex-grow: 1;
        }
        .fwc-mcard .fwc-media-image-wrapper {
          position: relative;
          width: 100%;
        }
        .fwc-mcard.fwc-full .fwc-media-image-wrapper {
          height: 100%;
        }
        .fwc-mcard .fwc-media-image {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .fwc-description-section {
          position: relative;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          font-size: calc(2 * var(--fwcu));
          font-weight: 300;
          padding: calc(3 * var(--fwcu)) calc(4 * var(--fwcu)) calc(4 * var(--fwcu));
        }
        .fwc-full .fwc-description-section {
          padding: calc(3 * var(--fwcu));
          display: flex;
          flex-basis: 54%;
          flex-direction: column;
          flex-grow: 0;
          justify-content: space-evenly;
          height: auto;
        }
        .fwc-mcard .fwc-description-title {
          font-size: calc(2 * var(--fwcu));
          line-height: calc(2.5 * var(--fwcu));
        }
        .fwc-mcard button {
          height: calc(5.5 * var(--fwcu));
          width: calc(5.5 * var(--fwcu));
          border: 2px solid var(--color-primary);
          border-radius: 50%;
          background-color: var(--color-white);
          color: var(--color-primary);
          font-size: calc(2.75 * var(--fwcu));
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .fwc-mcard.fwc-full button {
          height: calc(4 * var(--fwcu));
          width: calc(4 * var(--fwcu));
          font-size: calc(1.75 * var(--fwcu));
        }
        .fwc-mcard button:hover {
          cursor: pointer;
        }
        .fwc-mcard fwc-header-sub {
          margin-bottom: calc(1.5 * var(--fwcu));
        }
        .fwc-mcard fwc-header-sub {
          margin-top: var(--fwcu);
        }
        .fwc-mcard .fwc-description-text {
          font-size: calc(1.5 * var(--fwcu));
          line-height: calc(2.5 * var(--fwcu));
          margin: calc(1 * var(--fwcu)) 0 0;
          flex-grow: 1;
        }
        .fwc-mcard .fwc-badge-bookmark-container {
          position: relative;
        }
        .fwc-mcard .fwc-badge-bookmark {
          position: absolute;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: calc(-5.75 * var(--fwcu));
          z-index: 1;
          width: 100%;
        }
        .fwc-mcard.fwc-full .fwc-badge-bookmark {
          position: relative;
          margin-top: 0;
          margin-bottom: calc(2.5 * var(--fwcu));
        }
        .fwc-mcard .fwc-optional-badge {
          width: auto;
          max-width: 80%;
          border-radius: calc(0.5 * var(--fwcu));
          font-size: calc(1.25 * var(--fwcu));
          font-weight: 500;
          text-align: center;
          color: var(--color-white);
          background-color: var(--color-alert-success);
          padding: 0 calc(1*var(--fwcu));
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .fwc-mcard .fwc-contact-section {
          display: flex;
          flex-wrap: wrap;
        }
        .fwc-contact-link-margin {
          margin-right: calc(3 * var(--fwcu));
        }
        .fwc-mcard .fwc-contact-section .fwc-icon {
          padding-right: var(--fwcu);
          color: var(--color-gray-three);
        }
        .fwc-mcard .fwc-contact-section > div {
          display: block;
          margin: calc(1.5 * var(--fwcu)) calc(4 * var(--fwcu)) 0 0;
        }
        .fwc-mcard .fwc-contact-section > div.fwc-hide {
          display: none;
        }
        .fwc-bookmark svg {
          fill: var(--color-primary);
          height: calc(2.75 * var(--fwcu));
          width: calc(2.75 * var(--fwcu));
          pointer-events: none;
          overflow: visible;
        }
        .fwc-full .fwc-bookmark svg {
          height: calc(2 * var(--fwcu));
          width: calc(2 * var(--fwcu));
          display: block;
        }
        .fwc-mcard .fwc-active-bookmark {
          background-color: var(--color-primary);
        }
        .fwc-mcard .fwc-active-bookmark svg {
          fill: var(--color-white);
        }
        .fwc-hide,
        .fwc-full .fwc-hide {
          display: none;
        }
        .fwc-hide-vis {
          visibility: hidden;
        }

        @media screen and (max-width: 900px) {
          .fwc-mcard .fwc-description-section {
            padding: calc(3 * var(--fwcu));
          }
          .fwc-mcard.fwc-full {
            display: block;
          }
          .fwc-mcard.fwc-full .fwc-badge-bookmark {
            position: absolute;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: calc(-6 * var(--fwcu)) 0 0;
            z-index: 1;
            width: 100%;
          }
          .fwc-mcard.fwc-full button {
            height: calc(5.5 * var(--fwcu));
            width: calc(5.5 * var(--fwcu));
            font-size: calc(2.75 * var(--fwcu));
          }
          .fwc-mcard.fwc-full .fwc-media-image {
            border-radius: calc(1.5 * var(--fwcu)) calc(1.5 * var(--fwcu)) 0 0;
          }
          .fwc-full .fwc-bookmark svg {
            height: calc(2.75 * var(--fwcu));
            width: calc(2.75 * var(--fwcu));
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      image: { type: String },
      horizontal: { type: Boolean },
      badge: { type: String },
      checked: { type: Boolean },
      showBookmark: { attribute: 'show-bookmark', type: Boolean },
      labelAriaBookmark: { attribute: 'label-aria-bookmark', type: String },
      _hasPhoneSlot: {},
      _hasLinkSlot: {},
    };
  }

  constructor() {
    super();
    this.image = '';
    this.horizontal = false;
    this.badge = '';
    this.checked = false;
    this.labelAriaBookmark = 'Bookmark';
    this._hasPhoneSlot = true;
    this._hasLinkSlot = true;
    this._activeSlots = null;
  }

  firstUpdated() {
    this._hasPhoneSlot = this._slottedChildren(this.shadowRoot.querySelector('slot[name=phone]'));
    this._hasLinkSlot = this._slottedChildren(this.shadowRoot.querySelector('slot[name=link]'));
    this._activeSlots = this._checkActiveSlots();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'image') {
        this._setImageDimension(this.image);
      }
      if (propName === 'checked') {
        this._setBookmarkState(this.checked);
      }
    });
  }

  _slottedChildren(slot) {
    const childNodes = slot.assignedNodes({ flatten: true });
    return Array.prototype.some.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE);
  }

  _checkActiveSlots() {
    const slots = [].slice.call(this.shadowRoot.querySelectorAll('slot'));
    return slots.reduce((tot, slot) => {
      return (tot += slot.assignedNodes({ flatten: true }).length);
    }, 0);
  }

  _setImageDimension(imgPath) {
    const image = document.createElement('img');
    image.onload = (e) => {
      const imgWrapper = this.shadowRoot.querySelector('.fwc-media-image-wrapper');
      imgWrapper.style.paddingTop = (image.height / image.width) * 100 + '%';
    };
    image.src = imgPath;
  }

  _setBookmarkState(isChecked) {
    const btn = this.shadowRoot.querySelector('button.fwc-bookmark');
    if (isChecked) {
      btn.classList.add('fwc-active-bookmark');
      return;
    }

    btn.classList.remove('fwc-active-bookmark');
  }

  _onBookmarkClick(e) {
    e.target.classList.toggle('fwc-active-bookmark');
    this.checked = !this.checked;
    const event = new CustomEvent('fwc-card-media-bookmark', {
      detail: this.checked,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/components/fwc-badges.css" />
      <div class="fwc-mcard ${this.horizontal ? 'fwc-full' : ''}">
        <div class="fwc-image-section">
          <!-- padding-top controls the height of the image based on its proportions, calculated in _setImageDimension -->
          <div class="fwc-media-image-wrapper">
            <div class="fwc-media-image" style="background-image: url('${this.image}');"></div>
          </div>
        </div>
        <div class="fwc-description-section ${this._activeSlots === 0 ? 'fwc-hide' : ''}">
          <div class="fwc-badge-bookmark-container">
            <div class="fwc-badge-bookmark">
              <div class="fwc-badge success ${this.badge ? '' : 'fwc-hide-vis'}">${this.badge}</div>
              <button class="fwc-bookmark ${this.showBookmark ? '' : 'fwc-hide-vis'}" @click=${this._onBookmarkClick} aria-label="${this.labelAriaBookmark}" aria-pressed="${this.checked}">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px" viewBox="0 0 50 50">
                  <path d="M5,0 L5,50 L8.46467391,47.4184783 L24.5652174,35.326087 L40.6657609,47.4184783 L44.1304348,50 L44.1304348,0 L5,0 Z M9.34782609,4.34782609 L39.7826087,4.34782609 L39.7826087,41.3043478 L25.8559783,30.8423913 L24.5652174,29.8913043 L23.2744565,30.8423913 L9.34782609,41.3043478 L9.34782609,4.34782609 Z" />
                </svg>
              </button>
            </div>
          </div>
          <slot name="title"></slot>
          <div class="fwc-description-text">
            <slot name="body"></slot>
          </div>
          <div class="fwc-contact-section">
            <div class="${this._hasLinkSlot ? '' : 'fwc-hide'}"><slot name="link"></slot></div>
            <div class="${this._hasPhoneSlot ? '' : 'fwc-hide'}"><slot name="phone"></slot></div>
          </div>
        </div>
      </div>
    `;
  }
}

class FwcCardMedia extends FwcBase {
  constructor() {
    super('fwc-card-media', FwcCardMediaComponent);
  }
}

class FwcCardMediaImageComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          width: 100%;
          height: 100%;
          display: block;
        }
        .card {
          background: var(--color-white);
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          overflow: hidden;
          height: 100%;
        }
        .card.full {
          display: flex;
          flex-direction: row-reverse;
          align-items: stretch;
          max-height: calc(34*var(--fwcu)); /* 272px */
        }

        .wrapper {
          position: relative;
        }

        .optional {
          position: absolute;
          display:flex;
          align-items: center;
          height: calc(4*var(--fwcu));
          width:100%;
          bottom: calc(-1*var(--fwcu));
          padding: 0 calc(3*var(--fwcu));
        }
        .optional.end {
          justify-content: flex-end;
        }
        .optional.between {
          justify-content: space-between;
        }
        
        .content {
          padding: calc(3*var(--fwcu));
        }
  
        .card.md .content {
          padding: calc(4*var(--fwcu));
        }
        .card.md .optional {
          padding: 0 calc(4*var(--fwcu));
        }

        .card.lg .content {
          padding: calc(4*var(--fwcu)) calc(6*var(--fwcu));
        }
        .card.full .content {
          padding: calc(4*var(--fwcu)) calc(6*var(--fwcu));
        }

        .card.lg .optional {
          padding: 0 calc(6*var(--fwcu));
        }

        .content h3 { 
          margin:0;
          font-size: calc(3*var(--fwcu));
          line-height: calc(3.75*var(--fwcu));
          font-family: var(--font-serif);
          font-weight: 500;
        }
        .content h2 {
          margin:0;
          font-size: calc(4 * var(--fwcu));
          line-height: calc(4.75 * var(--fwcu));
          font-family: var(--font-serif);
          font-weight: 600;
        }

        .content p {
          padding:calc(1.5*var(--fwcu)) 0 calc(2.5*var(--fwcu));
          margin:0;
          font-size: var(--default-font-size);
          line-height: calc(2.75*var(--fwcu));
        }
  
        /* Full size cards */
        .content .optional {
          position: static;
          height: auto;
          padding:0 0 calc(3.25*var(--fwcu)) 0;
        }

        .bookmark {
          height: calc(3.75*var(--fwcu));
          width: calc(3.75*var(--fwcu));
          border: 1px solid var(--color-primary);
          border-radius: 50%;
          background-color: var(--color-white);
          font-size: calc(2.75*var(--fwcu));
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          padding:0;
        }
        .bookmark.active {
          background-color: var(--color-primary);
        }
        .bookmark svg { 
          fill: var(--color-primary);
          height: calc(1.5*var(--fwcu));
          width: calc(1.5*var(--fwcu));
        }
        .bookmark.active svg {
          fill: var(--color-white);
        }


        slot[name="links"] {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
        slot[name="links"]::slotted(a) {
          flex:0 0 auto;
          padding-right: calc(2*var(--fwcu));
          padding-bottom: var(--fwcu);
        }
        slot[name="body"] {
          padding:calc(1.5*var(--fwcu)) 0 calc(2.5*var(--fwcu));
          display: block;
        }
        
        @media screen and (max-width: 600px) and (hover: none) and (pointer: coarse) {
          .content p {
            font-size: var(--default-mobile-font-size);
          }
        }

        .placeholder { 
          background: var(--color-gray-six);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .placeholder svg {
          fill: var(--color-gray-four);
        }

        img {
          opacity: 0;
          transition: opacity 250ms ease-out;
        }
        img.load {
          opacity: 1;
        }
        img, .placeholder {
          object-fit: cover;
          object-position: top center;
          width:100%;
          height: auto;
        }
        img.full, .placeholder.full {
          aspect-ratio: 1.68 / 1;
          height:100%;
        }

        img.sm, .placeholder.sm {
          aspect-ratio: 1.6 / 1;
        }
        img.md, .placeholder.md {
          aspect-ratio: 2.45 / 1;
        }
        img.lg, .placeholder.lg {
          aspect-ratio: 2 / 1;
        }

        @media screen and (max-width: 600px) {
          .card.md .content,
          .card.lg .content,
          .card.full .content {
            padding: calc(3*var(--fwcu));
          }

          .card.md .optional,
          .card.lg .optional {
            padding: 0 calc(3*var(--fwcu));
          }

          .card.full { 
            display: block;
            max-height: none;
          }
          .card.full .content {
            padding-top:0;
          }
          .content .optional {
            position: relative;
            top: calc(-3*var(--fwcu));
            padding-bottom:0;
          }

          img.md,
          img.lg,
          img.full,
          .placeholder.md,
          .placeholder.lg,
          .placeholder.full {
            aspect-ratio: 1.6 / 1;
          }
        }

        /* Safari doesn't support aspect-raitio yet */
        @supports not (aspect-ratio: 1.6 / 1) { 
          img.sm,
          img.md,
          .placeholder.sm,
          .placeholder.md {
            height: calc(28*var(--fwcu)); /* 224px */
          }
          img.lg,
          .placeholder.lg {
            height: calc(46.5*var(--fwcu)); /* 372px */
          }
          img.full,
          .placeholder.full {
            height: calc(34*var(--fwcu)); /* 272px */
          }
          @media screen and (max-width: 600px) {
            img.lg,
            img.full,
            .placeholder.lg,
            .placeholder.full {
              height: calc(28*var(--fwcu)); /* 224px */
            }
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      badge: { type: String },
      badgeClass: { attribute: 'badge-class', type: String },
      body: { type: String },
      bookmark: { type: String, reflect: true },
      image: { type: Object },
      labelAriaBookmark: { attribute: 'label-aria-bookmark', type: String},
      size: { type: String },
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.badge = null;
    this.badgeClass = "success";
    this.bookmark = null;
    this.bookmarkStates = {
      checked: "checked",
      unchecked: "unchecked"
    };
    this.sizes = {
      sm: "sm",
      md: "md",
      lg: "lg",
      full: "full"
    };
    this.image = null;
    this.labelAriaBookmark = 'Bookmark';
    this.size = this.sizes.sm;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'bookmark' && oldValue) {
        this._updateBookmarkState();
      }
      if (propName === 'image') {
        this._initImage();
        this._onImageLoad();
      }
    });
  }

  _updateBookmarkState(){
    const btn = this.shadowRoot.querySelector('#Bookmark');
    switch (this.bookmark) {
      case this.bookmarkStates.unchecked:
        btn.classList.remove('active');
        break;
      case this.bookmarkStates.checked: 
        btn.classList.add('active');
        break;
    }
  }

  _setBookmarkState() {
    const oldVal = this.shadowRoot.querySelector('#Bookmark').classList.contains('active');
    this.bookmark = (oldVal) ? this.bookmarkStates.unchecked : this.bookmarkStates.checked;
  }

  _onBookmarkClick(e){
    this._setBookmarkState();
    const event = new CustomEvent('fwc-card-media-image-bookmark', {
      detail: this,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  _initBookmark() {
    return html`
      <button
        id="Bookmark"
        class="bookmark ${this.bookmark === this.bookmarkStates.checked ? 'active' : ''}"
        @click=${this._onBookmarkClick}
        aria-label="${this.labelAriaBookmark}"
        aria-pressed="${this.bookmark === this.bookmarkStates.checked}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px" viewBox="0 0 50 50">
          <path d="M5,0 L5,50 L8.46467391,47.4184783 L24.5652174,35.326087 L40.6657609,47.4184783 L44.1304348,50 L44.1304348,0 L5,0 Z M9.34782609,4.34782609 L39.7826087,4.34782609 L39.7826087,41.3043478 L25.8559783,30.8423913 L24.5652174,29.8913043 L23.2744565,30.8423913 L9.34782609,41.3043478 L9.34782609,4.34782609 Z"/>
        </svg>
      </button>
    `
  };

  _initOptional() {
    return html`
      <div class="optional ${this.badge ? 'between' : 'end'}" id="Optional">
        ${ this._initBadge() }
        ${ ifDefined(this.bookmark ? this._initBookmark() : null) }
      </div>
    `;
  }

  _initBadge() {
    let badge = (this.badge) ? html`<span class="fwc-badge ${this.badgeClass}">${this.badge}</span>` : null;
    return badge;
  }

  _initBody() {
    const slot = html`<slot name="body"></slot>`;
    const body = html`<p>${this.body}</p>`;
    return this.body ? body : slot;
  }

  _initTitle() {
    const h2 = html`<h2>${this.title}</h2>`;
    const h3 = html`<h3>${this.title}</h3>`;
    const title = (this.size === this.sizes.lg) ? h2 : h3;
    return title;
  }


  _onImageLoad() { 
    const img = this.shadowRoot.querySelector('#Image');
    if(img) {
      img.addEventListener("load", e=> {
        e.target.classList.add('load');
      });
    }
  }

  _initImage(){
    if(this.image) {
      const source = this.image.source ? this.image.source : [];
      const srcset = source.map(src => {
        return html`
          <source srcset="${src.srcset}" media="${ifDefined(src.media ? src.media : undefined)}" type="${ifDefined(src.type ? src.type  : undefined)}">
        `;
      });
      return html`
        <picture>
          ${srcset}
          <img id="Image" src="${this.image.img.src}" alt="${this.image.img.alt}" width="${this.image.img.width}" height="${this.image.img.height}" class="${this.size}" @loadstart=${this._onImageLoad}>
        </picture>
      `;
    }
    return html`
      <div id="Placeholder" class="placeholder ${this.size}">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51">
          <path d="M0,5 L0,43.4615385 L50,43.4615385 L50,5 L0,5 Z M3.84615385,8.84615385 L46.1538462,8.84615385 L46.1538462,34.9278846 L31.1899038,19.9639423 L29.8076923,18.6418269 L28.4254808,19.9639423 L24.0384615,24.3509615 L16.7668269,17.0793269 L15.3846154,15.7572115 L14.0024038,17.0793269 L3.84615385,27.2355769 L3.84615385,8.84615385 Z M37.5,10.7692308 C34.8707942,10.7692308 32.6923077,12.9477173 32.6923077,15.5769231 C32.6923077,18.2061308 34.8707942,20.3846154 37.5,20.3846154 C40.1292077,20.3846154 42.3076923,18.2061308 42.3076923,15.5769231 C42.3076923,12.9477173 40.1292077,10.7692308 37.5,10.7692308 Z M37.5,14.6153846 C38.0558904,14.6153846 38.4615385,15.0210346 38.4615385,15.5769231 C38.4615385,16.1328135 38.0558904,16.5384615 37.5,16.5384615 C36.9441115,16.5384615 36.5384615,16.1328135 36.5384615,15.5769231 C36.5384615,15.0210346 36.9441115,14.6153846 37.5,14.6153846 Z M15.3846154,21.2259615 L21.2740385,27.1153846 L8.77403846,39.6153846 L3.84615385,39.6153846 L3.84615385,32.7644231 L15.3846154,21.2259615 Z M29.8076923,24.1105769 L45.3125,39.6153846 L14.3028846,39.6153846 L29.8076923,24.1105769 Z" transform="translate(0 .23)"/>
        </svg>
      </div>
    `;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/components/fwc-badges.css">
      <div class="card ${this.size}">
        <div class="wrapper">
          ${this._initImage()}
          ${this.size !== this.sizes.full ? this._initOptional() : ''}
        </div>
        <div class="content" id="Content">
          ${this.size === this.sizes.full ? this._initOptional(): ''}
          ${this._initTitle()}
          ${this.body ? html`<p>${this.body}</p>` : null}
          ${!this.body ? html`<slot name="body" id="SlotBody"></slot>` : null}
          <slot name="links"></slot>
        </div>
      </div>
    `;
  }
}

class FwcCardMediaImage extends FwcBase {
  constructor() {
    super('fwc-card-media-image', FwcCardMediaImageComponent);
  }
}

class FwcCarouselCardsComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        @keyframes carouselSlide {
          from {
            width: calc(0.5 * var(--fwcu));
          }
          to {
            width: calc(1.75 * var(--fwcu));
          }
        }
        :host {
          max-width: 1920px;
          margin: 0 auto;
        }
        section {
          display: flex;
          max-width: calc(144 * var(--fwcu));
          margin: 0 auto;
          align-items: center;
          position: relative;
        }

        section:focus {
          outline: none;
        }

        section ul {
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: calc(100% - (6 * var(--fwcu)));
          padding: calc(2 * var(--fwcu)) 0 calc(3 * var(--fwcu));
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          -ms-scroll-snap-type: proximity;
          scroll-behavior: smooth;
          scrollbar-width: none;
          display: flex;
          max-width: calc(144 * var(--fwcu));
          margin: 0 auto;
          align-items: stretch;
          justify-content: flex-start;
          flex-wrap: nowrap;
          width: 100%;
          -ms-overflow-style: none;
        }
        ul::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }

        li {
          list-style: none;
          flex: 1 0 auto;
          scroll-snap-align: center;
          width: 33.3333%;
          padding: 0 calc(1.5 * var(--fwcu));
        }

        li > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(4.5 * var(--fwcu));
          width: calc(4.5 * var(--fwcu));
          background: white;
          border-radius: 50%;
          border: 1px solid var(--color-gray-four);
          flex-basis: calc(4.5 * var(--fwcu));
          box-shadow: var(--box-shadow);
          padding: 0;
          cursor: pointer;
        }
        button.hidden {
          visibility: hidden;
          opacity: 0;
        }
        button.disabled {
          border-color: var(--color-gray-five);
          pointer-events: none;
          color: var(--color-gray-three);
          box-shadow: none;
        }
        button.disabled svg {
          fill: var(--color-gray-three);
        }
        button svg {
          width: calc(1.75 * var(--fwcu));
          height: calc(1.75 * var(--fwcu));
          fill: var(--color-primary);
        }
        button.fwc-prev svg {
          transform: rotate(90deg);
          margin-left: calc(-0.25 * var(--fwcu));
        }
        button.fwc-next svg {
          transform: rotate(-90deg);
        }
        .fwc-carousel-card {
          border: solid 1px rgba(var(--color-rgb-black), 0.1);
          background-color: rgba(var(--color-rgb-white), 1);
          box-shadow: 0 6px 12px 0 rgba(var(--color-rgb-black), 0.08);
          border-radius: var(--border-radius);
        }
        .fwc-pager {
          display: flex;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
        }
        .fwc-pager span {
          width: calc(0.5 * var(--fwcu));
          height: calc(0.5 * var(--fwcu));
          background: var(--color-gray-four);
          display: inline-block;
          margin: 0 calc(0.25 * var(--fwcu));
          border-radius: var(--border-radius);
          transition: all 0.25s ease-in-out;
        }
        .fwc-pager span.active {
          animation-name: carouselSlide;
          animation-duration: 250ms;
          width: calc(1.75 * var(--fwcu));
          background: var(--color-primary);
        }
        .fwc-image {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-color: transparent;
          height: calc(11.75 * var(--fwcu));
          border-radius: var(--border-radius) var(--border-radius) 0 0;
        }
        .fwc-body-wrapper {
          padding: calc(2.5 * var(--fwcu));
          flex: 1 0 auto;
          display: flex;
          flex-direction: column;
        }
        .fwc-title {
          font-size: calc(2.5 * var(--fwcu));
          line-height: calc(2.75 * var(--fwcu));
          font-weight: 600;
          font-family: var(--font-serif);
          margin: calc(2 * var(--fwcu)) 0;
          color: var(--color-gray-one);
        }
        .fwc-body {
          font-size: calc(1.5 * var(--fwcu));
          line-height: calc(2.75 * var(--fwcu));
          margin-bottom: calc(2 * var(--fwcu));
          flex: 1 0 auto;
          color: var(--color-gray-one);
        }
        .fwc-link {
          margin-bottom: calc(1.25 * var(--fwcu));
        }
        .fwc-link a {
          display: inline-flex;
          align-items: center;
          font-weight: 700;
          color: var(--color-primary);
          text-decoration: none;
        }
        .fwc-link a:hover {
          color: var(--color-primary-hover);
        }
        .fwc-link svg {
          min-width: calc(2.25 * var(--fwcu));
          height: calc(2.25 * var(--fwcu));
          margin-right: var(--fwcu);
          fill: var(--color-gray-three);
          flex-basis: calc(2.25 * var(--fwcu));
        }

        @media screen and (max-width: 600px) {
          li {
            width: 100%;
            flex: 0 0 auto;
            scroll-snap-align: center;
          }
          button {
            display: none;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      cards: { type: Array },
      labelAria: { attribute: 'label-aria', type: String },
      labelAriaPrevBtn: { attribute: 'label-aria-prev-btn', type: String },
      labelAriaNextBtn: { attribute: 'label-aria-next-btn', type: String },
      active: {},
    };
  }

  constructor() {
    super();
    this.cards = [];
    this.labelAria = 'Carousel';
    this.labelAriaPrevBtn = 'Previous Slide';
    this.labelAriaNextBtn = 'Next Slide';
    this.active = 0;
    this.carouselItems = null;
    this._hideBtns = false;
    this._handleScroll = debounce((scrollContainer) => {
      this._setActivePageFromScroll(scrollContainer);
    }, 100);
  }

  firstUpdated() {
    const scrollContainer = this.shadowRoot.querySelector('ul');
    const pagerEl = this.shadowRoot.querySelector('.fwc-pager');
    const transitionEndEvent = new CustomEvent('fwc-carousel-cards-animation-end', {
      detail: this,
      bubbles: true,
      composed: false,
    });
    this.cards = this._buildCards();
    this.carouselItems = scrollContainer.children;
    this._hideBtns = this.cards.length > 3 ? false : true;
    scrollContainer.addEventListener('scroll', () => this._handleScroll(scrollContainer));

    pagerEl.onanimationend = () => {
      this.dispatchEvent(transitionEndEvent);
    };
  }

  disconnectedCallback() {
    const scrollContainer = this.shadowRoot.querySelector('ul');
    scrollContainer.removeEventListener('scroll', () => this._handleScroll(scrollContainer));
    super.disconnectedCallback();
  }

  _handleKeyDown(e) {
    if (e.key === 'ArrowLeft' || e.key === 'Left') {
      e.preventDefault();
      this._prev();
    }
    if (e.key === 'ArrowRight' || e.key === 'Right') {
      e.preventDefault();
      this._next();
    }
  }

  _setActivePageFromScroll(scrollContainer) {
    const posLeft = Math.round(scrollContainer.scrollLeft);
    const cards = [].slice.call(scrollContainer.children);
    const inc = window.innerWidth > breakpoints.sm ? 3 : 1;

    if (posLeft === 0) {
      this.active = 0;
      return;
    }

    this.active = Math.ceil(Math.round(posLeft / cards[0].offsetWidth) / inc);
  }

  _getIcon(type) {
    const icons = {
      website: html` <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
        <path d="M25,0 C11.2141938,0 0,11.2141938 0,25 C0,38.7858083 11.2141938,50 25,50 C26.953125,50 28.8411458,49.7558604 30.6640625,49.3245437 L27.9947917,42.6676438 C26.9856771,44.6940104 25.9114583,45.8333333 25,45.8333333 C24.8453771,45.8333333 24.6826167,45.7763667 24.5198563,45.7112625 C24.4628917,45.68685 24.405925,45.6705729 24.3408208,45.6380208 C24.2838542,45.6136062 24.2350271,45.5647792 24.1861979,45.5403646 C23.9339188,45.3694667 23.6572271,45.1334646 23.3398438,44.7591146 C23.1445312,44.5393875 22.9573563,44.2789708 22.7620438,43.9860021 C22.5992833,43.7418625 22.4365229,43.4651687 22.2737625,43.1722 C22.2249354,43.0826833 22.1761063,42.9850271 22.1272792,42.8955083 C21.8098958,42.2851562 21.5006521,41.5771479 21.2076833,40.812175 C21.09375,40.5192063 20.9879562,40.2018229 20.8821625,39.8763021 C20.6705729,39.249675 20.4671229,38.5823562 20.2799479,37.8662104 C20.2473958,37.7441417 20.2148438,37.6302083 20.1822917,37.5 L25.9277354,37.5 L24.2594396,33.3333333 L19.3522146,33.3333333 C19.1975917,32.2998042 19.0836583,31.2174479 18.9860021,30.1106771 C18.9453125,29.5817062 18.9127604,29.0445958 18.8802083,28.5074875 C18.8151042,27.3518875 18.75,26.2044271 18.75,25 C18.75,23.8850917 18.8151042,22.8190104 18.8720708,21.7447917 C18.9127604,21.0367833 18.95345,20.3369146 19.0104167,19.6614583 C19.0755208,18.9860021 19.1569021,18.3268229 19.2382812,17.6757812 C19.2871104,17.3339854 19.3359375,17.000325 19.3847667,16.6666667 L30.6152354,16.6666667 C30.9082042,18.5953771 31.1360687,20.6461583 31.2093104,22.9166667 L20.8333333,22.9166667 L20.8496104,22.9492188 L24.1455083,23.9339188 L35.3678396,27.3030604 C35.3678396,27.2298187 35.3759771,27.156575 35.3841146,27.0833333 L45.7275396,27.0833333 C45.6217458,28.1656896 45.4264333,29.2154958 45.1578771,30.2408854 L49.1292312,31.437175 C49.6826167,29.3782562 50,27.2298187 50,25 C50,11.2141938 38.7858083,0 25,0 Z M25,4.16666667 C26.5136729,4.16666667 28.4912104,7.27539167 29.8095708,12.5 L20.1904292,12.5 C20.2148438,12.4186208 20.2229813,12.3209646 20.2473958,12.2395833 C20.3694667,11.7675792 20.51595,11.3444021 20.6461583,10.8968104 C20.8170583,10.3597 20.9716792,9.79817708 21.1507167,9.32617292 C21.5087896,8.34961042 21.9075521,7.48697917 22.3063146,6.77083333 C22.4934896,6.4453125 22.6725271,6.15234375 22.8515625,5.89192708 C23.0143229,5.655925 23.1770833,5.42806042 23.3398438,5.24088542 C23.6897792,4.82584583 23.9990229,4.56542917 24.2594396,4.41080833 C24.3001312,4.38639375 24.3408208,4.36197917 24.3815104,4.34570417 C24.4710292,4.296875 24.5524083,4.26432292 24.6256521,4.23177083 C24.7558604,4.19921875 24.8779292,4.16666667 25,4.16666667 Z M18.3837896,5.2653 C18.1233729,5.76171875 17.8873708,6.28255208 17.6513667,6.8196625 C17.578125,6.99869792 17.5048833,7.18587292 17.4397792,7.37304792 C17.3421229,7.60905 17.2444667,7.83691458 17.1549479,8.08919375 C17.1142583,8.18685 17.0898438,8.30078125 17.0572917,8.3984375 C16.7236333,9.33431042 16.4306646,10.3271479 16.1702479,11.3606771 C16.0888667,11.6699229 16.015625,11.9791667 15.9505208,12.29655 C15.9342458,12.3616542 15.9098312,12.4348958 15.8935542,12.5 L8.36588542,12.5 C10.8805333,9.1796875 14.3554687,6.62435 18.3837896,5.2653 Z M31.62435,5.2653 C35.6526687,6.62435 39.1276042,9.1796875 41.6341146,12.5 L34.1064458,12.5 C33.4879562,9.7574875 32.6660167,7.27539167 31.62435,5.2653 Z M5.92447917,16.6666667 L15.1529958,16.6666667 C15.0634771,17.3421229 14.9983729,18.0338542 14.9251313,18.7255854 C14.8193354,19.7591146 14.7460938,20.8007812 14.6891271,21.8831375 C14.6728521,22.2330729 14.6321625,22.5667312 14.6158854,22.9166667 L4.27246042,22.9166667 C4.4921875,20.7112625 5.0699875,18.6116542 5.92447917,16.6666667 Z M34.8470062,16.6666667 L44.0755208,16.6666667 C44.9300125,18.6116542 45.5078125,20.7112625 45.7275396,22.9166667 L35.3841146,22.9166667 C35.3108729,20.7926437 35.1236979,18.6930333 34.8470062,16.6666667 Z M4.27246042,27.0833333 L14.6158854,27.0833333 C14.6403,27.6611333 14.6891271,28.2307937 14.7216792,28.8085937 C14.7460937,29.2561854 14.7623708,29.7119146 14.8030604,30.1513667 C14.8844396,31.2255854 14.9983729,32.2916667 15.1448563,33.3333333 L5.92447917,33.3333333 C5.0699875,31.3883458 4.4921875,29.2887375 4.27246042,27.0833333 Z M27.0833333,29.1666667 L35.4166667,50 L39.3310542,44.4010417 L45.8333333,50 L50,45.3206375 L43.1396479,39.6240229 L47.9166667,35.4166667 L27.0833333,29.1666667 Z M8.37402292,37.5 L15.8854167,37.5 C15.9179688,37.6302083 15.9505208,37.7522792 15.9830729,37.8824875 C16.0481771,38.1754562 16.1214188,38.4521479 16.1946625,38.7369792 C16.4550792,39.7623708 16.7561854,40.7552083 17.0817062,41.6748042 C17.1061208,41.7561854 17.1223958,41.8457042 17.1549479,41.9189458 C17.2607417,42.2200521 17.3828125,42.5048833 17.5048833,42.7978521 C17.56185,42.9443354 17.6269542,43.1070958 17.6839188,43.2535812 C17.8873708,43.7174479 18.0908208,44.1569021 18.3024083,44.5800792 C18.3268229,44.6289062 18.3512375,44.6858729 18.3756521,44.7347 C14.3473312,43.3837896 10.8805333,40.82845 8.37402292,37.5 Z" />
      </svg>`,
      phone: html` <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
        <path d="M10.9054734,49.9309817 C9.90127673,49.9309817 8.91206809,49.5712695 8.08772757,48.9117971 L7.96782349,48.8518451 L7.90787145,48.791893 L1.91266762,42.6168331 L1.97261965,42.556881 C0.121600469,40.8482479 -0.447943896,38.2927923 0.353914618,36.0820609 C0.361408622,36.0670729 0.346420613,36.0370969 0.353914618,36.0221088 C1.98011366,31.3683319 6.13928632,22.3830201 14.2627875,14.2595189 C22.4162647,6.1060417 31.5214806,2.11173715 36.0253774,0.350646019 L36.0853295,0.350646019 C38.415965,-0.42873048 40.9414446,0.125825875 42.7400057,1.66959086 L48.7951616,7.72474674 C50.3838906,9.31347575 50.3838906,12.0712695 48.7951616,13.6599985 L41.0013966,21.4537635 L40.9414446,21.5736676 C39.3527156,23.1623966 36.5349698,23.1623966 34.9462408,21.5736676 L31.1093103,17.7367371 C29.7229194,18.4037036 26.4180633,20.1123367 23.2555933,23.1324206 C20.1156053,26.1300225 18.5118882,29.5772647 17.9198619,30.9261856 L21.7567923,34.763116 C23.3680033,36.3743271 23.3979794,39.0571808 21.6968403,40.6384158 L21.7567923,40.6983678 L21.5769362,40.878224 L13.8431233,48.8518451 L13.7232192,48.9117971 C12.8988786,49.5712695 11.90967,49.9309817 10.9054734,49.9309817 Z M10.9054734,46.0940513 C11.0478595,46.0940513 11.1902456,46.0266053 11.3251376,45.9141952 L19.1788547,37.880622 C19.1638667,37.89561 19.2912647,37.6932719 19.0589506,37.4609578 L14.2627875,32.6647947 L13.3635069,31.8254662 L13.7831712,30.6264254 C13.7831712,30.6264254 15.9864086,24.7286436 20.6177036,20.3146748 L21.0373679,19.9549626 C25.4963007,15.885718 30.7495981,13.6599985 30.7495981,13.6599985 L31.9486388,13.1204302 L37.6440825,18.8158738 C37.9738187,19.14561 37.9138667,19.14561 38.2436029,18.8158738 L46.0973199,10.9621568 C46.4270561,10.6324206 46.4270561,10.7523247 46.0973199,10.4225885 L40.2220201,4.5472887 C39.3377276,3.79039422 38.400977,3.63302012 37.2843703,4.00772036 C32.9378475,5.71635345 24.4921041,9.42588583 16.9606292,16.9573606 C9.36920239,24.5487875 5.40487385,33.159399 3.95103692,37.3410537 C3.65877073,38.1204302 3.86860287,39.2745069 4.5505573,39.8590393 L4.67046138,39.9789434 L10.4858091,45.9141952 C10.6207012,46.0266053 10.7630873,46.0940513 10.9054734,46.0940513 Z" transform="matrix(1 0 0 -1 0 49.931)" />
      </svg>`,
      link: html` <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
        <path d="M25,0 C11.2154442,0 0,11.2154442 0,25 C0,38.7845558 11.2154442,50 25,50 C38.7845558,50 50,38.7845558 50,25 C50,11.2154442 38.7845558,0 25,0 Z M25,3.84615385 C36.7037269,3.84615385 46.1538462,13.296275 46.1538462,25 C46.1538462,36.7037269 36.7037269,46.1538462 25,46.1538462 C13.296275,46.1538462 3.84615385,36.7037269 3.84615385,25 C3.84615385,13.296275 13.296275,3.84615385 25,3.84615385 Z M26.3822115,12.6802885 L23.6177885,15.3846154 L31.3100962,23.0769231 L11.5384615,23.0769231 L11.5384615,26.9230769 L31.3100962,26.9230769 L23.6177885,34.6153846 L26.3822115,37.3197115 L38.7019231,25 L26.3822115,12.6802885 Z" />
      </svg>`,
    };

    return icons[type];
  }

  _getPager(cards) {
    const length = window.innerWidth > breakpoints.sm ? 3 : 1;
    const numPagers = Math.ceil(cards.length / length);
    const items = [];
    for (let i = 0; i < numPagers; i++) {
      items.push(html`<span class="${this.active === i ? 'active' : ''}"></span>`);
    }

    return items;
  }

  _buildCards() {
    let cards = [];
    for (let i = 0; i < this.cards.length; i++) {
      cards.push(html`
        <li aria-roledescription="slide"  aria-label="${i + 1} of ${this.cards.length}">
          <div class="fwc-carousel-card">
            <div class="fwc-image" style="background-image: url(${this.cards[i].image})"></div>
            <div class="fwc-body-wrapper">
              <h3 class="fwc-title">${this.cards[i].title}</h4>
              <div class="fwc-body">${this.cards[i].body}</div>
              ${this.cards[i].links.map((link, index) => {
                return html`
                  <div class="fwc-link">
                    <a class="${link.type}" href="${link.href}" aria-describedby="fwc-carousel-link-text-${index}">${this._getIcon(link.type)} <span id="fwc-carousel-link-text-${index}">${link.text}</span></a>
                  </div>
                `;
              })}
            </div>
          </div>
        </li>
      `);
    }

    return cards;
  }

  _next() {
    const inc = window.innerWidth > breakpoints.sm ? 3 : 1;
    const nextEvent = new CustomEvent('fwc-carousel-cards-next', {
      detail: this,
      bubbles: true,
      composed: false,
    });
    let targetIndx = 0;

    if (this.active + 1 >= Math.ceil(this.carouselItems.length / inc)) {
      return;
    }

    this.active += 1;

    targetIndx = inc === 3 ? 3 * this.active : this.active;
    // scrollIntoView inline:start is needed for ie, that is its default
    this.carouselItems[targetIndx].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    this.dispatchEvent(nextEvent);
  }

  _prev() {
    const inc = window.innerWidth > breakpoints.sm ? 3 : 1;
    const prevEvent = new CustomEvent('fwc-carousel-cards-prev', {
      detail: this,
      bubbles: true,
      composed: false,
    });
    let targetIndx = 0;

    if (this.active - 1 < 0) {
      return;
    }

    this.active -= 1;
    targetIndx = inc === 3 ? 3 * this.active : this.active;
    // scrollIntoView inline:start is needed for ie, that is its default
    this.carouselItems[targetIndx].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    this.dispatchEvent(prevEvent);
  }

  nextSlide() {
    this._next();
  }

  prevSlide() {
    this._prev();
  }

  render() {
    return html`
      <section @keydown="${this._handleKeyDown}" tabindex="0" aria-roledescription="carousel" aria-label="${this.labelAria}">
        <button class="fwc-prev ${this._hideBtns ? 'hidden' : ''} ${this.active - 1 < 0 ? 'disabled' : ''}" @click="${this._prev}" aria-label="${this.labelAriaPrevBtn}" aria-hidden="${this._hideBtns}">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
            <polygon points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378" transform="matrix(1 0 0 -1 0 51.66)"></polygon>
          </svg>
        </button>
        <ul role="list">
          ${this.cards}
        </ul>
        <button class="fwc-next ${this._hideBtns ? 'hidden' : ''} ${(this.active + 1) * 3 >= this.cards.length ? 'disabled' : ''}" @click="${this._next}" aria-label="${this.labelAriaNextBtn}" aria-hidden="${this._hideBtns}">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
            <polygon points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378" transform="matrix(1 0 0 -1 0 51.66)"></polygon>
          </svg>
        </button>
        <div class="fwc-pager">${this._getPager(this.cards)}</div>
      </section>
    `;
  }
}

class FwcCarouselCards extends FwcBase {
  constructor() {
    super('fwc-carousel-cards', FwcCarouselCardsComponent);
  }
}

class FwcCarouselGenericComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          width: 100%;
          display: block;
        }
        .fwc-carousel-generic-wrapper {
          position: relative;
        }

        .fwc-carousel-generic-wrapper:focus {
          outline: none;
        }

        .fwc-list-cont {
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: calc(100% - (6 * var(--fwcu)));
          padding: 0;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          -ms-scroll-snap-type: proximity;
          scroll-behavior: smooth;
          scrollbar-width: none;
          display: flex;
          max-width: calc(144 * var(--fwcu));
          margin: 0 auto;
          align-items: stretch;
          justify-content: flex-start;
          flex-wrap: nowrap;
          -ms-overflow-style: none;
        }
        .fwc-list-cont::-webkit-scrollbar,
        .fwc-list-cont::-webkit-scrollbar-track,
        .fwc-list-cont::-webkit-scrollbar-thumb {
          width: 0;
          height: 0;
          display: none;
        }

        .fwc-carousal-wrapper {
          background-color: transparent;
          padding: calc(8 * var(--fwcu)) 0;
          display: flex;
          align-items: center;
          width: 100%;
          margin: 0 auto;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(4.5 * var(--fwcu));
          width: calc(4.5 * var(--fwcu));
          background: var(--color-white);
          border-radius: 50%;
          border: 1px solid var(--color-gray-four);
          flex-basis: calc(4.5 * var(--fwcu));
          box-shadow: var(--box-shadow);
          padding: 0;
          cursor: pointer;
        }
        button.disabled {
          border-color: var(--color-gray-five);
          pointer-events: none;
          color: var(--color-gray-three);
          box-shadow: none;
        }
        button.disabled svg {
          fill: var(--color-gray-three);
        }
        button.hidden {
          visibility: hidden;
          opacity: 0;
        }
        button svg {
          width: calc(1.75 * var(--fwcu));
          height: calc(1.75 * var(--fwcu));
          fill: var(--color-primary);
        }
        button.fwc-prev svg {
          transform: rotate(90deg);
          margin-left: calc(-0.25 * var(--fwcu));
        }
        button.fwc-next svg {
          transform: rotate(-90deg);
        }
        .fwc-pager {
          display: flex;
          position: absolute;
          bottom: calc(0.75 * var(--fwcu));
          left: 0;
          right: 0;
          justify-content: center;
        }
        .fwc-pager span {
          width: calc(0.5 * var(--fwcu));
          height: calc(0.5 * var(--fwcu));
          background: var(--color-gray-four);
          display: inline-block;
          margin: 0 calc(0.25 * var(--fwcu));
          border-radius: var(--border-radius);
          transition: all 0.25s ease-in-out;
        }
        .fwc-pager span.active {
          animation-name: carouselSlide;
          animation-duration: 250ms;
          background: var(--color-primary);
          width: calc(1.75 * var(--fwcu));
        }
        .fwc-list-cont {
          width: calc(100% - (8.5 * var(--fwcu)));
        }
        @keyframes carouselSlide {
          from {
            width: calc(0.5 * var(--fwcu));
          }
          to {
            width: calc(1.75 * var(--fwcu));
          }
        }
        @media screen and (max-width: 600px) {
          .fwc-carousal-wrapper {
            padding: calc(4.5 * var(--fwcu)) 0;
          }
          .fwc-list-cont {
            width: 100%;
          }
          button {
            display: none;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      labelAria: { attribute: 'label-aria', type: String },
      labelAriaPrevBtn: { attribute: 'label-aria-prev-btn', type: String },
      labelAriaNextBtn: { attribute: 'label-aria-next-btn', type: String },
      active: {},
    };
  }

  constructor() {
    super();
    this.labelAria = 'Carousel';
    this.labelAriaPrevBtn = 'Previous Slide';
    this.labelAriaNextBtn = 'Next Slide';
    this.active = 0;
    this.carouselItems = [];
    this._hideBtns = false;
    this._handleScroll = debounce((scrollContainer) => {
      this._setActivePageFromScroll(scrollContainer);
    }, 100);
  }

  firstUpdated() {
    const scrollContainer = this.shadowRoot.querySelector('.fwc-list-cont');
    const pagerEl = this.shadowRoot.querySelector('.fwc-pager');
    const animationEndEvent = new CustomEvent('fwc-carousel-generic-animation-end', {
      detail: this,
      bubbles: true,
      composed: false,
    });
    this.carouselItems = this._getSlotted();

    this._hideBtns = this.carouselItems.length > 1 ? false : true;
    scrollContainer.addEventListener('scroll', () => this._handleScroll(scrollContainer));
    this.requestUpdate();

    pagerEl.onanimationend = () => {
      this.dispatchEvent(animationEndEvent);
    };
  }

  _handleKeyDown(e) {
    if (e.key === 'ArrowLeft' || e.key === 'Left') {
      e.preventDefault();
      this._prev();
    }
    if (e.key === 'ArrowRight' || e.key === 'Right') {
      e.preventDefault();
      this._next();
    }
  }

  _setActivePageFromScroll(scrollContainer) {
    const posLeft = Math.round(scrollContainer.scrollLeft);
    if (posLeft === 0) {
      this.active = 0;
      return;
    }

    this.active = Math.ceil(Math.round(posLeft / this.carouselItems[0].offsetWidth));
  }

  _getPager(cards) {
    const numPagers = Math.ceil(cards.length);
    const items = [];
    for (let i = 0; i < numPagers; i++) {
      items.push(html`<span class="${this.active === i ? 'active' : ''}"></span>`);
    }
    return items;
  }

  _next() {
    const nextEvent = new CustomEvent('fwc-carousel-generic-next', {
      detail: this,
      bubbles: true,
      composed: false,
    });
    if (this.active + 1 >= Math.ceil(this.carouselItems.length)) {
      return;
    }
    this.active += 1;

    // scrollIntoView inline:start is needed for ie, that is its default
    this.carouselItems[this.active].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    this.dispatchEvent(nextEvent);
  }

  _prev() {
    const prevEvent = new CustomEvent('fwc-carousel-generic-prev', {
      detail: this,
      bubbles: true,
      composed: false,
    });
    if (this.active - 1 < 0) {
      return;
    }

    this.active -= 1;
    // scrollIntoView inline:start is needed for ie, that is its default
    this.carouselItems[this.active].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    this.dispatchEvent(prevEvent);
  }

  nextSlide() {
    this._next();
  }

  prevSlide() {
    this._prev();
  }

  slideToId(id) {
    if (this.isValidData(id)) {
      this.active = id;
      // scrollIntoView inline:start is needed for ie, that is its default
      this.carouselItems[this.active].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }

  _getSlotted() {
    const slot = this.shadowRoot.querySelector('slot');
    const childNodes = slot ? slot.assignedNodes({ flatten: true }) : [];
    return Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE && node.nodeName === 'FWC-CAROUSEL-GENERIC-ITEM');
  }

  /* c8 ignore next 21 */
  isValidData(id) {
    let errors = false;
    try {
      if (id > this.carouselItems.length - 1) {
        errors = true;
        throw new Error(`slideToId: ${id} is greater than this.carouselItems.length. Max: ${this.carouselItems.length - 1} `);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (id < 0) {
        errors = true;
        throw new Error(`slideToId: ${id} is not valid. Min: 0 or greater is required `);
      }
    } catch (error) {
      console.error(error);
    }
    return !errors;
  }

  render() {
    return html`
      <section class="fwc-carousel-generic-wrapper" aria-roledescription="carousel" aria-label="${this.labelAria}">
        <div class="fwc-carousal-wrapper">
          <button class="fwc-prev ${this._hideBtns ? 'hidden' : ''}${this.active - 1 < 0 ? ' disabled' : ''}" @click="${this._prev}" aria-label="${this.labelAriaPrevBtn}" aria-hidden="${this._hideBtns}" aria-disabled="${this.active - 1 < 0 ? 'true' : 'false'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
              <polygon points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378" transform="matrix(1 0 0 -1 0 51.66)"></polygon>
            </svg>
          </button>
          <div class="fwc-list-cont" @keydown="${this._handleKeyDown}" tabindex="0">
            <slot role="list" aria-label="carousel"></slot>
          </div>
          <button class="fwc-next ${this._hideBtns ? 'hidden' : ''}${this.active + 1 >= this.carouselItems.length ? ' disabled' : ''}" @click="${this._next}" aria-label="${this.labelAriaNextBtn}" aria-hidden="${this._hideBtns}" aria-disabled="${this.active - 1 < 0 ? 'false' : 'true'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
              <polygon points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378" transform="matrix(1 0 0 -1 0 51.66)"></polygon>
            </svg>
          </button>
        </div>
        <div class="fwc-pager">${this._getPager(this.carouselItems)}</div>
      </section>
    `;
  }
}

class FwcCarouselGenericItemComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          flex: 0 0 100%;
          scroll-snap-align: start;
        }
      `,
    ];
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html` <slot></slot>`;
  }
}

class FwcCarouselGeneric extends FwcBase {
  constructor() {
    super('fwc-carousel-generic', FwcCarouselGenericComponent);
    const FwcCarouselGenericItem = new FwcBase('fwc-carousel-generic-item', FwcCarouselGenericItemComponent);
    FwcCarouselGenericItem.build();
  }
}

class MobileViewComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .mobile-view-header,
        .mobile-view-footer{
          display: none;
        }

        @media screen and (max-width: 600px) {
          .mobile-view-wrapper.open{
            position: fixed;
            display: flex;
            flex-direction: column;
            width: 100%;
            top: 0;
            left: 0;
            background: var(--color-white);
            height: 100%;
            z-index: 3
          }
          .open .mobile-view-header{
            display: block;
            position: relative;
            width: 100%;
            background: var(--color-primary);
          }
          .open .mobile-view-body{
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: auto;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            position: relative;
            margin-bottom: calc(9.75 * var(--fwcu));
            z-index: 3;
          }
          .open .mobile-view-footer{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: calc(9.75 * var(--fwcu));
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: calc(2.5 * var(--fwcu));
            background: var(--color-white);
            box-shadow: 0px -4px 3px 0 rgba(50, 50, 50, 0.1);
            z-index: 3;
          }
          .mobile-view-header svg{
            width: 100%;
            display: block;
            min-height: 0;
          }
          .mobile-view-header h1{
            position: absolute;
            color: var(--color-white);
            left: calc(2 * var(--fwcu));
            top: 0;
            bottom: 0;
            margin: 0;
            font-family: var(--font-serif);
            display: flex;
            align-items: center;
          }
        }
      `,
    ];
  }
  
  static get properties() {
    return {
      open: {type: Boolean},
      mobileHeaderText: { attribute: 'mobile-header-text', type: String }
    };
  }

  constructor() {
    super();
    this.mobileHeaderText = '';
    this.open = false;
  }

  _mobileHeader(){
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" height="73" width="378" viewBox="0 0 378 73" focusable="false">
        <defs>
          <linearGradient id="header_bg-a" x1="13.25%" x2="102.965%" y1="58.306%" y2="19.726%">
            <stop offset="0%"/>
            <stop offset="39.161%" stop-color="#7C7C7C"/>
            <stop offset="100%"/>
          </linearGradient>
          <linearGradient id="header_bg-b" x1="-82.687%" x2="71.67%" y1="20.748%" y2="75.006%">
            <stop offset="0%"/>
            <stop offset="31.645%" stop-color="#FFF"/>
            <stop offset="100%"/>
            <stop offset="100%"/>
          </linearGradient>
          <linearGradient id="header_bg-c" x1="-21.551%" x2="107.327%" y1="124.03%" y2="124.03%">
            <stop offset="0%"/>
            <stop offset="0%" stop-opacity=".826"/>
            <stop offset="100%" stop-opacity="0"/>
            <stop offset="100%" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="header_bg-d" x1="274.081%" x2="-74.831%" y1="-137.164%" y2="271.264%">
            <stop offset="0%"/>
            <stop offset="26.113%" stop-color="#8E8E8E"/>
            <stop offset="100%"/>
            <stop offset="100%"/>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd" transform="translate(1)">
          <path fill="url(#header_bg-a)" d="M168.970164,50.5456334 L167.43413,52.859419 C162.951276,59.6121119 158.121703,65.9965521 152.984637,72.0048148 L1.42108547e-14,71.9992986 L1.42108547e-14,0.999298638 L192.863478,1.00007944 C187.34699,18.141195 179.413324,34.8147055 168.970164,50.5456334 Z" opacity=".05"/>
          <path fill="url(#header_bg-b)" d="M101.264696,34.7007705 C102.099494,35.2563768 102.931241,35.816573 103.759831,36.3813677 L104.728171,37.0440211 C119.999622,47.4945669 133.450273,59.6160261 145,72.9967476 L1.25000042e-07,72.9992991 L1.25000042e-07,0.999299052 C34.997284,2.95268473 69.9525243,13.944363 101.264696,34.7007705 Z" opacity=".031"/>
          <path fill="url(#header_bg-c)" d="M376.001128,0.999298787 L376.001128,28.9733646 C319.024429,50.5601962 252.830459,45.3171091 198.195226,9.04687168 C197.39418,8.51294489 196.596062,7.97460709 195.800972,7.43185035 L194.871783,6.79505304 C192.133705,4.91857667 189.456625,2.98604102 186.841045,1.00002666 L376.001128,0.999298787 Z" opacity=".057"/>
          <path fill="url(#header_bg-d)" d="M377,0.00288664317 L377,72.9992991 L303.999904,72.9992991 C307.442515,47.9133822 315.355402,23.1547129 327.978477,-7.10542736e-15 L377,0.00288664317 Z" opacity=".097"/>
        </g>
      </svg>
    `;
  }

  render() {
    return html`
    <div class="mobile-view-wrapper ${this.open ? 'open' : ''}">
      <div class="mobile-view-header">
        ${this._mobileHeader()}
        <h1>${this.mobileHeaderText}</h1>
      </div>
      <div class="mobile-view-body">
        <slot name="body"></slot>
      </div>
      <div class="mobile-view-footer">
        <div>
          <slot name="mobile-footer-secondary-button"></slot>
        </div>
        <div>
          <slot name="mobile-footer-primary-button"></slot>
        </div>
      </div>
    </div>
    `;
  }
}

class MobileView extends FwcBase {
  constructor() {
    super('mobile-view', MobileViewComponent);
  }
}

class FwcDatePickerComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          position: relative;
        }
        button[disabled] {
          appearance: none;
          border: none;
          background: transparent;
        }
        .fwc-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .fwc-date-picker-wrapper {
          width: 100%;
        }
        .fwc-calendar {
          position: absolute;
          display: flex;
          flex-direction: row;
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          box-shadow: var(--box-shadow);
          border: none;
          background: white;
          margin-top: 0;
          height: 0;
          width: 0;
          overflow: hidden;
        }
        .fwc-calendar-mobile-nav {
          display: none;
        }
        .fwc-calendar-month {
          padding: calc(2.5 * var(--fwcu)) calc(1.5 * var(--fwcu)) calc(1.5 * var(--fwcu));
        }
        .fwc-calendar.open {
          z-index: 3;
          visibility: visible;
          opacity: 1;
          height: auto;
          width: auto;
          border: solid 1px var(--color-btn-second-border);
          overflow: visible;
        }
        /* give ie-11 a static width */
        .fwc-calendar.open.ie-11 {
          width: calc(45.25 * var(--fwcu));
        }
        /* we use this class to get the calendar dimensions and set it position before it opens _setCalendarPosition()*/
        .fwc-calendar.pre-open {
          height: auto;
          width: auto;
        }
        .fwc-calendar-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: calc(2.5 * var(--fwcu));
        }
        .fwc-date-picker-input {
          position: relative;
        }
        .fwc-date-picker-input span {
          position: absolute;
        }
        .fwc-date-picker-input input {
          width: 100%;
        }
        .fwc-icon-calendar {
          border: none;
          appearance: none;
          background: none;
          position: absolute;
          right: calc(1.25 * var(--fwcu));
          top: 0;
          bottom: 0;
        }
        .fwc-icon-calendar:hover {
          cursor: pointer;
        }
        .fwc-icon-calendar svg {
          fill: var(--color-primary);
        }
        .fwc-btn-prev,
        .fwc-btn-next {
          border: none;
          appearance: none;
          background: transparent;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(3 * var(--fwcu));
          width: calc(3 * var(--fwcu));
          padding: 0;
        }
        .fwc-btn-prev svg,
        .fwc-btn-next svg {
          fill: var(--color-primary);
          height: auto;
          width: 100%;
        }
        .fwc-btn-next {
          right: calc(1.5 * var(--fwcu));
          top: 0;
          bottom: 0;
          margin: auto;
        }
        .fwc-btn-prev {
          transform: rotate(180deg);
          left: calc(1.5 * var(--fwcu));
          top: 0;
          bottom: 0;
          margin: auto;
        }
        .fwc-btn-next:hover,
        .fwc-btn-prev:hover {
          cursor: pointer;
        }
        .fwc-month-year {
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-gray-one);
        }
        .fwc-calendar-body th {
          font-size: calc(1.5 * var(--fwcu));
          padding-bottom: calc(1.5 * var(--fwcu));
          color: var(--color-gray-one);
        }
        .fwc-calendar-body button {
          appearance: none;
          border: none;
          background: transparent;
          width: calc(5.5 * var(--fwcu));
          height: calc(5.5 * var(--fwcu));
          border-radius: 50%;
          font-size: calc(1.5 * var(--fwcu));
          color: var(--color-gray-one);
        }
        .fwc-calendar-body button:hover {
          cursor: pointer;
        }
        .fwc-calendar-body button:hover,
        .fwc-calendar-body button:focus {
          border: 2px solid var(--color-primary);
          font-size: calc(2 * var(--fwcu));
          font-weight: 700;
          color: var(--color-primary);
          outline: none;
        }
        .fwc-calendar-body button:disabled {
          color: var(--color-gray-four);
        }
        .fwc-calendar-body button:disabled {
          cursor: auto;
        }
        .fwc-calendar-body button:disabled:hover,
        .fwc-calendar-body button:disabled:focus {
          border: 2px solid transparent;
          color: var(--color-gray-four);
          outline: none;
          font-size: calc(1.5 * var(--fwcu));
          font-weight: 400;
        }
        .fwc-calendar-body button.active {
          background: var(--color-primary);
          color: var(--color-white);
          font-size: calc(2 * var(--fwcu));
        }
        .fwc-calendar-body button.active:hover {
          border: 2px solid transparent;
          color: var(--color-white);
        }
        .fwc-calendar-body button span {
          pointer-events: none;
        }
        .fwc-calendar-body button[data-date=''] {
          visibility: hidden;
        }
        .fwc-hide {
          display: none;
          visibility: hidden;
        }
        .fwc-footer-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        ::-ms-clear {
          display: none;
        }
        @media screen and (max-width: 900px) {
          .fwc-calendar {
            display: block;
          }
          .fwc-calendar-month:nth-of-type(3) {
            padding-top: 0;
          }
        }
        @media screen and (max-width: 600px) {
          .fwc-overlay {
            background-color: var(--color-white);
          }
          .fwc-input.open {
            opacity: 0;
          }
          .fwc-calendar-header .fwc-btn-prev,
          .fwc-calendar-header .fwc-btn-next {
            display: none;
          }
          .fwc-calendar.open {
            width: 100%;
            margin-top: 0;
            /* important is needed to override the inline positioning */
            top: 0 !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            box-shadow: none;
            border: none;
          }
          .fwc-btn-prev,
          .fwc-btn-next {
            position: relative;
          }
          .fwc-calendar-mobile-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: calc(2.5 * var(--fwcu)) 0 0;
            font-size: calc(2 * var(--fwcu));
            color: var(--color-gray-one);
            font-weight: 700;
          }
          .fwc-calendar-mobile-nav span {
            display: inline-block;
            min-width: calc(4 * var(--fwcu));
          }
          .fwc-calendar-mobile-nav span:nth-child(2) {
            margin: 0 calc(4 * var(--fwcu));
          }
          /* ie11/ios flex padding bottom hack */
          .fwc-calendar:after {
            content: '';
            display: block;
            padding-bottom: calc(12.5 * var(--fwcu));
          }
          .fwc-calendar-month {
            flex-basis: 100%;
            padding: calc(2.5 * var(--fwcu)) calc(2.5 * var(--fwcu)) calc(1.5 * var(--fwcu));
          }
          .fwc-calendar-body table {
            width: 100%;
          }
          .fwc-calendar-body td {
            width: 14.29%;
          }
          .fwc-calendar-body button {
            width: 100%;
            padding-top: 90%;
            position: relative;
            border: 2px solid transparent;
          }
          .fwc-calendar-body button > span {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      startDate: { attribute: 'start-date', type: String },
      showDate: { attribute: 'show-date', type: Boolean },
      monthNames: { attribute: 'month-names', type: Array },
      dayNames: { attribute: 'day-names', type: Array },
      dateRange: { attribute: 'date-range', type: Array },
      disabledDates: { attribute: 'disabled-dates', type: Array },
      btnMobileCancel: { attribute: 'btn-mobile-cancel', type: String },
      btnMobileApply: { attribute: 'btn-mobile-apply', type: String },
      inputLabel: { attribute: 'input-label', type: String },
      labelAriaNext: { attribute: 'label-aria-next', type: String },
      labelAriaPrevious: { attribute: 'label-aria-previous', type: String },
      labelAriaMobileCancel: { attribute: 'label-aria-mobile-cancel', type: String },
      labelAriaMobileApply: { attribute: 'label-aria-mobile-apply', type: String },
      labelAriaCalendarIcon: { attribute: 'label-aria-calendar-icon', type: String },
      labelAriaDayNames: { attribute: 'label-aria-day-names', type: Array },
      selectedDate: {},
      _calendarTableRows: {},
      _isCalendarOpen: {},
      _rangeStart: {},
      _rangeEnd: {},
    };
  }

  constructor() {
    super();
    this.mobileView = new MobileView();
    this.mobileView.build();
    this.startDate = new Date();
    this._startDate = new Date();
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    this.dateRange = [null, null];
    this.disabledDates = [];
    (this.inputLabel = 'Select a Date'), (this.labelAriaClose = 'Cancel');
    this.btnMobileApply = "Apply";
    this.btnMobileCancel = "Cancel";
    this.labelAriaNext = 'Next Month';
    this.labelAriaMobileCancel = 'Cancel';
    this.labelAriaMobileApply = 'Apply';
    this.labelAriaPrevious = 'Previous Month';
    this.labelAriaCalendarIcon = 'Toggle Calendar';
    this.labelAriaDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this._calendarMonths = [];
    this._calendarTableRows = [];
    this.selectedDate = '';
    this._isCalendarOpen = false;
    this._rangeEnd = false;
    this._rangeStart = false;
    this._calendarMaxDate = new Date();
    this._calendarMinDate = new Date('01/01/1900');
    this._numMonthsToDisplay = 2;
    this._maxFutureYears = 20;
    this._tempDateStorage = null;
    this.isIE = !supportsCssVars;
    this._calendarMaxDate.setFullYear(this._calendarMaxDate.getFullYear() + this._maxFutureYears);
    this.focusTrapDesk = ['button.fwc-hide', '.fwc-btn-primary', '.fwc-btn-secondary', '.fwc-calendar-mobile-nav .fwc-btn-prev', '.fwc-calendar-mobile-nav .fwc-btn-next', '.fwc-selected-date', '.fwc-icon-calendar'];
    this.focusTrapMobile = ['button.fwc-hide', '.fwc-calendar-header button', '.fwc-selected-date', '.fwc-icon-calendar'];
  }

  firstUpdated() {
    const calendar = this.shadowRoot.querySelector('.fwc-calendar');
    const overlay = this.shadowRoot.querySelector('.fwc-overlay');
    calendar.addEventListener('transitionend', (e) => {
      // set the focus trap inside the calendar after open
      if (this._isCalendarOpen && e.propertyName === 'opacity') {
        const ignoredFocusTrapSelectors = window.innerWidth > breakpoints.sm ? this.focusTrapDesk : this.focusTrapMobile;
        focusTrapCustomTabs(this, ignoredFocusTrapSelectors);
      }
      // set the focus back to the open button on calendar close
      if (!this._isCalendarOpen && e.propertyName === 'opacity') {
        const iconBtn = this.shadowRoot.querySelector('.fwc-icon-calendar');
        iconBtn.focus();
        removeFocusTrapListener(this);
      }
    });

    // allow esc to close the calendar
    this.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this.toggleCalendarOpen();
      }
    });

    // handle background click close
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay && this._isCalendarOpen) {
        this.toggleCalendarOpen();
      }
    });

    this._setMinMaxDates();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'startDate') {
        const parsedDate = new Date(this.startDate);
        // check if a valid date string was passed as an attribute
        if (parsedDate instanceof Date && !isNaN(parsedDate)) {
          this._startDate = new Date(this.startDate);
          this._setInputDate();
          this._buildCalendar();
        } else {
          try {
            throw new Error('Invalid date string passed to "start-date" attribute');
          } catch (e) {
            /* eslint-disable no-console */
            console.error(e);
            /* eslint-enable no-console */
          }
        }
      }

      // when the calendar view changes
      // check and set the selectedDate corresponding button to active
      if (propName === '_calendarTableRows') {
        this._setActiveBtnState(this.selectedDate);
      }
    });
  }

  _setInputDate() {
    // Set date on init with show-date attribute
    if(!this.showDate) return;
    this._handleSelectedDate(this._startDate);
  }

  _buildCalendar() {
    // show one month in the calendar view between 600 and 900 viewport
    if (window.innerWidth > breakpoints.sm && window.innerWidth <= breakpoints.md) {
      this._numMonthsToDisplay = 1;
    } else {
      this._numMonthsToDisplay = 2;
    }

    // only show 1 calendar in ie 11
    if (this.isIE) {
      this._numMonthsToDisplay = 1;
    }

    this._calendarMonths = this._getDaysInMonths(this._startDate, this._numMonthsToDisplay);
    this._calendarTableRows = this._calendarMonths.map((month) => {
      return this._breakDaysIntoTableRows(month);
    });

    //disable all date outside of dateRange and individual dates passed
    this._rangeEnd = this._isEndOfRange();
    this._rangeStart = this._isStartOfRange();
    this._disableDates();
  }

  _getDaysInMonths(date, numMonths) {
    const months = [];
    const dt = new Date(date);

    for (let i = 0; i < numMonths; i++) {
      const month = dt.getMonth();
      const days = [];
      dt.setDate(1);

      while (dt.getMonth() === month) {
        days.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
      }

      months.push(days);

      // set date to 1st day of next month
      dt.setDate(dt.getMonth() + 1);
      dt.setDate(1);
    }

    return months;
  }

  _isEndOfRange() {
    // check if we can move to a calendar in the future
    if (this._calendarMonths.length) {
      const i = this._calendarMonths.length - 1;
      const lastDayInCalendarView = this._calendarMonths[i][this._calendarMonths[i].length - 1];
      return lastDayInCalendarView.getFullYear() === this._calendarMaxDate.getFullYear() && lastDayInCalendarView.getMonth() >= this._calendarMaxDate.getMonth();
    }
    return false;
  }

  _isStartOfRange() {
    // check if we can move to a calendar in the past
    if (this._calendarMonths.length) {
      const firstDayInCalendarView = this._calendarMonths[0][0];
      return firstDayInCalendarView.getFullYear() === this._calendarMinDate.getFullYear() && firstDayInCalendarView.getMonth() <= this._calendarMinDate.getMonth();
    }
    return false;
  }

  _disableDates() {
    setTimeout(() => {
      const dateButtons = this.shadowRoot.querySelectorAll('[data-date]');
      dateButtons.forEach((btn) => {
        const btnDate = new Date(btn.getAttribute('data-date'));
        btnDate.setHours(0, 0, 0);

        // remove disabled for all active buttons, ignore empty placeholders
        // all active date buttons need a tabindex of 4 by default
        if (btn.getAttribute('data-date')) {
          btn.removeAttribute('disabled');
          btn.setAttribute('tabindex', 4);
        }

        // check list from attribute disabled-dates
        this.disabledDates.forEach((disabledDate) => {
          disabledDate = new Date(disabledDate);
          if (btnDate.getFullYear() === disabledDate.getFullYear() && btnDate.getMonth() === disabledDate.getMonth() && btnDate.getDate() === disabledDate.getDate()) {
            btn.setAttribute('disabled', '');
            btn.setAttribute('tabindex', -1);
          }
        });

        // check against date range
        // move time to seconds vs milliseconds
        if (Math.floor(this._calendarMinDate.getTime() / 1000) > Math.floor(btnDate.getTime() / 1000) || Math.floor(this._calendarMaxDate.getTime() / 1000) < Math.floor(btnDate.getTime() / 1000)) {
          btn.setAttribute('disabled', '');
          btn.setAttribute('tabindex', -1);
        }
      });
    }, 0);
  }

  _setMinMaxDates() {
    // if null is passed for start date set it to year 1900
    this._calendarMinDate = !this.dateRange[0] ? new Date('01/01/1900') : new Date(this.dateRange[0]);
    // if null is passed for end date set it to 20 years from now
    if (!this.dateRange[1]) {
      this._calendarMaxDate = new Date();
      this._calendarMaxDate.setFullYear(this._calendarMaxDate.getFullYear() + this._maxFutureYears);
    } else {
      this._calendarMaxDate = new Date(this.dateRange[1]);
    }

    this._calendarMinDate.setHours(0, 0, 0);
    this._calendarMaxDate.setHours(0, 0, 0);
  }

  _buildTableHeaders() {
    return html`
      <tr>
        <th aria-label="${this.labelAriaDayNames[0]}">${this.dayNames[0]}</th>
        <th aria-label="${this.labelAriaDayNames[1]}">${this.dayNames[1]}</th>
        <th aria-label="${this.labelAriaDayNames[2]}">${this.dayNames[2]}</th>
        <th aria-label="${this.labelAriaDayNames[3]}">${this.dayNames[3]}</th>
        <th aria-label="${this.labelAriaDayNames[4]}">${this.dayNames[4]}</th>
        <th aria-label="${this.labelAriaDayNames[5]}">${this.dayNames[5]}</th>
        <th aria-label="${this.labelAriaDayNames[6]}">${this.dayNames[6]}</th>
      </tr>
    `;
  }

  _breakDaysIntoTableRows(days) {
    let daysArr = [...days];
    let rows = [];
    let week = [];
    const startDay = days[0].getDay();
    const lastDay = days[days.length - 1].getDay();

    // we need to add empty slots to the beginning and end of each month to fill out the table rows
    // add empty values to beginning
    for (let i = 0; i < startDay; i++) {
      daysArr.unshift(null);
    }

    // add empty values to the end
    for (let i = 0; i < 6 - lastDay; i++) {
      daysArr.push(null);
    }

    // break daysArr into rows by week, sunday to saturday
    for (let i = 1; i <= daysArr.length; i++) {
      week.push(daysArr[i - 1]);

      if (i % 7 === 0) {
        rows.push(week);
        week = [];
      }
    }

    return rows;
  }

  _getMonthAndYear(date) {
    if (window.innerWidth > breakpoints.sm) {
      return `${this.monthNames[date.getMonth()]} ${date.getFullYear()}`;
    } else {
      return `${this.monthNames[date.getMonth()]}`;
    }
  }

  _formatDate(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    return month + '/' + day + '/' + year;
  }

  _changeCalendarMonths(dir) {
    const num = dir === 'next' ? this._numMonthsToDisplay : -this._numMonthsToDisplay;
    this._startDate = new Date(this._calendarMonths[0][0].getFullYear(), this._calendarMonths[0][0].getMonth() + num, 1);
    this._buildCalendar();
    resetFocusTrap();
  }
  

  _handleSelectedDate(date) {
    // let the mobile apply button handle the event emit and updating the selected value, cause you need a cancel option
    if (window.innerWidth <= breakpoints.sm) {
      this._tempDateStorage = date;
      this._setActiveBtnState(date);
      return;
    }
    
    const input = this.shadowRoot.querySelector('.fwc-selected-date');
    this.selectedDate = date;
    input.value = this._formatDate(date);
    this._setActiveBtnState(date);
    this._emitSelectedEvent(date);
  }

  _handleMobileApply() {
    const input = this.shadowRoot.querySelector('.fwc-selected-date');

    if (this._tempDateStorage) {
      this.selectedDate = this._tempDateStorage;
      input.value = this._formatDate(this._tempDateStorage);
      this._emitSelectedEvent(this._tempDateStorage);
    }
    this.toggleCalendarOpen();
  }

  _resetDate() {
    this.selectedDate = '';
    this._setActiveBtnState('');
    this._emitSelectedEvent('');
  }

  _parseDate(e) {

    if (!e.target.value) {
      this._resetDate();
      this._emitBlurEvent();
      return;
    }
    // some browsers do not like to parse dates as 01-01-2020
    // so we replace all the dashes with slashes, if a user typed in that format
    const parsedDate = new Date(e.target.value.replace(/-/g, '/'));

    // check manual entered date against disabled dates & min/max range
    if (this._checkDisabledDate(parsedDate)) {
      this._invalidDate(e);
      return false;
    }

    this._emitBlurEvent();
    
    if (parsedDate instanceof Date && !isNaN(parsedDate)) {
      this._startDate = parsedDate;
      // build the calendar view to reflect the new typed starting date
      this._buildCalendar();
      // highlight the date
      this._handleSelectedDate(parsedDate);
    } else {
      this._invalidDate(e);
    }
  }

  //returns true if date is disabled or out of min/max range
  _checkDisabledDate(date) {
    return this.disabledDates.some((disabledDate) => {
      disabledDate = new Date(disabledDate);
      return (date.getFullYear() === disabledDate.getFullYear() && date.getMonth() === disabledDate.getMonth() && date.getDate() === disabledDate.getDate()) || Math.floor(this._calendarMinDate.getTime() / 1000) > Math.floor(date.getTime() / 1000) || Math.floor(this._calendarMaxDate.getTime() / 1000) < Math.floor(date.getTime() / 1000);
    });
  }

  _invalidDate(e) {
    // emit date parse error, date entered into input field was not valid
    const event = new CustomEvent('fwc-date-picker-error', {
      detail: 'invalid date',
      bubbles: true,
    });
    this.dispatchEvent(event);
    e.target.value = '';
  }

  _emitFocusEvent() {
    const event = new CustomEvent('fwc-date-picker-focus', {
      detail: this,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  _emitBlurEvent() {
    const event = new CustomEvent('fwc-date-picker-blur', {
      detail: this,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  _emitSelectedEvent(data) {
    const event = new CustomEvent('fwc-date-picker-selected', {
      detail: data,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  _setActiveBtnState(curDate) {
    // loop all the buttons and match their data-date attr to the selectedDate to add an active state
    // this happens cause we need to check/set the active date when switching calendar months, typing in a date, and clicking one
    const btns = this.shadowRoot.querySelectorAll('.fwc-calendar-body button');
    const lastActiveBtn = this.shadowRoot.querySelector('button.active');
    if (lastActiveBtn) {
      lastActiveBtn.classList.remove('active');
    }

    if (btns && curDate) {
      const curDateFormatted = this._formatDate(curDate);
      btns.forEach((btn) => {
        const dt = btn.getAttribute('data-date');
        if (dt === curDateFormatted) {
          btn.classList.add('active');
        }
      });
    }
  }

  toggleCalendarOpen() {
    this._buildCalendar();
    // check the calendar before it opens and set its position
    if (!this._isCalendarOpen && window.innerWidth > breakpoints.sm) {
      setTimeout(() => {
        this._setCalendarPosition();
      }, 0);
    } else {
      // remove transform positioning from calendar on close
      // because the getBoundingClientRect will now be changed with the new transform styling
      this._removeCalendarPositioning();
    }

    this._isCalendarOpen = !this._isCalendarOpen;
    if (this._isCalendarOpen && this.selectedDate) {
      this._setActiveBtnState(this.selectedDate);
    } else {
      this._tempDateStorage = null;
    }
    this._toggleBodyScrollClass(this._isCalendarOpen);
  }

  _toggleBodyScrollClass(isOpen) {
    if (isOpen && window.innerWidth <= breakpoints.sm) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  _setCalendarPosition() {
    const calendar = this.shadowRoot.querySelector('.fwc-calendar');
    const input = this.shadowRoot.querySelector('.fwc-date-picker-input');
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    const CALENDAR_VERTICAL_MARGIN = baseUnit * 2;
    let inputRect = null;
    let calendarRect = null;
    // this sets the calendar width and height to auto so we can get its dimensions
    calendar.classList.add('pre-open');

    inputRect = input.getBoundingClientRect();
    calendarRect = calendar.getBoundingClientRect();

    // check and set left and right positioning
    if (viewportWidth - inputRect.left > calendarRect.width) {
      // set left positioned
      // check first if there is space right as initial option
      calendar.style.left = '0px';
    } else if (inputRect.right > calendarRect.width) {
      // set right positioned
      calendar.style.right = '0px';
    } else {
      // fallback left positioned
      calendar.style.left = '0px';
    }

    if (viewportHeight - inputRect.bottom > calendarRect.height) {
      // set bottom positioned
      // check first if there is space below as initial option
      calendar.style.top = `calc(100% + ${CALENDAR_VERTICAL_MARGIN}px`;
    } else if (inputRect.top > calendarRect.height) {
      // set top positioned
      calendar.style.bottom = `calc(100% - ${CALENDAR_VERTICAL_MARGIN}px)`;
    } else {
      // fallback bottom positioned
      calendar.style.top = `calc(100% + ${CALENDAR_VERTICAL_MARGIN}px`;
    }

    calendar.classList.remove('pre-open');
  }

  _removeCalendarPositioning() {
    const calendar = this.shadowRoot.querySelector('.fwc-calendar');
    calendar.style.removeProperty('left');
    calendar.style.removeProperty('right');
    calendar.style.removeProperty('bottom');
    calendar.style.removeProperty('top');
  }

  _mobileApplyButton() {
    return html` <button class="fwc-btn fwc-btn-primary" aria-label="${this.labelAriaMobileApply}" @click="${this._handleMobileApply}" tabindex="6">${this.btnMobileApply}</button> `;
  }

  _mobileCancelButton() {
    return html` <button class="fwc-btn fwc-btn-secondary" aria-label="${this.labelAriaMobileCancel}" @click="${this.toggleCalendarOpen}" tabindex="5">${this.btnMobileCancel}</button> `;
  }

  _arrowSvg() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
        <polygon points="14.067 50 11 46.933 32.933 25 11 3.067 14.067 0 37.533 23.467 39 25 37.533 26.533" />
      </svg>
    `;
  }

  _buttonPrev() {
    return html` <button class="fwc-btn-prev ${this._rangeStart ? 'fwc-hide' : ''}" @click="${() => this._changeCalendarMonths('prev')}" aria-label="${this.labelAriaPrevious}" tabindex="1">${this._arrowSvg()}</button> `;
  }

  _buttonNext() {
    return html` <button class="fwc-btn-next ${this._rangeEnd ? 'fwc-hide' : ''}" aria-label="${this.labelAriaNext}" @click="${() => this._changeCalendarMonths('next')}" tabindex="2">${this._arrowSvg()}</button> `;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/buttons-links.css" />
      <link rel="stylesheet" href="/fwc-assets/styles/components/fwc-input.css" />
      <div class="fwc-overlay  ${this._isCalendarOpen ? '' : 'fwc-hide'}"></div>
      <mobile-view mobile-header-text="${this.inputLabel}" ?open=${this._isCalendarOpen}>
        <!-- START MOBILE VIEW SLOT BODY -->
        <div slot="body">
          <div class="fwc-date-picker-wrapper">
            <div class="fwc-input ${this._isCalendarOpen ? 'open' : ''}">
              <label for="date-select">${this.inputLabel}</label>
              <div class="fwc-date-picker-input">
                <input type="text" id="date-select" class="fwc-selected-date" aria-haspopup="dialog" aria-describedby="date_error" @blur="${(e) => this._parseDate(e)}" @focus="${(e) => this._emitFocusEvent(e)}" />
                <button class="fwc-icon-calendar" @click="${this.toggleCalendarOpen}" aria-label="${this.labelAriaCalendarIcon}">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" width="20px" height="20px" viewBox="0 0 36.449 36.448" xml:space="preserve">
                    <g>
                      <g>
                        <rect x="12.858" y="14.626" width="4.596" height="4.089" />
                        <rect x="18.996" y="14.626" width="4.595" height="4.089" />
                        <rect x="25.128" y="14.626" width="4.596" height="4.089" />
                        <rect x="6.724" y="20.084" width="4.595" height="4.086" />
                        <rect x="12.858" y="20.084" width="4.596" height="4.086" />
                        <rect x="18.996" y="20.084" width="4.595" height="4.086" />
                        <rect x="25.128" y="20.084" width="4.596" height="4.086" />
                        <rect x="6.724" y="25.54" width="4.595" height="4.086" />
                        <rect x="12.858" y="25.54" width="4.596" height="4.086" />
                        <rect x="18.996" y="25.54" width="4.595" height="4.086" />
                        <rect x="25.128" y="25.54" width="4.596" height="4.086" />
                        <path
                          d="M31.974,32.198c0,0.965-0.785,1.75-1.75,1.75h-24c-0.965,0-1.75-0.785-1.75-1.75V12.099h-2.5v20.099
                          c0,2.343,1.907,4.25,4.25,4.25h24c2.344,0,4.25-1.907,4.25-4.25V12.099h-2.5V32.198z"
                        />
                        <path
                          d="M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75
                          c0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75
                          c-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v2h2.5h27.5h2.5v-2
                          C34.474,5.855,32.568,3.948,30.224,3.948z M11.466,7.646c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75
                          c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25V7.646z M19.546,7.646c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25
                          V2.75c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25V7.646z M27.626,7.646c0,0.689-0.525,1.25-1.17,1.25
                          c-0.646,0-1.17-0.561-1.17-1.25V2.75c0-0.689,0.524-1.25,1.17-1.25c0.645,0,1.17,0.561,1.17,1.25V7.646z"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div class="fwc-calendar ${this._isCalendarOpen ? 'open' : ''} ${this.isIE ? 'ie-11' : ''}">
              ${this._calendarTableRows.map((month, i) => {
                return html`
                  ${i === 0
                    ? html`
                        <div class="fwc-calendar-mobile-nav">
                          <span>${this._buttonPrev()}</span>
                          <span>${this._calendarMonths[i][0].getFullYear()}</span>
                          <span>${this._buttonNext()}</span>
                        </div>
                      `
                    : ''}
                  <div class="fwc-calendar-month">
                    <div class="fwc-calendar-header">
                      ${i === 0 ? this._buttonPrev() : ''}
                      <span class="fwc-month-year" id="${this.monthNames[this._calendarMonths[i][0].getMonth()]}${this._calendarMonths[i][0].getFullYear()}"> ${this._calendarMonths ? this._getMonthAndYear(this._calendarMonths[i][0]) : ''} </span>
                      ${i === this._calendarTableRows.length - 1 ? this._buttonNext() : ''}
                    </div>
                    <div class="fwc-calendar-body">
                      <table role="table" width="100%" aria-labelledby="${this.monthNames[this._calendarMonths[i][0].getMonth()]}${this._calendarMonths[i][0].getFullYear()}">
                        ${this._buildTableHeaders()}
                        ${month.map((row) => {
                          return html`
                            <tr role="row">
                              ${row.map(
                                (day) => html`
                                  <td>
                                    <button
                                      tabindex="${day ? 4 : -1}"
                                      ?disabled="${day ? false : true}"
                                      aria-hidden="${day ? false : true}"
                                      aria-pressed="${day === this.selectedDate}"
                                      aria-label="${day ? `${this._formatDate(day)}` : ''}"
                                      data-date="${day ? this._formatDate(day) : ''}"
                                      @click="${() => {
                                        this._handleSelectedDate(day);
                                      }}"
                                    >
                                      <span>${day ? day.getDate() : ''}</span>
                                    </button>
                                  </td>
                                `
                              )}
                            </tr>
                          `;
                        })}
                      </table>
                    </div>
                  </div>
                `;
              })}
            </div>
          </div>
        </div>
        <!-- END MOBILE VIEW SLOT BODY -->

        <!-- START MOBILE VIEW SLOT FOOTER BUTTONS -->
        <div slot="mobile-footer-primary-button">${this._mobileApplyButton()}</div>
        <div slot="mobile-footer-secondary-button">${this._mobileCancelButton()}</div>
        <!-- END MOBILE VIEW SLOT FOOTER BUTTONS -->
      </mobile-view>
    `;
  }
}

class FwcDatePicker extends FwcBase {
  constructor() {
    super('fwc-date-picker', FwcDatePickerComponent);
  }
}

class FwcPreloaderComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
       @keyframes slideDown {
            0% {
              top: 0%;
              bottom: 100%;
              opacity: 0;
            }

            5% {
              top: 0%;
              bottom: 0%;
            }

            12% {
              opacity: 1;
            }

            50% {
              top: 0%;
              bottom: 0%;
              opacity: 1;
            }

            55% {
              top: 0%;
              bottom: 100%;
            }

            62% {
              opacity: 0;
            }

            100% {
              top: 0%;
              bottom: 100%;
              opacity: 0%;
            }
          }

          @keyframes slideUp {
            0% {
              top: 100%;
              bottom: 0%;
              opacity: 0;
            }

            5% {
              top: 0%;
              bottom: 0%;
            }

            12% {
              opacity: 1;
            }

            50% {
              top: 0%;
              bottom: 0%;
            }

            55% {
              top: 100%;
              bottom: 0%;
              opacity: 1;
            }

            62% {
              opacity: 0;
            }

            100% {
              top: 100%;
              bottom: 0%;
            }
          }
          .fwc-preloader {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .fwc-preloader .fwc-preloader-heart {
            display: flex;
            padding: calc(1.5*var(--fwcu));
            height: calc(15*var(--fwcu));
          }
          .fwc-preloader .fwc-preloader-heart span {
            position: relative;
            background: var(--color-gray-five, #eee);
            width: var(--fwcu);
            display: flex;
            margin: calc(0.5*var(--fwcu));
            border-radius: calc(0.5*var(--fwcu));
            height: calc(10*var(--fwcu));
            top: calc(3*var(--fwcu));
          }
          .fwc-preloader .fwc-preloader-heart span:nth-child(even)::before {
            animation: slideUp 5s ease-out infinite;
          }
          .fwc-preloader .fwc-preloader-heart span:nth-child(odd)::before {
            animation: slideDown 5s ease-out infinite;
          }
          .fwc-preloader .fwc-preloader-heart span:nth-child(2)::before {
            animation-delay: 0.286s;
          }
          .fwc-preloader .fwc-preloader-heart span:nth-child(3)::before {
            animation-delay: 0.572s;
          }
          .fwc-preloader .fwc-preloader-heart span:nth-child(4)::before {
            animation-delay: 0.858s;
          }
          .fwc-preloader .fwc-preloader-heart span:nth-child(5)::before {
            animation-delay: 1.144s;
          }
          .fwc-preloader .fwc-preloader-heart span:nth-child(6)::before {
            animation-delay: 1.43s;
          }
          .fwc-preloader .fwc-preloader-heart span:nth-child(7)::before {
            animation-delay: 1.716s;
          }
          .fwc-preloader .fwc-preloader-heart span:nth-child(1), .fwc-preloader .fwc-preloader-heart span:nth-child(7) {
            height: calc(3.75*var(--fwcu));
            top: calc(2.5*var(--fwcu));
          }
          .fwc-preloader .fwc-preloader-heart span:nth-child(2), .fwc-preloader .fwc-preloader-heart span:nth-child(6) {
            height: calc(7.5*var(--fwcu));
            top: calc(1.25*var(--fwcu));
          }
        }
        .fwc-preloader {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .fwc-preloader .fwc-preloader-heart {
          display: flex;
          padding: calc(1.5*var(--fwcu));
          height: calc(15*var(--fwcu));
        }
        .fwc-preloader .fwc-preloader-heart span {
          position: relative;
          background: var(--color-gray-five, #eee);
          width: var(--fwcu);
          display: flex;
          margin: calc(0.5*var(--fwcu));
          border-radius: calc(0.5*var(--fwcu));
          height: calc(10*var(--fwcu));
          top: calc(3*var(--fwcu));
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(even)::before {
          animation: slideUp 5s ease-out infinite;
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(odd)::before {
          animation: slideDown 5s ease-out infinite;
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(2)::before {
          animation-delay: 0.286s;
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(3)::before {
          animation-delay: 0.572s;
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(4)::before {
          animation-delay: 0.858s;
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(5)::before {
          animation-delay: 1.144s;
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(6)::before {
          animation-delay: 1.43s;
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(7)::before {
          animation-delay: 1.716s;
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(1),
        .fwc-preloader .fwc-preloader-heart span:nth-child(7) {
          height: calc(3.75*var(--fwcu));
          top: calc(2.5*var(--fwcu));
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(2),
        .fwc-preloader .fwc-preloader-heart span:nth-child(6) {
          height:calc(7.5*var(--fwcu));
          top: calc(1.25*var(--fwcu));
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(3),
        .fwc-preloader .fwc-preloader-heart span:nth-child(5) {
          height: calc(10*var(--fwcu));
          top: calc(1.25*var(--fwcu));
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(odd)::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          background: linear-gradient(0deg, var(--color-primary), var(--color-primary-hover));
          border-radius: calc(0.5*var(--fwcu));
          top: 0%;
        }
        .fwc-preloader .fwc-preloader-heart span:nth-child(even)::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, var(--color-primary), var(--color-primary-hover));
          border-radius: calc(0.5*var(--fwcu));
          bottom: 0%;
        }
      `,
    ];
  }
  static get properties() {
    return {
      labelAriaValueText: { attribute: 'label-aria-value-text', type: String },
    };
  }

  constructor() {
    super();
    this.labelAriaValueText = 'Loading';
  }

  render() {
    return html`
      <div class="fwc-preloader">
        <div class="fwc-preloader-heart" role="progressbar" aria-label="${this.labelAriaValueText}">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
  }
}

class FwcPreloader extends FwcBase {
  constructor() {
    super('fwc-preloader', FwcPreloaderComponent);
  }
}

class FwcDateTimePickerComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .date-time-picker-container {
          width: 100%;
        }
        .week-btns {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-gray-four);
          padding-bottom: calc(0.5 * var(--fwcu));
          margin-bottom: var(--fwcu);
        }
        .week-btns button {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: calc(2 * var(--fwcu));
          color: var(--color-primary);
          border: none;
          background: transparent;
          padding: var(--fwcu) 0;
          line-height: calc(2 * var(--fwcu));
          transition: background-color 250ms ease, color 250ms ease;
          cursor: pointer;
        }
        .week-btns button[disabled],
        .week-btns button[disabled]:hover {
          border-color: var(--color-gray-five);
          color: var(--color-gray-three);
          pointer-events: none;
        }
        .week-btns button[disabled] svg,
        .week-btns button[disabled]:hover svg {
          fill: var(--color-gray-three);
        }
        .week-btns svg {
          display: inline-block;
          width: calc(2 * var(--fwcu));
          height: calc(2 * var(--fwcu));
          fill: var(--color-primary);
        }
        /* TODO Needs to be updated to use overlay */
        .week-btns button:hover,
        .week-btns button:hover svg {
          color: var(--color-primary-hover);
          fill: var(--color-primary-hover);
        }
        .week-btns button:focus {
          outline-offset: 4px;
        }
        .prev svg {
          transform: rotate(180deg);
          margin-right: var(--fwcu);
        }
        .next svg {
          margin-left: var(--fwcu);
        }
        .dates {
          display: flex;
          justify-content: space-between;
        }
        .dates button {
          text-align: center;
          border: 1px solid var(--color-primary);
          font-size: calc(1.5 * var(--fwcu));
          padding: calc(0.5 * var(--fwcu));
          line-height: calc(1.5 * var(--fwcu));
          width: 100%;
          appearance: none;
          background: var(--color-white);
          min-height: calc(3.75 * var(--fwcu));
          border-radius: var(--border-radius);
          color: var(--color-primary);
          transition: background 250ms ease-in-out;
          font-weight: 700;
          cursor: pointer;
        }
        .dates button:focus {
          /* TODO: change if necessary */
          outline: none;
          box-shadow: 0 0 0 1.5px var(--color-primary);
        }
        .dates button:hover {
          color: var(--color-white);
          background-image: linear-gradient(180deg, rgba(var(--color-rgb-black), 0), rgba(var(--color-rgb-black), 0.2)), linear-gradient(180deg, var(--color-primary), var(--color-primary));
          border-color: var(--color-primary);
        }
        .date-col {
          width: calc(14 * var(--fwcu));
          margin-right: calc(2 * var(--fwcu));
        }
        .date-col:last-child {
          margin-right: 0;
        }
        h6 {
          text-align: center;
          font-weight: 700;
          font-size: calc(1.75 * var(--fwcu));
          margin: calc(2.5 * var(--fwcu)) 0;
          color: var(--color-gray-one);
        }
        h6 span {
          display: block;
          font-size: calc(1.75 * var(--fwcu));
          font-weight: 400;
          margin-bottom: calc(0.5 * var(--fwcu));
        }
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: calc(2 * var(--fwcu));
          width: 100%;
        }
        li:hover button {
          background-color: var(--color-primary);
          color: var(--color-white);
        }
        li.selected button {
          background-color: var(--color-primary);
          color: var(--color-white);
        }
        li.empty-time {
          text-align: center;
          color: var(--color-gray-three);
          height: calc(3.75 * var(--fwcu));
          margin-bottom: calc(2 * var(--fwcu));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        li span {
          display: block;
          height: calc(2 * var(--fwcu));
          line-height: calc(2 * var(--fwcu));
        }
        .no-results {
          text-align: center;
          font-size: calc(2.25 * var(--fwcu));
          font-weight: 700;
          font-family: var(--font-serif);
          color: var(--color-gray-one);
        }
        .hide {
          display: none;
        }
        .week-btns .hide {
          opacity: 0;
          visibility: hidden;
          cursor: none;
        }
        @media only screen and (max-width: 900px) {
          .week-btns {
            border-bottom: none;
          }
          .dates {
            flex-direction: column;
            width: 100%;
          }
          .date-col {
            width: 100%;
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: calc(2.5 * var(--fwcu));
          }
          li {
            width: calc(50% - var(--fwcu));
            margin-bottom: calc(1.5 * var(--fwcu));
          }
          li:nth-child(odd) {
            margin-right: calc(1.5 * var(--fwcu));
          }
          li:hover button,
          .dates button:hover {
            outline: none;
            box-shadow: var(--box-shadow);
            background-image: none;
            color: var(--color-primary);
            background-color: var(--color-white);
          }
          li.selected:hover button {
            background-color: var(--color-primary);
            color: var(--color-white);
            background-image: linear-gradient(180deg, rgba(var(--color-rgb-black), 0), rgba(var(--color-rgb-black), 0.2)), linear-gradient(180deg, var(--color-primary), var(--color-primary));
          }
          h6 {
            text-align: left;
            font-size: calc(1.75 * var(--fwcu));
            margin-bottom: calc(2 * var(--fwcu));
          }
          h6 span {
            font-size: calc(1.75 * var(--fwcu));
          }
          li.empty-time {
            display: none;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      schedule: { type: Array },
      labelNextWeek: { attribute: 'label-next-week', type: String },
      labelPrevWeek: { attribute: 'label-prev-week', type: String },
      labelDays: { attribute: 'label-days', type: Array },
      labelMonths: { attribute: 'label-months', type: Array },
      labelNoResults: { attribute: 'label-no-results', type: String },
      hidePreviousButton: { attribute: 'hide-previous-button', type: Boolean },
      hideNextButton: { attribute: 'hide-next-button', type: Boolean },
      pressedButton: {},
    };
  }

  set schedule(value) {
    let oldVal = this._schedule;
    this._schedule = !value ? [] : value;
    this._init();
    this.requestUpdate('schedule', oldVal);
  }

  get schedule() {
    return this._schedule;
  }

  constructor() {
    super();
    this._schedule = [];
    this.labelNextWeek = 'Next Week';
    this.labelPrevWeek = 'Previous Week';
    this.labelNoResults = 'No Results';
    this.hidePreviousButton = false;
    this.hideNextButton = false;
    this.labelDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.labelMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.pressedButton = null;
    this.maxNumberTimeSlots = 0;
    this.initialLoad = true;
    this.fwcPreloaderCmp = new FwcPreloader();
    this.fwcPreloaderCmp.build();
    this._showPreloader = true;
    this._disableNextWeekBtn = false;
    this._disablePrevWeekBtn = false;
  }

  firstUpdated() {
    this._init();
    this.initialLoad = false;
    this._showPreloader = false;
  }

  showPreloader() {
    this._showPreloader = true;
    this._disablePrevWeekBtn = this._disableNextWeekBtn = true;
    this.requestUpdate();
  }

  hidePreloader() {
    this._showPreloader = false;
    this._disablePrevWeekBtn = this._disableNextWeekBtn = false;
    this.requestUpdate();
  }

  updated() {
    this._init();
  }

  _init() {
    this.maxNumberTimeSlots = this._getMaxNumberTimeSlots();
  }

  _getMaxNumberTimeSlots() {
    return this._schedule.reduce((tot, cur) => {
      if (cur.slots.length > tot) {
        return cur.slots.length;
      }
      return tot;
    }, 0);
  }

  _emitWeekChange(dir) {
    const event = new CustomEvent('fwc-date-time-picker-week-change', {
      detail: { week: dir, data: this._schedule },
      bubbles: true,
    });
    this.showPreloader();

    /** TODO: Replace setTimeout with async callback to simulate actual loading */
    setTimeout(() => {
      this.hidePreloader();
    }, 1000);

    this.dispatchEvent(event);
  }

  _emitSelectedDateTime(date) {
    const event = new CustomEvent('fwc-date-time-picker-selected', {
      detail: date,
      bubbles: true,
    });

    this.dispatchEvent(event);
  }

  _selectedTime(time) {
    const start = new Date(time.start);
    const end = new Date(time.end);

    if (this.pressedButton === start.getTime()) {
      this.pressedButton = null;
      this._emitSelectedDateTime({ start: null, end: null });
    } else {
      this.pressedButton = start.getTime();
      this._emitSelectedDateTime({ start: start, end: end });
    }
  }

  _getDayName(date) {
    const dt = new Date(date);
    return this.labelDays[dt.getDay()];
  }

  _getMonthName(date) {
    const dt = new Date(date);
    return this.labelMonths[dt.getMonth()];
  }

  _getTime(date, periods = false) {
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    const ampm = periods ? (hours >= 12 ? ' pm' : ' am') : '';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}${ampm}`;
  }

  _getSvgArrow() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
        <polygon points="14.067 50 11 46.933 32.933 25 11 3.067 14.067 0 37.533 23.467 39 25 37.533 26.533" />
      </svg>
    `;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/buttons-links.css" />
      <div class="date-time-picker-container">
        <div class="week-btns">
          <button
            class="prev ${this.hidePreviousButton ? 'hide' : ''}"
            aria-label="${this.labelPrevWeek}"
            aria-hidden="${this.hidePreviousButton}"
            ?disabled=${this._disablePrevWeekBtn}
            @click=${() => {
              this._emitWeekChange('prev');
            }}
          >
            ${this._getSvgArrow()} ${this.labelPrevWeek}
          </button>
          <button
            class="next  ${this.hideNextButton ? 'hide' : ''}"
            aria-label="${this.labelNextWeek}"
            aria-hidden="${this.hideNextButton}"
            ?disabled=${this._disableNextWeekBtn}
            @click=${() => {
              this._emitWeekChange('next');
            }}
          >
            ${this.labelNextWeek} ${this._getSvgArrow()}
          </button>
        </div>
        ${this._showPreloader ? html`<fwc-preloader></fwc-preloader>` : ''}
        <div class="dates ${!this._schedule.length || this._showPreloader ? 'hide' : ''}">
          ${this._schedule.map((item, i) => {
            return html`
              <div class="date-col">
                <h6 id="fwc_heading_${i}"><span>${this._getDayName(item.date)}</span> ${this._getMonthName(item.date)} ${new Date(item.date).getDate()}</h6>
                <ul aria-labelledby="fwc_heading_${i}">
                  ${item.slots.map((time) => {
                    return html`
                      <li class="${this.pressedButton === new Date(time.start).getTime() ? 'selected' : ''}">
                        <button
                          @click="${() => {
                            this._selectedTime(time);
                          }}"
                          aria-label="${this._getTime(time.start, false)} - ${this._getTime(time.end, true)}"
                          aria-pressed="${this.pressedButton === new Date(time.start).getTime()}"
                        >
                          ${this._getTime(time.start, false)} - ${this._getTime(time.end, true)}
                        </button>
                      </li>
                    `;
                  })}
                  <!-- add the empty dashes -->
                  ${[...Array(this.maxNumberTimeSlots - item.slots.length)].map((num, i) => {
                    return html`
                      <li class="empty-time" aria-hidden="true">
                        <span>&mdash;</span>
                      </li>
                    `;
                  })}
                </ul>
              </div>
            `;
          })}
        </div>
        <div class="no-results ${!this._schedule.length && !this.initialLoad ? '' : 'hide'} ${this._showPreloader ? 'hide' : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
            <g fill="#D8D8D8" transform="translate(5)">
              <path d="M18.3054585 68.8356164L40.2561854 68.8356164C41.8551069 68.8356164 43.1506849 67.4557192 43.1506849 65.7534247 43.1506849 64.0520548 41.8551069 62.6712329 40.2561854 62.6712329L18.3054585 62.6712329C16.7068264 62.6712329 15.4109589 64.0520548 15.4109589 65.7534247 15.4109589 67.4557192 16.7068264 68.8356164 18.3054585 68.8356164zM18.317628 83.2191781L42.2988104 83.2191781C43.9032917 83.2191781 45.2054795 81.8380479 45.2054795 80.1369863 45.2054795 78.4343836 43.9032917 77.0547945 42.2988104 77.0547945L18.317628 77.0547945C16.7122747 77.0547945 15.4109589 78.4343836 15.4109589 80.1369863 15.4109589 81.8380479 16.7122747 83.2191781 18.317628 83.2191781zM54.4520548 83.2191781C55.262363 83.2191781 56.0581849 82.892774 56.6311644 82.3160959 57.2044521 81.7431164 57.5342466 80.9506849 57.5342466 80.1369863 57.5342466 79.3266781 57.2044521 78.5308562 56.6311644 77.9575685 56.0581849 77.384589 55.262363 77.0547945 54.4520548 77.0547945 53.6417466 77.0547945 52.8459247 77.384589 52.2729452 77.9575685 51.6962671 78.5308562 51.369863 79.3266781 51.369863 80.1369863 51.369863 80.9506849 51.6962671 81.7431164 52.2729452 82.3160959 52.8459247 82.892774 53.6380479 83.2191781 54.4520548 83.2191781zM81.3604541 63.8695312C95.5607481 63.8695312 107.112771 52.3040039 107.112771 38.0871093 107.112771 23.8710937 95.5607481 12.3046875 81.3604541 12.3046875 67.1613305 12.3046875 55.6081373 23.8710937 55.6081373 38.0871093 55.6081373 52.3040039 67.1613305 63.8695312 81.3604541 63.8695312zM81.3604541 18.1652343C92.3327835 18.1652343 101.260238 27.1019532 101.260238 38.0871093 101.260238 49.0722657 92.3327835 58.0101562 81.3604541 58.0101562 70.3881248 58.0101562 61.461841 49.0722657 61.461841 38.0871093 61.461841 27.1019532 70.3881248 18.1652343 81.3604541 18.1652343z" />
              <path d="M137.566428,80.3100586 L134.028864,76.7680664 L134.028864,36.909375 C134.028864,28.8322266 127.464077,22.2597657 119.39636,22.2597657 L115.960046,22.2597657 C109.946567,9.13710937 96.700529,0 81.3604541,0 C66.0215498,0 52.7746334,9.13710937 46.7620333,22.2597657 L14.6325036,22.2597657 C6.56361604,22.2597657 0,28.8322266 0,36.909375 L0,110.739843 C0,118.818164 6.56361604,125.389453 14.6325036,125.389453 L52.3722717,125.389453 L52.3722717,132.427734 C44.4347735,132.580957 38.0253716,139.088086 38.0253716,147.070313 C38.0253716,148.688378 39.3354612,150 40.9516383,150 L93.0552787,150 C94.6714558,150 95.9815453,148.688378 95.9815453,147.070313 C95.9815453,139.088086 89.5724361,132.582128 81.6361084,132.427734 L81.6361084,125.389453 L119.39636,125.389453 C127.465248,125.389453 134.028864,118.818164 134.028864,110.739843 L134.028864,96.6418945 C135.341002,96.1508789 136.545746,95.3818359 137.566428,94.3599609 C141.43466,90.4860351 141.43466,84.1839843 137.566428,80.3100586 Z M119.39636,28.1203125 C124.237283,28.1203125 128.17633,32.062793 128.17633,36.909375 L128.17633,70.9086914 L114.340357,57.0568359 C117.560421,51.46875 119.404262,44.9900391 119.404262,38.0871093 C119.404262,34.6400391 118.941326,31.2984375 118.079541,28.1203125 L119.39636,28.1203125 Z M81.3604541,5.859375 C99.110017,5.859375 113.550558,20.3167968 113.550558,38.0871093 C113.550558,55.8574218 99.110017,70.3148438 81.3604541,70.3148438 C63.6108912,70.3148438 49.1703508,55.8574218 49.1703508,38.0871093 C49.1703508,20.3167968 63.6108912,5.859375 81.3604541,5.859375 Z M14.6325036,28.1203125 L44.642831,28.1203125 C43.7807528,31.2984375 43.3178175,34.6400391 43.3178175,38.0871093 C43.3178175,41.8040039 43.85508,45.3952149 44.8508886,48.7942383 L17.8970467,48.7942383 C16.2808696,48.7942383 14.9707801,50.1055664 14.9707801,51.7239258 C14.9707801,53.3408203 16.2808696,54.6536133 17.8970467,54.6536133 L47.1082107,54.6536133 C53.274147,67.3792968 66.3106649,76.1753907 81.3604541,76.1753907 C88.2544457,76.1753907 94.7252991,74.3293945 100.30686,71.1067383 L123.53293,94.3599609 C124.833949,95.662207 126.432861,96.5572266 128.17633,96.984082 L128.17633,99.6070313 L5.85253325,99.6070313 L5.85253325,36.909375 C5.85253325,32.062793 9.79158075,28.1203125 14.6325036,28.1203125 Z M89.6283278,144.140625 L44.3797597,144.140625 C45.5868446,140.729003 48.8423163,138.280078 52.6578753,138.280078 L81.3490417,138.280078 C85.1646007,138.280078 88.4200723,140.729003 89.6283278,144.140625 Z M58.224805,132.420703 L75.7835751,132.420703 L75.7835751,125.389453 L58.224805,125.389453 L58.224805,132.420703 Z M119.39636,119.530078 L14.6325036,119.530078 C9.79158075,119.530078 5.85253325,115.586426 5.85253325,110.739843 L5.85253325,105.466407 L128.17633,105.466407 L128.17633,110.739843 C128.17633,115.586426 124.237283,119.530078 119.39636,119.530078 Z M133.427516,90.2162109 C131.840894,91.8055664 129.257586,91.8043945 127.670964,90.2162109 L105.215379,67.7329101 C107.332241,66.0231445 109.262992,64.0904297 110.970761,61.9708008 L133.427516,84.4541016 C135.014138,86.0422851 135.014138,88.6277343 133.427516,90.2162109 Z" />
              <path d="M81.0709838,30.6355531 C85.1910336,30.6355531 88.5429639,33.9877271 88.5429639,38.106881 C88.5429639,39.7577109 89.8810461,41.0958904 91.5317559,41.0958904 C93.1827646,41.0958904 94.5205479,39.7577109 94.5205479,38.106881 C94.5205479,30.6902519 88.4870735,24.6575342 81.0709838,24.6575342 C79.420274,24.6575342 78.0821918,25.9966104 78.0821918,27.6465437 C78.0821918,29.2973736 79.420274,30.6355531 81.0709838,30.6355531 Z" />
            </g>
          </svg>
          <div>${this.labelNoResults}</div>
        </div>
      </div>
    `;
  }
}

class FwcDateTimePicker extends FwcBase {
  constructor() {
    super('fwc-date-time-picker', FwcDateTimePickerComponent);
  }
}

// Helper class to allow transitions from display:none/block
// Used by: FwcExpandMultiItem

class ExpandCollapse {
  constructor(content) {
    this.content = content;
    this.drawer = content.firstElementChild;
    this.isExpanded = false;

    // when the panel closes
    this.content.addEventListener('transitionend', () => {
      if (!this.isExpanded) {
        // hides content from tab order when closed.
        this.drawer.style.display = 'none';
      }
    });
  }

  collapsePanel() {
    const sectionHeight = this.content.scrollHeight;

    // temporarily disable all css transitions
    const elementTransition = this.content.style.transition;
    this.content.style.transition = '';
    this.isExpanded = false;

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(() => {
      this.content.style.height = `${sectionHeight}px`;
      this.content.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      requestAnimationFrame(() => {
        this.content.style.height = `${0}px`;
      });
    });
  }

  expandPanel() {
    let element;
    let sectionHeight;

    // set inner drawer to block so we can get the height
    this.drawer.style.display = 'block';
    element = this.content;
    sectionHeight = this.content.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = `${sectionHeight}px`;
    element.addEventListener('transitionend', function handler() {
      element.removeEventListener('transitionend', handler);
      element.style.height = 'auto';
    });

    this.isExpanded = true;
  }
}

class FwcExpandComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-expand-wrapper {
          border-top: 1px solid var(--color-gray-four);
        }
        .fwc-expand-last {
          border-bottom: 1px solid var(--color-gray-four);
        }
        .fwc-expand-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: calc(4 * var(--fwcu)) calc(1.5 * var(--fwcu));
        }
        .fwc-expand-label {
          color: var(--color-gray-one);
          font-size: var(--default-font-size);
          font-family: var(--font-sans-serif, sans-serif);
        }
        .fwc-expand-button {
          border: none;
          background: none;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: calc(0.5 * var(--fwcu));
          margin-right: calc(1.5 * var(--fwcu));
          border-radius: 0;
        }
        .fwc-expand-icon {
          fill: var(--color-primary, #286ce2);
          height: calc(2 * var(--fwcu));
          width: calc(2 * var(--fwcu));
        }
        .fwc-expand-icon.expanded {
          transform: rotateX(180deg);
        }
        .fwc-expand-content {
          overflow: hidden;
          transition: height 0.3s ease;
          padding-right: calc(1.5 * var(--fwcu));
          padding-left: calc(1.5 * var(--fwcu));
          height: 0;
        }
        .fwc-expand-drawer {
          display: none;
          padding-bottom: calc(3 * var(--fwcu));
        }
      `,
    ];
  }

  static get properties() {
    return {
      label: { type: String },
      labelAriaExpandBtn: { attribute: 'label-aria-expand-btn', type: String },
      expanded: { type: Boolean },
      last: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.expanded = false;
    this.label = 'Toggle';
    this.last = false;
  }

  firstUpdated() {
    const content = this.shadowRoot.querySelector('.fwc-expand-content');
    this.expandCollapse = new ExpandCollapse(content);

    if (this.expanded) {
      this._expandPanel();
    }
  }

  _collapsePanel() {
    this.expandCollapse.collapsePanel();
  }

  _expandPanel() {
    this.expandCollapse.expandPanel();
  }

  expand() {
    this._expand();
  }
  // use to toggle outside of component
  _expand() {
    if (this.expanded) {
      this._collapsePanel();
    } else {
      this._expandPanel();
    }
    this.expanded = !this.expanded;
    const event = new CustomEvent('fwc-expand-expanded', {
      detail: this.expanded,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="fwc-expand-wrapper ${this.last ? 'fwc-expand-last' : ''}">
        <div class="fwc-expand-header">
          <button id="expandBtn_${this.id}" class="fwc-expand-button" type="button" role="button" aria-controls="panel_${this.id}" aria-label="${this.labelAriaExpandBtn ? this.labelAriaExpandBtn : this.label}" aria-expanded="${this.expanded}" @click=${this._expand}>
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 50 50" class="fwc-expand-icon ${this.expanded ? 'expanded' : ''}" focusable="false">
              <polygon points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378" transform="matrix(1 0 0 -1 0 51.66)" />
            </svg>
          </button>
          <span class="fwc-expand-label">${this.label}</span>
        </div>
        <div class="fwc-expand-content ${this.expanded ? 'expanded' : ''}">
          <div role="region" class="fwc-expand-drawer" id="panel_${this.id}" aria-labelledby="expandBtn_${this.id}">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

class FwcExpand extends FwcBase {
  constructor() {
    super('fwc-expand', FwcExpandComponent);
  }
}

class FwcExpandMultiComponent extends LitElement {
  static get styles() {
    return [sharedStyles, css``];
  }

  constructor() {
    super();
    this.slotItems = null;
    this.slotItemActiveIndex = null;
    // used for setting an index on <fwc-expand-multi-item>
    this.childIndexTracker = 0;
  }

  connectedCallback() {
    // dispatch an event when the component has connected
    super.connectedCallback();
    const componentName = this.tagName.toLowerCase();
    const event = new CustomEvent(`${componentName}-connected`, {
      detail: this,
      bubbles: true,
    });

    this.dispatchEvent(event);
  }

  firstUpdated() {
    // get slotted children
    this.slotItems = this._slottedChildren();
    if (this.slotItemActiveIndex) {
      this._expandSlotByActiveIndex();
    }
  }

  _expandSlotByActiveIndex() {
    // expand a child by index
    this.slotItems.forEach((item, index) => {
      if (this.slotItemActiveIndex === index) {
        item.expandPanel();
      } else {
        item.closePanel();
      }
    });
  }

  expandByIndex(index) {
    this.slotItemActiveIndex = index;

    if (this.slotItems) {
      this._expandSlotByActiveIndex();
    }
  }

  _slottedChildren() {
    const slot = this.shadowRoot.querySelector('slot');
    const childNodes = slot.assignedNodes({ flatten: true });
    return Array.prototype.filter.call(childNodes, (node) => node.nodeType === Node.ELEMENT_NODE);
  }

  render() {
    return html`
      <div class="fwc-expand-multi-wrapper">
        <slot></slot>
      </div>
    `;
  }
}

class FwcExpandMultiItemComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-expand-multi-item {
        }
        .fwc-expand-header {
          position: relative;
          padding: var(--fwcu);
          display: flex;
        }
        .fwc-expand-button {
          flex-basis: calc(3 * var(--fwcu));
          border: none;
          background: none;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0;
        }
        .fwc-expand-icon {
          height: calc(2 * var(--fwcu));
          width: calc(2 * var(--fwcu));
        }
        .fwc-expand-icon.expanded {
          transform: rotateX(180deg);
        }
        .fwc-expand-content {
          overflow: hidden;
          transition: height 0.3s ease 0s;
          height: 0px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      expanded: { type: Boolean },
      expandButtonAriaLabel: { attribute: 'label-aria-expand-text', type: String },
    };
  }

  constructor() {
    super();
    this.expanded = false;
    this.index = 0;
  }

  firstUpdated() {
    const content = this.shadowRoot.querySelector('.fwc-expand-content');
    this.expandCollapse = new ExpandCollapse(content);

    // set the stored index from the parent and then increment it for next instance
    this.index = this.parentNode.childIndexTracker;
    this.parentNode.childIndexTracker += 1;

    // if the property is passed in
    if (this.expanded) {
      this.expandPanel();
    }
    this.parentNode.addEventListener('fwc-expand-multi-expanded', (e) => {
      // if the event is dispatched from a sibling component, close its panel
      if (e.target !== this) {
        this.closePanel();
        return;
      }

      // if the event is dispatched from itself, toggle the panel
      if (this.expanded) {
        this.closePanel();
      } else {
        this.expandPanel();
      }

      // stop the event from bubbling outside fwc-expand-multi
      e.cancelBubble = true;
    });
  }

  expandPanel() {
    this.setAttribute('expanded', 'true');
    this.expandCollapse.expandPanel();
  }

  closePanel() {
    this.removeAttribute('expanded');
    this.expandCollapse.collapsePanel();
  }

  //TODO send index in details
  //Send on expandPanel
  _dispatchExpandEvent() {
    const event = new CustomEvent('fwc-expand-multi-expanded', {
      detail: !this.expanded,
      bubbles: true,
      composed: false,
    });

    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="fwc-expand-multi-item">
        <div class="fwc-expand-header">
          <button class="fwc-expand-button" type="button" id="expand_${this.index}" aria-expanded="${this.expanded}" aria-controls="panel_${this.index}" aria-label="${this.expandButtonAriaLabel}" @click=${this._dispatchExpandEvent}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" class="fwc-expand-icon ${this.expanded ? 'expanded' : ''}" focusable="false">
              <polygon points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378" transform="matrix(1 0 0 -1 0 51.66)" />
            </svg>
          </button>
          <slot name="expand-header"></slot>
        </div>
        <div class="fwc-expand-content">
          <div class="fwc-expand-drawer" role="region" id="panel_${this.index}" aria-labelledby="expand_${this.index}" style="display: none;">
            <slot name="expand-panel"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

class FwcExpandMulti extends FwcBase {
  constructor() {
    super('fwc-expand-multi', FwcExpandMultiComponent);
    const FwcExpandMultiItem = new FwcBase('fwc-expand-multi-item', FwcExpandMultiItemComponent);
    FwcExpandMultiItem.build();
  }
}

class FwcExpandMobileColComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: block;
          width: 100%;
          padding: calc(2 * var(--fwcu)) 0;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          background: transparent;
          overflow: hidden;
          transition: all 500ms ease;
        }
        .fwc-mobile-title {
          font-size: var(--default-font-size);
          color: var(--color-white);
          justify-content: space-between;
          display: none;
        }
        .fwc-expand-icon {
          height: calc(2.75 * var(--fwcu));
          width: calc(2.75 * var(--fwcu));
          background: var(--color-white);
          border-radius: 50%;
          position: relative;
          border: none;
          display: none;
        }
        .horizontal {
          display: flex;
          flex-direction: row;
        }
        .fwc-expand-icon:before {
          content: '';
          position: absolute;
          background: var(--color-black);
          height: calc(0.25 * var(--fwcu));
          width: calc(1.5 * var(--fwcu));
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
        .fwc-expand-icon:after {
          content: '';
          position: absolute;
          background: var(--color-black);
          height: calc(0.25 * var(--fwcu));
          width: calc(1.5 * var(--fwcu));
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          transform: rotate(90deg);
          opacity: 1;
          transition: opacity 500ms ease;
        }
        :host(.expanded) ul {
          margin-top: calc(2 * var(--fwcu));
        }
        :host(.expanded) .fwc-expand-icon:after {
          opacity: 0;
        }
        @media screen and (max-width: 900px) {
          .fwc-expand-icon {
            display: inline-block;
          }
          .fwc-mobile-title {
            display: flex;
          }
          .horizontal {
            display: flex;
            flex-direction: column;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      mobileTitle: { attribute: 'mobile-title', type: String },
      horizontal: { attribute: 'horizontal', type: Boolean },
    };
  }

  constructor() {
    super();
    this.mobileTitle = '';
    this.horizontal = false;
    this.isExpanded = false;
  }

  firstUpdated() {
    if (this.horizontal) {
      const slotItems = this._getSlotted();
      slotItems.forEach((slotItem, i) => {
        slotItem.setAttribute('horizontal', '');
      });
    }
  }

  _getSlotted() {
    const slot = this.shadowRoot.querySelector('slot');
    const childNodes = slot ? slot.assignedNodes({ flatten: true }) : [];
    return Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE && node.nodeName === 'FWC-EXPAND-MOBILE-COL-ITEM');
  }

  _mobileExpandToggle(e) {
    const slotItems = this._getSlotted();
    slotItems.forEach((slotItem, i) => {
      if (slotItem.hasAttribute('expanded')) {
        slotItem.removeAttribute('expanded');
      } else {
        slotItem.setAttribute('expanded', '');
      }
    });

    this.classList.toggle('expanded');
    this.isExpanded = !this.isExpanded;
    // aria-expanded does not update without this?
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="fwc-expand-mobile-col-wrapper">
        <div class="fwc-mobile-title">
          <span>${this.mobileTitle}</span>
          <button class="fwc-expand-icon" @click="${this._mobileExpandToggle}" aria-expanded="${this.isExpanded}" aria-label="${this.mobileTitle}"></button>
        </div>
        <ul>
          <slot class="${this.horizontal ? 'horizontal' : ''}"></slot>
        </ul>
      </div>
    `;
  }
}

class FwcExpandMobileColItemComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: block;
          width: 100%;
        }
        ::slotted(*) {
          color: var(--color-white) !important;
          text-decoration: none !important;
        }
        span {
          color: var(--color-white);
          text-decoration: none;
          display: flex;
          align-items: center;
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100%;
        }
        li {
          transition: all 0.5s cubic-bezier(0.36, 0, 0.44, 0.2);
          position: relative;
          overflow: hidden;
          padding-top: calc(3.5 * var(--fwcu));
          top: 0;
        }
        li.list-item {
          margin-bottom: calc(var(--fwcu));
        }
        li.horizontal {
          padding-top: calc(6.75 * var(--fwcu));
          margin: 0 calc(var(--fwcu));
        }
        @media screen and (max-width: 900px) {
          li,
          li.horizontal {
            padding-top: 0;
            top: calc(-12.25 * var(--fwcu));
          }
          li.expanded,
          li.expanded.horizontal {
            padding-top: calc(6.75 * var(--fwcu));
            top: 0;
          }
          span {
            border-top: 1px solid rgba(var(--color-rgb-gray-five), 0.2);
            padding-left: calc(2 * var(--fwcu));
          }
          li.list-item {
            visibility: hidden;
          }
          li.list-item.expanded {
            visibility: visible;
          }
          li.list-item {
            margin-bottom: 0;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      expanded: { type: Boolean },
      horizontal: { type: Boolean },
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // for ie11 and edge
    const slotItem = this._getSlotted();
    slotItem.style.color = '#fff';
    slotItem.style.textDecoration = 'none';
    slotItem.style.fontSize = this.horizontal ? '12px' : '';
  }

  _getSlotted() {
    const slot = this.shadowRoot.querySelector('slot');
    const childNode = slot ? slot.assignedNodes({ flatten: true }) : [];
    return childNode[0];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === 'expanded') {
      const liElem = this.shadowRoot.querySelector('li');
      if (this.expanded) {
        liElem.classList.add('expanded');
      } else {
        liElem.classList.remove('expanded');
      }
    }
  }

  render() {
    return html`
      <li class="list-item ${this.horizontal ? 'horizontal' : ''}">
        <span>
          <slot></slot>
        </span>
      </li>
    `;
  }
}

class FwcExpandMobileCol extends FwcBase {
  constructor() {
    super('fwc-expand-mobile-col', FwcExpandMobileColComponent);
    const FwcExpandMobilColItem = new FwcBase('fwc-expand-mobile-col-item', FwcExpandMobileColItemComponent);
    FwcExpandMobilColItem.build();
  }
}

class FwcFeaturetteComponent extends LitElement {
  static get properties() {
    return {
      triggerAnimate: { attribute: 'trigger-animate', type: String },
    };
  }

  constructor() {
    super();
    this.featuretteItems = [];
    this.isAnimateEnabled = false;
  }

  /** Checks if trigger-animate was updated to 'start' or already equal to 'start' */
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === 'trigger-animate' && newVal === 'start') {
      if (oldVal) {
        this._startAnimation();
      } else {
        this.isAnimateEnabled = true;
      }
    }
  }

  /** Checks if isAnimateEnabled is true on page load and starts animation */
  firstUpdated() {
    this.featuretteItems = this._getSlottedChildren();
    if (this.isAnimateEnabled) {
      this._setAnimation();
    }
  }

  /** Dispatches an event when the component has rendered in the DOM */
  connectedCallback() {
    super.connectedCallback();
    const componentName = this.tagName.toLowerCase();
    const event = new CustomEvent(`${componentName}-connected`, {
      detail: this,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  /** Retrieves the slotted children in the view and condenses it into an array of elements */
  _getSlottedChildren() {
    const slot = this.shadowRoot.querySelector('slot');
    const childNodes = slot.assignedNodes({ flatten: true });
    return Array.prototype.filter.call(childNodes, (node) => node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'FWC-FEATURETTE-ITEM');
  }

  /** Manually fires the animations on attribute change outside of lifecycle */
  _startAnimation() {
    if (this.featuretteItems) {
      this.featuretteItems.forEach((item, index) => {
        item.setAnimation(true, index * 300);
        item.startAnimation();
      });
    }
  }

  /** Sets the animate bool to true on child featurette items that will animate after they finish loading */
  _setAnimation() {
    if (this.featuretteItems) {
      this.featuretteItems.forEach((item, index) => {
        item.setAnimation(true, index * 300);
      });
    }
  }

  render() {
    return html` <slot></slot> `;
  }
}

class FwcFeaturetteItemComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(90%);
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(0);
          }
        }
        .featurette {
          position: relative;
          display: flex;
          flex-direction: row;
          margin-bottom: calc(5 * var(--fwcu));
          transform: translateY(90%);
          opacity: 0;
        }
        .animate {
          animation-name: fadeInUp;
          animation-delay: 0ms;
          animation-duration: 1s;
          animation-timing-function: ease-out;
          animation-fill-mode: both;
          opacity: 1;
        }
        .featurette-image {
          display: flex;
          justify-content: flex-start;
          opacity: 1;
          width: calc(6.25 * var(--fwcu));
          align-items: center;
          flex: 1 0 auto;
        }
        .featurette-image ::slotted(img),
        .featurette-image ::slotted(svg) {
          width: calc(6.25 * var(--fwcu));
          height: calc(6.25 * var(--fwcu));
        }
        .featurette-content {
          flex: 50 0 0;
          padding-left: calc(1.5 * var(--fwcu));
        }
        @media screen and (max-width: 600px) {
          .featurette {
            transform: none;
            margin-bottom: calc(6 * var(--fwcu));
            opacity: 1;
          }
          .animate {
            animation-duration: 0s;
          }
          .featurette-image {
            opacity: 0.1;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 50%;
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
          }
          .featurette-image ::slotted(img),
          .featurette-image ::slotted(svg) {
            width: calc(11.5 * var(--fwcu));
            height: calc(11.5 * var(--fwcu));
          }
        }
        @media screen and (max-width: 900px) {
          .featurette-image {
            align-items: flex-start;
          }
        }
      `,
    ];
  }

  constructor() {
    super();
    this.delay = 0;
    this.animate = false;
  }

  /** Starts fade-up animation if 'animate' bool was already set to true by parent component */
  firstUpdated() {
    if (this.animate) {
      this.startAnimation();
    }
  }

  /** Set animate bool and the delay time on this featurette item */
  setAnimation(val, delay) {
    this.animate = val;
    this.delay = delay;
  }

  /** Starts fade-up animation but also checks the parent container exists before animating */
  startAnimation() {
    const featurette = this.shadowRoot.querySelector('.featurette');
    if (featurette) {
      setTimeout(() => {
        featurette.classList.add('animate');
      }, this.delay);
    }
  }

  render() {
    return html`
      <div class="featurette">
        <div class="featurette-image">
          <slot name="fwc-featurette-image"></slot>
        </div>
        <div class="featurette-content">
          <slot name="fwc-featurette-content"></slot>
        </div>
      </div>
    `;
  }
}

class FwcFeaturette extends FwcBase {
  constructor() {
    super('fwc-featurette', FwcFeaturetteComponent);
    const FwcFeaturetteItem = new FwcBase('fwc-featurette-item', FwcFeaturetteItemComponent);
    FwcFeaturetteItem.build();
  }
}

class FwcFooterStickyComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          width: auto;
          position: fixed;
          background-color: var(--color-white);
          border: 1px solid var(--color-gray-four);
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          min-height: calc(3 * var(--fwcu));
          padding: calc(3 * var(--fwcu)) calc(1.5 * var(--fwcu));
          max-width: calc(144 * var(--fwcu));
          margin: 0 auto;
        }
        footer.space {
          justify-content: space-between;
        }

        @media screen and (max-width: 600px) {
          slot[name='fwc-footer-sticky-left'] {
            display: none;
          }
          footer {
            padding-right: calc(4 * var(--fwcu));
            padding-left: calc(4 * var(--fwcu));
          }
          footer,
          footer.space {
            justify-content: center;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      left: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.left = false;
  }

  _onSlotChange() {
    this._checkLeftSlot();
  }

  _checkLeftSlot() {
    const slot = this.shadowRoot.querySelector('#leftSlot');
    const nodes = slot.assignedNodes();
    if (nodes.length) {
      this.left = true;
    }
  }

  render() {
    return html`
      <footer class=${`${this.left ? 'space' : ''}`}>
        <slot @slotchange=${this._onSlotChange} id="leftSlot" name="fwc-footer-sticky-left"></slot>
        <slot id="rightSlot" name="fwc-footer-sticky-right"></slot>
      </footer>
    `;
  }
}

class FwcFooterSticky extends FwcBase {
  constructor() {
    super('fwc-footer-sticky', FwcFooterStickyComponent);
  }
}

class FwcHeaderCompoundComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          margin-bottom: calc(6 * var(--fwcu));
        }
        h4 {
          font-family: var(--font-serif);
          color: var(--color-gray-one);
          font-size: var(--fwcu);
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          display: inline-block;
        }

        span.top {
          color: var(--color-gray-two);
          font-size: calc(2 * var(--fwcu));
          line-height: calc(2.25 * var(--fwcu));
          font-family: var(--font-sans-serif);
          font-weight: 400;
          display: block;
        }
        span.btm {
          color: var(--color-gray-one);
          font-size: calc(2.5 * var(--fwcu));
          line-height: calc(3 * var(--fwcu));
          font-family: var(--font-serif);
          font-weight: 600;
        }
        span.line {
          content: '';
          display: block;
          align-self: stretch;
          flex-shrink: 0;
          width: auto;
          height: 1px;
          margin-bottom: calc(2.25 * var(--fwcu));
          background-color: var(--color-dviz-two);
        }
      `,
    ];
  }

  static get properties() {
    return {
      textTop: { attribute: 'text-top', type: String },
      textBtm: { attribute: 'text-btm', type: String },
    };
  }

  constructor() {
    super();
    /* Accessiblity concern if h4 is empty */
    this.textTop = '-';
    this.textBtm = '--';
  }

  render() {
    return html` <h4>
      <span class="line"></span>
      <span class="top">${this.textTop}</span>
      <span class="btm">${this.textBtm}</span>
    </h4>`;
  }
}

class FwcHeaderCompound extends FwcBase {
  constructor() {
    super('fwc-header-compound', FwcHeaderCompoundComponent);
  }
}

class FwcHeaderPageComponent extends LitElement {
  /* For slotted content, use ./fwc-assets/styles/components/fwc-header-page.css */
  static get styles() {
    return [
      sharedStyles,
      css`
        @keyframes rotation {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: scale(2);
          }
          100% {
            transform: rotate(359deg) scale(1);
          }
        }
        :host {
          max-width: 1920px;
          margin: 0 auto;
          position: relative;
        }
        section {
          background-color: var(--color-primary);
          padding: calc(6 * var(--fwcu)) 0;
        }
        .blobs {
          overflow: hidden;
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        div.shadowed:not(.slotted) {
          display: flex;
          max-width: calc(144 * var(--fwcu));
          margin: 0 auto;
          align-items: flex-start;
          justify-content: flex-start;
          flex-wrap: nowrap;
        }
        .shadowed h1,
        .slotted h1 {
          margin: 0;
        }
        svg {
          position: absolute;
          opacity: 0.2;
          animation-name: rotation;
          animation-fill-mode: none;
          animation-duration: 20s;
          animation-iteration-count: infinite;
          transform-origin: center;
          animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }
        svg.left {
          left: -115px;
          top: -70px;
          transform: rotate(293deg);
        }
        svg.mid-top {
          left: 37%;
          top: -375px;
          transform: rotate(-50deg);
        }
        svg.mid-bottom {
          left: 47%;
          transform: rotate(302deg);
          top: 36%;
        }
        svg.right {
          right: -348px;
          transform: rotateX(180deg);
        }
        h1 {
          font-size: calc(4.75 * var(--fwcu));
          line-height: calc(5.75 * var(--fwcu));
          font-weight: 600;
          font-family: var(--font-serif, sans-serif);
          color: white;
          padding: 0 calc(1.5 * var(--fwcu));
          margin: calc(4 * var(--fwcu)) 0;
        }
        @media screen and (max-width: 600px) and (hover: none) and (pointer: coarse) {
          h1 {
            font-size: calc(3.75 * var(--fwcu));
            line-height: calc(4.75 * var(--fwcu));
          }
        }
        @media screen and (max-width: 600px) {
          div.shadowed:not(.slotted) {
            /* Match fwc-row */
            width: calc(100% - (5 * var(--fwcu)));
          }
          section {
            padding: calc(2 * var(--fwcu)) 0;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  _blobs() {
    const leftBlob = html`
      <svg class="left" focusable="false" xmlns="http://www.w3.org/2000/svg" width="450" height="550" viewBox="0 0 450 550">
        <defs>
          <linearGradient id="left-a" x1="29.451%" x2="73.736%" y1="15.098%" y2="84.421%">
            <stop offset="0%" stop-color="#FFF" stop-opacity=".408" />
            <stop offset="58.024%" stop-color="#FFF" stop-opacity=".182" />
            <stop offset="100%" stop-opacity=".09" />
          </linearGradient>
        </defs>
        <path fill="url(#left-a)" d="M206.715387,10.3410556 L235.347677,9.18888856 C343.848361,4.8228068 435.344954,89.2405817 439.711035,197.741266 C439.926588,203.097915 439.922967,208.461138 439.700183,213.817491 L434.117864,348.031848 C429.780097,452.323739 346.15034,535.840657 241.852688,540.037608 L213.220398,541.189775 C104.719713,545.555857 13.2231213,461.138082 8.85703955,352.637398 C8.64148731,347.280749 8.64510794,341.917526 8.86789236,336.561173 L14.4502111,202.346816 C18.7879779,98.0549252 102.417734,14.5380069 206.715387,10.3410556 Z" opacity=".8" transform="translate(.346)" />
      </svg>
    `;
    const rightBlob = html`
      <svg class="right" focusable="false" xmlns="http://www.w3.org/2000/svg" width="450" height="549" viewBox="0 0 450 549">
        <path fill="#FFF" fill-opacity=".2" d="M1243.71539,9.73218384 L1272.34768,8.58001675 C1380.84836,4.21393499 1472.34495,88.6317099 1476.71104,197.132394 C1476.92659,202.489043 1476.92297,207.852266 1476.70018,213.208619 L1471.11786,347.422976 C1466.7801,451.714867 1383.15034,535.231785 1278.85269,539.428737 L1250.2204,540.580904 C1141.71971,544.946985 1050.22312,460.52921 1045.85704,352.028526 C1045.64149,346.671877 1045.64511,341.308654 1045.86789,335.952301 L1051.45021,201.737945 C1055.78798,97.4460534 1139.41773,13.929135 1243.71539,9.73218384 Z" transform="translate(-1036.654)" />
      </svg>
    `;
    const midBottomBlob = html`
      <svg class="mid-bottom" focusable="false" xmlns="http://www.w3.org/2000/svg" width="454" height="547" viewBox="0 0 454 547">
        <defs>
          <linearGradient id="mid-bottom-a" x1="26%" x2="79.518%" y1="36.887%" y2="89.438%">
            <stop offset="0%" stop-color="#FFF" stop-opacity=".21" />
            <stop offset="100%" stop-opacity=".15" />
          </linearGradient>
        </defs>
        <path fill="url(#mid-bottom-a)" d="M1786.71539,15.7321838 L1815.34768,14.5800167 C1923.84836,10.213935 2015.34495,94.6317099 2019.71104,203.132394 C2019.92659,208.489043 2019.92297,213.852266 2019.70018,219.208619 L2014.11786,353.422976 C2009.7801,457.714867 1926.15034,541.231785 1821.85269,545.428737 L1793.2204,546.580904 C1684.71971,550.946985 1593.22312,466.52921 1588.85704,358.028526 C1588.64149,352.671877 1588.64511,347.308654 1588.86789,341.952301 L1594.45021,207.737945 C1598.78798,103.446053 1682.41773,19.929135 1786.71539,15.7321838 Z" transform="translate(-1577.654 -7)" style="mix-blend-mode:color" />
      </svg>
    `;
    const midTopBlob = html`
      <svg class="mid-top" focusable="false" xmlns="http://www.w3.org/2000/svg" width="454" height="548" viewBox="0 0 454 548">
        <defs>
          <linearGradient id="mid-top-a" x1="79.518%" x2="26%" y1="89.438%" y2="36.887%">
            <stop offset="0%" stop-color="#FFF" stop-opacity=".15" />
            <stop offset="100%" stop-opacity=".15" />
          </linearGradient>
        </defs>
        <path fill="url(#mid-top-a)" d="M738.715387,10.7776312 L767.347677,9.62546415 C875.848361,5.25938239 967.344954,89.6771573 971.711035,198.177842 C971.926588,203.53449 971.922967,208.897714 971.700183,214.254067 L966.117864,348.468423 C961.780097,452.760314 878.15034,536.277233 773.852688,540.474184 L745.220398,541.626351 C636.719713,545.992433 545.223121,461.574658 540.85704,353.073973 C540.641487,347.717325 540.645108,342.354101 540.867892,336.997749 L546.450211,202.783392 C550.787978,98.4915008 634.417734,14.9745825 738.715387,10.7776312 Z" transform="translate(-527.654 -3)" style="mix-blend-mode:color" />
      </svg>
    `;

    return {
      right: rightBlob,
      left: leftBlob,
      midTop: midTopBlob,
      midBottom: midBottomBlob,
    };
  }

  constructor() {
    super();
    this.title = null;
  }

  render() {
    return html`
      <section>
        <div class="blobs">${this._blobs().right} ${this._blobs().midBottom} ${this._blobs().midTop} ${this._blobs().left}</div>
        <div class=${this.title ? 'shadowed' : 'slotted'}>
          ${this.title ? html`<h1>${this.title}</h1>` : html``}
          <slot></slot>
        </div>
      </section>
    `;
  }
}

class FwcHeaderPage extends FwcBase {
  constructor() {
    super('fwc-header-page', FwcHeaderPageComponent);
  }
}

class FwcHeaderSectionComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          margin-bottom: calc(3 * var(--fwcu));
        }
        h2 {
          font-size: calc(4 * var(--fwcu));
          font-family: var(--font-serif);
          color: var(--color-gray-two);
          font-weight: 300;
          line-height: 1.5;
          margin: 0;
          padding: 0;
        }
      `,
    ];
  }

  render() {
    return html`<h2><slot></slot></h2>`;
  }
}

class FwcHeaderSection extends FwcBase {
  constructor() {
    super('fwc-header-section', FwcHeaderSectionComponent);
  }
}

class FwcHeaderSubComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          margin-bottom: calc(3 * var(--fwcu));
        }
        h3,
        h4 {
          font-family: var(--font-serif);
          color: var(--color-gray-one);
          font-weight: 300;
          line-height: 1.5;
          margin: 0;
          padding: 0;
        }
        h3 {
          font-size: calc(2.75 * var(--fwcu));
        }
        h4 {
          font-size: calc(2.5 * var(--fwcu));
          color: var(--color-gray-two);
        }
      `,
    ];
  }

  static get properties() {
    return {
      small: { type: Boolean },
    };
  }

  render() {
    return html` ${this.small ? html` <h4><slot></slot></h4> ` : html` <h3><slot></slot></h3> `} `;
  }
}

class FwcHeaderSub extends FwcBase {
  constructor() {
    super('fwc-header-sub', FwcHeaderSubComponent);
  }
}

class FwcHeroComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        @keyframes scaleIn {
          0% {
            transform: scale(1.75);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        :host {
          width: 100%;
          position: relative;
          max-width: 1920px;
          margin: 0 auto;
          overflow: hidden;
        }
        .hero-container {
          max-width: calc(144 * var(--fwcu)); /** 1152px */
          margin: 0 auto;
          display: flex;
          align-items: center;
          padding: calc(7.25 * var(--fwcu)) 0;
        }
        .hero-image {
          background-color: var(--color-white);
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          min-height: 0;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          min-height: calc(45 * var(--fwcu));
          opacity: 0;
        }
        .hero-fade {
          position: absolute;
          bottom: 0px;
          display: none;
          width: 100%;
          height: 50%;
          background-image: linear-gradient(to bottom, rgba(var(--color-rgb-white), 0), rgba(var(--color-rgb-white), 1) 100%);
        }
        .hero-scale-in {
          animation-fill-mode: forwards;
          animation-name: scaleIn;
          animation-duration: 7s;
          animation-timing-function: ease-out;
          width: 100%;
          height: auto;
        }
        .hero-content {
          padding: 0;
          margin-top: 0;
          position: relative;
          z-index: 1;
        }
        h1 {
          margin-top: 0;
          margin-bottom: var(--fwcu);
          font-size: calc(4.75 * var(--fwcu));
          line-height: calc(5.75 * var(--fwcu));
          font-family: var(--font-serif);
          color: var(--color-gray-one);
        }
        @media screen and (max-width: 900px) {
          h1 {
            font-size: calc(3.5 * var(--fwcu));
          }
          .hero-container {
            padding: calc(3.25 * var(--fwcu)) 0;
          }
        }
        @media screen and (max-width: 600px) {
          .hero-fade {
            display: block;
          }
          .hero-image {
            position: relative;
          }
          .hero-container {
            display: block;
            padding: 0;
          }
          .hero-content {
            position: relative;
            z-index: 1;
            margin-top: -8%;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      mobileImage: { attribute: 'mobile-image', type: String },
      imagePositionX: { attribute: 'image-position-x', type: String },
      imagePositionY: { attribute: 'image-position-y', type: String },
    };
  }

  constructor() {
    super();
    this.image = null;
    this.mobileImage = null;
    this._handleResize = null;
    this.imagePositionX = 'center';
    this.imagePositionY = 'center';
  }

  firstUpdated() {
    this._handleResize = debounce(() => {
      this._resize.call(this);
    }, 250);
    window.addEventListener('resize', this._handleResize);

    if (this.mobileImage === null) {
      this.mobileImage = this.image;
    }

    this._setImageClassAfterLoad();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === 'image' || name === 'mobile-image') {
      if (oldVal !== null) {
        this._setImageClassAfterLoad();
      }
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

  _setImageClassAfterLoad() {
    const img = document.createElement('img');
    const heroImgElem = this.shadowRoot.querySelector('.hero-image');

    heroImgElem.classList.remove('hero-scale-in');

    img.onload = function () {
      heroImgElem.classList.add('hero-scale-in');
    };

    img.src = window.innerWidth > breakpoints.sm ? this.image : this.mobileImage;
  }

  _resize() {
    this.requestUpdate();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/grid.css" />
      <div class="hero-container">
        <div class="hero-image" style="background-image: url('${window.innerWidth > breakpoints.sm ? this.image : this.mobileImage}'); animation-delay: 0ms; background-position: ${this.imagePositionX} ${this.imagePositionY}">
          <div class="hero-fade"></div>
        </div>
        <div class="fwc-container">
          <div class="fwc-row">
            <div class="fwc-col-8 sm-12">
              <div class="hero-content">
                <h1>${this.title}</h1>
                <slot name="fwc-hero-content"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

class FwcHero extends FwcBase {
  constructor() {
    super('fwc-hero', FwcHeroComponent);
  }
}

class FwcMilestonesComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        @keyframes dot {
          0% {
            width: 0;
            height: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: calc(2.5 * var(--fwcu));
            height: calc(2.5 * var(--fwcu));
          }
        }

        @keyframes info {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        :host {
          position: relative;
          color: var(--color-gray-one);
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: flex-end;
          margin-bottom: calc(12 * var(--fwcu));
          flex-wrap: wrap;
        }
        ul li {
          display: flex;
          align-items: center;
          padding-right: calc(2 * var(--fwcu));
        }

        ul li::before {
          content: '';
          flex: 1 0 auto;
          margin-right: var(--fwcu);
          width: var(--default-font-size);
          height: var(--default-font-size);
          background-color: green;
          border-radius: 50%;
        }

        .bar-container,
        .info-container {
          width: 100%;
          position: relative;
          background-color: var(--color-gray-five);
          height: calc(2.5 * var(--fwcu));
          border: 1px solid rgba(var(--color-rgb-white), 0);
          border-radius: var(--border-radius);
        }

        .info-container {
          bottom: 0;
          background: none;
        }

        .info {
          position: absolute;
          display: flex;
          justify-content: center;
          flex-direction: column;
          top: calc(-5 * var(--fwcu));
          text-align: center;
          margin: 0;
          font-size: var(--default-font-size);
          width: calc(19 * var(--fwcu));
          color: var(--color-gray-one);
          animation-name: info;
          animation-fill-mode: both;
          animation-duration: 500ms;
          animation-delay: 750ms;
          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
        .info span.label {
          padding: 0;
          margin: 0;
          line-height: 1;
          font-weight: 400;
        }

        .info:nth-of-type(odd) {
          top: calc(6.5 * var(--fwcu));
        }
        .info::after {
          content: '';
          left: calc(50% - 1px);
          position: absolute;
          width: 2px;
          height: calc(3 * var(--fwcu));
          background-color: var(--color-gray-five);
        }
        .info:nth-of-type(even)::after {
          top: 100%;
        }
        .info:nth-of-type(odd)::after {
          bottom: 100%;
        }

        .info:nth-child(1):not(.incomplete)::after,
        ul li:nth-child(1)::before {
          background-color: var(--color-dviz-two);
        }
        .info:nth-child(2):not(.incomplete)::after,
        ul li:nth-child(2)::before {
          background-color: var(--color-dviz-seven);
        }
        .info:nth-child(3):not(.incomplete)::after,
        ul li:nth-child(3)::before {
          background-color: var(--color-dviz-four);
        }
        .info:nth-child(4):not(.incomplete)::after,
        ul li:nth-child(4)::before {
          background-color: var(--color-dviz-eight);
        }

        .bar {
          position: absolute;
          background-color: var(--color-gray-five);
          border: 1px solid rgba(var(--color-rgb-white), 0);
          border-radius: var(--border-radius);
          top: 0;
          bottom: 0;
          left: 0;
          width: 0;
          transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
        }
        .bar::after {
          content: '';
          display: block;
          position: absolute;
          right: calc(-1.25 * var(--fwcu)); /* half of width */
          top: -2px;
          border-style: solid;
          border-color: black;
          background-color: var(--color-white);
          border-color: var(--color-gray-five);
          border-radius: 50%;
          z-index: 1;
          width: calc(2.5 * var(--fwcu));
          height: calc(2.5 * var(--fwcu));
          animation-name: dot;
          animation-fill-mode: both;
          animation-duration: 500ms;
          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
          transform-origin: 50% 50%;
        }

        .bar:nth-of-type(1):not(.incomplete) {
          z-index: 4;
          background-color: var(--color-dviz-two);
        }
        .bar:nth-of-type(1):not(.incomplete)::after {
          animation-delay: 100ms;
          border-color: var(--color-dviz-two);
        }

        .bar:nth-of-type(2):not(.incomplete) {
          transition-delay: 100ms;
          background-color: var(--color-dviz-seven);
          z-index: 3;
        }
        .bar:nth-of-type(2):not(.incomplete)::after {
          border-color: var(--color-dviz-seven);
          animation-delay: 300ms;
        }

        .bar:nth-of-type(3):not(.incomplete) {
          transition-delay: 200ms;
          background-color: var(--color-dviz-four);
          z-index: 2;
        }
        .bar:nth-of-type(3):not(.incomplete)::after {
          border-color: var(--color-dviz-four);
          animation-delay: 400ms;
        }

        .bar:nth-of-type(4):not(.incomplete) {
          transition-delay: 300ms;
          background-color: var(--color-dviz-eight);
          z-index: 1;
        }
        .bar:nth-of-type(4):not(.incomplete)::after {
          border-color: var(--color-dviz-eight);
          animation-delay: 500ms;
        }

        @media screen and (max-width: 600px) {
          ul {
            justify-content: center;
          }
          section.vertical {
            transform: rotate(-90deg);
            transform-origin: left;
            margin-top: calc(66.5 * var(--fwcu)); /* 500px + 32px of margin hard to match 'height' and legend */
            margin-left: 50%;
          }
          section.vertical .bar-container,
          section.vertical .info-container {
            width: calc(62.5 * var(--fwcu));
            /* component is rotated 90 degrees with transform, width here is acting as height */
          }

          section.vertical .info {
            transform: rotate(90deg);
          }
          section.vertical .info:nth-of-type(even) {
            top: calc(-12 * var(--fwcu));
          }
          section.vertical .info:nth-of-type(odd) {
            top: calc(12 * var(--fwcu));
          }

          section.vertical .info::after {
            top: calc(50% - 1px);
            left: 100%;
            height: 2px;
            width: calc(3 * var(--fwcu));
          }

          section.vertical .info:nth-of-type(even)::after {
            left: 100%;
          }
          section.vertical .info:nth-of-type(odd)::after {
            left: 0;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      milestones: { type: Array },
      vertical: { type: Boolean },
      title: { type: String },
      labelIncomplete: { attribute: 'label-incomplete', type: String },
      labelComplete: { attribute: 'label-complete', type: String },
    };
  }

  constructor() {
    super();
    this.milestones = [];
    this.vertical = false;
    this.title = 'milestones';
    this.labelIncomplete = 'incomplete';
    this.labelComplete = 'complete';
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === 'milestones' && oldVal !== newVal) {
      this._renderMilestones();
    }
  }

  updated() {
    this._animateBars();
  }

  _renderMilestones() {
    const count = this.milestones.length;
    const percent = 100 / count;
    const Info = this.milestones.map((info, i) => {
      const iStyle = {
        // have to hard code pixels here for ie11: 9.5*fwcu = 76px
        left: `calc(${(i + 1) * percent}% - 76px)`,
      };
      return html`
        <h5 class="info ${info.complete ? '' : 'incomplete'}" style=${styleMap(iStyle)}>
          <span class="amount">${'$' + info.amount}</span>
          <span class="label">${info.label}</span>
          <span class="sr-only">${info.complete ? this.labelComplete : this.labelIncomplete}</span>
        </h5>
      `;
    });
    const Bars = this.milestones.map((bar) => {
      return html` <div class="bar ${bar.complete ? '' : 'incomplete'}"></div> `;
    });
    const Legend = this.milestones.map((l) => {
      return html`<li>${l.label}</li>`;
    });

    return {
      bars: Bars,
      info: Info,
      legend: Legend,
    };
  }

  _animateBars() {
    const childNodes = this.shadowRoot.querySelector('.bar-container').childNodes;
    const bars = Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE && node.nodeName === 'DIV');
    const percent = 100 / bars.length;
    for (let b in bars) {
      bars[b].style.width = '0%';
      bars[b].style.left = '0%';
      // need a 'state' change to apply CSS transitions
      setTimeout(() => {
        bars[b].style.width = percent + '%';
        bars[b].style.left = b * percent + '%';
      }, 0);
    }

    if (bars.length > 4) {
      /* eslint-disable no-console */
      console.error('Maximum of 4 Milestones has been exeeced. Component will not render properly.');
      /* eslint-enable no-console */
    }
  }

  render() {
    return html`
      <ul>
        ${this._renderMilestones().legend}
      </ul>
      <section class=${this.vertical ? 'vertical' : ''}>
        <h4 class="sr-only">${this.title}</h4>
        <div class="info-container">${this._renderMilestones().info}</div>
        <div class="bar-container">${this._renderMilestones().bars}</div>
      </section>
    `;
  }
}

class FwcMilestones extends FwcBase {
  constructor() {
    super('fwc-milestones', FwcMilestonesComponent);
  }
}

class FwcModalBaseComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-modal-wrapper {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          pointer-events: none;
          display: flex;
          visibility: hidden;
          transition: all 300ms ease;
        }
        .fwc-modal-wrapper.open {
          pointer-events: all;
          visibility: visible;
        }
        .fwc-modal-bg {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: rgba(var(--color-rgb-util-four), 0.2);
          transition: opacity 300ms ease;
          opacity: 0;
          visibility: hidden;
        }
        .fwc-modal-wrapper.open .fwc-modal-bg {
          opacity: 1;
          visibility: visible;
        }
        .fwc-modal-container {
          background: var(--color-white);
          position: relative;
          opacity: 0;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          animation: fwcClose 0.3s ease-in-out forwards;
          overflow: hidden;
        }
        .fwc-modal-wrapper.open .fwc-modal-container {
          animation: fwcOpen 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          opacity: 1;
        }
        @-webkit-keyframes fwcOpen {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @-webkit-keyframes fwcClose {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      _open: { type: Boolean },
      labelAria: { attribute: 'label-aria', type: String },
    };
  }

  constructor() {
    super();
    this._open = false;
    this._dispatchOpenName = 'fwc-modal-open';
    this._dispatchCloseName = 'fwc-modal-close';
    this.labelAria = '';
  }

  firstUpdated() {
    // set event listener to dispatch event back to parent
    const modal = this.shadowRoot.querySelector('.fwc-modal-wrapper');
    modal.addEventListener('transitionend', (e) => {
      if (this._open && e.propertyName === 'opacity') {
        this._dispatch(this._dispatchOpenName);
      }

      if (!this._open && e.propertyName === 'opacity') {
        this._dispatch(this._dispatchCloseName);
      }
    });

    // handle background click close
    this.addEventListener('keydown', (e) => this._escapeClose(e));
  }

  _escapeClose(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      this._closeModal();
    }
  }

  _dispatch(name) {
    const event = new CustomEvent(name, {
      detail: this,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  _onBackgroundPress() {
    this._closeModal();
  }

  openModal() {
    this._openModal();
  }

  _openModal() {
    setTimeout(() => {
      this._open = true;
      document.body.classList.add('no-scroll');
    }, 0);
  }

  closeModal() {
    this._closeModal();
  }

  _closeModal() {
    this._open = false;
    document.body.classList.remove('no-scroll');
  }

  render() {
    return html`
      <div class="fwc-modal-wrapper ${this._open ? 'open' : ''}" aria-modal="${this._open}" role="dialog" aria-label="${this.labelAria}">
        <div class="fwc-modal-bg" @click="${this._onBackgroundPress}"></div>
        <div class="fwc-modal-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

class FwcModalBase extends FwcBase {
  constructor() {
    super('fwc-modal-base', FwcModalBaseComponent);
  }
}

class FwcModalComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-modal-wrapper {
          width: 92vw;
          max-width: calc(100 * var(--fwcu));
        }
        .fwc-modal-header {
          background: linear-gradient(180deg, var(--color-white) 0%, var(--color-gray-five) 100%);
          padding: calc(4 * var(--fwcu));
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: calc(4 * var(--fwcu));
          border-radius: var(--border-radius) var(--border-radius) 0 0;
        }
        h3 {
          color: var(--color-gray-one);
          margin: 0;
          margin-right: calc(3 * var(--fwcu));
        }
        .fwc-modal-close {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0;
          width: calc(3 * var(--fwcu));
          height: calc(3 * var(--fwcu));
        }
        .fwc-modal-close svg {
          fill: var(--color-gray-two);
        }
        .fwc-modal-body {
          padding: calc(3 * var(--fwcu)) calc(4 * var(--fwcu)) 0 calc(4 * var(--fwcu));
        }
        .fwc-modal-actions {
          display: flex;
          justify-content: flex-end;
          padding: calc(4 * var(--fwcu));
        }
        .fwc-hide {
          display: none;
        }
        @media screen and (max-width: 600px) {
          ::slotted([slot='actions']) {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
          .fwc-modal-header {
            align-items: flex-start;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      open: { type: Boolean },
      textHeader: { attribute: 'text-header', type: String },
      textBody: { attribute: 'text-body', type: String },
      openBySlot: { attribute: 'open-by-slot', type: Boolean },
      labelAriaCloseBtn: { attribute: 'label-aria-close-btn', type: String },
      // below are props added for watch/update, they are not an option to pass as attributes
      _bodySlotChildren: { type: Number },
      _actionsSlotChildren: { type: Number },
    };
  }

  constructor() {
    super();
    this._fwcModalBase = new FwcModalBase();
    this._fwcModalBase.build();
    this._modalBaseElement = null;
    this.open = false;
    this.textHeader = '';
    this.textBody = '';
    this.refocusElem = null;
    this.openBySlot = false;
    this.labelAriaCloseBtn = 'Close Modal';
    this._bodySlotChildren = 0;
    this._actionsSlotChildren = 0;
  }

  firstUpdated() {
    this._modalBaseElement = this.shadowRoot.querySelector('fwc-modal-base');

    // grab the open/close event from fwc-modal-base and remove the slot items
    this.addEventListener('fwc-modal-open', () => {
      setTimeout(() => {
        focusTrap(this);
      }, 0);
    });
    this.addEventListener('fwc-modal-close', () => {
      if (this.openBySlot) {
        setTimeout(() => {
          const slot = this.shadowRoot.querySelector('slot');
          const nodes = slot.assignedNodes();
          if (nodes.length) {
            nodes.forEach((n) => {
              n.parentNode.removeChild(n);
            });
          }
        }, 0);
      } else {
        this.removeAttribute('open');
      }
      setTimeout(() => {
        this._returnFocus();
      }, 0);
    });
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'open') {
      setTimeout(() => {
        if (this.open) {
          this._open();
        } else {
          this._close();
        }
      }, 0);
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  _onSlotChange() {
    const bodySlot = this.shadowRoot.querySelector('slot[name="body"]');
    const bodySlotNodes = bodySlot.assignedNodes();
    const actionsSlot = this.shadowRoot.querySelector('slot[name="actions"]');
    const actionsSlotNodes = actionsSlot.assignedNodes();

    this._bodySlotChildren = bodySlotNodes.length;
    this._actionsSlotChildren = actionsSlotNodes.length;

    // do not do anything on slotchange when opening by attribute
    if (!this.openBySlot) return;

    if (bodySlotNodes.length) {
      this._open();
    } else {
      this._close();
    }
  }

  _returnFocus() {
    if (this._refocusElem) {
      // Return focus to calling element
      this._refocusElem.focus();
    }
  }

  // a public func allowing projects to set the refocus element
  setReFocus(elem) {
    this._refocusElem = elem;
  }

  closeModal() {
    this._modalBaseElement.closeModal();
  }

  _close() {
    this.closeModal();
  }

  openModal() {
    this._modalBaseElement.openModal();
  }

  _open() {
    this.openModal();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/typography.css" />
      <fwc-modal-base label-aria="${this.textHeader}">
        <div class="fwc-modal-wrapper">
          <div class="fwc-modal-header">
            <h3 id="modalHeader">${this.textHeader}</h3>
            <button type="button" class="fwc-modal-close" aria-label="${this.labelAriaCloseBtn}" @click="${this._close}">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
                <polygon points="3.523 50 0 46.477 21.477 25 0 3.523 3.523 0 25 21.477 46.477 0 50 3.523 28.523 25 50 46.477 46.477 50 25 28.523" />
              </svg>
            </button>
          </div>

          <div class="fwc-modal-body">
            <div class="${this._bodySlotChildren > 0 ? 'fwc-hide' : ''}">${this.textBody}</div>
            <slot name="body" @slotchange="${this._onSlotChange}"></slot>
          </div>

          <div class="fwc-modal-actions ${this._actionsSlotChildren > 0 ? '' : 'fwc-hide'}">
            <slot name="actions" @slotchange="${this._onSlotChange}"></slot>
          </div>
        </div>
      </fwc-modal-base>
    `;
  }
}

class FwcModal extends FwcBase {
  constructor() {
    super('fwc-modal', FwcModalComponent);
  }
}

class FwcModalCelebratoryComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-modal-wrapper {
          width: 92vw;
          max-width: calc(100 * var(--fwcu));
        }
        .fwc-modal-header {
          padding: calc(4 * var(--fwcu));
          display: flex;
          justify-content: center;
          align-items: center;
          padding: calc(4 * var(--fwcu)) calc(4 * var(--fwcu)) calc(4 * var(--fwcu)) calc(6 * var(--fwcu));
          border-radius: var(--border-radius) var(--border-radius) 0 0;
        }
        h2 {
          color: var(--color-gray-one);
          margin: 0;
        }
        .fwc-modal-close {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0;
          width: calc(3 * var(--fwcu));
          height: calc(3 * var(--fwcu));
        }
        .fwc-modal-body {
          padding: 0 calc(6 * var(--fwcu)) 0 calc(6 * var(--fwcu));
        }
        .fwc-modal-actions {
          display: flex;
          justify-content: flex-end;
          padding: calc(6 * var(--fwcu));
        }
        .fwc-hide {
          display: none;
        }
        ::slotted([slot='actions']) {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
          position: relative;
          z-index: 1;
        }
        @media screen and (max-width: 600px) {
          .fwc-modal-header {
            align-items: flex-start;
          }
          .fwc-modal-body {
            padding: 0 calc(2 * var(--fwcu)) 0 calc(2 * var(--fwcu));
          }
        }
        canvas {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
        }
      `,
    ];
  }

  static get properties() {
    return {
      open: { type: Boolean },
      delay: { type: Number },
      textHeader: { attribute: 'text-header', type: String },
      openBySlot: { attribute: 'open-by-slot', type: Boolean },
      // below are props added for watch/update, they are not an option to pass as attributes
      _actionsSlotChildren: { type: Number },
    };
  }

  constructor() {
    super();
    this._fwcModalBase = new FwcModalBase();
    this._fwcModalBase.build();
    this._modalBaseElement = null;
    this.open = false;
    this.textHeader = '';
    this.refocusElem = null;
    this.openBySlot = false;
    this._actionsSlotChildren = 0;
    this.delay = 0;

    this.canvas = null;
    this.ctx = null;
    this.cx = null;
    this.cy = null;
    this.confettiAnimation = null;
    this.confetti = [];
    this.confettiCount = 300;
    this.gravity = 0.5;
    this.terminalVelocity = 4;
    this.drag = 0.1;
    this.colors = ['#FFE43B', '#B3FAFF', '#FF7CEC', '#D8D8D8'];
    this.shapes = [
      { x: 4, y: 4, type: 'circle' },
      { x: 8, y: 8, type: 'circle' },
      { x: 10, y: 10, type: 'circle' },
      { x: 4, y: 4, type: 'triangle' },
      { x: 10, y: 10, type: 'triangle' },
      { x: 16, y: 16, type: 'triangle' },
      { x: 8, y: 2, type: 'rod' },
      { x: 10, y: 4, type: 'rod' },
      { x: 16, y: 4, type: 'rod' },
    ];
  }

  firstUpdated() {
    this._modalBaseElement = this.shadowRoot.querySelector('fwc-modal-base');

    this.addEventListener('fwc-modal-open', () => {
      setTimeout(() => {
        focusTrap(this);
        // init the confetti after the modal open, the canvas needs the modals full height and width
        this._initConfetti();
      }, 0);
    });

    // grab the close event from fwc-modal-base and remove the slot items
    this.addEventListener('fwc-modal-close', () => {
      if (this.openBySlot) {
        setTimeout(() => {
          const slot = this.shadowRoot.querySelector('slot');
          const nodes = slot.assignedNodes();
          if (nodes.length) {
            nodes.forEach((n) => {
              n.parentNode.removeChild(n);
            });
          }
        }, 0);
      } else {
        this.removeAttribute('open');
      }
      setTimeout(() => {
        this._returnFocus();
      }, 0);
    });
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'open') {
      setTimeout(() => {
        if (this.open) {
          this._open();
        } else {
          this._close();
        }
      }, 0);
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  _initCanvas() {
    const wrapper = this.shadowRoot.querySelector('.fwc-modal-wrapper');
    this.canvas = this.shadowRoot.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = wrapper.clientWidth;
    this.canvas.height = wrapper.clientHeight;
    this.cx = this.ctx.canvas.width / 2;
    this.cy = this.ctx.canvas.height / 2;
  }

  _randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  _initConfetti() {
    this._initCanvas();
    this.confetti = [];
    for (let i = 0; i < this.confettiCount; i++) {
      this.confetti.push({
        color: this.colors[Math.floor(this._randomRange(0, this.colors.length))],
        dimensions: this.shapes[Math.floor(this._randomRange(0, this.shapes.length))],
        position: {
          x: this._randomRange(0, this.canvas.width),
          y: this.canvas.height - 1,
        },
        rotation: this._randomRange(0, 2 * Math.PI),
        scale: {
          x: 1,
          y: 1,
        },
        velocity: {
          x: this._randomRange(-25, 25),
          y: this._randomRange(0, -50),
        },
      });
    }

    // use optional delay attribute
    setTimeout(() => {
      this._renderConfetti();
    }, this.delay);
  }

  _renderConfetti() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.confetti.forEach((confetto, index) => {
      let width = confetto.dimensions.x * confetto.scale.x;
      let height = confetto.dimensions.y * confetto.scale.y;

      // Move canvas to position and rotate
      this.ctx.translate(confetto.position.x, confetto.position.y);
      this.ctx.rotate(confetto.rotation);

      // Apply forces to velocity
      confetto.velocity.x -= confetto.velocity.x * this.drag;
      confetto.velocity.y = Math.min(confetto.velocity.y + this.gravity, this.terminalVelocity);
      confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

      // Set position
      confetto.position.x += confetto.velocity.x;
      confetto.position.y += confetto.velocity.y;

      // Delete confetti when out of frame
      if (confetto.position.y >= this.canvas.height) this.confetti.splice(index, 1);

      // Loop confetto x position
      if (confetto.position.x > this.canvas.width) confetto.position.x = 0;
      if (confetto.position.x < 0) confetto.position.x = this.canvas.width;

      // Spin confetto by scaling y
      confetto.scale.y = Math.cos(confetto.position.y * 0.1);
      this.ctx.fillStyle = confetto.color;

      // Draw confetto
      if (confetto.dimensions.type === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(width / 2, height / 2, width / 2, 0, 2 * Math.PI, false);
        this.ctx.fill();
      }
      if (confetto.dimensions.type === 'rod') {
        this.ctx.fillRect(-width / 2, -height / 2, width, height);
      }
      if (confetto.dimensions.type === 'triangle') {
        this.ctx.beginPath();
        this.ctx.moveTo(width, height);
        this.ctx.lineTo(width * 0.75, height * 0.25);
        this.ctx.lineTo(width * 1.5, height * 0.5);
        this.ctx.fill();
      }

      // Reset transform matrix
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    });

    this.confettiAnimation = window.requestAnimationFrame(this._renderConfetti.bind(this));
  }

  _onSlotChange() {
    const bodySlot = this.shadowRoot.querySelector('slot[name="body"]');
    const bodySlotNodes = bodySlot.assignedNodes();
    const actionsSlot = this.shadowRoot.querySelector('slot[name="actions"]');
    const actionsSlotNodes = actionsSlot.assignedNodes();

    this._actionsSlotChildren = actionsSlotNodes.length;

    // do not do anything on slotchange when opening by attribute
    if (!this.openBySlot) return;

    if (bodySlotNodes.length) {
      this._open();
    } else {
      this._close();
    }
  }

  _returnFocus() {
    if (this._refocusElem) {
      // Return focus to calling element
      this._refocusElem.focus();
    }
  }

  // a public func allowing projects to set the refocus element
  setReFocus(elem) {
    this._refocusElem = elem;
  }

  closeModal() {
    this._modalBaseElement.closeModal();
  }

  _close() {
    this.closeModal();
  }

  openModal() {
    this._modalBaseElement.openModal();
    window.cancelAnimationFrame(this.confettiAnimation);
  }

  _open() {
    this.openModal();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/typography.css" />
      <fwc-modal-base label-aria="${this.textHeader}">
        <div class="fwc-modal-wrapper">
          <div class="fwc-modal-header">
            <h2 id="modalHeader">${this.textHeader}</h2>
          </div>

          <div class="fwc-modal-body">
            <slot name="body" @slotchange="${this._onSlotChange}"></slot>
          </div>

          <div class="fwc-modal-actions ${this._actionsSlotChildren > 0 ? '' : 'fwc-hide'}">
            <slot name="actions" @slotchange="${this._onSlotChange}"></slot>
          </div>
          <canvas id="canvas" aria-hidden="true"></canvas>
        </div>
      </fwc-modal-base>
    `;
  }
}

class FwcModalCelebratory extends FwcBase {
  constructor() {
    super('fwc-modal-celebratory', FwcModalCelebratoryComponent);
  }
}

class FwcModalIllustrationComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .illustration-modal {
          display: block;
          position: relative;
          background-color: transparent;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right;
          overflow: hidden;
          width: 92vw;
          max-width: calc(100 * var(--fwcu));
          padding: calc(6 * var(--fwcu));
        }
        .illustration-modal:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: calc(100 * var(--fwcu));
          background: linear-gradient(to left, rgba(var(--color-rgb-black), 0) 0%, rgba(var(--color-rgb-black), 0.5) 47.63%, rgba(var(--color-rgb-black), 0.6) 100%);
        }
        .illustration-wrapper {
          position: relative;
          width: 100%;
        }
        .illustration-content {
          position: relative;
          top: 0;
          left: 0;
          width: calc(44 * var(--fwcu));
        }
        h2 {
          color: var(--color-white);
          margin: 0;
        }
        .illustration-body {
          font-size: calc(1.75 * var(--fwcu));
          line-height: calc(2.75 * var(--fwcu));
          color: var(--color-white);
          margin-top: calc(3 * var(--fwcu));
        }
        .illustration-actions {
          margin-top: calc(3 * var(--fwcu));
        }

        @media screen and (max-width: 600px) {
          .illustration-modal {
            padding: calc(6 * var(--fwcu)) calc(4 * var(--fwcu));
          }
          .illustration-content {
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            position: relative;
          }
          ::slotted([slot='actions']) {
            display: flex;
            justify-content: space-between;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      open: { type: Boolean },
      textHeader: { attribute: 'text-header', type: String },
      textBody: { attribute: 'text-body', type: String },
      image: { type: String },
      openBySlot: { attribute: 'open-by-slot', type: Boolean },
      // below are props added for watch/update, they are not an option to pass as attributes
      _bodySlotChildren: { type: Number },
      _actionsSlotChildren: { type: Number },
    };
  }

  constructor() {
    super();
    this._fwcModalBase = new FwcModalBase();
    this._fwcModalBase.build();
    this._modalBaseElement = null;
    this._refocusElem = null;
    this.textHeader = '';
    this.textBody = '';
    this.image = '';
    this.open = false;
    this.openBySlot = false;
    this._bodySlotChildren = 0;
    this._actionsSlotChildren = 0;
  }

  firstUpdated() {
    this._modalBaseElement = this.shadowRoot.querySelector('fwc-modal-base');

    // grab the open/close event from fwc-modal-base and remove the slot items
    window.addEventListener('fwc-modal-open', () => {
      focusTrap(this);
    });
    window.addEventListener('fwc-modal-close', () => {
      const slot = this.shadowRoot.querySelector('slot');
      const nodes = slot.assignedNodes();

      if (this.openBySlot) {
        nodes.forEach((n) => {
          n.parentNode.removeChild(n);
        });
      } else {
        this.removeAttribute('open');
      }

      this._returnFocus();
    });
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'open') {
      setTimeout(() => {
        if (this.open) {
          this._modalBaseElement.openModal();
        } else {
          this._modalBaseElement.closeModal();
        }
      }, 0);
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  _onSlotChange() {
    const bodySlot = this.shadowRoot.querySelector('slot[name="body"]');
    const bodySlotNodes = bodySlot.assignedNodes();
    const actionsSlot = this.shadowRoot.querySelector('slot[name="actions"]');
    const actionsSlotNodes = actionsSlot.assignedNodes();

    this._bodySlotChildren = bodySlotNodes.length;
    this._actionsSlotChildren = actionsSlotNodes.length;

    // do not do anything on slotchange when opening by attribute
    if (!this.openBySlot) return;

    if (bodySlotNodes.length) {
      this._modalBaseElement.openModal();
    } else {
      this._modalBaseElement.closeModal();
    }
  }

  _returnFocus() {
    if (this._refocusElem) {
      // Return focus to calling element
      this._refocusElem.focus();
    }
  }

  // a public func allowing projects to set the refocus element
  setReFocus(elem) {
    this._refocusElem = elem;
  }

  _dispatch(e, name) {
    const event = new CustomEvent(name, {
      detail: { target: e.target, component: this },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  closeModal() {
    this._modalBaseElement.closeModal();
  }

  _close() {
    this.closeModal();
  }

  openModal() {
    this._modalBaseElement.openModal();
  }

  _open() {
    this.openModal();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/typography.css" />
      <fwc-modal-base label-aria="${this.textHeader}">
        <div class="illustration-modal" style="background-image: url(${this.image})">
          <div class="illustration-wrapper">
            <div class="illustration-content">
              <h2 id="illustration">${this.textHeader}</h2>
              <div class="illustration-body">
                <div class="${this._bodySlotChildren > 0 ? 'fwc-hide' : ''}">${this.textBody}</div>
                <slot name="body" @slotchange="${this._onSlotChange}"></slot>
              </div>
              <div class="illustration-actions ${this._actionsSlotChildren > 0 ? '' : 'fwc-hide'}">
                <slot name="actions" @slotchange="${this._onSlotChange}"></slot>
              </div>
            </div>
          </div>
        </div>
      </fwc-modal-base>
    `;
  }
}

class FwcModalIllustration extends FwcBase {
  constructor() {
    super('fwc-modal-illustration', FwcModalIllustrationComponent);
  }
}

class FwcModalSlideComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-modal-wrapper {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          pointer-events: none;
          width: 100%;
          visibility: hidden;
        }
        .fwc-modal-wrapper.open {
          pointer-events: all;
          visibility: visible;
        }
        .fwc-modal-bg {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: rgba(var(--color-rgb-util-four), 0.9);
          transition: opacity 250ms ease;
          opacity: 0;
          visibility: hidden;
        }
        .fwc-modal-wrapper.open .fwc-modal-bg {
          opacity: 1;
          visibility: visible;
        }
        .fwc-modal-container {
          background: var(--color-white);
          border: 1px solid var(--color-white);
          width: 60%;
          height: 100%;
          position: absolute;
          opacity: 0;
          transition: all 350ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
          font-size: var(--default-font-size);
          padding-top: calc(9 * var(--fwcu)); /* 7.5height + 1.5top of close btn */
          overflow-x: hidden;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .fwc-modal-container.open {
          transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .fwc-modal-container.left {
          left: -100%;
          border-top-right-radius: var(--border-radius);
          border-bottom-right-radius: var(--border-radius);
        }
        .fwc-modal-container.right {
          right: -100%;
          border-top-left-radius: var(--border-radius);
          border-bottom-left-radius: var(--border-radius);
        }
        .fwc-modal-container.top {
          top: -100%;
          left: 0;
          width: 100%;
          height: 60%;
          border-bottom-left-radius: var(--border-radius);
          border-bottom-right-radius: var(--border-radius);
        }
        .fwc-modal-container.bottom {
          bottom: -100%;
          left: 0;
          width: 100%;
          height: 60%;
          border-top-left-radius: var(--border-radius);
          border-top-right-radius: var(--border-radius);
        }
        .fwc-modal-container.bottom.full,
        .fwc-modal-container.top.full {
          height: 100%;
          border-radius: none;
        }
        .open .fwc-modal-container {
          opacity: 1;
        }
        .open .fwc-modal-container.left {
          left: 0%;
        }
        .open .fwc-modal-container.right {
          right: 0%;
        }
        .open .fwc-modal-container.top {
          top: 0%;
        }
        .open .fwc-modal-container.bottom {
          bottom: 0%;
        }

        .fwc-modal-close {
          background: var(--color-gray-five);
          border: none;
          cursor: pointer;
          position: absolute;
          top: calc(1.5 * var(--fwcu));
          padding: calc(0.75 * var(--fwcu));
          width: calc(7.5 * var(--fwcu));
          height: calc(7.5 * var(--fwcu));
          border-radius: var(--border-radius);
        }

        .fwc-modal-close svg {
          fill: var(--color-primary);
        }

        .left .fwc-modal-close {
          right: calc(1.5 * var(--fwcu));
        }
        .right .fwc-modal-close {
          left: calc(1.5 * var(--fwcu));
          transform: rotate(180deg);
        }
        .top .fwc-modal-close {
          right: calc(1.5 * var(--fwcu));
          transform: rotate(90deg);
        }
        .bottom .fwc-modal-close {
          right: calc(1.5 * var(--fwcu));
          transform: rotate(-90deg);
        }

        @media screen and (max-width: 900px) {
          .fwc-modal-container.left,
          .fwc-modal-container.right {
            width: 95%;
          }
          .fwc-modal-container.top,
          .fwc-modal-container.bottom {
            height: 95%;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      open: { type: Boolean },
      direction: { type: String },
      full: { type: Boolean },
      openByAttribute: { attribute: 'open-by-attribute', type: Boolean },
      labelAriaCloseBtn: { attribute: 'label-aria-close-button', type: String },
      labelAriaModalHeader: { attribute: 'label-aria-modal-header', type: String },
    };
  }

  constructor() {
    super();
    this.open = false;
    this.full = false;
    this.callerId = null;
    this.direction = 'left';
    this.refocusElem = null;
    this.validDirections = ['left', 'right', 'top', 'bottom'];
    this.openByAttribute = false;
    this.labelAriaCloseBtn = 'Close Modal';
    this.preventOpenBySlotChange = false;
  }

  firstUpdated() {
    const modal = this.shadowRoot.querySelector('.fwc-modal-wrapper');

    // if an invalid direction is passed
    if (!this.validDirections.includes(this.direction)) {
      this.direction = 'left';
    }

    // set event listener to init focus trap after transition ends
    modal.addEventListener('transitionend', (e) => {
      if (this.open && e.propertyName !== 'opacity') {
        focusTrap(this);
      }
    });

    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this._onClosePress();
      }
    });
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'openByAttribute') {
        this.preventOpenBySlotChange = this.openByAttribute;
      }
      if (propName === 'open') {
        this._toggleBodyScrollClass(oldValue !== undefined ? !oldValue : false);
      }
    });
  }

  _onSlotChange(e) {
    const slot = this.shadowRoot.querySelector('slot');
    const slotNodes = slot.assignedNodes();

    // do not close the modal if slotted content updates, only if it is empty/removed
    if (this.open && slotNodes.length > 0) {
      return;
    }

    if (!this.preventOpenBySlotChange) {
      this._toggleModal();
    }
  }

  _toggleModal() {
    this.open = !this.open;
    this._refocusElem();
  }

  _toggleBodyScrollClass(isOpen) {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  _onClosePress() {
    const event = new CustomEvent('fwc-modal-close', {
      detail: this,
      bubbles: true,
    });
    this.dispatchEvent(event);
    this._closeModal();
  }

  _closeModal() {
    if (this.preventOpenBySlotChange) {
      this.open = false;
      this.removeAttribute('open');
      this._refocusElem();
      return;
    }
    if (this.open) {
      const slot = this.shadowRoot.querySelector('slot');
      const nodes = slot.assignedNodes();
      // remove everything inside the slot
      nodes.forEach((n) => {
        n.parentNode.removeChild(n);
      });
    }
  }

  closeSlideModal() {
    this._closeModal();
  }

  _refocusElem() {
    if (!this.open && this.refocusElem) {
      // Return focus to calling element
      setTimeout(() => {
        this.refocusElem.focus();
      }, 0);
    }
  }

  setReFocus(elem) {
    this.refocusElem = elem;
  }

  render() {
    return html`
      <div class="fwc-modal-wrapper ${this.open ? 'open' : ''}" role="dialog" aria-modal="${this.open}" aria-label="${this.labelAriaModalHeader}">
        <div class="fwc-modal-bg"></div>
        <div class="fwc-modal-container ${this.direction} ${this.full ? 'full' : ''}">
            <button type="button" class="fwc-modal-close" aria-label="${this.labelAriaCloseBtn}" @click="${this._onClosePress}">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 50 50" focusable="false">
                <polygon points="19.216 44.562 1.438 26.784 0 25.281 1.438 23.778 19.216 6 22.222 9.007 8.039 23.19 50 23.19 50 27.373 8.039 27.373 22.222 41.556"/>
              </svg>
            </button>
            <slot @slotchange="${this._onSlotChange}"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

class FwcModalSlide extends FwcBase {
  constructor() {
    super('fwc-modal-slide', FwcModalSlideComponent);
  }
}

class FwcPaginationComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-pagination {
          display: flex;
          flex-wrap: nowrap;
        }

        .fwc-page-item {
          width: 11.11%;
          max-width: calc(4.75 * var(--fwcu));
          margin-right: 1.5%;
          border-radius: 50%;
          text-decoration: none;
        }
        .fwc-page-num {
          background: var(--color-gray-five);
          text-decoration: none;
          font-size: calc(1.75 * var(--fwcu));
          font-weight: 700;
        }
        @media only screen and (max-width: 767px) {
          .fwc-page-num {
            font-size: calc(1.5 * var(--fwcu));
          }
        }
        .fwc-page-num.active,
        .fwc-page-num:hover {
          background: var(--color-primary);
        }
        .fwc-page-num > span {
          padding-top: 100%;
          width: 100%;
          position: relative;
          display: block;
        }
        .fwc-page-num > span > span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-56%, -51%);
          color: var(--color-primary);
        }
        .fwc-page-num.active > span > span,
        .fwc-page-num:hover > span > span {
          color: var(--color-white);
        }
        .fwc-page-icon {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
        }
        .fwc-page-icon svg {
          fill: var(--color-primary);
        }
        .fwc-prev {
          margin-right: 1.5%;
          margin-left: 0;
          transform: rotate(90deg);
        }
        .fwc-next {
          transform: rotate(-90deg);
        }
        .fwc-page-icon span {
          color: var(--color-primary);
          text-decoration: none;
          font-size: calc(2.5 * var(--fwcu));
          display: block;
          height: 100%;
          width: 100%;
        }
        .fwc-ellipsis {
          display: flex;
          justify-content: center;
        }
        .fwc-ellipsis span {
          align-self: flex-end;
        }
        .hide {
          display: none;
          visibility: hidden;
        }
      `,
    ];
  }

  static get properties() {
    return {
      model: { type: Object },
      labelAriaNav: { attribute: 'label-aria-nav', type: String },
      labelAriaNext: { attribute: 'label-aria-next', type: String },
      labelAriaPrev: { attribute: 'label-aria-prev', type: String },
      _pages: { type: Array },
      _showPrevEllipsis: {},
      _showNextEllipsis: {},
      _showNextBtn: {},
      _linkStart: { type: Number },
      _linkEnd: { type: Number },
      _startPage: { type: Number },
      _endPage: { type: Number },
    };
  }

  constructor() {
    super();
    this.model = null;
    this.ariaLabels = {
      navLabel: 'Pagination',
      nextPageLabel: 'Next Page',
      prevPageLabel: 'Previous Page',
    };
    (this.labelAriaNav = 'Pagination'), (this.labelAriaNext = 'Next Page'), (this.labelAriaPrev = 'Previous Page'), (this._viewMax = 5);
    this._startPage = 0;
    this._endPage = 5;
    this._pages = [];
    this._showNextBtn = true;
    this._showNextEllipsis = false;
    this._showPrevEllipsis = false;
    this._linkStart = 0;
    this._linkEnd = 0;
    this._totalPages = 0;
  }

  firstUpdated() {
    // 508 keyboard, set active page
    this.shadowRoot.addEventListener('keydown', function (e) {
      const isArrowBtn = e.target.classList.contains('fwc-next') || e.target.classList.contains('fwc-prev');
      if (e.key === 'Enter' && !isArrowBtn) {
        // wait for dom to update
        setTimeout(() => {
          const host = this.getRootNode().host;
          host._setFocusOnCurrentElement();
        }, 100);
      }
    });

    this._initPager();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === 'model' && oldVal) {
      this._initPager();
    }
  }

  _initPager() {
    this._totalPages = this.model.totalPages;
    this._linkStart = this._startPage;
    this._linkEnd = this._totalPages > this._endPage ? this._endPage : this._totalPages;
    this._pages = [];

    for (let i = 0; i < this._totalPages; i++) {
      this._pages.push({ id: i + 1 });
    }

    this._slicer(this.model.activePage, false);
    this._updateNavButtons();
  }

  _thisPage(page) {
    this._slicer(page.id, true);
  }

  _prevPage() {
    if (this.model.activePage > 1) {
      this._slicer(this.model.activePage - 1, true);
      // 508, reset focus to first item when prev arrow is hidden
      if (this.model.activePage === 1) {
        const btns = this.shadowRoot.querySelectorAll('.fwc-page-num');
        const first = btns[1];
        first.focus();
      }
    }
  }

  _nextPage() {
    if (this.model.activePage < this._pages.length) {
      this._slicer(this.model.activePage + 1, true);
      // 508, reset focus to last item when next arrow is hidden
      if (this.model.activePage === this._pages.length) {
        const btns = this.shadowRoot.querySelectorAll('.fwc-page-num');
        const last = btns[btns.length - 2];
        last.focus();
      }
    }
  }

  _getNextEllipsisStatus() {
    return this._linkEnd < this.model.totalPages;
  }

  _getPrevEllipsisStatus(page) {
    return page > 3 && this.model.totalPages > 5;
  }

  _getNextBtnStatus(page) {
    return page === this._pages.length ? false : true;
  }

  _updateNavButtons() {
    this._showNextBtn = this._getNextBtnStatus(this.model.activePage);
    this._showNextEllipsis = this._getNextEllipsisStatus();
    this._showPrevEllipsis = this._getPrevEllipsisStatus(this.model.activePage);
  }

  _slicer(next, emit) {
    let half = Math.ceil(this._viewMax / 2);
    let pen = this._pages.length - 1;

    // Keeps active page centered when half point is reached
    if (next >= half && next < pen) {
      this._linkStart = next - half;
      this._linkEnd = next + (half - 1);
    }

    // Moves active page off center if penultimate page is selected.
    if (this._pages.length > this._viewMax) {
      // last
      if (this._pages.length === next) {
        this._linkStart = next - this._viewMax;
        this._linkEnd = this._pages.length;
      }
      // first
      if (this.model.activePage - next > 1 && next < half) {
        this._linkStart = 0;
        this._linkEnd = this._viewMax;
      }
    }

    this.model.activePage = next;
    // trigger update on model
    this.model = { ...this.model };

    if (emit) {
      this._emitEvent(this.model);
    }

    this._updateNavButtons();
  }

  _setFocusOnCurrentElement() {
    const page = this.shadowRoot.querySelector('.fwc-page-num.active');
    page.focus();
  }

  _emitEvent(model) {
    const event = new CustomEvent('fwc-pagination-update', {
      detail: model,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <nav class="fwc-pagination" id="er-pagination-testing" role="navigation" aria-label="${this.labelAriaNav}">
        <a href="javascript:void(0)" role="button" class="fwc-page-icon fwc-page-item fwc-prev" @click="${this._prevPage}" style="${this.model.activePage <= 1 ? 'visibility: hidden' : 'visibility: visible'}" aria-hidden="${this.model.activePage <= 1 ? true : false}" aria-label="${this.labelAriaPrev}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" focusable="false">
            <polygon points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378" transform="matrix(1 0 0 -1 0 51.66)" />
          </svg>
        </a>

        <a href="javascript:void(0)" role="button" aria-label="go to page ${this._pages.length ? this._pages[0].id : ''}" class="fwc-page-num fwc-page-item ${this._showPrevEllipsis ? '' : 'hide'}" @click="${() => this._thisPage(this._pages[0])}">
          <span><span>${this._pages.length ? this._pages[0].id : ''}</span></span>
        </a>

        <span class="fwc-ellipsis fwc-page-item ${this._showPrevEllipsis ? '' : 'hide'}"><span>...</span></span>

        ${this._pages
          .filter((page) => this._linkStart < page.id && this._linkEnd >= page.id)
          .map(
            (page) => html`
              <a href="javascript:void(0)" role="button" aria-label="go to page ${page.id}" class="fwc-page-num fwc-page-item ${page.id === this.model.activePage ? 'active' : ''}" @click="${() => this._thisPage(page)}" aria-current=${page.id === this.model.activePage ? 'page' : false}>
                <span><span>${page.id}</span></span>
              </a>
            `
          )}

        <span class="fwc-ellipsis fwc-page-item ${this._showNextEllipsis ? '' : 'hide'}"><span>...</span></span>

        <a href="javascript:void(0)" role="button" aria-label="go to page ${this._pages.length ? this._pages[this._pages.length - 1].id : ''}" class="fwc-page-num fwc-page-item ${this._showNextEllipsis ? '' : 'hide'}" @click="${() => this._thisPage(this._pages[this._pages.length - 1])}">
          <span><span>${this._pages.length ? this._pages[this._pages.length - 1].id : ''}</span></span>
        </a>

        <a href="javascript:void(0)" role="button" class="fwc-page-icon fwc-page-item fwc-next" @click="${this._nextPage}" style="${this._showNextBtn && this._pages.length > 0 ? 'visibility: visible' : 'visibility: hidden'}" aria-hidden="${this._showNextBtn && this._pages.length > 0 ? false : true}" aria-label="${this.labelAriaNext}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
            <polygon points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378" transform="matrix(1 0 0 -1 0 51.66)" />
          </svg>
        </a>
      </nav>
    `;
  }
}

class FwcPagination extends FwcBase {
  constructor() {
    super('fwc-pagination', FwcPaginationComponent);
  }
}

class FwcPanelComponent extends LitElement {
  static get styles() {
    return css`
      .fwc-panel-container {
        position: relative;
      }
      .fwc-panel-wrapper {
        overflow: hidden;
        opacity: 0;
        height: 0;
        visibility: hidden;
        transition: all 200ms ease;
      }
      .fwc-panel-wrapper.open {
        z-index: 1;
        opacity: 1;
        visibility: visible;
        height: auto;
        position: absolute;
        top: calc(1.25 * var(--fwcu));
        border: 1px solid var(--color-gray-four);
        border-radius: var(--border-radius);
        background-color: var(--color-white);
        width: calc(105 * var(--fwcu));
      }
      .fwc-panel-footer {
        position: relative;
        padding: calc(2.5 * var(--fwcu));
        background-color: var(--color-white);
        box-shadow: var(--box-shadow);
        display: flex;
        justify-content: space-between;
      }
      .fwc-panel-apply-cancel-wrapper {
        display: flex;
        justify-content: space-between;
        width: auto;
      }
      .fwc-panel-restart svg {
        width: calc(1.5 * var(--fwcu));
        height: calc(1.5 * var(--fwcu));
        margin-right: calc(0.5 * var(--fwcu));
        fill: var(--color-gray-three);
        transform: rotateZ(90deg);
      }
      .fwc-panel-content {
        padding: calc(3.5 * var(--fwcu));
        height: calc(35.5 * var(--fwcu));
        overflow-y: auto;
        overflow-x: hidden;
      }
      .hide-sm {
        display: block;
      }
      .hide-lg {
        display: none;
      }
      .fwc-panel-reset-wrapper {
        display: flex;
        align-items: center;
      }
      @media screen and (max-width: 900px) {
        .fwc-panel-wrapper.open {
          width: calc(75 * var(--fwcu));
        }
      }
      @media screen and (max-width: 600px) {
        .fwc-panel-content {
          padding: calc(2 * var(--fwcu));
          padding-bottom: calc(12 * var(--fwcu));
        }
        .fwc-panel-footer {
          display: none;
        }
        .hide-sm {
          display: none;
        }
        .hide-lg {
          display: block;
        }
        .fwc-panel-wrapper.open {
          position: relative;
          top: 0;
          border: none;
          width: auto;
        }
        .fwc-panel-content {
          height: auto;
        }
      }
    `;
  }

  static get properties() {
    return {
      open: { type: Boolean },
      text: { type: String },
      labelMobileHeader: { attribute: 'label-mobile-header', type: String },
      labelResetBtn: { attribute: 'label-reset-button', type: String },
      labelCancelBtn: { attribute: 'label-cancel-button', type: String },
      labelApplyBtn: { attribute: 'label-apply-button', type: String },
    };
  }

  constructor() {
    super();
    this.labelMobileHeader = '';
    this.mobileView = new MobileView();
    this.mobileView.build();
    this.open = false;
    this.labelApplyBtn = 'Okay';
    this.labelCancelBtn = 'Cancel';
    this.labelResetBtn = 'Reset';
    this.returnEl = null;
  }

  firstUpdated() {
    const panel = this.shadowRoot.querySelector('#fwc-panel-wrapper');

    panel.addEventListener('transitionend', (e) => {
      // set the focus trap inside the panel after open
      if (this.open && e.propertyName === 'opacity') {
        const ignoredFocusTrapSelectors = window.innerWidth <= breakpoints.sm ? ['.fwc-link-icon.hide-sm', '.fwc-panel-footer button'] : ['.fwc-link-icon.hide-lg', '.mobile-footer-btn button'];
        setTimeout(() => {
          focusTrapCustomTabs(this, ignoredFocusTrapSelectors);
        }, 0);
      }
      // set the focus back to the open button on panel close
      if (!this.open && e.propertyName === 'opacity') {
        removeFocusTrapListener(this);
        this._returnFocus();
      }
    });

    // listen for Escape keydown
    this.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this._closePanel();
      }
    });
  }

  setReturnEl(el) {
    this.returnEl = el;
  }

  togglePanel() {
    this.open = !this.open;
    this._toggleBodyScrollClass();
    setTimeout(() => {
      this._setPanelPosition();
    }, 0);
  }

  _closePanel() {
    this.open = false;
    this._toggleBodyScrollClass();
    this._returnFocus();
    this._clearPanelPosition();
  }

  _toggleBodyScrollClass() {
    if (this.open && window.innerWidth <= breakpoints.sm) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  _returnFocus() {
    if (!this.open && this.returnEl) {
      setTimeout(() => {
        this.returnEl.focus();
      }, 0);
    }
  }

  // emit an event on hitting the apply button
  _dispatchApply() {
    const applyEvent = new CustomEvent('fwc-panel-apply', {
      detail: this.labelApplyBtn,
      bubbles: true,
    });
    this.dispatchEvent(applyEvent);
    this._closePanel();
  }

  // emit an event on hitting the cancel button
  _dispatchCancel() {
    const cancelEvent = new CustomEvent('fwc-panel-cancel', {
      detail: this.labelCancelBtn,
      bubbles: true,
    });
    this.dispatchEvent(cancelEvent);
    this._closePanel();
  }

  // emit an event on hitting the reset button
  _dispatchReset() {
    const resetEvent = new CustomEvent('fwc-panel-reset', {
      detail: this.labelResetBtn,
      bubbles: true,
    });
    this.dispatchEvent(resetEvent);
  }

  _setPanelPosition() {
    const panel = this.shadowRoot.querySelector('#fwc-panel-wrapper');
    const viewportWidth = document.documentElement.clientWidth;

    if (this.open) {
      if (panel.getBoundingClientRect().right < viewportWidth) {
        // if rightmost right-side is can fit within viewport
        panel.style.left = 0;
      } else if (panel.getBoundingClientRect().right > viewportWidth) {
        // if rightmost right-side is beyond viewport
        panel.style.right = 0;
      }
    } else {
      this._clearPanelPosition();
    }
  }

  _clearPanelPosition() {
    const panel = this.shadowRoot.querySelector('#fwc-panel-wrapper');
    panel.style.removeProperty('left');
    panel.style.removeProperty('right');
  }

  /** Stores svg htmlement for Restart icon */
  _getRestartSVG() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
        <path d="M25,0 L25,4.16666667 C36.531575,4.16666667 45.8333333,13.468425 45.8333333,25 C45.8333333,36.531575 36.531575,45.8333333 25,45.8333333 C13.468425,45.8333333 4.16666667,36.531575 4.16666667,25 C4.16666667,18.1966146 7.47070417,12.1907563 12.5,8.3984375 L12.5,18.75 L16.6666667,18.75 L16.6666667,2.08333333 L0,2.08333333 L0,6.25 L8.52864583,6.25 C3.3203125,10.8317062 0,17.5374354 0,25 C0,38.7858083 11.2141938,50 25,50 C38.7858083,50 50,38.7858083 50,25 C50,11.2141938 38.7858083,0 25,0 Z" />
      </svg>
    `;
  }

  _mobileCancelButton() {
    return html` <button tabindex="1" class="fwc-btn fwc-btn-secondary fwc-panel-cancel" @click="${this._dispatchCancel}" aria-label="${this.labelCancelBtn}">${this.labelCancelBtn}</button> `;
  }

  _mobileApplyButton() {
    return html` <button tabindex="1" class="fwc-btn fwc-btn-primary fwc-panel-apply" @click="${this._dispatchApply}" aria-label="${this.labelApplyBtn}">${this.labelApplyBtn}</button> `;
  }

  _resetButton(hide) {
    return html`
      <a href="javascript:void(0);" tabindex="1" class="fwc-link-icon left ${hide}" @click="${this._dispatchReset}" role="button" aria-label="${this.labelResetBtn}">
        <span class="fwc-panel-restart">${this._getRestartSVG()}</span>
        <span>${this.labelResetBtn}</span>
      </a>
    `;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/buttons-links.css" />
      <slot name="fwc-panel-action" id="FwcActionSlot"></slot>
      <mobile-view mobile-header-text="${this.labelMobileHeader}" ?open=${this.open}>
        <!-- START MOBILE VIEW SLOT BODY -->
        <div slot="body">
          <div class="fwc-panel-container">
            <div id="fwc-panel-wrapper" aria-expanded="${this.open}" class="fwc-panel-wrapper ${this.open ? 'open' : ''}">
              <div class="fwc-panel-content">
                <slot name="fwc-panel-content" role="region"></slot>
                ${this._resetButton('hide-lg')}
              </div>
              <div class="fwc-panel-footer">
                <div class="fwc-panel-reset-wrapper">${this._resetButton('hide-sm')}</div>
                <div class="fwc-panel-apply-cancel-wrapper">${this._mobileCancelButton()} ${this._mobileApplyButton()}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- END MOBILE VIEW SLOT BODY -->

        <!-- START MOBILE VIEW SLOT FOOTER BUTTONS -->
        <div slot="mobile-footer-primary-button" class="mobile-footer-btn">${this._mobileApplyButton()}</div>
        <div slot="mobile-footer-secondary-button" class="mobile-footer-btn">${this._mobileCancelButton()}</div>
        <!-- END MOBILE VIEW SLOT FOOTER BUTTONS -->
      </mobile-view>
    `;
  }
}

class FwcPanel extends FwcBase {
  constructor() {
    super('fwc-panel', FwcPanelComponent);
  }
}

class FwcProgressLinearComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host * {
          box-sizing: border-box;
        }
        dt {
          color: var(--color-gray-one);
        }
        ol {
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
          display: flex;
          align-items: stretch;
        }
        li:last-child .connector {
          display: none;
        }
        li:last-child dl {
          border: none;
        }
        .check {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 0 100%;
          flex-grow: 1;
          flex-shrink: 0;
          flex-basis: 100%;
          height: calc(2.5 * var(--fwcu));
          width: calc(2.5 * var(--fwcu));
          margin-top: calc(1.75 * var(--fwcu));
          border-radius: 100%;
          border: 1px solid var(--color-gray-four);
        }
        .check svg {
          width: calc(1.75 * var(--fwcu));
          height: calc(1.75 * var(--fwcu));
          display: none;
        }
        .check.check-complete {
          border: 1px solid var(--color-alert-success);
          background: var(--color-alert-success);
        }
        .check.check-complete svg {
          display: block;
        }
        .connector {
          width: calc(0.25 * var(--fwcu));
          height: calc(100% - calc(4.5 * var(--fwcu)));
          margin: var(--fwcu) 0 var(--fwcu) calc(1.25 * var(--fwcu));
          padding: var(--fwcu) 0;
          background: var(--color-gray-four);
        }
        .connector.connector-complete {
          background: var(--color-alert-success);
        }
        dl {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          margin: 0 0 calc(0.75 * var(--fwcu)) calc(1.75 * var(--fwcu));
          padding-bottom: calc(0.75 * var(--fwcu));
          font-size: var(--default-font-size);
          border-bottom: 1px solid var(--color-gray-four, #cccccc);
        }
        dt strong {
          padding: calc(0.5 * var(--fwcu)) calc(1.5 * var(--fwcu)) calc(0.5 * var(--fwcu)) 0;
          line-height: calc(2.25 * var(--fwcu));
        }
        dd {
          margin-left: 0;
        }
        dd strong {
          white-space: nowrap;
          text-transform: uppercase;
          color: #fff;
          font-size: calc(1.25 * var(--fwcu));
          border-radius: calc(0.25 * var(--fwcu));
          line-height: 1;
          padding: calc(0.25 * var(--fwcu)) var(--fwcu);
          letter-spacing: 1px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      data: { type: Array },
      steps: { type: Array },
    };
  }

  constructor() {
    super();
    this.steps = [];
    this.data = null;
  }

  firstUpdated() {
    if (this.data) {
      this._buildSteps();
    }
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'data') {
        this._buildSteps();
      }
    });
  }

  _buildSteps() {
    const steps = html`${this.data.map((step) => {
      return html`
        <li aria-label="${step.state === 'success' ? 'complete' : 'incomplete'}">
          <div>
            <div class="check ${step.state === 'success' ? 'check-complete' : ''}">${this._drawCheckMark()}</div>
            <div class="connector ${step.state === 'success' ? 'connector-complete' : ''}"></div>
          </div>
          <dl>
            <dt>
              <strong>${step.label}</strong>
              <div>${step.date}</div>
            </dt>
            <dd>
              <span class="fwc-badge ${step.state}">
                <span class="sr-only">${step.label}</span>
                ${step.badge.replace('-', ' ')}
              </span>
            </dd>
          </dl>
        </li>
      `;
    })}`;
    this.steps = steps;
  }

  _drawCheckMark() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
        <polygon fill="#ffffff" points="40.771 7 19.443 26.724 9.229 17.197 0 26.109 18.365 43.545 19.443 44.5 20.519 43.545 50 15.912" />
      </svg>
    `;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/fwc-assets/styles/components/fwc-badges.css" />
      <ol>
        ${this.steps}
      </ol>
    `;
  }
}

customElements.define('fwc-progress-linear', FwcProgressLinearComponent);

class FwcProgressLinear extends FwcBase {
  constructor() {
    super('fwc-progress-linear', FwcProgressLinearComponent);
  }
}

class FwcProgressStandardComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: inline;
          color: var(--color-gray-one);
        }
        ol {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: var(--default-font-size);
        }
        li {
          flex: 0 0 33%;
          display: flex;
          align-items: center;
          position: relative;
        }
        li:last-child {
          flex: 0 0 auto;
        }
        div {
          height: calc(2.5 * var(--fwcu));
          width: calc(2.5 * var(--fwcu));
          background: white;
          border: 1px solid var(--color-primary);
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 0 0 auto;
        }
        div.complete {
          background: var(--color-primary);
        }
        svg {
          width: calc(1.5 * var(--fwcu));
          height: calc(1.5 * var(--fwcu));
          display: none;
        }
        div.complete svg {
          display: inline;
        }
        span {
          height: 2px;
          display: block;
          margin-left: calc(0.5 * var(--fwcu));
          margin-right: calc(0.5 * var(--fwcu));
          width: calc(100% - calc(3.5 * var(--fwcu)));
          background: var(--color-primary);
        }
        p {
          position: absolute;
          text-align: center;
          width: calc(15.5 * var(--fwcu));
          left: calc(-6.75 * var(--fwcu)); /*  15.5/2-1 */
          top: 100%;
          margin: 0;
          padding-top: var(--fwcu);
        }

        /* vertical */
        ol.vert {
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }
        ol.vert span {
          width: calc(0.25 * var(--fwcu));
          height: calc(100% - calc(3.75 * var(--fwcu)));
          margin: calc(0.5 * var(--fwcu)) 0;
          margin-left: calc(1.25 * var(--fwcu));
          /* box-sizing: content-box; */
        }
        ol.vert li {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
        }
        ol.vert p {
          top: 0;
          bottom: calc(50% - calc(1.5 * var(--fwcu))); /* centers border on vertical line, not parent. Takes into account half of check circle height) */
          padding: 0;
          width: calc(100% - calc(3 * var(--fwcu)));
          left: calc(4 * var(--fwcu));
          text-align: left;
          border-bottom: 1px solid var(--color-gray-four, #cccccc);
        }
        ol.vert li:last-child p {
          border-bottom: none;
        }
      `,
    ];
  }

  static get properties() {
    return {
      type: { type: String },
      data: { type: Array },
      steps: { type: Array },
    };
  }

  constructor() {
    super();
    this.type = 'horizontal';
    this.steps = [];
    this.data = null;
  }

  firstUpdated() {
    if (this.data) {
      this._buildSteps();
    }
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'data') {
        this._buildSteps();
      }
    });
  }

  _buildSteps() {
    const steps = html`${this.data.map((step) => {
      return html`
        <li aria-label="${step.complete ? 'complete' : 'incomplete'}">
          <div class=${step.complete ? 'complete' : ''}>${this._drawCheckMark()}</div>
          <span></span>
          <p>${step.label}</p>
        </li>
      `;
    })}`;
    this.steps = steps;
  }

  _drawCheckMark() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
        <polygon fill="#ffffff" points="40.771 7 19.443 26.724 9.229 17.197 0 26.109 18.365 43.545 19.443 44.5 20.519 43.545 50 15.912" />
      </svg>
    `;
  }

  render() {
    return html`
      <ol class="${this.type === 'vertical' ? 'vert' : ''}">
        ${this.steps}
      </ol>
    `;
  }
}

class FwcProgressStandard extends FwcBase {
  constructor() {
    super('fwc-progress-standard', FwcProgressStandardComponent);
  }
}

class FwcRailMessagesComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          position: absolute;
          top: 0;
          bottom: 0;
        }
        .hidden {
          display: none;
        }
        .fwc-sidebar-compose {
          width: 100%;
          padding-bottom: calc(2 * var(--fwcu));
        }
        .fwc-sidebar-element {
          padding-right: calc(2 * var(--fwcu));
          position: absolute;
          color: var(--color-gray-one);
          background: var(--color-white);
          width: calc(24 * var(--fwcu));
          transition: width 200ms;
          transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
          border-right: 1px solid var(--color-gray-five);
          height: 100%;
          left: -1px;
          top: -1px;
        }
        .fwc-nav-toggle {
          padding: 0;
          border: none;
          background-color: white;
          width: 100%;
        }
        .fwc-nav-toggle:focus {
          outline: none;
        }
        .fwc-arrow-long-right {
          transition: transform 300ms;
          transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
          display: inline-block;
        }
        .fwc-arrow-long-right svg {
          fill: var(--color-gray-three);
          width: calc(2 * var(--fwcu));
          height: calc(2 * var(--fwcu));
        }
        @media screen and (max-width: 600px) {
          .hidden {
            display: inline-block;
          }
          .fwc-sidebar-compose {
            padding-bottom: 0;
            padding-top: calc(2 * var(--fwcu));
            border: none;
          }
          .fwc-sidebar-element {
            width: calc(4 * var(--fwcu));
          }
          .fwc-sidebar-element.open {
            width: calc(25 * var(--fwcu));
            z-index: 2;
            border-radius: 0 calc(2 * var(--fwcu)) calc(2 * var(--fwcu)) 0;
          }
          .fwc-sidebar-element.open .fwc-nav-toggle {
            text-align: right;
          }
          .open .fwc-arrow-long-right {
            position: absolute;
            top: 15px;
            right: -30px;
          }
          .open .fwc-arrow-long-right svg {
            fill: var(--color-white);
          }
          .open.fwc-sidebar-element::before {
            content: '';
            position: fixed;
          }
          .open .fwc-icon-wrapper {
            overflow: hidden;
          }
          .open .fwc-icon-wrapper > div {
            width: calc(22.5 * var(--fwcu));
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      mobileToggle: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.mobileToggle = false;
  }

  toggleMobileNav() {
    this.mobileToggle = !this.mobileToggle;
    const event = new CustomEvent(`fwc-rail-messages-toggle`, {
      detail: this,
      bubbles: true,
      mobileToggle: this.mobileToggle,
    });
    this.dispatchEvent(event);
  }
  /* eslint-enable no-console */

  _svg() {
    return html` <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
      <polygon points="30.784 5 27.778 8.007 41.961 22.19 0 22.19 0 26.373 41.961 26.373 27.778 40.556 30.784 43.562 48.562 25.784 50 24.281 48.562 22.778" />
    </svg>`;
  }

  _closeSvg() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
        <polygon points="3.523 50 0 46.477 21.477 25 0 3.523 3.523 0 25 21.477 46.477 0 50 3.523 28.523 25 50 46.477 46.477 50 25 28.523" />
      </svg>
    `;
  }

  render() {
    return html`
      <div class="fwc-sidebar-element ${this.mobileToggle ? 'open' : ''}">
        <div class="fwc-sidebar-compose">
          <button class="fwc-nav-toggle hidden" @click="${this.toggleMobileNav}">
            <span class="fwc-arrow-long-right">${this.mobileToggle ? this._closeSvg() : this._svg()}</span>
            <span class="sr-only">Toggle Nav</span>
          </button>
        </div>
        <div class="fwc-icon-wrapper">
          <div>
            <slot name="fwc-sidebar-header" id="FwcSidebarHeaderSlot"></slot>
            <slot name="fwc-sidebar-icons-list" id="FwcSidebarIconsSlot"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

class FwcRailMessages extends FwcBase {
  constructor() {
    super('fwc-rail-messages', FwcRailMessagesComponent);
  }
}

class FwcRailTabProgressComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          height: 100%;
        }
        .fwc-rail-tabs {
          color: var(--color-gray-one);
          display: flex;
          flex: 1;
          flex-direction: column;
          flex: 1;
        }
        .fwc-rail-tab {
          flex: 1 1 auto;
          padding: calc(2.5 * var(--fwcu));
          background: transparent;
          text-decoration: none;
          text-align: inherit;
          cursor: pointer;
          border: 1px solid var(--color-gray-four);
          border-top: none;
          position: relative;
          color: var(--color-gray-one);
        }
        .fwc-rail-tab:first-of-type {
          border-top: 1px solid var(--color-gray-four);
        }
        .fwc-rail-cont {
          display: flex;
        }
        .fwc-rail-tab.is-active {
          background: linear-gradient(to left, rgba(var(--color-rgb-gray-six), 0.75), var(--color-white));
          font-weight: bold;
        }
        .fwc-rail-tab.is-active::after {
          content: '';
          border-left: calc(0.625 * var(--fwcu)) solid var(--color-primary);
          width: calc(0.625 * var(--fwcu));
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
        }
        .fwc-rail-tab:hover {
          background: linear-gradient(to left, rgba(var(--color-rgb-gray-six), 0.75), var(--color-white));
        }
        .fwc-rail-tab:hover::after {
          content: '';
          border-left: calc(0.25 * var(--fwcu)) solid var(--color-primary);
          width: calc(0.25 * var(--fwcu));
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
        }
        .fwc-status-bar {
          height: calc(2.5 * var(--fwcu));
          width: calc(2.5 * var(--fwcu));
          background: var(--color-white);
          border: 1px solid var(--color-primary);
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 0 0 auto;
        }
        .fwc-status-bar.complete {
          background: var(--color-primary);
        }
        svg {
          width: calc(1.5 * var(--fwcu));
          height: calc(1.5 * var(--fwcu));
          display: none;
        }
        .fwc-status-bar.complete svg {
          display: inline;
        }
        .fwc-sideLeft {
          padding-right: calc(2 * var(--fwcu));
        }
        .fwc-sideRight p {
          margin: 0 0 calc(0.5 * var(--fwcu)) 0;
          font-size: var(--default-font-size);
          line-height: calc(2.75 * var(--fwcu));
        }
        .fwc-badge {
          display: inline-block;
          min-width: calc(1.25 * var(--fwcu));
          padding: calc(0.5 * var(--fwcu)) calc(1 * var(--fwcu));
          font-weight: bold;
          color: var(--color-white);
          vertical-align: middle;
          white-space: nowrap;
          text-align: center;
          background-color: var(--color-primary);
          border-radius: calc(0.25 * var(--fwcu));
          font-weight: 700;
          text-transform: uppercase;
          font-size: calc(1.25 * var(--fwcu));
          margin-bottom: calc(1 * var(--fwcu));
        }
        @media (max-width: 600px) {
          .fwc-rail-tabs {
            margin-bottom: calc(2 * var(--fwcu));
          }
        }
      `,
    ];
  }

  // TODO: Aria live / region, ets
  static get properties() {
    return {
      data: { type: Array },
      current: { type: String },
      labelProgress: { attribute: 'label-progress', type: String },
    };
  }

  constructor() {
    super();
    this.data = [];
    this.labelProgress = 'in progress';
  }

  _drawCheckMark() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" focusable="false">
        <polygon fill="#ffffff" points="40.771 7 19.443 26.724 9.229 17.197 0 26.109 18.365 43.545 19.443 44.5 20.519 43.545 50 15.912" />
      </svg>
    `;
  }

  _onButtonClick(rail) {
    if (rail !== this.current) {
      this.current = rail;
    }
    const event = new CustomEvent(`fwc-rail-tab-clicked`, {
      detail: this,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  firstUpdated() {
    let ele = this.data.find((item) => item.selected);
    this.current = ele && ele.id;
  }

  _buildBadge() {
    return html`<div class="fwc-badge">${this.labelProgress}</div>`;
  }

  _buildTabs() {
    const data = html`${this.data.map((rail) => {
      let selected = rail.id === this.current;
      return html`
        <button type="button" role="tab" aria-setsize="${this.data.length}" aria-controls="fwc-rail-tab_${rail.id}" aria-selected="${selected}" aria-label="${rail.ariaLabel ? rail.ariaLabel : ''}" aria-labelledby="${rail.id}" id="fwc-rail-tab-${rail.id}" class="${selected ? 'is-active' : ''} fwc-rail-tab" @click="${() => this._onButtonClick(rail.id)}">
          <div class="fwc-rail-cont">
            <div class="fwc-sideLeft">
              <div class="${rail.status === 'complete' ? 'complete' : ''} fwc-status-bar" aria-label="${rail.status === 'complete' ? 'Completed' : 'Not Completed'}">${this._drawCheckMark()}</div>
            </div>
            <div class="fwc-sideRight">
              ${rail.status === 'inProgress' ? this._buildBadge() : ''}
              <p>${rail.title}</p>
              <p class="fwc-rail-title-cont">${rail.description}</p>
            </div>
          </div>
        </button>
      `;
    })}`;
    return data;
  }

  render() {
    return html` <div class="fwc-rail-tabs" role="tablist">${this._buildTabs()}</div> `;
  }
}

class FwcRailTabProgress extends FwcBase {
  constructor() {
    super('fwc-rail-tab-progress', FwcRailTabProgressComponent);
  }
}

class FwcScrubberComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .fwc-scrubber-wrapper {
          padding: 0 calc(1 * var(--fwcu)) calc(8 * var(--fwcu)) calc(1 * var(--fwcu));
          display: block;
          width: 100%;
        }
        fieldset {
          padding: 0;
          margin: 0;
          border: 0;
          min-width: 0;
        }
        .fwc-scrubber-slider-wrapper {
          height: calc(4 * var(--fwcu));
          position: relative;
          transition: all 250ms ease;
        }
        .fwc-scrubber-chip {
          height: calc(4 * var(--fwcu));
          width: calc(4 * var(--fwcu));
          border-radius: 50%;
          position: absolute;
          top: 3px;
          padding: 0;
          margin: 0;
          box-shadow: var(--box-shadow);
          border: 1px solid transparent;
          appearance: none;
          margin-left: calc(-2 * var(--fwcu));
          overflow: visible;
          cursor: grab;
          cursor: -webkit-grab;
          background-color: var(--color-gray-four);
        }
        .fwc-scrubber-chip.last-active {
          z-index: 10;
        }
        .fwc-scrubber-chip.active {
          cursor: grabbing;
          cursor: -webkit-grabbing;
          z-index: 10;
        }
        .fwc-scrubber-chip:focus {
          border: 1px solid var(--color-primary);
          outline: none;
          box-shadow: none;
        }
        .fwc-scrubber-chip.pass-through {
          pointer-events: none;
        }
        .fwc-scrubber-bar {
          position: absolute;
          border-radius: calc(0.5 * var(--fwcu));
          border-bottom: calc(1.25 * var(--fwcu)) solid var(--color-gray-five);
          top: calc(2 * var(--fwcu));
          width: 100%;
        }
        .fwc-scrubber-range {
          position: absolute;
          top: calc(2 * var(--fwcu));
          background-color: var(--color-primary);
          border-radius: calc(0.5 * var(--fwcu));
          height: calc(1.25 * var(--fwcu));
        }
        .fwc-scrubber-range-labels {
          display: flex;
          justify-content: space-between;
          font-size: calc(1.75 * var(--fwcu));
          color: var(--color-gray-one);
          margin-top: calc(3 * var(--fwcu));
        }
        .fwc-scrubber-wrapper.hide,
        .fwc-scrubber-wrapper .hide {
          display: none;
        }
        .fwc-arrow-box {
          position: absolute;
          top: calc(-9.25 * var(--fwcu));
          left: calc(-2.5 * var(--fwcu));
          background: var(--color-white);
          border: 1px solid var(--color-primary);
          padding: calc(0.75 * var(--fwcu));
          min-width: calc(8.75 * var(--fwcu));
          height: calc(6.75 * var(--fwcu));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: calc(2.25 * var(--fwcu));
          color: var(--color-gray-one);
        }
        .fwc-arrow-box:after,
        .fwc-arrow-box:before {
          top: 100%;
          left: 50%;
          border: solid transparent;
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }
        .fwc-arrow-box:after {
          border-color: transparent;
          border-top-color: var(--color-white);
          border-width: calc(1.25 * var(--fwcu));
          margin-left: calc(-1.25 * var(--fwcu));
        }
        .fwc-arrow-box:before {
          border-color: transparent;
          border-top-color: var(--color-primary);
          border-width: calc(1.375 * var(--fwcu));
          margin-left: calc(-1.375 * var(--fwcu));
        }
        svg {
          fill: var(--color-white);
          position: absolute;
          width: 100%;
          top: -1px;
          left: 0px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      isPercent: { attribute: 'is-percent', type: Boolean },
      hideHandleLabel: { attribute: 'hide-handle-label', type: Boolean },
      range: { type: Array },
      rangeLabel: { attribute: 'range-label', type: String },
      leftChipValue: { attribute: 'left-chip', type: Number },
      rightChipValue: { attribute: 'right-chip', type: Number },
      screenReaderCaption: { attribute: 'screen-reader-caption', type: String },
      dataAnalyticsMin: { attribute: 'data-analytics-min', type: String },
      dataAnalyticsMax: { attribute: 'data-analytics-max', type: String },
      hideRangeLabel: { attribute: 'hide-range-label', type: Boolean },
      labelAriaLabelledby: { attribute: 'label-aria-labelledby', type: String },
    };
  }

  constructor() {
    super();

    this.SCALE_MIN = 0;
    this.SCALE_MAX = 100;
    this.isPercent = false;

    // the scale values are in relation to %, 0 to 100% of the bar
    // we adjust these based on the custom range in initValues()
    this.minScale = this.SCALE_MIN;
    this.maxScale = this.SCALE_MAX;

    // the adjusted values are used to display the adjusted value for a custom range other than 0 - 100
    // we are not changing the scale, just the numbers that are displayed/output
    this.displayMinValue = this.SCALE_MIN;
    this.displayMaxValue = this.SCALE_MAX;

    // active property true on mousedown and false on mouseup
    this.isLeftChipActive = false;
    this.isRightChipActive = false;
    // total width of slider bar in px
    this.totalWidth;
    // distance between slider bar and left edge of document
    this.offSetLeft;
    //the last chip/handle that was used, used to position chips on top off each other
    this.lastActive = null;

    this.rangeMinimum;
    this.rangeMaximum;
    this.stepSize = 1;
    this.hasSingleChip = false;
    this.hasValidInputs = true;
    this.isScaleHidden = false;
    this.elementRef = '';
    this.barContainerRef = '';
    this.isDragging = false;
    this.rangeLabel = '';
    this.screenReaderCaption = '';
    this.hideHandleLabel = false;
    this.dataAnalyticsMin = '';
    this.hideRangeLabel = false;
    this.dataAnalyticsMax = '';
  }

  firstUpdated() {
    this.initDragging();
    this.setWidthProperties = this.setWidthProperties.bind(this);
    window.addEventListener('resize', this.setWidthProperties);

    this.elementRef = this;
    this.barContainerRef = this.shadowRoot.querySelector('.fwc-scrubber-barContainer');
    this.initValues();
    this.validateInputs();
    if (this.hasValidInputs) {
      this.isScaleHidden = false;
      this.initOptions();
      this.setWidthProperties();
    } else {
      this.isScaleHidden = true;
    }
  }

  initDragging() {
    const leftChip = this.shadowRoot.querySelector('.fwc-left-chip') || null;
    const rightChip = this.shadowRoot.querySelector('.fwc-right-chip') || null;
    let isDraggingLeftChip = false;
    let isDraggingRightChip = false;

    this.addEventListener('mousedown', (e) => {
      isDraggingLeftChip = e.composedPath().some((path) => path === leftChip);
      isDraggingRightChip = e.composedPath().some((path) => path === rightChip);
      if (isDraggingLeftChip || isDraggingRightChip) {
        this.isDragging = true;
      }
    });
    this.addEventListener('touchstart', (e) => {
      // https://stackoverflow.com/questions/7056026/variation-of-e-touches-e-targettouches-and-e-changedtouches
      if (e.changedTouches && e.changedTouches.length == 1) {
        isDraggingLeftChip = e.composedPath().some((path) => path === leftChip);
        isDraggingRightChip = e.composedPath().some((path) => path === rightChip);
        if (isDraggingLeftChip || isDraggingRightChip) {
          this.isDragging = true;
        }
      }
    });
    this.addEventListener('mousemove', (e) => {
      if (this.isDragging && (isDraggingLeftChip || isDraggingRightChip)) {
        this.handleChipMove(e, isDraggingLeftChip ? 'min' : 'max');
      }
    });
    this.addEventListener(
      'touchmove',
      (e) => {
        if (e.changedTouches && e.changedTouches.length == 1) {
          if (this.isDragging && (isDraggingLeftChip || isDraggingRightChip)) {
            e.preventDefault();
            this.handleChipMove(e, isDraggingLeftChip ? 'min' : 'max');
          }
        }
      },
      { passive: false }
    );
    this.addEventListener('mouseup', () => {
      this.isDragging = false;
      if (isDraggingLeftChip || isDraggingRightChip) {
        this.dispatchChipPositions();
      }
      isDraggingLeftChip = false;
      isDraggingRightChip = false;
    });
    this.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches.length == 1) {
        this.isDragging = false;
        if (isDraggingLeftChip || isDraggingRightChip) {
          this.dispatchChipPositions();
        }
        isDraggingLeftChip = false;
        isDraggingRightChip = false;
      }
    });
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.setWidthProperties);
    super.disconnectedCallback();
  }

  initValues() {
    this.leftChipValue = this.leftChipValue !== undefined ? parseInt(this.leftChipValue) : undefined;
    this.rightChipValue = this.rightChipValue !== undefined ? parseInt(this.rightChipValue) : undefined;

    // allows for custom range other than 0 - 100
    this.rangeMinimum = this.range ? this.range[0] : this.SCALE_MIN;
    this.rangeMaximum = this.range ? this.range[1] : this.SCALE_MAX;

    //hide the min chip if no value is passed
    this.hasSingleChip = this.leftChipValue === undefined;

    // the min and max values set by the project, will default to 0 and 100
    this.leftChipValue = this.leftChipValue !== undefined || null ? this.leftChipValue : this.rangeMinimum;
    this.rightChipValue = this.rightChipValue !== undefined ? this.rightChipValue : this.rangeMaximum;

    // the base values are used to keep the slider scale from 0 - 100
    this.minScale = ((this.leftChipValue - this.rangeMinimum) / (this.rangeMaximum - this.rangeMinimum)) * 100;
    this.maxScale = ((this.rightChipValue - this.rangeMinimum) / (this.rangeMaximum - this.rangeMinimum)) * 100;

    // Move Chip in stepSize increments;
    this.stepSize = 100 / (this.rangeMaximum - this.rangeMinimum);

    this.setDisplayValues();
  }

  initOptions() {
    // set fieldset legend caption for screen readers
    this.screenReaderCaption = this.screenReaderCaption ? this.screenReaderCaption : 'use arrow keys to set minimum and maximum slider values';
    // set data-analytics attributes
    this.dataAnalyticsMin = this.dataAnalyticsMin || '';
    this.dataAnalyticsMax = this.dataAnalyticsMax || '';
    // set aria-ariaLabelledby attribute
    this.labelAriaLabelledby = this.labelAriaLabelledby || '';
  }

  // DOM event handlers
  handleChipMove(e, chip) {
    const val = chip === 'min' ? 'minScale' : 'maxScale';
    const valActive = chip === 'min' ? 'isLeftChipActive' : 'isRightChipActive';
    const valActiveAlt = chip === 'min' ? 'isRightChipActive' : 'isLeftChipActive';

    this.lastActive = chip;
    this.offSetLeft = this.calculateOffset(this.elementRef);

    if (this.isDragging) {
      this[valActive] = true;
      this[valActiveAlt] = false;
      let offsetInPixels;

      if (e.type === 'touchmove') {
        offsetInPixels = e.changedTouches[0].pageX - this.offSetLeft;
      } else {
        offsetInPixels = e.clientX - this.offSetLeft;
      }

      let offsetPercentage = (offsetInPixels / this.totalWidth) * 100;

      if (this.canMove(offsetPercentage)) {
        this[val] = offsetPercentage;
      } else {
        this.handleChipOverlap(offsetPercentage, chip);
        this.handleChipRangeEnds(offsetPercentage, chip);
      }

      this.setDisplayValues();
      this.requestUpdate();
    }
  }

  handleChipOverlap(offsetPercentage, chip) {
    //lay the chips on top off each other when you drag past the other chip
    if (chip === 'min') {
      this.minScale = offsetPercentage > this.minScale ? this.maxScale : this.minScale;
    } else {
      this.maxScale = offsetPercentage < this.maxScale ? this.minScale : this.maxScale;
    }
  }

  handleChipRangeEnds(offsetPercentage, chip) {
    // position chip to very end of range if you drag outside the range/component/page
    const val = chip === 'min' ? 'minScale' : 'maxScale';
    const valAlt = chip === 'min' ? 'maxScale' : 'minScale';
    if (offsetPercentage >= 100 && this[val] > this[valAlt]) {
      this[val] = this.SCALE_MAX;
    }
    if (offsetPercentage <= 0 && this[val] < this[valAlt]) {
      this[val] = this.SCALE_MIN;
    }
  }

  handleSliderKey(e, chip) {
    //keyboard interaction to move the slider
    const val = chip === 'min' ? 'minScale' : 'maxScale';
    const valAlt = chip === 'min' ? 'maxScale' : 'minScale';
    const valActive = chip === 'min' ? 'isLeftChipActive' : 'isRightChipActive';
    const valActiveAlt = chip === 'min' ? 'isRightChipActive' : 'isLeftChipActive';
    let newPos = 0;

    this[valActive] = true;
    this[valActiveAlt] = false;
    this.lastActive = chip;
    switch (e.key) {
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        newPos = Math.round(((this[val] - this.stepSize) * 100) / 100);
        if (this.canMove(newPos) && newPos >= this.SCALE_MIN) {
          this[val] -= this.stepSize;
          this.setDisplayValues();
        }
        e.preventDefault();
        break;
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        newPos = Math.round(((this[val] + this.stepSize) * 100) / 100);
        if (this.canMove(newPos) && newPos <= this.SCALE_MAX) {
          this[val] += this.stepSize;
          this.setDisplayValues();
        }
        e.preventDefault();
        break;
      case 'Home':
        if (this.hasSingleChip || chip === 'min') {
          this[val] = this.SCALE_MIN;
        }
        if (chip === 'max') {
          this[val] = this.canMove(this.SCALE_MIN) ? this.SCALE_MIN : this[valAlt];
        }
        this.setDisplayValues();
        e.preventDefault();
        break;
      case 'End':
        if (this.hasSingleChip || chip === 'max') {
          this[val] = this.SCALE_MAX;
        }
        if (chip === 'min') {
          this[val] = this.canMove(this.SCALE_MAX) ? this.SCALE_MAX : this[valAlt];
        }
        this.setDisplayValues();
        e.preventDefault();
        break;
      case 'PageUp':
        newPos = Math.round(((this[val] + this.stepSize * 10) * 100) / 100);
        if (chip === 'min') {
          this[val] = this.canMove(newPos) ? this[val] + this.stepSize * 10 : this[valAlt];
        } else {
          this[val] = this.canMove(newPos) ? this[val] + this.stepSize * 10 : this.SCALE_MAX;
        }
        this.setDisplayValues();
        e.preventDefault();
        break;
      case 'PageDown':
        newPos = Math.round(((this[val] - this.stepSize * 10) * 100) / 100);
        if (chip === 'max') {
          this[val] = this.canMove(newPos) ? this[val] - this.stepSize * 10 : this[valAlt];
        } else {
          this[val] = this.canMove(newPos) ? this[val] - this.stepSize * 10 : this.SCALE_MIN;
        }
        this.setDisplayValues();
        e.preventDefault();
        break;
    }

    this.dispatchChipPositions();
  }

  canMove(newPos) {
    let canMove = true;

    //only one chip handler active
    if (this.hasSingleChip) {
      canMove = newPos >= this.SCALE_MIN && newPos <= this.SCALE_MAX;
      return canMove;
    }

    //if 2 chip handlers are active
    if (this.isLeftChipActive) {
      canMove = newPos >= this.SCALE_MIN && newPos <= this.maxScale;
    } else {
      canMove = newPos <= this.SCALE_MAX && newPos >= this.minScale;
    }

    return canMove;
  }

  setWidthProperties() {
    this.totalWidth = this.barContainerRef && this.barContainerRef.clientWidth;
  }

  setDisplayValues() {
    const range = this.rangeMaximum - this.rangeMinimum;
    if (this.isPercent) {
      this.displayMinValue = Math.round(this.minScale);
      this.displayMaxValue = Math.round(this.maxScale);
    } else {
      this.displayMinValue = Math.round((this.minScale * range) / 100 + this.rangeMinimum);
      this.displayMaxValue = Math.round((this.maxScale * range) / 100 + this.rangeMinimum);
    }

    this.requestUpdate();
  }

  dispatchChipPositions() {
    this.dispatchEvent(
      new CustomEvent('fwc-scrubber-values', {
        detail: { min: this.displayMinValue, max: this.displayMaxValue },
        bubbles: true,
        displayMinValue: this.displayMinValue,
      })
    );
  }

  updateChip(activeChip) {
    if (activeChip === 'leftChip') {
      this.isLeftChipActive = false;
    } else {
      this.isRightChipActive = false;
    }
    this.requestUpdate();
  }

  setFocus(e) {
    setTimeout(() => {
      e && e.target && e.target.focus();
    }, 0);
  }

  calculateOffset(elementRef) {
    const rect = elementRef.getBoundingClientRect();
    return rect.left;
  }

  handleRangeClick(e) {
    //clicks inside of range bar

    this.offSetLeft = this.calculateOffset(this.elementRef);
    const offsetInPixels = e.clientX - this.offSetLeft;
    const offsetPercentage = (offsetInPixels / this.totalWidth) * 100;

    if (Math.abs(offsetPercentage - this.minScale) < Math.abs(offsetPercentage - this.maxScale) && !this.hasSingleChip) {
      this.minScale = offsetPercentage;
    } else {
      this.maxScale = offsetPercentage;
    }

    this.setDisplayValues();
    this.dispatchChipPositions();
  }

  handleBarClick(e) {
    //clicks outside of range bar
    this.offSetLeft = this.calculateOffset(this.elementRef);
    const offsetInPixels = e.clientX - this.offSetLeft;
    const offsetPercentage = (offsetInPixels / this.totalWidth) * 100;

    if (offsetPercentage < this.minScale && !this.hasSingleChip) {
      this.minScale = offsetPercentage;
    } else {
      this.maxScale = offsetPercentage;
    }

    this.setDisplayValues();
    this.dispatchChipPositions();
  }

  /* eslint-disable no-console */
  validateInputs() {
    const isLeftChipNaN = isNaN(parseInt(this.leftChipValue));
    const isRightChipNaN = isNaN(parseInt(this.rightChipValue));

    // checks if range is in correct tuple (min, max) format;
    try {
      if (this.rangeMinimum > this.rangeMaximum) {
        this.hasValidInputs = false;
        throw new Error(
          `Range minimum (${this.rangeMinimum}) must be less than range maximum (${this.rangeMaximum}) \n
          Did you mean [${this.rangeMaximum}, ${this.rangeMinimum}]?
          `
        );
      }
    } catch (error) {
      console.error(error);
      return;
    }
    // checks if left chip value is a number
    try {
      if (isLeftChipNaN) {
        this.hasValidInputs = false;
        throw new Error('Invalid type given for left chip value.');
      }
    } catch (error) {
      console.error(error);
      return;
    }
    // checks if right chip value is a number
    try {
      if (isRightChipNaN) {
        this.hasValidInputs = false;
        throw new Error('Invalid type given for right chip value.');
      }
    } catch (error) {
      console.error(error);
      return;
    }
    // checks if left chip start val is within the specified range
    try {
      if (this.leftChipValue < this.rangeMinimum || this.leftChipValue > this.rangeMaximum) {
        this.hasValidInputs = false;
        throw new Error(`Left chip start value (${this.leftChipValue}) must be within range (${this.rangeMinimum} ~ ${this.rangeMaximum}).`);
      }
    } catch (error) {
      console.error(error);
    }
    // checks if left chip start val is less than right chip start val
    try {
      if (this.leftChipValue > this.rightChipValue) {
        this.hasValidInputs = false;
        throw new Error(`Left chip value (${this.leftChipValue}) needs to be less than right chip start value (${this.rightChipValue}).`);
      }
    } catch (error) {
      console.error(error);
      return;
    }
    // checks if right chip start val is greater than left chip start val
    try {
      if (this.rightChipValue < this.leftChipValue) {
        this.hasValidInputs = false;
        throw new Error(`Right chip value (${this.rightChipValue}) needs to be greater than left chip start value (${this.leftChipValue}).`);
      }
    } catch (error) {
      console.error(error);
    }
    // checks if right chip start val is within  the specified range
    try {
      if (this.rightChipValue > this.rangeMaximum || this.rightChipValue < this.rangeMinimum) {
        this.hasValidInputs = false;
        throw new Error(`Right chip start value (${this.rightChipValue}) must be within range (${this.rangeMinimum} ~ ${this.rangeMaximum}).`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  /* eslint-enable no-console */

  _drawChipSvg() {
    return html`
      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" focusable="false">
        <path d="M16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 Z M16,7 C14.9456382,7 14.0818349,7.81587779 14.0054857,8.85073766 L14,9 L14,24 C14,25.1045695 14.8954305,26 16,26 C17.0543618,26 17.9181651,25.1841222 17.9945143,24.1492623 L18,24 L18,9 C18,7.8954305 17.1045695,7 16,7 Z M8,11 C6.9456382,11 6.08183488,11.8158778 6.00548574,12.8507377 L6,13 L6,20 C6,21.1045695 6.8954305,22 8,22 C9.0543618,22 9.91816512,21.1841222 9.99451426,20.1492623 L10,20 L10,13 C10,11.8954305 9.1045695,11 8,11 Z M24,11 C22.9456382,11 22.0818349,11.8158778 22.0054857,12.8507377 L22,13 L22,20 C22,21.1045695 22.8954305,22 24,22 C25.0543618,22 25.9181651,21.1841222 25.9945143,20.1492623 L26,20 L26,13 C26,11.8954305 25.1045695,11 24,11 Z" />
      </svg>
    `;
  }

  render() {
    return html`
      <div class="fwc-scrubber-wrapper ${this.isScaleHidden && 'hide'}">
        <fieldset>
          <legend class="sr-only">${this.screenReaderCaption}</legend>

          <div class="fwc-scrubber-slider-wrapper">
            <div class="fwc-scrubber-barContainer" #barContainerRef>
              <div class="fwc-scrubber-bar" @click="${(event) => this.handleBarClick(event)}"></div>
              <div class="fwc-scrubber-range" @click="${(event) => this.handleRangeClick(event)}" style="left: ${this.minScale}%; right:${100 - this.maxScale}% "></div>
            </div>

            <div role="slider" tabindex="0" style="left: ${this.minScale}%" class="fwc-left-chip fwc-scrubber-chip min ${this.hasSingleChip ? 'hide' : ''} ${this.isLeftChipActive ? 'active' : ''} ${this.lastActive === 'min' ? 'last-active' : ''}" @keydown="${(event) => this.handleSliderKey(event, 'min')}" @blur="${() => this.updateChip('leftChip')}" @focusout="${() => this.updateChip('leftChip')}" @mousedown="${(event) => this.setFocus(event)}" aria-valuemax="${this.rangeMaximum}" aria-valuemin="${this.rangeMinimum}" aria-valueNow="${this.displayMinValue}" aria-disabled="${this.hasSingleChip}" aria-valueText="${this.isPercent ? this.displayMinValue + ' Percent' : this.displayMinValue}" aria-labelledBy="${this.labelAriaLabelledby}" data-analytics="${this.dataAnalyticsMin}" aria-orientation="horizontal">
              ${this._drawChipSvg()}
              <span class="fwc-arrow-box ${this.hideHandleLabel ? 'hide' : ''}" role="presentation">
                <span class="left-chip-val">${this.displayMinValue}</span>
                ${this.isPercent ? html`%` : ''}
              </span>
            </div>

            <div role="slider" tabindex="0" style="left: ${this.maxScale}%" class="fwc-right-chip fwc-scrubber-chip max ${this.isRightChipActive ? 'active' : ''} ${this.lastActive === 'max' ? 'last-active' : ''}" @keydown="${(event) => this.handleSliderKey(event, 'max')}" @blur="${() => this.updateChip('rightChip')}" @focusout="${() => this.updateChip('rightChip')}" @mousedown="${(event) => this.setFocus(event)}" aria-valuemax="${this.rangeMaximum}" aria-valuemin="${this.rangeMinimum}" aria-valueNow="${this.displayMaxValue}" aria-disabled="false" aria-valueText="${this.isPercent ? this.displayMaxValue + ' Percent' : this.displayMaxValue}" aria-labelledBy="${this.labelAriaLabelledby}" data-analytics="${this.dataAnalyticsMax}" aria-orientation="horizontal">
              ${this._drawChipSvg()}
              <span class="fwc-arrow-box ${this.hideHandleLabel ? 'hide' : ''}" role="presentation">
                <span class="right-chip-val">${this.displayMaxValue}</span>
                ${this.isPercent ? html`%` : ''}
              </span>
            </div>
          </div>

          <div class="fwc-scrubber-range-labels ${this.hideRangeLabel ? 'hide' : ''}">
            <span class="min">${this.rangeMinimum} ${this.rangeLabel}</span>
            <span class="max">${this.rangeMaximum} ${this.rangeLabel}</span>
          </div>
        </fieldset>
      </div>
    `;
  }
}

class FwcScrubber extends FwcBase {
  constructor() {
    super('fwc-scrubber', FwcScrubberComponent);
  }
}

class FwcTabsComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        .slot-container {
          display: none;
        }
        .slot-container.selected {
          display: block;
        }
        :host > div {
          display: flex;
          align-items: stretch;
          justify-content: flex-start;
        }
        section {
          padding: calc(1.25 * var(--fwcu));
          padding-top: calc(2.75 * var(--fwcu));
        }
        button {
          flex: 1 1 auto;
          background: white;
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
          padding: calc(1.5 * var(--fwcu)) var(--fwcu);
          border-right: none;
          margin: 0;
          border-radius: 0;
          cursor: pointer;
          position: relative;
          font-family: var(--font-sans-serif);
          font-size: calc(2 * var(--fwcu));
          font-weight: 600;
        }
        button:first-child {
          border-top-left-radius: var(--border-radius);
          border-bottom-left-radius: var(--border-radius);
        }
        button:last-child {
          border-right: 1px solid var(--color-primary);
          border-top-right-radius: var(--border-radius);
          border-bottom-right-radius: var(--border-radius);
        }
        button.selected {
          background: var(--color-primary);
          color: white;
        }
        button:hover:not(.selected) {
          background-image: linear-gradient(180deg, rgba(var(--color-rgb-black), 0), rgba(var(--color-rgb-black), 0.2)), linear-gradient(180deg, var(--color-primary), var(--color-primary));
          color: white;
        }
      `,
    ];
  }

  static get properties() {
    return {
      tabs: { type: Array },
      current: { type: String },
      labelAriaTabList: { attribute: 'label-aria-tab-list', type: String },
    };
  }

  constructor() {
    super();
    this.tabs = [];
  }

  // TODO: Broadcast tab change event

  firstUpdated() {
    this.current = this.tabs[0].title;
  }

  _onButtonClick(tab) {
    if (tab.title !== this.current) {
      this.current = tab.title;
    }
  }

  _buildSlots() {
    const slots = html`${this.tabs.map((slot) => {
      return html`
        <div class="slot-container ${slot.title === this.current ? 'selected' : ''}">
          <slot aria-labelledby="fwcTabBtn_${slot.title}" role="tabpanel" id="fwcTabBody_${slot.title}" name="fwc-tab-${slot.title}"></slot>
        </div>
      `;
    })}`;

    return slots;
  }

  _buildTabs() {
    const tabs = html`${this.tabs.map((tab) => {
      const selected = tab.title === this.current;
      const title = tab.title.replace(/-/g, ' ');
      return html` <button id="fwcTabBtn_${tab.title}" type="button" role="tab" aria-setsize="${this.tabs.length}" aria-selected="${selected}" aria-controls="fwcTabBody_${tab.title}" aria-label="${tab.title}" class="${selected ? 'selected' : ''}" @click="${() => this._onButtonClick(tab)}">${title}</button> `;
    })}`;
    return tabs;
  }

  render() {
    return html`
      <div role="tablist" aria-label="${this.labelAriaTabList}">${this._buildTabs()}</div>
      <section>${this._buildSlots()}</section>
    `;
  }
}

class FwcTabs extends FwcBase {
  constructor() {
    super('fwc-tabs', FwcTabsComponent);
  }
}

class FwcTimelineComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        @keyframes dot {
          0% {
            width: 0;
            height: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: calc(2.5 * var(--fwcu));
            height: calc(2.5 * var(--fwcu));
          }
        }

        @keyframes info {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        :host {
          position: relative;
        }

        .dot-container,
        .info-container {
          width: 100%;
          position: relative;
          height: calc(2.5 * var(--fwcu));
        }

        .info-container {
          bottom: 0;
          background: none;
        }

        .bar-container {
          background-color: var(--color-gray-five);
          position: absolute;
          width: 100%;
          height: calc(2.5 * var(--fwcu));
        }

        .info {
          position: absolute;
          display: flex;
          justify-content: center;
          flex-direction: column;
          top: calc(-5 * var(--fwcu));
          text-align: center;
          margin: 0;
          font-size: var(--default-font-size);
          width: calc(19 * var(--fwcu));
          color: var(--color-gray-one);
          animation-name: info;
          animation-fill-mode: both;
          animation-duration: 500ms;
          animation-delay: 750ms;
          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
        .info span.date {
          padding: 0;
          margin: 0;
          line-height: 1;
          font-weight: 400;
        }

        .info:nth-of-type(odd) {
          top: calc(7.5 * var(--fwcu));
        }
        .info::after {
          content: '';
          left: calc(50% - 1px);
          position: absolute;
          width: calc(0.25 * var(--fwcu));
          height: calc(3 * var(--fwcu));
          background-color: var(--color-alert-info);
        }
        .info.urgent::after {
          background-color: var(--color-alert-error);
        }

        .info:nth-of-type(even)::after {
          top: 100%;
        }
        .info:nth-of-type(odd)::after {
          bottom: 100%;
        }

        .bar {
          height: calc(2.5 * var(--fwcu));
          background: var(--color-primary);
          position: absolute;
          width: 0%;
          transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
        }

        .bar.urgent {
          background-color: var(--color-alert-error);
        }

        .dot {
          position: absolute;
          background-color: none;
          border-style: solid;
          border-color: black;
          background-color: var(--color-white);
          border-color: var(--color-primary);
          border-radius: 50%;
          width: calc(2.5 * var(--fwcu));
          height: calc(2.5 * var(--fwcu));
          animation-name: dot;
          animation-fill-mode: both;
          animation-duration: 500ms;
          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
          transform-origin: center;
        }

        .dot.urgent {
          border-color: var(--color-util-one);
        }

        .dot:nth-of-type(2) {
          transition-delay: 100ms;
        }

        .dot:nth-of-type(3) {
          transition-delay: 200ms;
        }

        .dot:nth-of-type(4) {
          transition-delay: 300ms;
        }

        @media screen and (max-width: 600px) {
          ul {
            justify-content: center;
          }
          section.vertical {
            transform: rotate(90deg);
            transform-origin: center;
            margin-top: calc(18.75 * var(--fwcu)); /* 150px  */
            margin-bottom: calc(43.75 * var(--fwcu)); /* 350px  */
          }
          section.vertical .dot-container,
          section.vertical .info-container,
          section.vertical .bar-container {
            width: calc(62.5 * var(--fwcu));
            /* component is rotated 90 degrees with transform, width here is acting as height */
          }

          section.vertical .info {
            transform: rotate(-90deg);
          }
          section.vertical .info:nth-of-type(even) {
            top: calc(-12 * var(--fwcu));
          }
          section.vertical .info:nth-of-type(odd) {
            top: calc(12 * var(--fwcu));
          }

          section.vertical .info::after {
            top: calc(50% - 1px);
            height: calc(0.25 * var(--fwcu));
            width: calc(3 * var(--fwcu));
          }

          section.vertical .info:nth-of-type(even)::after {
            left: auto;
            right: 100%;
          }
          section.vertical .info:nth-of-type(odd)::after {
            left: auto;
            right: 0;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      milestones: { type: Array },
      vertical: { type: Boolean },
      title: { type: String },
      urgent: { type: Boolean },
      labelIncomplete: { attribute: 'label-incomplete', type: String },
      labelComplete: { attribute: 'label-complete', type: String },
    };
  }

  constructor() {
    super();
    this.milestones = [];
    this.vertical = false;
    this.title = 'milestones';
    this.urgent = false;
    this.labelIncomplete = 'incomplete';
    this.labelComplete = 'complete';
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === 'milestones' && oldVal !== newVal) {
      this._renderMilestones();
    }
  }

  updated() {
    this._animateItems();
  }

  _renderMilestones() {
    const count = this.milestones.length - 1;
    const percent = 100 / count;
    const Info = this.milestones.map((info, i) => {
      const iStyle = {
        // have to hard code pixels here for ie11: 9.5*fwcu = 76-1 = 75px
        left: `calc(${i * percent}% - 75px)`,
      };
      return html`
        <h5 class="info ${this.urgent ? 'urgent' : ''}" style=${styleMap(iStyle)}>
          <span class="label">${info.label}</span>
          <span class="date">${info.date}</span>
          <span class="sr-only">${info.complete ? this.labelComplete : this.labelIncomplete}</span>
        </h5>
      `;
    });
    const Dots = this.milestones.map((dot, i) => {
      if (!dot.start && i !== 0) {
        return html` <div class="dot ${this.urgent ? 'urgent' : ''}"></div> `;
      }
    });

    const Bar = html`<div class="bar ${this.urgent ? 'urgent' : ''}"></div>`;

    return {
      bar: Bar,
      dots: Dots,
      info: Info,
    };
  }

  _animateItems() {
    const childNodes = this.shadowRoot.querySelector('.dot-container').childNodes;
    const bar = this.shadowRoot.querySelector('.bar');
    var complete = 0;
    const dots = Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE && node.nodeName === 'DIV');
    const len = dots.length;
    for (let d in dots) {
      let percent = 0;
      let num = Number(1 + +d);
      percent = (num / len) * 100;
      dots[d].style.left = '0%';
      // need a 'state' change to apply CSS transitions
      // have to hard code pixels here for ie11: 1.25*fwcu = 10px | half of dot width
      setTimeout(() => {
        dots[d].style.left = `calc(${percent}% - 10px)`;
      }, 0);
    }

    this.milestones.forEach((c, i) => {
      if (c.complete && !c.start && i !== 0) complete++;
    });

    complete = (complete / (this.milestones.length - 1)) * 100;
    setTimeout(() => {
      bar.style.width = complete + '%';
    }, 0);

    //No dot for 1st milestone
    if (dots.length > 3) {
      console.error('Maximum of 4 Milestones has been exceeded. Component may not render properly.');
    }
  }

  render() {
    return html`
      <section class=${this.vertical ? 'vertical' : ''}>
        <h4 class="sr-only">${this.title}</h4>
        <div class="info-container">${this._renderMilestones().info}</div>
        <div class="bar-container">${this._renderMilestones().bar}</div>
        <div class="dot-container">${this._renderMilestones().dots}</div>
      </section>
    `;
  }
}

class FwcTimeline extends FwcBase {
  constructor() {
    super('fwc-timeline', FwcTimelineComponent);
  }
}

class FwcTooltipComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: inline;
        }
        :host *:not(h2) {
          font-family: var(--font-sans-serif);
        }
        .hidden {
          display: none;
        }
        section {
          display: none;
        }
        h2 {
          font-size: calc(3.25 * var(--fwcu));
          font-family: var(--font-serif);
          color: var(--color-gray-one);
          margin-top: 0;
          text-transform: capitalize;
        }
        .term {
          display: inline;
        }
        .term span {
          font-size: var(--default-font-size);
          padding-right: calc(0.5 * var(--fwcu));
        }
        .tip {
          opacity: 0;
          border: 1px solid var(--color-primary);
          border-radius: var(--border-radius);
          padding: calc(2 * var(--fwcu));
          max-width: calc(35 * var(--fwcu));
          max-height: calc(18 * var(--fwcu));
          background: white;
          box-shadow: var(--box-shadow);
          transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .tip span {
          font-size: var(--default-font-size);
          color: var(--color-gray-one);
        }
        .tip-container {
          position: fixed;
          display: inline;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
          z-index: 10;
          overflow: hidden;
        }
        .tip-container.show {
          overflow: visible;
        }
        .tip-container.show .tip {
          opacity: 1;
          pointer-events: all;
        }
        .tip-btn {
          border: none;
          background: none;
          padding: 0;
          cursor: pointer;
          display: inline;
        }
        .tip-btn span {
          color: var(--color-primary);
          border-bottom: 1px dotted var(--color-primary);
          font-size: var(--default-font-size);
          font-weight: 600;
        }

        .tip-btn.light span {
          color: var(--color-white);
          border-bottom: 1px dotted var(--color-white);
        }

        .tip-btn svg,
        ::slotted(svg) {
          height: calc(1.75 * var(--fwcu));
          width: calc(1.75 * var(--fwcu));
          fill: var(--color-primary);
        }
        .tip-btn.light svg,
        ::slotted(svg.light) {
          fill: var(--color-white);
        }

        .fwc-click-out {
          display: inline;
          position: fixed;
        }
        .fwc-click-out.show {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
        }

        .tip-mobile-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: calc(2 * var(--fwcu));
        }
        .disabled {
          opacity: 0.3;
          cursor: default;
          pointer-events: none;
        }
      `,
    ];
  }

  //TODO: small bug after opening 1st time after open on 'mobile' (isMobile)

  static get properties() {
    return {
      icon: { type: Boolean },
      position: { type: Object },
      message: { type: String },
      show: { type: Boolean },
      term: { type: String },
      disabled: { attribute: 'disabled', type: Boolean },
      light: { attribute: 'light', type: Boolean },
      labelAriaTipTerm: { attribute: 'label-aria-tip-term', type: String },
    };
  }

  constructor() {
    super();
    this._fwcModal = new FwcModal();
    this._fwcModal.build();
    this.show = false;
    this.icon = false;
    this.isMobile = false;
    this.message = '';
    this.tip = '';
    this.term = '';
    this.position = { transform: 'translate(0,0)' };
    this.mobileBreak = breakpoints.sm;
    this._defaultSvg = '';
    this.labelAriaTipTerm = 'Tooltip:';
    this._handleWindowResize = debounce(() => {
      this.isMobile = window.innerWidth <= this.mobileBreak ? true : false;
      if (this.isMobile) {
        this.show = false;
        this.requestUpdate();
        this._attachModalEvent();
      } else {
        this.requestUpdate();
        this.updateComplete.then(() => {
          this._positionTooltip();
        });
      }
    }, 250);
    this._handleScroll = debounce(() => {
      this.requestUpdate();
      if (!this.isMobile) {
        this._positionTooltip();
      }
    }, 150);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleWindowResize);
    window.addEventListener('scroll', this._handleScroll);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleWindowResize);
    window.removeEventListener('scroll', this._handleScroll);
    super.disconnectedCallback();
  }

  firstUpdated() {
    this._positionTooltip();
    this.tip = this.message;
    this._setSvg();
    if(this.isMobile) {
      this._attachModalEvent();
    }
  }

  _svg() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" focusable="false" aria-hidden="true">
        <path d="M25,50 C11.2141927,50 0,38.7858073 0,25 C0,11.2141927 11.2141927,0 25,0 C38.7858073,0 50,11.2141927 50,25 C50,38.7858073 38.7858073,50 25,50 Z M25,45.8333333 C36.5315755,45.8333333 45.8333333,36.5315755 45.8333333,25 C45.8333333,13.4684245 36.5315755,4.16666667 25,4.16666667 C13.4684245,4.16666667 4.16666667,13.4684245 4.16666667,25 C4.16666667,36.5315755 13.4684245,45.8333333 25,45.8333333 Z M25,37.5 C20.4182943,37.5 16.6666667,33.7483724 16.6666667,29.1666667 L20.8333333,29.1666667 C20.8333333,31.4941406 22.672526,33.3333333 25,33.3333333 C27.327474,33.3333333 29.1666667,31.4941406 29.1666667,29.1666667 C29.1666667,27.5716146 28.141276,26.155599 26.6276042,25.6510417 L25.78125,25.390625 C24.0804036,24.8291016 22.9166667,23.2014974 22.9166667,21.4192708 L22.9166667,18.75 L27.0833333,18.75 L27.0833333,21.4192708 L27.9296875,21.6796875 C31.1360677,22.7457682 33.3333333,25.789388 33.3333333,29.1666667 C33.3333333,33.7483724 29.5817057,37.5 25,37.5 Z M22.9166667,16.6666667 L22.9166667,12.5 L27.0833333,12.5 L27.0833333,16.6666667 L22.9166667,16.6666667 Z" transform="matrix(1 0 0 -1 0 50)" />
      </svg>
    `;
  }

  _setSvg() {
    if (this._hasSlottedSvg() || !this.icon) {
      this._defaultSvg = '';
      return;
    }
    this._defaultSvg = this._svg();
  }

  _hasSlottedSvg() {
    const slot = this.shadowRoot.querySelector('slot');
    const childNodes = slot ? slot.assignedNodes({ flatten: true }) : [];
    return Array.prototype.some.call(childNodes, (node) => node.nodeName === 'svg');
  }

  _attachModalEvent() {
    this.updateComplete.then(() => {
      const modalDOM = this.shadowRoot.querySelector("#Modal");
      const tooltipDOM = this.shadowRoot.querySelector("#Tooltip");
      modalDOM.addEventListener("fwc-modal-close", () => {
        modalDOM.setReFocus(tooltipDOM);
      }, {once: true});
    });
  }

  _handleBlur() {
    if (this.show) {
      this._closeTooltip();
    }
  }

  _handleKeyDown(event) {
    switch (event.code) {
      case 'Escape':
        if (this.show) {
          this._closeTooltip();
        }
        break;
      case 'Enter':
      case 'Space':
        if(!this.show) {
          this._openTooltip();
        }
        break;
    }
  }

  _openTooltip() {
    this.tip = this.message;
    this._positionTooltip();
    if (this.isMobile) {
      this._modalEle.openModal();
    } else {
      this.show = true;
    }
  }

  _closeTooltip() {
    this.show = false;
    if (this.isMobile) {
      this._modalEle.closeModal();
    }
    const event = new CustomEvent('fwc-tooltip-close', {
      detail: this,
      bubbles: false,
    });
    this.dispatchEvent(event);
  }

  _positionTooltip() {
    this.isMobile = window.innerWidth <= this.mobileBreak ? true : false;
    if (!this.isMobile) {
      const host = this.getBoundingClientRect();
      // need to figure out why the tip getBoundingClientRect is off when resizing screen from mobile to desktop
      const tip = this.shadowRoot.querySelector('.tip').getBoundingClientRect();
      let left = 0;
      let top = 0;
      top = host.top - (tip.height + host.height);
      left = host.left;
      if (top <= 0) {
        top = host.top + host.height * 2;
      }

      if (host.left + tip.width > window.innerWidth) {
        left = host.left - (tip.width - host.width);
      }
      top = top + 'px';
      left = left + 'px';
      this.position.transform = `translate(${left},${top})`;
      this.requestUpdate();
    } else {
      this.requestUpdate();
      this._modalEle = this.shadowRoot.querySelector('fwc-modal');
    }
  }

  _toggleTooltip() {
    if (this.show) {
      this._closeTooltip();
    } else {
      this._openTooltip();
    }
  }

  _initMobile() {
    return html` <fwc-modal id="Modal" text-header="${this.term}">
      <div slot="body">
        <p>${this.tip}</p>
      </div>
    </fwc-modal>`;
  }

  _initDesktop() {
    return html` <div class="tip-container ${this.show ? 'show' : ''}" aria-hidden="${!this.show}">
      <div class="tip" style=${styleMap(this.position)}>
        <span id="TooltipDef" role="tooltip" aria-label="${this.labelAriaTipTerm} ${this.tip}">${this.tip}</span>
      </div>
    </div>`;
  }

  _tooltipBtn() {
    return html`
      <div id="Tooltip" class="tip-btn ${this.light ? 'light' : ''} ${this.disabled ? 'disabled' : ''}" tabindex="${this.disabled ? -1 : 0}" aria-describedby="TooltipDef" @click=${this._toggleTooltip} @keydown=${this._handleKeyDown} @blur=${this._handleBlur} aria-hidden="${this.disabled}">
        <span class="${this.icon || this._hasSlottedSvg() ? 'sr-only' : ''}">${this.term}</span>
        ${this._defaultSvg}
        <!-- slot is used for custom svg -->
        <slot></slot>
      </div>
    `;
  }

  render() {
    return html`
      ${this._tooltipBtn()}
      <div @click=${this._closeTooltip} class="fwc-click-out ${this.show ? 'show' : ''}"></div>
      ${!this.isMobile ? this._initDesktop() : this._initMobile()}
    `;
  }
}

class FwcTooltip extends FwcBase {
  constructor() {
    super('fwc-tooltip', FwcTooltipComponent);
  }
}

export { FwcAlert, FwcAlertSnackbar, FwcAnimBlob, FwcAnimColDrop, FwcBackToTop, FwcBars, FwcCardCircle, FwcCardMedia, FwcCardMediaImage, FwcCarouselCards, FwcCarouselGeneric, FwcDatePicker, FwcDateTimePicker, FwcExpand, FwcExpandMobileCol, FwcExpandMulti, FwcFeaturette, FwcFooterSticky, FwcHeaderCompound, FwcHeaderPage, FwcHeaderSection, FwcHeaderSub, FwcHero, FwcMilestones, FwcModal, FwcModalCelebratory, FwcModalIllustration, FwcModalSlide, FwcPagination, FwcPanel, FwcPreloader, FwcProgressLinear, FwcProgressStandard, FwcRailMessages, FwcRailTabProgress, FwcScrubber, FwcTabs, FwcTimeline, FwcTooltip };
