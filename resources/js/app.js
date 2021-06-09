/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');


// window.Vue = require('vue').default;

// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */

// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

// const app = new Vue({
//     el: '#app',
// });

require('./bootstrap')

import Vue from "vue";

import Vuex from "vuex";
import VueRouter from "vue-router";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'bulma/css/bulma.css'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Buefy)

const router = new VueRouter({
    mode: 'history',
    routes: require('./routes.js')
});

const store = new Vuex.Store({
    state: {
        products: [],
        selected: {},
        cart: [],
        order: {}
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
            state.selected = products[0];
            console.log("=======11111")
        },
        addToCart(state, product) {
            let productInCartIndex = state.cart.findIndex(item => item.slug === product.slug);
            if (productInCartIndex !== -1) {
                state.cart[productInCartIndex].quantity++;
                return;
            }

            product.quantity = 1;
            state.cart.push(product);
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
        },
        updateOrder(state, order) {
            state.order = order;
        },
        updateCart(state, cart) {
            state.cart = cart;
        },
        addProducts(state, product) {
            state.products.unshift(product);
        },
        deleteProducts(state, product) {
            let index = state.products.findIndex(item => item.id === product.id);
            state.products.splice(index, 1);
        }
    },
    actions: {
        getProducts({commit}) {
            // fetch the items and attached products from the api
            axios.get('/api/products')
                .then((response) => {
                    commit('updateProducts', response.data);
                })
                .catch((error) => console.error(error));
        },
        clearCart({commit}) {
            commit('updateCart', []);
        }
    }
});


const app = new Vue({
    router,
    store,
    el: '#app',
    created() {
        store.dispatch('getProducts')
            .then(_ => {})
            .catch((error) => console.error(error));
    }
});
