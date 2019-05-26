<template>
  <v-data-table
    :rows-per-page-items="rowsperPageItems"
    :headers="headers"
    :items="items"
    :total-items="total"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.email }}</td>
      <td class="text-xs-left">
        {{ props.item.role }}
      </td>
      <td class="text-xs-left">
        {{ props.item.createdAt }}
      </td>
    </template>
  </v-data-table>
</template>

<script>
/* eslint-disable vue/require-default-prop */
export default {
  props: {
    headers: { type: Array, required: true },
    items: { type: Array },
    total: { type: Number, default: 0 }
  },
  data: () => {
    return {
      rowsperPageItems: [10]
    }
  }
}
</script>
