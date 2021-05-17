export const state = () => ({
    show: false,
    title: null,
    base: null,
    base_props: null,
    details: null,
    details_props: null
  })
  
  export const mutations = {
    toggle(state) {
      state.show = !state.show
    },
    title(state, title) {
      state.title = title
    },
    base(state, component) {
      state.base = () => import('~/components/' + component)
    },
    base_props(state, props) {
      state.base_props = props
    },
    details(state, component) {
      state.details = () => import('~/components/' + component)
    },
    details_props(state, props) {
      state.base_props = props
    },
  }
  
  export const getters = {
    show: state => state.show,
    title: state => state.title,
    base: state => state.base,
    base_props: state => state.base_props,
    details: state => state.details,
    details_props: state => state.details_props,
  }
  
  export const actions = {
    init({commit}, {title = null, base = null, details = null}) {
      commit('title', title)
      commit('base', base)
      commit('details', details)
    }
  }
  