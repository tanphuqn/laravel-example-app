<template>
    <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4" v-if="!products.length">
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full mb-4">
                    <a class="block relative h-48 rounded overflow-hidden">
                        <img
                            alt="ecommerce"
                            class="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/420x260"
                        />
                    </a>
                    <div class="mt-4">
                        <h3
                            class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase inline-block mr-2"
                        >
                            N/A
                        </h3>
                        <h2
                            class="text-gray-900 title-font text-lg font-medium"
                        >
                            Loading
                        </h2>
                        <p class="mt-1">$0.00</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -m-4" v-else>
                <div
                    class="lg:w-1/4 md:w-1/2 p-4 w-full mb-4"
                    v-for="product in products"
                    :key="product.id"
                >
                    <router-link
                        class="block relative h-48 rounded overflow-hidden"
                        :to="{
                            name: 'products.detail',
                            params: { slug: product.slug }
                        }"
                    >
                        <img
                            v-if="product.shopify_pdp_image"
                            :src="'/images/' + product.shopify_pdp_image"
                            webp-fallback=".jpg"
                            :alt="product.name"
                            class="object-center w-full h-full block"
                        />
                        <img
                            v-else
                            :alt="product.name"
                            class="object-center w-full h-full block"
                            src="https://dummyimage.com/640x640"
                        />
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        formatCurrency(amount) {
            amount = amount / 100;
            return amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            });
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
};
</script>
