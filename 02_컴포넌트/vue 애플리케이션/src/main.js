import { createApp } from 'vue'
import App from './App.vue'
import BookComponent from './components/BookComponent.vue';
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';
import AppView from './components/AppView.vue';


const app = createApp(App);
app.component('BookComp', BookComponent) 
app.component('AppHeader', AppHeader)
app.component('AppNav', AppNav)
app.component('AppFooter', AppFooter)
app.component('AppView', AppView)

app.mount('#app')