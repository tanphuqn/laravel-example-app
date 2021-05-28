module.exports = [
    {
        path: '/',
        name: 'products.show',
        component: () => import('./routes/Products/Show.vue')
    },
    {
        path: '/product/:slug?',
        name: 'products.detail',
        component: () => import('./routes/Products/Show.vue')
    },
    {
        path: '/products',
        name: 'products.index',
        component: () => import('./routes/Products/Index.vue')
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('./routes/Order/Checkout.vue')
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('./routes/Order/Summary.vue')
    },
    {
        path: '/admin',
        name: 'admin.products.list',
        component: () => import('./routes/Admin/ProductList.vue')
    },
]
