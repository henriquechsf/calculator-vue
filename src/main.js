import Vue from 'vue'
import App from './App'

// renderiza os componentes Vue na div #app
new Vue({
    render: h => h(App)
}).$mount("#app")