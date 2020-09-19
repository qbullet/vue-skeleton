<template>
  <v-app>
    <v-container>
      <router-view />
      <snackbar
        :value="snackbar.value"
        :message="snackbar.message"
        :type="snackbar.type"
        :can-close="snackbar.canClose"
        :timeout="snackbar.timeout"
        @close="closeSnackbar" />
      <modal
        :active="modal.value"
        :confirm-text="modal.confirmText"
        :cancel-text="modal.cancelText"
        :message="modal.message"
        :title="modal.title"
        :confirm-only="modal.confirmOnly"
        @onConfirm="confirmModal"
        @onCancel="closeModal" />
      <loading :active="loading.value" />
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import modal from '@/components/style/modal.vue'
import snackbar from '@/components/style/snackbar.vue'
import loading from '@/components/style/loading.vue'

export default {
  name: 'App',
  components: {
    snackbar,
    modal,
    loading
  },
  computed: {
    ...mapGetters({
      snackbar: 'Style/snackbar',
      modal: 'Style/modal',
      loading: 'Style/loading'
    })
  },
  methods: {
    ...mapActions({
      setSnackbar: 'Style/setSnackbar',
      setModal: 'Style/setModal',
      setLoading: 'Style/setLoading'
    }),
    closeSnackbar () {
      this.setSnackbar({ value: false })
    },
    confirmModal () {
      if (this.modal.onConfirm) {
        this.modal.onConfirm()
      }
      this.setModal({
        value: false
      })
    },
    closeModal () {
      if (this.modal.closeModal) {
        this.modal.closeModal()
      }
      this.setModal({
        value: false
      })
    }
  }
}
</script>

<style lang="scss">
$body-font-family: 'TH Sarabun', 'Roboto', sans-serif !important;

#app {
  font-family: $body-font-family;
  .display-4 {
    font-family: $body-font-family;
  }
  .display-3 {
    font-family: $body-font-family;
  }
  .display-2 {
    font-family: $body-font-family;
  }
  .display-1 {
    font-family: $body-font-family;
  }
  .headline {
    font-family: $body-font-family;
  }
  .title {
    font-family: $body-font-family;
  }
  .subtitle-1 {
    font-family: $body-font-family;
  }
  .subtitle-2 {
    font-family: $body-font-family;
  }
  .body-1 {
    font-family: $body-font-family;
  }
  .body-2 {
    font-family: $body-font-family;
  }
  .caption {
    font-family: $body-font-family;
  }
  .overline {
    font-family: $body-font-family;
  }
}
.custom-switch.v-input--selection-controls {
  margin-top: 0;
  padding-top: 0;
}

</style>
