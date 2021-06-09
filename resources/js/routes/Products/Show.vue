<template>
    <section class="text-gray-700 body-font overflow-hidden" v-if="product">
        <div class="container px-12 py-24 mx-auto">
            <div class=" mx-auto flex flex-wrap">
                <img
                    v-if="product.shopify_pdp_image"
                    :src="'/images/' + product.shopify_pdp_image"
                    webp-fallback=".jpg"
                    :alt="product.name"
                    class="lg:w-1/2 w-full lg:h-auto h-64 object-center rounded"
                />
                <img
                    v-else
                    :alt="product.name"
                    class="lg:w-1/2 w-full lg:h-auto h-64 object-center rounded"
                    src="https://dummyimage.com/640x640"
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1
                        class="text-gray-900 text-3xl title-font font-medium mb-2"
                        v-text="product.name"
                    ></h1>
                    <p class="leading-relaxed" v-text="product.description"></p>
                    <div>
                        <table>
                            <tr>
                                <td width="200px">
                                    <label class="label">Creator Email</label>
                                </td>
                                <td>{{ product.creator_email }}</td>
                            </tr>
                            <tr>
                                <td width="200px">
                                    <label class="label">Inventory</label>
                                </td>
                                <td>{{ product.inventory }}</td>
                            </tr>
                            <tr>
                                <td width="200px">
                                    <label class="label">Duration(days)</label>
                                </td>
                                <td>{{ product.duration }}</td>
                            </tr>
                            <tr>
                                <td width="200px">
                                    <label class="label"
                                        >Age range(Min-Max)</label
                                    >
                                </td>
                                <td>
                                    {{ product.age_min }} -
                                    {{ product.age_max }}
                                </td>
                            </tr>
                            <tr>
                                <td width="200px">
                                    <label class="label">Zoom Item Type</label>
                                </td>
                                <td>{{ product.zoom_item_type }}</td>
                            </tr>
                            <tr>
                                <td width="200px">
                                    <label class="label">Master SKU</label>
                                </td>
                                <td>{{ product.master_sku }}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="flex mt-6 pt-4 border-t-2 border-gray-200">
                        <span
                            class="title-font font-medium text-2xl text-gray-900"
                            v-text="formatCurrency(product.price)"
                        ></span>
                        <button
                            class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                            @click="$store.commit('addToCart', product)"
                        >
                            Add To Cart
                        </button>
                    </div>
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
        },
        product() {
            console.log("====", this.$route.params.slug);
            if (this.$route.params.slug) {
                return this.products.find(
                    product => product.slug === this.$route.params.slug
                );
            } else {
                return this.$store.state.selected;
            }
        }
    }
};
</script>
