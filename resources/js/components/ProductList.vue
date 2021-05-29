<template>
    <section class="text-gray-700 body-font">
        <b-button @click="handleOpenModalAdd" class="ring-4 ring-indigo-300"
            >Add Product</b-button
        >
        <b-table
            :data="products"
            :narrowed="true"
            :paginated="true"
            :striped="true"
            :hoverable="true"
            :pagination-size="'is-small'"
        >
            <slot name="columns"></slot>

            <b-table-column
                v-slot="props"
                width="30"
                field="actions"
                custom-row-key="actions"
            >
                <button
                    class="button is-small is-text is-action m-l-xxs m-r-xxs"
                    @click.prevent="handleOpenModalEdit(props.row)"
                >
                    Edit
                </button>
            </b-table-column>
            <b-table-column
                v-slot="props"
                width="30"
                field="actions"
                custom-row-key="actions"
            >
                <button
                    class="button is-small is-text is-action"
                    @click.prevent="handleConfirmCustomDelete(props.row)"
                >
                    Delete
                </button>
            </b-table-column>

            <b-table-column
                v-slot="props"
                field="name"
                :label="'name'"
                sortable
            >
                {{ props.row.name || "-" }}
            </b-table-column>
            <b-table-column
                v-slot="props"
                field="price"
                :label="'price'"
                sortable
            >
                {{ props.row.price || "0" }}
            </b-table-column>
            <b-table-column
                v-slot="props"
                field="description"
                :label="'description'"
                sortable
            >
                {{ props.row.description || "-" }}
            </b-table-column>
        </b-table>

        <b-modal :active.sync="isFormModalActive">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p
                        class="modal-card-title has-text-weight-bold"
                        v-if="!isNew"
                    >
                        Edit
                    </p>
                    <p
                        class="modal-card-title has-text-weight-bold"
                        v-if="isNew"
                    >
                        Add
                    </p>
                </header>
                <section class="modal-card-body">
                    <table style="width:100%">
                        <tr v-if="!isNew">
                            <td><label class="label">ID</label></td>
                            <td>
                                <b-input
                                    name="id"
                                    disabled
                                    v-model="selectProduct.id"
                                ></b-input>
                            </td>
                        </tr>
                        <tr>
                            <td><label class="label">Name</label></td>
                            <td>
                                <b-field>
                                    <b-input
                                        name="id"
                                        placeholder="Name"
                                        v-model="selectProduct.name"
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
                                        v-model="selectProduct.price"
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
                                        v-model="selectProduct.title"
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
                                        v-model="selectProduct.description"
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
                                        v-model="selectProduct.creator_email"
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
                                        v-model="selectProduct.inventory"
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
                                        v-model="selectProduct.duration"
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
                                                v-model="selectProduct.age_min"
                                            ></b-input
                                        ></b-field>
                                    </div>
                                    <div class="column">
                                        <b-field>
                                            <b-input
                                                type="number"
                                                v-model="selectProduct.age_max"
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
                                        v-if="
                                            selectProduct.shopify_pdp_image ||
                                                shopify_pdp_file
                                        "
                                    >
                                        <b-image
                                            v-if="shopify_pdp_image"
                                            :src="shopify_pdp_image"
                                            class="is-64x64"
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
                                                @change.native="
                                                    onBannerFileChange
                                                "
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
                                        v-if="
                                            selectProduct.zoom_banner ||
                                                zoom_banner_file
                                        "
                                    >
                                        <b-image
                                            :src="zoom_banner_image"
                                            class="is-64x64"
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
                                        v-model="selectProduct.zoom_item_type"
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
                                        v-model="selectProduct.master_sku"
                                    ></b-input
                                ></b-field>
                            </td>
                        </tr>
                    </table>
                </section>

                <footer class="modal-card-foot">
                    <b-field grouped group-multiline>
                        <p class="control">
                            <button
                                class="button"
                                @click="isFormModalActive = false"
                            >
                                Cancel
                            </button>
                        </p>
                        <p class="control" v-if="!isDisableButtonSave">
                            <button
                                class="button is-info"
                                @click="handleApplyChange()"
                            >
                                Save
                            </button>
                        </p>
                    </b-field>
                </footer>
            </div>
        </b-modal>
    </section>
</template>
<script>
export default {
    data() {
        return {
            isFormModalActive: false,
            shopify_pdp_file: null,
            zoom_banner_file: null,
            shopify_pdp_image: "",
            zoom_banner_image: "",
            selectProduct: {
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

        handleConfirmCustomDelete(row) {
            this.selectProduct = row;
            this.$buefy.dialog.confirm({
                title: "Delete",
                message: "Are you sure to delete this item?",
                confirmText: "Delete",
                cancelText: "Cancel",
                type: "is-danger",
                hasIcon: true,
                onConfirm: async () => {
                    this.processDelete();
                }
            });
        },
        processDelete() {
            axios
                .post("/api/products/delete", this.selectProduct)
                .then(response => {
                    this.$store.commit("deleteProducts", this.selectProduct);
                    this.selectProduct = {};
                    this.$buefy.toast.open("Data deleted successfully.");
                });
        },
        handleApplyChange() {
            console.log(this.selectProduct, "this.selectProduct");
            let data = new FormData();
            Object.entries(this.selectProduct).forEach(([key, value]) => {
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
                    this.isFormModalActive = false;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        handleOpenModalEdit(row) {
            this.isFormModalActive = true;
            this.selectProduct = row;
            this.shopify_pdp_image =
                "images/" + this.selectProduct.shopify_pdp_image;
            this.zoom_banner_image = "images/" + this.selectProduct.zoom_banner;
            this.isDisableButtonSave = false;
            this.zoom_banner_file = null;
            this.shopify_pdp_file = null;
        },
        handleOpenModalAdd() {
            this.isFormModalActive = true;
            this.selectProduct = {
                inventory: 95,
                age_min: 1,
                age_max: 1,
                duration: 1,
                zoom_item_type: "event"
            };
            this.isDisableButtonSave = false;
            this.zoom_banner_file = null;
            this.shopify_pdp_file = null;
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        isNew() {
            return !this.selectProduct.id;
        }
    }
};
</script>
