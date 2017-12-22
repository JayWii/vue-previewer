<template>
  <div>
    <ul class="preview-list">
      <li
        class="preview-item"
        v-for="(src, index) in srcs"
        :key="index"
        :style="{
          width: `${width}px`,
          height: `${width}px`,
          margin: `${margin}px ${margin}px 0 0`,
        }">

        <div class="img preview-img" @click="showImg(index)" :style="{backgroundImage: `url(${src.src})`, borderRadius: `${radius}px`}"></div>

        <div class="delete-btn" v-if="removeEnable" @click="removePic(index)">
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTEwMjg0NjI5OTMxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4NjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI0MCAxODAgMTgwIDI0MCA0NTIgNTEyIDE4MCA3ODQgMjQwIDg0NCA1MTIgNTcyIDc4NCA4NDQgODQ0IDc4NCA1NzIgNTEyIDg0NCAyNDAgNzg0IDE4MCA1MTIgNDUyIDI0MCAxODB6IiBwLWlkPSIxODY2IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" alt="delete">
        </div>
      </li>
    </ul>
    
    <!-- 大图预览 -->
    <img-previewer :list="srcs" selector=".preview-img" :options="options" @on-close="closePic" ref="previewer"></img-previewer>

  </div>
</template>

<script>
import ImgPreviewer from './Previewer'

export default {
  name: "vue-previewer",
  components: {
    ImgPreviewer
  },
  props: {
    imgs: {
      type: [Array],
      default: []
    },
    width: {
      type: [Number],
      default: 80
    },
    margin: {
      type: [Number],
      default: 10
    },
    srcName: {
      type: [String],
      default: 'src'
    },
    radius: {
      type: [Number],
      default: 5
    },
    removeEnable: {
      type: [Boolean],
      default: true
    },
    removeInside: {
      type: [Boolean],
      default: true
    },
    deleteBtnColor: {
      type: [String],
      default: '#e12e2e'
    },
    previewBtnColor: {
      type: [String],
      default: '#3caaff'
    },
    type: {
      type: [String],
      default: 'url' // url则imgs的值为图片链接，file则imgs的值为图片文件
    }
  },
  data() {
    return {
      srcs: [],
      options: {
        shareEl: false,
        closeEl: true,
        fullscreenEl: false
      },
      index: null
    }
  },
  mounted() {
    this.initSrcs()
  },
  watch: {
    imgs() {
      this.initSrcs()
    }
  },
  computed: {
    urls () {
      return this.srcs.map((item) => {
        return item.src
      })
    }
  },
  methods: {
    showImg (index) {
      // photoswip
      this.$refs.previewer.show(index)
    },
    tagImgs (arr) {
      let result = []
      for (var i = 0; i < arr.length; i++) {
        let obj = {
          sort: i,
          file: arr[i].src,
          src: '',
          focus: false,
          author: arr[i].author || '',
          desc: arr[i].desc || ''
        }
        result.push(obj)
      }
      return result
    },
    initSrcs () {
      if (this.imgs.length > 0) {
        let srcs = this.tagImgs(this.imgs)
        if (((this.type === 'file') && (this.imgs.length > 0) && (typeof(this.imgs[0]) === 'object')) || (((this.type === 'url')) && (typeof(this.imgs[0].src) === 'object'))) {
          let files = this.imgs
          if (window.FileReader) {
            for (var i = 0; i < files.length; i++) {
              let fr = new FileReader()
              fr.onloadend = function (i) {
                return e => {
                  srcs[i].src = e.target.result
                }
              }(i)
              fr.readAsDataURL(files[i][this.srcName])
            }
          }
        } else {
          for (var i = 0; i < this.imgs.length; i++) {
            srcs[i].src = this.imgs[i][this.srcName]
          }
        }
        this.srcs = srcs
      } else {
        return
      }
    },
    __dispatch (name, index, fileList, target) {
      this.$emit && this.$emit(name, index, fileList, target)
    },
    closePic () {
      this.__dispatch("onClose")
    },
    removePic (index) {
      let removeTarget = null
      if (this.removeInside) {
        // 由预览组件来删
        this.srcs.splice(index, 1)
        this.imgs.splice(index, 1)
      }
      removeTarget = this.imgs[index]
      let imgList = this.imgs
      let data = {
        index: index,
        removeTarget: removeTarget,
        fileList: imgList
      };
      this.__dispatch("onRemove",data.index, data.fileList, data.removeTarget)
    }
  }
}
</script>
<style scoped>
ul,
img {
  padding: 0;
}
.preview-list {
  box-sizing: border-box;
  overflow: hidden;
}
.preview-item {
  float: left;
  position: relative;
  font-size: 0;
  cursor: pointer;
}
.preview-item .img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f0f0f0;
}
.operate {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
}
.delete-btn {
  position: absolute;
  background-color: rgba(0,0,0,0.8);
  border-radius: 50%;
  padding: 3px;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  top: -10px;
  right: -10px;
  z-index: 2;
}
.delete-btn img {
  width: 100%;
}
.operates,
.preview-mask {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.6s;
  pointer-events: none;
  overflow: hidden;
}
.operates.cur,
.preview-mask {
  opacity: 1;
  pointer-events: inherit;
}
.operate-icon {
  position: absolute;
  width: 100%;
  height: 100%;
}
.operate-icon img {
  position: absolute;
  width: 50%;
  box-sizing: border-box;
  z-index: 1;
}
.delete-icon img {
  left: 0;
  bottom: 0;
  padding: 5%;
}
.preview-icon img {
  right: 2%;
  top: 2%;
  padding: 8%;
}
</style>
