import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass, faFaceSmile } from '@fortawesome/free-regular-svg-icons'
library.add([faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass, faFaceSmile])

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
