const state = {
  snackbar: {
    message: '',
    type: 'success',
    timeout: 3000,
    canClose: true,
    value: false
  },
  modal: {
    confirmText: '',
    cancelText: '',
    message: '',
    title: '',
    value: false,
    confirmOnly: false,
    onConfirm: null,
    onCancel: null
  },
  loading: {
    value: false
  }
}

const actions = {
  setLoading ({ commit }, payload) {
    commit('SET_LOADING', payload)
  },
  setSnackbar ({ commit }, payload) {
    commit('SET_SNACKBAR', payload)
  },
  setModal ({ commit }, payload) {
    commit('SET_MODAL', payload)
  }
}

const mutations = {
  SET_LOADING (state, payload) {
    state.loading.value = payload.value
  },
  SET_MODAL (state, payload) {
    state.modal.confirmText = payload.confirmText || 'Agree'
    state.modal.cancelText = payload.cancelText || 'Disagree'
    state.modal.title = payload.title || null
    state.modal.value = payload.value || false
    state.modal.message = payload.message || ''
    state.modal.confirmOnly = payload.confirmOnly || false
    state.modal.onConfirm = payload.onConfirm ? payload.onConfirm : null
    state.modal.onCancel = payload.onCancel ? payload.onCancel : null
  },
  SET_SNACKBAR (state, payload) {
    state.snackbar.message = payload.message || ''
    state.snackbar.type = payload.type || ''
    state.snackbar.value = payload.value || false
    state.snackbar.canClose = !!(payload.canClose === null || payload.canClose === undefined || payload.canClose === true)
    state.snackbar.timeout = payload.timeout || 3000
  }
}

const getters = {
  snackbar: (state) => state.snackbar,
  modal: (state) => state.modal,
  loading: (state) => state.loading
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
