<template>
    <section class="text-gray-700 body-font">
        <div class="is-flex">
            <button
                class="button has-text-weight-semibold m-r-sm"
                @click="handleBackToProducts"
            >
                Back
            </button>
            <span v-if="!isNew" class="is-size-5">
                Edit Product
            </span>
            <span v-else class="is-size-5">
                Add Product
            </span>
        </div>
        <hr class="m-2" />

        <table style="width:100%">
            <tr v-if="!isNew">
                <td><label class="label">ID</label></td>
                <td>
                    <b-input name="id" disabled v-model="product.id"></b-input>
                </td>
            </tr>
            <tr>
                <td><label class="label">Name</label></td>
                <td>
                    <b-field expanded>
                        <b-input
                            name="id"
                            placeholder="Name"
                            v-model="product.name"
                            required
                        ></b-input
                    ></b-field>
                </td>
            </tr>
            <tr>
                <td><label class="label">Price</label></td>
                <td>
                    <b-field>
                        <b-input
                            placeholder="Price"
                            name="price"
                            v-model="product.price"
                        ></b-input
                    ></b-field>
                </td>
            </tr>
            <tr>
                <td><label class="label">Title</label></td>
                <td>
                    <b-field>
                        <b-input
                            name="title"
                            placeholder="Title"
                            v-model="product.title"
                        ></b-input>
                    </b-field>
                </td>
            </tr>
            <tr>
                <td><label class="label">Description</label></td>
                <td>
                    <b-field>
                        <textarea
                            placeholder="Description"
                            class="textarea"
                            v-model="product.description"
                        ></textarea>
                    </b-field>
                </td>
            </tr>
            <tr>
                <td><label class="label">Creator Email</label></td>
                <td>
                    <b-field>
                        <b-input
                            placeholder="Email"
                            v-model="product.creator_email"
                        >
                        </b-input>
                    </b-field>
                </td>
            </tr>
            <tr>
                <td><label class="label">Inventory</label></td>
                <td>
                    <b-field>
                        <b-input
                            type="number"
                            v-model="product.inventory"
                            placeholder="Inventory"
                        ></b-input
                    ></b-field>
                </td>
            </tr>
            <tr>
                <td><label class="label">Duration(days)</label></td>
                <td>
                    <b-field>
                        <b-input
                            type="number"
                            placeholder="Duration(days)"
                            v-model="product.duration"
                        >
                        </b-input>
                    </b-field>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="label">Age range(Min-Max)</label>
                </td>
                <td>
                    <div class="columns">
                        <div class="column ">
                            <b-field>
                                <b-input
                                    type="number"
                                    v-model="product.age_min"
                                ></b-input
                            ></b-field>
                        </div>
                        <div class="column">
                            <b-field>
                                <b-input
                                    type="number"
                                    v-model="product.age_max"
                                ></b-input
                            ></b-field>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="label">Shopify PDP Image</label>
                </td>
                <td>
                    <div class="columns">
                        <div class="column ">
                            <b-field
                                class="file is-primary"
                                :class="{
                                    'has-name': !!shopify_pdp_file
                                }"
                            >
                                <b-upload
                                    @change.native="onPDPFileChange"
                                    v-model="shopify_pdp_file"
                                    class="file-label"
                                    rounded
                                >
                                    <span class="file-cta">
                                        <b-icon
                                            class="file-icon"
                                            icon="upload"
                                        ></b-icon>
                                        <span class="file-label"
                                            >Click to upload</span
                                        >
                                    </span>
                                </b-upload>
                            </b-field>
                        </div>
                        <div
                            class="column"
                            v-if="product.shopify_pdp_image || shopify_pdp_file"
                        >
                            <b-image
                                v-if="shopify_pdp_image"
                                :src="shopify_pdp_image"
                                class="is-128x128"
                            ></b-image>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="label">Zoom banner</label>
                </td>
                <td>
                    <div class="columns">
                        <div class="column ">
                            <b-field
                                class="file is-primary"
                                :class="{
                                    'has-name': !!zoom_banner_file
                                }"
                            >
                                <b-upload
                                    @change.native="onBannerFileChange"
                                    v-model="zoom_banner_file"
                                    class="file-label"
                                    rounded
                                >
                                    <span class="file-cta">
                                        <b-icon
                                            class="file-icon"
                                            icon="upload"
                                        ></b-icon>
                                        <span class="file-label"
                                            >Click to upload</span
                                        >
                                    </span>
                                </b-upload>
                            </b-field>
                        </div>
                        <div
                            class="column"
                            v-if="product.zoom_banner || zoom_banner_file"
                        >
                            <b-image
                                :src="zoom_banner_image"
                                class="is-128x128"
                            ></b-image>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="label">Zoom Item Type</label>
                </td>
                <td>
                    <b-field>
                        <b-select
                            placeholder="Select a Zoom Item Type"
                            v-model="product.zoom_item_type"
                        >
                            <option value="event">Event</option>
                        </b-select></b-field
                    >
                </td>
            </tr>
            <tr>
                <td>
                    <label class="label">Master SKU</label>
                </td>
                <td>
                    <b-field>
                        <b-input
                            name="master_sku"
                            placeholder="Master SKU"
                            v-model="product.master_sku"
                        ></b-input
                    ></b-field>
                </td>
            </tr>
        </table>

        <hr />

        <div>
            <button
                class="button is-primary has-text-weight-bold"
                @click="handleApplyChange()"
            >
                Save
            </button>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            shopify_pdp_file: null,
            zoom_banner_file: null,
            shopify_pdp_image: "",
            zoom_banner_image: "",
            selectProduct: {
                id: "",
                name: "",
                inventory: 95,
                age_min: 1,
                age_max: 1,
                duration: 1,
                zoom_item_type: "event",
                zoom_banner: "",
                shopify_pdp_image: ""
            },
            isDisableButtonSave: false
        };
    },
    methods: {
        onPDPFileChange(e) {
            const file = e.target.files[0];
            this.shopify_pdp_image = URL.createObjectURL(file);
            console.log(this.shopify_pdp_image, "this.shopify_pdp_image");
        },
        onBannerFileChange(e) {
            const file = e.target.files[0];
            this.zoom_banner_image = URL.createObjectURL(file);
            console.log(this.zoom_banner_image, "this.zoom_banner_image");
        },
        formatCurrency(amount) {
            amount = amount / 100;
            return amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            });
        },

        handleApplyChange() {
            console.log(this.product, "this.product");
            let data = new FormData();
            Object.entries(this.product).forEach(([key, value]) => {
                data.append(key, value);
            });
            data.append("shopify_pdp_image", this.shopify_pdp_file);
            data.append("zoom_banner", this.zoom_banner_file);

            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };
            axios
                .post("/api/products/add", data, config)
                .then(response => {
                    this.paymentProcessing = false;
                    console.log(response);

                    this.$store.commit("addProducts", response.data);
                    this.$buefy.toast.open("Data updated successfully.");
                    this.handleBackToProducts();
                })
                .catch(error => {
                    console.error(error);
                });
        },
        handleBackToProducts() {
            this.$router.push({
                name: "admin",
                params: {}
            });
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        product() {
            const id = this.$route.params.id;
            if (id && this.products.length > 0) {
                const data = this.products.find(
                    p => p.id.toString() === id.toString()
                );

                this.shopify_pdp_image = "/images/" + data.shopify_pdp_image;
                this.zoom_banner_image = "/images/" + data.zoom_banner;

                return data;
            } else {
                return this.selectProduct;
            }
        },
        isNew() {
            return !this.$route.params.id;
        }
    }
};
</script>
