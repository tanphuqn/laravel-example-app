require('./bootstrap')

import Vue from "vue";

import Vuex from "vuex";
import VueRouter from "vue-router";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as VeeValidate from 'vee-validate';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Buefy)
Vue.use(VeeValidate, {
    inject: true,
    fieldsBagName: 'vvFields',
  })
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
            state.products.push(product);
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
