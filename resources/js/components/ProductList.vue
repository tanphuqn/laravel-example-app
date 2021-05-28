<template>
    <section class="text-gray-700 body-font">
        <b-button @click="handleOpenModalEdit" class="ring-4 ring-indigo-300"
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
                    <!-- display_id -->
                    <b-field v-bind:label="'ID'" v-if="!isNew">
                        <b-input
                            name="id"
                            :disabled="true"
                            v-model="selectProduct.id"
                        ></b-input>
                    </b-field>

                    <b-field v-bind:label="'Name'">
                        <b-input
                            name="name"
                            v-model="selectProduct.name"
                        ></b-input>
                    </b-field>
                    <b-field v-bind:label="'Price'">
                        <b-input
                            name="price"
                            v-model="selectProduct.price"
                        ></b-input>
                    </b-field>
                    <b-field v-bind:label="'Description'">
                        <b-input
                            name="description"
                            v-model="selectProduct.description"
                        ></b-input>
                    </b-field>
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
            selectProduct: {},
            isDisableButtonSave: false
        };
    },
    methods: {
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
            axios
                .post("/api/products/add", this.selectProduct)
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
            this.isDisableButtonSave = false;
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
