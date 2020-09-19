<template>
  <v-dialog
    v-model="active"
    persistent
    max-width="420">
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>
      <v-card-text>
        <p class="white-space-pre">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="message"></span>
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="!confirmOnly"
          color="pink darken-1"
          text
          @click="cancel">
          {{ cancelText }}
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="confirm">
          {{ confirmText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    confirmText: {
      type: String,
      required: false,
      default: 'Agree'
    },
    cancelText: {
      type: String,
      required: false,
      default: 'Disagree'
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    message: {
      type: String,
      required: false,
      default: ''
    },
    confirmOnly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    confirm () {
      this.$emit('update:active', false)
      this.$emit('onConfirm', true)
    },
    cancel () {
      this.$emit('update:active', false)
      this.$emit('onCancel', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .white-space-pre>* {
    white-space: pre;
  }
</style>
