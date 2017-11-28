import VuePreviewer from "./preview.vue"

export default {
  install: function(Vue, options) {
    Vue.component(VuePreviewer.name, VuePreviewer)
  }
}
