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
    </section>
</template>
<script>
export default {
    data() {
        return {};
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

        handleOpenModalEdit(row) {
            this.$router.push({
                name: "admin.products.add",
                params: { id: row.id }
            });
        },
        handleOpenModalAdd() {
            this.$router.push({
                name: "admin.products.add",
                params: { id: null }
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
