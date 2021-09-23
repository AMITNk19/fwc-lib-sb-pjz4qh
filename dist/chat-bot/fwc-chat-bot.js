import { css, LitElement, html } from 'lit-element';

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

class FwcChatBotComponent extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          position: fixed;
          z-index: 1;
        }
        slot[name='input']::slotted(*) {
          width: 100%;
          border: 0px;
          height: calc(6.25 * var(--fwcu));
          padding-left: calc(2 * var(--fwcu));
        }
        button {
          appearance: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
        .fwc-chatbot-wrapper {
          position: relative;
        }
        .fwc-chatbot-launcher {
          position: relative;
        }
        .fwc-chatbot-launcher button {
          height: calc(6.25 * var(--fwcu));
          width: calc(6.25 * var(--fwcu));
          background: var(--color-gray-one);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .fwc-chatbot-launcher svg {
          width: calc(3.5 * var(--fwcu));
        }
        .fwc-chatbot-unread-msgs {
          position: absolute;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-util-one);
          color: var(--color-white);
          min-width: calc(2.5 * var(--fwcu));
          border-radius: 50%;
          vertical-align: middle;
          /* this is here for dynamic content, to grow the circle based on text length */
          padding: 2px 3px;
          box-sizing: content-box;
          top: calc(-1.5 * var(--fwcu));
          right: calc(-0.75 * var(--fwcu));
        }
        .fwc-chatbot-unread-msgs:before {
          content: '';
          width: auto;
          padding-bottom: 100%;
        }
        .fwc-chatbot-window {
          position: absolute;
          overflow: hidden;
          background: var(--color-white);
          box-shadow: var(--box-shadow);
          width: calc(47 * var(--fwcu));
          bottom: 0;
          right: calc(-0.75 * var(--fwcu));
          z-index: 2;
          transform: scale(0);
          display: flex;
          flex-direction: column;
        }
        .fwc-chatbot-window.open {
          opacity: 1;
          visibility: visible;
          overflow: visible;
          height: calc(72.25 * var(--fwcu));
          max-height: calc(100vh - (8 * var(--fwcu)));
          animation-name: openWindow;
          animation-duration: 0.25s;
          animation-timing-function: ease-out;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          transform-origin: bottom right;
        }
        .fwc-chatbot-window.close {
          height: calc(72.25 * var(--fwcu));
          max-height: calc(100vh - (8 * var(--fwcu)));
          animation-name: closeWindow;
          animation-duration: 0.25s;
          animation-timing-function: cubic-bezier(0.49, -0.12, 0.94, 0.25);
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          transform-origin: bottom right;
        }
        .generic-chat-icon svg {
          fill: var(--color-gray-five);
        }
        @media screen and (max-width: 600px) {
          .fwc-chatbot-window.open,
          .fwc-chatbot-window.close {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            max-height: 100%;
          }
        }
        @keyframes openWindow {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          25% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes closeWindow {
          0% {
            transform: scale(1);
            opacity: 1;
            visibility: visible;
          }
          25% {
            opacity: 0.75;
          }
          75% {
            opacity: 0.25;
          }
          100% {
            display: none;
            transform: scale(0);
            visibility: hidden;
            opacity: 0;
          }
        }
        .fwc-chatbot-header {
          border-top-left-radius: calc(0.5 * var(--fwcu));
          border-top-right-radius: calc(0.5 * var(--fwcu));
          background: var(--color-gray-one);
          display: flex;
          align-items: center;
          padding: calc(1.5 * var(--fwcu));
        }
        .fwc-chatbot-header > span {
          color: var(--color-white);
          font-size: calc(2 * var(--fwcu));
          margin-left: var(--fwcu);
          flex-basis: 100%;
        }
        .fwc-chatbot-header svg {
          width: calc(3.5 * var(--fwcu));
          height: calc(3 * var(--fwcu));
        }
        .fwc-chatbot-header > div {
          width: calc(3.5 * var(--fwcu));
          display: flex;
        }
        .fwc-chatbot-header button {
          padding: var(--fwcu);
          display: flex;
          align-items: center;
        }
        .fwc-chatbot-header button span {
          display: inline-block;
          width: calc(2.5 * var(--fwcu));
          height: 3px;
          background: var(--color-white);
        }
        .fwc-chatbot-messages {
          overflow-y: auto;
          padding: calc(2 * var(--fwcu)) calc(1.5 * var(--fwcu));
          flex: 1;
        }
        .fwc-chatbot-footer {
          display: flex;
          border-color: #dcdcdc;
          border-width: 1px 0 0;
          border-style: solid;
          padding-top: calc(1 * var(--fwcu));
          padding-bottom: calc(1 * var(--fwcu));
        }
        .fwc-chatbot-footer div {
          flex-basis: 100%;
        }
        .fwc-chatbot-footer svg {
          width: calc(4 * var(--fwcu));
          height: calc(4 * var(--fwcu));
        }
        .fwc-chatbot-footer button {
          margin: var(--fwcu) calc(2 * var(--fwcu));
          width: calc(8 * var(--fwcu));
        }
        @media screen and (max-width: 600px) {
          .fwc-chatbot-footer div {
            padding: var(--fwcu);
          }
        }
        .fwc-hide {
          display: none;
        }
      `,
    ];
  }

  static get properties() {
    return {
      header: { type: String },
      unreadMessages: { attribute: 'unread-messages', type: Number },
      labelAriaLauncherButton: {
        attribute: 'label-aria-launcher-button',
        type: String,
      },
      labelAriaMinimizeButton: {
        attribute: 'label-aria-minimize-button',
        type: String,
      },
      labelAriaSendButton: {
        attribute: 'label-aria-send-button',
        type: String,
      },
      genericLauncherIcon: {
        attribute: 'generic-launcher-icon',
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.header = '';
    this.labelAriaLauncherButton = 'Open Sydney Chat';
    this.labelAriaMinimizeButton = 'Minimize the chat window';
    this.labelAriaSendButton = 'Send Messages';
    this.chatWindow = null;
    this.unreadMessages = 0;
    this.genericLauncherIcon = false;
  }

  firstUpdated() {
    this.chatWindow = this.shadowRoot.querySelector('.fwc-chatbot-window');
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'generic-launcher-icon') {
      this.genericLauncherIcon = newVal;
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  _openChatWindow() {
    this.chatWindow.classList.remove('close');
    this.chatWindow.classList.add('open');
    this.shadowRoot.querySelector('.fwc-chatbot-close').focus();
  }

  _closeChatWindow() {
    this.chatWindow.classList.remove('open');
    this.chatWindow.classList.add('close');
    this.shadowRoot.querySelector('.fwc-chatbot-launcher button').focus();
  }

  _dispatchChatSendEvent() {
    const event = new CustomEvent('fwc-chat-bot-send', {
      detail: this,
      bubbles: true,
      composed: false,
    });

    this.dispatchEvent(event);
  }
  _genericIcon() {
    return html`<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px">
      <path d="M 3 5 L 3 23 L 8 23 L 8 28.078125 L 14.351563 23 L 29 23 L 29 5 Z M 5 7 L 27 7 L 27 21 L 13.648438 21 L 10 23.917969 L 10 21 L 5 21 Z M 10 12 C 8.894531 12 8 12.894531 8 14 C 8 15.105469 8.894531 16 10 16 C 11.105469 16 12 15.105469 12 14 C 12 12.894531 11.105469 12 10 12 Z M 16 12 C 14.894531 12 14 12.894531 14 14 C 14 15.105469 14.894531 16 16 16 C 17.105469 16 18 15.105469 18 14 C 18 12.894531 17.105469 12 16 12 Z M 22 12 C 20.894531 12 20 12.894531 20 14 C 20 15.105469 20.894531 16 22 16 C 23.105469 16 24 15.105469 24 14 C 24 12.894531 23.105469 12 22 12 Z" />
    </svg>`;
  }

  _sydneyIcon() {
    return html`
      <svg viewBox="0 0 172 145" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <polygon id="path-1" points="0 0.110560686 171.60129 0.110560686 171.60129 144.173771 0 144.173771"></polygon>
          <path d="M121.37804,23.7820814 L92.3199315,26.3113013 C82.5672932,35.0778904 68.9172179,40.527659 53.8035475,40.527659 C26.8281829,40.527659 4.50754256,23.1716085 0.704663258,0.567632733 C13.0777936,14.2451924 32.2549945,23.0381448 53.8035475,23.0381448 C75.3521005,23.0381448 94.5293015,14.2451924 106.902432,0.567632733 C106.316994,4.04675179 104.502301,8.85144569 103.090508,12.0372741 L121.37804,23.7820814 Z" id="path-3"></path>
          <linearGradient x1="49.9999241%" y1="100.000206%" x2="49.9999241%" y2="-0.000182459179%" id="linearGradient-5">
            <stop stop-color="#3DE2F6" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g id="RCP---Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Styles:-Iconography" transform="translate(-492.000000, -14235.000000)">
            <g id="Group" transform="translate(346.000000, 14020.000000)">
              <g id="Group-3" transform="translate(144.000000, 0.000000)">
                <g id="Global-/-Conversational-UI-/-Window-Components-/-icons-/-Sydney" transform="translate(0.000000, 203.000000)">
                  <g id="Sydney-Light@1x" transform="translate(-2.133333, 11.756250)">
                    <g id="Group-3" transform="translate(4.305160, 0.389936)">
                      <g id="Fill-1-Clipped">
                        <mask id="mask-2" fill="white">
                          <use xlink:href="#path-1"></use>
                        </mask>
                        <g id="path-1"></g>
                        <path d="M85.73022,0.110560686 C46.0256931,0.110560686 13.838945,32.3601737 13.838945,72.1422483 C13.838945,84.2108286 16.8162912,95.5774889 22.0523421,105.569967 L1.9945177,118.36024 L1.99616218,118.367655 C0.79815242,119.139602 -0.000246673253,120.478359 -0.000246673253,122.011544 C-0.000246673253,124.240882 1.68699837,126.056648 3.84785606,126.29886 L3.8560785,126.333462 L41.8445816,129.177392 C53.988306,138.570931 69.2022899,144.173936 85.73022,144.173936 C85.7540652,144.173936 85.7770877,144.172288 85.8001107,144.172288 C85.8239559,144.172288 85.8478011,144.173936 85.8708236,144.173936 C102.398754,144.173936 117.612738,138.570931 129.75564,129.177392 L167.745788,126.333462 L167.753188,126.29886 C169.914868,126.056648 171.60129,124.240882 171.60129,122.011544 C171.60129,120.478359 170.802891,119.139602 169.604881,118.367655 L169.607348,118.36024 L149.459899,105.468633 C154.663061,95.5000469 157.621495,84.1704599 157.621495,72.1422483 C157.621495,32.3601737 125.434747,0.110560686 85.73022,0.110560686" id="Fill-1" fill="#2987DD" fill-rule="nonzero" mask="url(#mask-2)"></path>
                      </g>
                    </g>
                    <path d="M95.7207874,135.412378 C96.0554407,135.38272 96.3843386,135.337408 96.7173474,135.301983 C97.2920959,135.241018 97.868489,135.184172 98.4374821,135.107554 C98.777069,135.061418 99.1109001,135.001277 99.4480202,134.949375 C100.003035,134.866166 100.560517,134.785429 101.109776,134.685743 C101.444429,134.625602 101.773327,134.551455 102.106336,134.485547 C102.651483,134.377623 103.198276,134.27217 103.737668,134.15024 C104.058343,134.077742 104.37244,133.992061 104.690649,133.914619 C105.234975,133.781979 105.7793,133.650163 106.317048,133.503518 C106.61799,133.420309 106.913997,133.32639 107.213294,133.238238 C107.759265,133.079235 108.305234,132.92188 108.84216,132.748047 C109.125834,132.655776 109.403753,132.553619 109.68496,132.458052 C110.229286,132.271862 110.775256,132.08732 111.310537,131.887124 C111.5753,131.788262 111.834306,131.679514 112.096602,131.577356 C112.640928,131.363979 113.185254,131.150602 113.720535,130.922396 C113.963919,130.81859 114.20237,130.705723 114.44411,130.598622 C114.988435,130.358058 115.531116,130.115023 116.06393,129.858805 C116.289225,129.750057 116.509587,129.634718 116.732415,129.524322 C117.273452,129.254099 117.812022,128.982228 118.341547,128.698 C118.547108,128.58678 118.748558,128.469794 118.952474,128.356926 C119.488578,128.058692 120.021392,127.757987 120.544339,127.4441 C120.734277,127.330409 120.919282,127.210951 121.106754,127.094788 C121.634635,126.770191 122.158404,126.440651 122.672307,126.099577 C122.845801,125.984238 123.016005,125.863956 123.187854,125.746969 C123.705868,125.393537 124.218126,125.035986 124.720517,124.667725 C124.87921,124.550739 125.033792,124.430456 125.191663,124.311822 C125.696521,123.932027 126.196446,123.548113 126.684859,123.152665 C126.830396,123.034855 126.972644,122.912101 127.117359,122.792642 C127.606594,122.387308 128.089252,121.977031 128.560398,121.556867 C128.603976,121.518146 128.650022,121.482721 128.692779,121.444 L157.750888,118.91478 L139.463355,107.169972 C139.478156,107.135371 139.490489,107.099121 139.506112,107.063696 C139.827609,106.334589 140.915438,104.145619 141.195823,103.39921 C141.213091,103.352251 141.232825,103.306115 141.250092,103.259156 C142.153738,100.82056 142.838668,98.2954591 143.275279,95.7003311 C143.651045,93.4627541 143.853317,91.1765701 143.853317,88.8475458 C143.853317,62.9943053 119.821586,42.0355582 90.176395,42.0355582 C60.5312036,42.0355582 36.499473,62.9943053 36.499473,88.8475458 C36.499473,91.1765701 36.7009228,93.4627541 37.0775106,95.7003311 C37.1728909,96.2671401 37.2880051,96.8290058 37.4064083,97.3892238 C37.442587,97.5572892 37.4721878,97.7261785 37.510011,97.89342 C37.6251252,98.4050311 37.755862,98.910875 37.8898879,99.4175428 C37.9458005,99.6276247 37.9984241,99.8393543 38.0576256,100.049436 C38.193296,100.531388 38.3412999,101.009222 38.4942373,101.485407 C38.567417,101.711965 38.6389523,101.939348 38.715421,102.165083 C38.8732919,102.628087 39.0402075,103.087795 39.213701,103.544208 C39.3008589,103.77571 39.3896612,104.005564 39.4809303,104.233771 C39.6610018,104.685241 39.8476512,105.132591 40.0425231,105.57747 C40.1420146,105.804029 40.2447952,106.028116 40.3483979,106.252203 C40.5514922,106.695435 40.7586978,107.135371 40.9774147,107.571188 C41.0851287,107.787037 41.1985984,108.000413 41.3104236,108.213791 C41.5398297,108.653726 41.7717026,109.092015 42.0159091,109.523712 C42.1244453,109.716493 42.2395595,109.904331 42.3513847,110.094641 C42.6128584,110.542815 42.8759765,110.989342 43.1538951,111.429278 C43.2394084,111.564389 43.3306775,111.694558 43.4170132,111.828845 C44.4497519,113.422995 45.5828044,114.959476 46.8145261,116.430048 C46.8827724,116.511609 46.9469074,116.594818 47.0159759,116.676379 C47.3374734,117.056174 47.6737713,117.425259 48.0092469,117.795168 C48.1835627,117.988772 48.352945,118.184025 48.5305497,118.374334 C48.8430025,118.709641 49.1661445,119.035886 49.4884642,119.362954 C49.7022474,119.578803 49.9135643,119.7963 50.1314593,120.009677 C50.4455565,120.316149 50.7678763,120.61603 51.0910179,120.915912 C51.3311136,121.139175 51.572031,121.361615 51.8170598,121.580759 C52.1369129,121.864987 52.461699,122.145096 52.7889524,122.42191 C53.0520705,122.644349 53.3168332,122.865965 53.5848845,123.083462 C53.9104934,123.347917 54.2393908,123.610726 54.5732223,123.867767 C54.8568962,124.087735 55.1438596,124.303584 55.4332897,124.517785 C55.7654762,124.764116 56.0976628,125.008799 56.4364274,125.247716 C56.7414801,125.462741 57.0514659,125.671999 57.3614522,125.88208 C57.6977501,126.108639 58.0332257,126.335198 58.3761016,126.55599 C58.7049991,126.767719 59.0404747,126.97121 59.375128,127.176349 C59.7114258,127.381488 60.0444351,127.589922 60.385666,127.789293 C60.7523872,128.002671 61.1273305,128.206161 61.5006294,128.412124 C61.8221269,128.590076 62.1386909,128.772147 62.4651215,128.944331 C63.0053363,129.229384 63.5554174,129.499606 64.1079657,129.768181 C64.4730419,129.945309 64.8414076,130.117494 65.2122396,130.288031 C65.7277865,130.524476 66.2449783,130.761745 66.7712146,130.985008 C67.0770891,131.113528 67.38872,131.232987 67.6970613,131.356564 C68.1460066,131.537812 68.5941296,131.719882 69.049653,131.890419 C69.3810173,132.013997 69.7173151,132.128512 70.0519689,132.246323 C70.4935138,132.40203 70.9342369,132.557738 71.3815377,132.70356 C71.7285245,132.817251 72.0796227,132.922704 72.429899,133.02898 C72.874733,133.164915 73.3212115,133.299203 73.7718013,133.425252 C74.1270108,133.524938 74.4855093,133.618857 74.8448301,133.711952 C75.298709,133.829763 75.7542319,133.943454 76.2130444,134.051378 C76.574832,134.135411 76.9382636,134.217796 77.3033402,134.296062 C77.7695526,134.395748 78.2390541,134.489667 78.7102001,134.578642 C79.0728094,134.647846 79.4362415,134.715402 79.80214,134.778014 C80.2864422,134.861223 80.7748548,134.934546 81.2640901,135.00622 C81.6234109,135.058123 81.9819094,135.113321 82.3428748,135.158633 C82.8559548,135.223717 83.373969,135.278091 83.8928049,135.329994 C84.2348586,135.365419 84.5752677,135.404964 84.9189655,135.433799 C85.4945367,135.48323 86.0758634,135.516184 86.65719,135.549138 C86.9490865,135.566438 87.2393389,135.589506 87.53288,135.601864 C88.4085699,135.638937 89.2891934,135.660357 90.176395,135.660357 C91.1121088,135.660357 92.0428891,135.638937 92.9670917,135.597745 C93.2556996,135.584563 93.5401957,135.557376 93.8279813,135.540076 C94.460287,135.503002 95.0942371,135.4684 95.7207874,135.412378" id="Fill-4" fill="#FFFFFF" fill-rule="nonzero"></path>
                    <g id="Group-8" transform="translate(36.372683, 95.132698)">
                      <g id="Fill-6-Clipped">
                        <mask id="mask-4" fill="white">
                          <use xlink:href="#path-3"></use>
                        </mask>
                        <g id="path-3"></g>
                        <path d="M121.37804,23.7820814 L103.090508,12.0372741 C104.502301,8.85144569 106.316994,4.04675179 106.902432,0.567632733 C94.5293015,14.2451924 75.3521005,23.0381448 53.8035475,23.0381448 C32.2549945,23.0381448 13.0777936,14.2451924 0.704663258,0.567632733 C4.50754256,23.1716085 26.8281829,40.527659 53.8035475,40.527659 C68.9172179,40.527659 82.5672932,35.0778904 92.3199315,26.3113013 L121.37804,23.7820814 Z" id="Fill-6" fill="url(#linearGradient-5)" fill-rule="nonzero" mask="url(#mask-4)"></path>
                      </g>
                    </g>
                    <path d="M77.239945,78.9657932 C77.239945,83.7721348 73.3515525,87.6681222 68.55458,87.6681222 C63.7584298,87.6681222 59.8700369,83.7721348 59.8700369,78.9657932 C59.8700369,74.1602755 63.7584298,70.2634647 68.55458,70.2634647 C73.3515525,70.2634647 77.239945,74.1602755 77.239945,78.9657932" id="Fill-9" fill="#2987DD" fill-rule="nonzero"></path>
                    <path d="M120.724575,78.9657932 C120.724575,83.7721348 116.836182,87.6681222 112.03921,87.6681222 C107.243059,87.6681222 103.354667,83.7721348 103.354667,78.9657932 C103.354667,74.1602755 107.243059,70.2634647 112.03921,70.2634647 C116.836182,70.2634647 120.724575,74.1602755 120.724575,78.9657932" id="Fill-11" fill="#2987DD" fill-rule="nonzero"></path>
                    <path d="M81.7908201,98.2828542 C81.9478684,102.950789 85.7639039,106.688597 90.4605625,106.688597 C95.1580433,106.688597 98.9740788,102.950789 99.1311271,98.2828542 L81.7908201,98.2828542 Z" id="Fill-13" fill="#3EE2F7" fill-rule="nonzero"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    `;
  }

  _sendArrowIcon() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#2855bc">
        <path d="M 3.59375 5.34375 L 4.03125 7.21875 L 5.96875 16 L 4.03125 24.78125 L 3.59375 26.65625 L 5.375 25.9375 L 27.375 16.9375 L 29.65625 16 L 27.375 15.0625 L 5.375 6.0625 Z M 6.375 8.65625 L 21.90625 15 L 7.78125 15 Z M 7.78125 17 L 21.90625 17 L 6.375 23.34375 Z" fill="#2855bc" />
      </svg>
    `;
  }

  render() {
    return html`
      <div class="fwc-chatbot-wrapper ${this.genericLauncherIcon && 'generic-chat-icon'}">
        <div class="fwc-chatbot-launcher" aria-landmark="chatbot">
          <button @click="${this._openChatWindow.bind(this)}" aria-label="${this.labelAriaLauncherButton}">${this.genericLauncherIcon ? this._genericIcon() : this._sydneyIcon()}</button>
          <div class="fwc-chatbot-unread-msgs ${this.unreadMessages ? '' : 'fwc-hide'}">${this.unreadMessages}</div>
        </div>
        <div class="fwc-chatbot-window">
          <div class="fwc-chatbot-header">
            <div>${this.genericLauncherIcon ? this._genericIcon() : this._sydneyIcon()}</div>
            <span>${this.header}</span>
            <button class="fwc-chatbot-close" @click="${this._closeChatWindow.bind(this)}" aria-label="${this.labelAriaMinimizeButton}">
              <span></span>
            </button>
          </div>
          <div class="fwc-chatbot-messages">
            <div>
              <slot name="messages"></slot>
            </div>
          </div>
          <div class="fwc-chatbot-footer">
            <div>
              <slot name="input"></slot>
            </div>
            <button @click="${this._dispatchChatSendEvent}" aria-label="${this.labelAriaSendButton}" class="fwc-chatbot-send">${this._sendArrowIcon()}</button>
          </div>
        </div>
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

class FwcChatBot extends FwcBase {
  constructor() {
    super('fwc-chat-bot', FwcChatBotComponent);
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

class FwcChatExpandItemComponent extends FwcExpandMultiItemComponent {
  static get styles() {
    return [
      super.styles,
      sharedStyles,
      css`
        .fwc-expand-button {
          margin-right: calc(1 * var(--fwcu));
        }
        button {
          border-radius: 0;
          height: calc(2.25 * var(--fwcu));
          background: none;
          border: 0px;
        }
        .fwc-expand-drawer {
          margin-left: calc(5.5 * var(--fwcu));
          margin-right: calc(1.75 * var(--fwcu));
        }
        .fwc-expand-content {
          overflow: hidden;
          transition: height 0.3s ease 0s;
          height: 0px;
        }
        .fwc-header-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .fwc-header-container slot:nth-child(1) {
          font-size: calc(2 * var(--fwcu));
          font-weight: bold;
        }
        svg {
          height: calc(1.75 * var(--fwcu));
          width: calc(1.75 * var(--fwcu));
          fill: var(--color-primary);
        }
        button:hover {
          cursor: pointer;
        }
        .fwc-chat-expand-details-btn {
          height: calc(3 * var(--fwcu));
          display: flex;
          border: none;
          display: flex;
          align-items: center;
        }
        .fwc-chat-expand-details-btn:hover {
          cursor: pointer;
        }
      `,
    ];
  }

  static get properties() {
    return {
      expanded: { type: Boolean },
      labelAriaExpandText: { attribute: 'label-aria-expand-text', type: String },
      labelAriaExpandCircle: { attribute: 'label-aria-expand-circle', type: String },
    };
  }

  constructor() {
    super();
    this.expanded = false;
    this.index = 0;
    this.labelAriaExpandText = 'click to expand more details';
    this.labelAriaExpandCircle = 'click to view more details';
  }

  firstUpdated() {
    this.parentElement.classList.add('fwc-chat-background');
    const content = this.shadowRoot.querySelector('.fwc-expand-content');
    this.expandCollapse = new ExpandCollapse(content);

    // set the stored index from the parent and then increment it for next instance
    this.index = this.parentNode.childIndexTracker;
    this.parentNode.childIndexTracker += 1;

    // if the property is passed in
    if (this.expanded) {
      super.expandPanel();
    }
    this.parentNode.addEventListener('fwc-expand-multi-expanded', (e) => {
      // if the event is dispatched from a sibling component, close its panel
      /* c8 ignore next 4 */
      if (e.target !== this) {
        super.closePanel();
        return;
      }

      // if the event is dispatched from itself, toggle the panel
      if (this.expanded) {
        super.closePanel();
      } else {
        super.expandPanel();
      }
      // stop the event from bubbling outside fwc-expand-multi
      e.cancelBubble = true;
    });
  }

  //TODO send index in details
  //Send on circleBtn
  _dispatchCircleEvent() {
    const event = new CustomEvent('fwc-chat-expand-item-circle', {
      detail: 'expand-circle_' + this.index,
      bubbles: true,
      composed: false,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="fwc-expand-multi-item">
        <div class="fwc-expand-header">
          <button class="fwc-expand-button" type="button" id="fwc-expand_${this.index}" aria-expanded="${this.expanded}" aria-controls="fwc-panel_${this.index}" aria-label="${this.labelAriaExpandText}" @click=${super._dispatchExpandEvent}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" class="fwc-expand-icon ${this.expanded ? 'expanded' : ''}" focusable="false">
              <polygon points="2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378" transform="matrix(1 0 0 -1 0 51.66)" />
            </svg>
          </button>
          <div class="fwc-header-container">
            <slot name="expand-header"></slot>
            <slot name="expand-sub-header"></slot>
          </div>
          <button class="fwc-chat-expand-details-btn" @click=${this._dispatchCircleEvent} id="circle-btn_${this.index}" aria-label="${this.labelAriaExpandCircle}">
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" focusable="false">
              <path d="M25,50 C11.2141927,50 0,38.7858073 0,25 C0,11.2141927 11.2141927,0 25,0 C38.7858073,0 50,11.2141927 50,25 C50,38.7858073 38.7858073,50 25,50 Z M25,45.8333333 C36.5315755,45.8333333 45.8333333,36.5315755 45.8333333,25 C45.8333333,13.4684245 36.5315755,4.16666667 25,4.16666667 C13.4684245,4.16666667 4.16666667,13.4684245 4.16666667,25 C4.16666667,36.5315755 13.4684245,45.8333333 25,45.8333333 Z M25,37.5 C20.4182943,37.5 16.6666667,33.7483724 16.6666667,29.1666667 L20.8333333,29.1666667 C20.8333333,31.4941406 22.672526,33.3333333 25,33.3333333 C27.327474,33.3333333 29.1666667,31.4941406 29.1666667,29.1666667 C29.1666667,27.5716146 28.141276,26.155599 26.6276042,25.6510417 L25.78125,25.390625 C24.0804036,24.8291016 22.9166667,23.2014974 22.9166667,21.4192708 L22.9166667,18.75 L27.0833333,18.75 L27.0833333,21.4192708 L27.9296875,21.6796875 C31.1360677,22.7457682 33.3333333,25.789388 33.3333333,29.1666667 C33.3333333,33.7483724 29.5817057,37.5 25,37.5 Z M22.9166667,16.6666667 L22.9166667,12.5 L27.0833333,12.5 L27.0833333,16.6666667 L22.9166667,16.6666667 Z" transform="matrix(1 0 0 -1 0 50)" />
            </svg>
          </button>
        </div>
        <div class="fwc-expand-content">
          <div class="fwc-expand-drawer" role="region" id="panel_${this.index}" aria-labelledby="fwc-expand_${this.index}" style="display: none;">
            <slot name="expand-panel"></slot>
          </div>
        </div>
      </div>
    `;
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

class FwcChatExpandItem extends FwcBase {
  constructor() {
    super('fwc-expand-multi', FwcExpandMultiComponent);
    const FwcExpandMultiItem = new FwcBase('fwc-chat-expand-item', FwcChatExpandItemComponent);
    FwcExpandMultiItem.build();
  }
}

export { FwcChatBot, FwcChatExpandItem };
