<template>
  <v-snackbar
    v-model="isSnackbar"
    :color="type"
    multi-line="multi-line"
    :timeout="timeout"
    top
    right>
    <v-icon
      v-if="icon"
      class="mr-2"
      color="#ffffff">
      {{ icon }}
    </v-icon>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <span v-html="message" />
    <v-spacer />
    <v-btn
      v-if="canClose"
      icon
      class="btn-close-snackbar"
      @click="closeSnackbar">
      <v-icon color="#ffffff">
        mdi-close-circle
      </v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: undefined
    },
    message: {
      type: String,
      required: true
    },
    timeout: {
      type: Number,
      required: false,
      default: 3000
    },
    canClose: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      isSnackbar: false
    }
  },
  computed: {
    icon () {
      let icon
      if (this.type === 'success') {
        icon = 'mdi-checkbox-marked-circle'
      } else if (this.type === 'warning') {
        icon = 'mdi-alert-circle'
      } else if (this.type === 'info') {
        icon = 'mdi-information'
      } else if (this.type === 'error') {
        icon = 'mdi-alert'
      }
      return icon
    }
  },
  watch: {
    value (e) {
      this.isSnackbar = e
    },
    isSnackbar (e) {
      if (!e) {
        this.closeSnackbar()
      }
    }
  },
  methods: {
    closeSnackbar () {
      this.$emit('close', false)
    }
  }
}
</script>

<style>
button.v-btn.btn-close-snackbar {
  top: 16px;
  position: absolute;
  right: 16px;
}
</style>
