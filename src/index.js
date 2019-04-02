/**
 * Created by qiubaolin on 2019/3/16.
 */
import AlbumComponent from './components/Album/Album.vue'

const VueAlbum = {
  version: '1.0.0',
  install: function (Vue, opt = {}) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component(AlbumComponent.name, AlbumComponent)
  },
  AlbumComponent
}

export default VueAlbum
