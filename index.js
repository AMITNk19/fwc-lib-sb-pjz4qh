// FWC Style Imports
import './fwc-assets/styles/vars.css';
import './fwc-assets/styles/typography.css';
import './fwc-assets/styles/font-face.css';
import './fwc-assets/styles/main.css';
import './fwc-assets/styles/grid.css';
import './fwc-assets/styles/buttons-links.css';
import './fwc-assets/styles/animations.css';
import './fwc-assets/styles/icons.css';
import './fwc-assets/styles/components/fwc-cards.css';
import './fwc-assets/styles/components/fwc-modal.css';
import './example.css';
import pkg from './package.json';

import { FwcHeaderPage, FwcModal } from './dist/fwc-lib.js';
const header = new FwcHeaderPage();
const modal = new FwcModal();
header.build();
modal.build();

const v = pkg.version;
const version = document.querySelector('#Version');
version.innerHTML = v;

const modalCmp = document.getElementById('modalAttributeExample');
const modalButton = document.getElementById('fwc-modal-example-button-attr');

modalButton.addEventListener('click', (e) => {
  modalCmp.setAttribute('open', '');
  modalCmp.setReFocus(modalButton);
});
