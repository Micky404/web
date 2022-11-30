import { createApp } from 'vue'
import App from './App.vue'

	
// import the vue router necessary functions
import { createRouter, createWebHistory } from 'vue-router'
import RegisterComponent from "./components/RegisterComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import HomeComponent from "./components/HomeComponent.vue"
import AddContactComponent from "./components/AddContactComponent.vue"
import ChatComponent from "./components/ChatComponent.vue"
import ContactComponent from "./components/ContactComponent.vue"
import CourtsDetails from "./components/CourtsDetails.vue";


// Define some routes
// Each route should map to a component.
const routes = [
    { path: "/register", component: RegisterComponent },
    { path: '/login', component: LoginComponent },
    { path: '/', component: HomeComponent },
    { path: '/contact', component: ContactComponent },
    { path: "/contacts/add", component: AddContactComponent },
    { path: "/chat/:email", component: ChatComponent },
    { path: '/products/:name:price:img:img2:info', name: "product-details", component: CourtsDetails},//props is used to link two components
];

// Create the router instance and pass the `routes` option


const router = createRouter({
    // Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(router)

app.config.globalProperties.$mainURL = "http://localhost:8080"
app.config.globalProperties.$apiURL = "http://localhost:3000"
//API will return an access token that I store in local storage
app.config.globalProperties.$accessTokenKey = "accessTokenKey"

app.config.globalProperties.$user = null;
app.config.globalProperties.$login = false;
app.config.globalProperties.$headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem("accessTokenKey")
};

app.mount('#app')
