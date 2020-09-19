<template>
  <v-overlay :value="active">
    <v-row justify="center">
      <v-progress-circular
        indeterminate
        size="128" />
    </v-row>
    <v-row
      justify="center"
      class="mt-10">
      กำลังดำเนิกการ...
    </v-row>
  </v-overlay>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
