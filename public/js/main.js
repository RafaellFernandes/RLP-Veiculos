window.supportCustomElements='customElements' in window

import { ButtonPlus } from './components/buttonplus.js'
import { ViewPass } from './components/viewpass.js'
import { SideBar } from './components/sidebar.js'

window.customElements.define('button-plus', ButtonPlus)
window.customElements.define('view-pass', ViewPass)
window.customElements.define('sidebar', SideBar)
