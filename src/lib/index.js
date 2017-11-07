import VuePreviewer from './preview.vue'

const preview = {
  install: function(Vue) {
    Vue.component(VuePreviewer.name, VuePreviewer)
  }
}
if (typeof window !== 'undefined' && window.Vue) { 
	window.Vue.use(preview) 
}
export default preview