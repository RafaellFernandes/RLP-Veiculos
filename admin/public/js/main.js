window.supportCustomElements='customElements' in window;

import {ButtonPlus} from './components/buttonplus.js';
import {ViewPass} from './components/viewpass.js';
import {DropDown} from './components/dropdown.js';

window.customElements.define('button-plus',ButtonPlus);
window.customElements.define('view-pass',ViewPass);
window.customElements.define('drop-down',DropDown);