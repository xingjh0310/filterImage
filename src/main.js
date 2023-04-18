import { createApp } from 'vue'
import App from './App.vue'
import filterImage from './directive/filterImage/filterImage'
import workerFilterImage from './directive/workerFilterImage/filterImage'



console.log(filterImage)
createApp(App).directive('filterImage',filterImage).directive('workerFilterImage',workerFilterImage).mount('#app')


