<template>
  <div>
    <ul class="preview-list">
      <li
        class="preview-item"
        v-for="(src, index) in srcs"
        :key="index"
        @click="focus(src)"
        :style="{
          width: `${width}px`,
          height: `${width}px`,
          backgroundImage: `url(${src.src})`,
          margin: `${margin}px ${margin}px 0 0`,
          borderRadius: `${radius}px`
        }">
        <div class="operates" :class="{ 'cur' : src.focus }" v-if="removeEnable">
          <div class="operate delete-btn" :style="{ borderWidth: `${width/2}px`, borderColor: `transparent transparent ${deleteBtnColor} ${deleteBtnColor}` }"></div>
          <div class="operate-icon delete-icon" @click="removePic(index)"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTEwMTA5MjcxMTM4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4NTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2OS44NzI2NCA3NTkuOTEwNFYzNjYuMTM2MzJhMjQuNzY1NDQgMjQuNzY1NDQgMCAwIDAtMjQuNzc1NjgtMjQuNzgwOCAyNC43NjU0NCAyNC43NjU0NCAwIDAgMC0yNC43ODA4IDI0Ljc4MDh2MzkzLjc3NDA4YTI0Ljc2MDMyIDI0Ljc2MDMyIDAgMCAwIDI0Ljc4MDggMjQuNzc1NjggMjQuNzU1MiAyNC43NTUyIDAgMCAwIDI0Ljc3NTY4LTI0Ljc3NTY4ek00MjAuMzIxMjggMjEzLjE3NjMyaDE5OC4yMjA4YTI0Ljc1NTIgMjQuNzU1MiAwIDAgMCAyNC43NzU2OC0yNC43NzU2OCAyNC43NjAzMiAyNC43NjAzMiAwIDAgMC0yNC43NzU2OC0yNC43ODA4SDQyMC4zMjEyOGEyNC43NjU0NCAyNC43NjU0NCAwIDAgMC0yNC43NzU2OCAyNC43ODA4IDI0Ljc1NTIgMjQuNzU1MiAwIDAgMCAyNC43NzU2OCAyNC43NzU2OHogbTMyMi4wOTkyIDEyOS4wMDg2NGEyNC43NTUyIDI0Ljc1NTIgMCAwIDAtMjQuNzc1NjggMjQuNzc1NjhsLTE1LjM2IDQzMy4wODU0NGMwIDI3LjM2NjQtMTEuOTUwMDggMzkuMzE2NDgtMzkuMzE2NDggMzkuMzE2NDhoLTI4Ny4wNzg0Yy0yNy4zNjY0IDAtMzkuMzE2NDgtMTEuOTUwMDgtMzkuMzE2NDgtMzkuMzE2NDhsLTE1LjM2LTQzMy4wODU0NGEyNC43NzU2OCAyNC43NzU2OCAwIDAgMC00OS41NDYyNCAwbDE1LjM2IDQ2Mi4xNjE5MmMwIDI3LjM2MTI4IDMyLjQyNDk2IDU5Ljc5MTM2IDU5Ljc4NjI0IDU5Ljc5MTM2aDM0NS4yMzEzNmMyNy4zNjEyOCAwIDU5Ljc4NjI0LTMyLjQzMDA4IDU5Ljc4NjI0LTU5Ljc5MTM2bDE1LjM2LTQ2Mi4xNjE5MmEyNC43NjAzMiAyNC43NjAzMiAwIDAgMC0yNC43NzA1Ni0yNC43NzU2OHogbTc0LjMyNzA0LTk5LjExMjk2SDIyMi4xMDU2YTI0Ljc4MDggMjQuNzgwOCAwIDAgMCAwIDQ5LjU2MTZoNTk0LjY0NzA0YTI0Ljc2MDMyIDI0Ljc2MDMyIDAgMCAwIDI0Ljc3MDU2LTI0Ljc4MDggMjQuNzcwNTYgMjQuNzcwNTYgMCAwIDAtMjQuNzc1NjgtMjQuNzgwOHpNNjE4LjUzNjk2IDc1OS45MTA0VjM2Ni4xMzYzMmEyNC43NjU0NCAyNC43NjU0NCAwIDAgMC0yNC43ODU5Mi0yNC43ODA4IDI0Ljc2MDMyIDI0Ljc2MDMyIDAgMCAwLTI0Ljc3MDU2IDI0Ljc4MDh2MzkzLjc3NDA4YTI0Ljc2MDMyIDI0Ljc2MDMyIDAgMCAwIDI0Ljc3MDU2IDI0Ljc3NTY4IDI0Ljc2MDMyIDI0Ljc2MDMyIDAgMCAwIDI0Ljc4NTkyLTI0Ljc3NTY4eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTg1NiI+PC9wYXRoPjwvc3ZnPg==" alt=""></div>
          <div class="operate preview-btn" :style="{ borderWidth: `${width/2}px`, borderColor: `${previewBtnColor} ${previewBtnColor} transparent transparent` }"></div>
          <div class="operate-icon preview-icon"><img v-preview="src.src" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTEwMTA5MzUzMTIwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc4OC45MTIwMzQgNDA5Ljk1Mzk0NmMwLTIwNy42NTEwMzMtMTY4LjMyNjQ4NC0zNzYuMDMxMDM1LTM3Ni4wODA5MDQtMzc2LjAzMTAzNEMyMDUuMTc4ODgxIDMzLjkyMjkxMiAzNi44NTExOCAyMDIuMzAyOTE0IDM2Ljg1MTE4IDQwOS45NTM5NDZjMCAyMDcuNjUzNDY1IDE2OC4zMjc3MDEgMzc2LjAzMTAzNSAzNzUuOTc4NzM0IDM3Ni4wMzEwMzUgMjA3Ljc1NTYzNiAwLjAwMTIxNiAzNzYuMDgyMTItMTY4LjM3NzU3IDM3Ni4wODIxMi0zNzYuMDMxMDM1ek00MTIuODI5OTE0IDY5MS45ODk2OWMtMTU1LjczODg4MyAwLTI4MS45MzIzNTctMTI2LjI0Njk5Mi0yODEuOTMyMzU3LTI4Mi4wMzU3NDQgMC0xNTUuNzM4ODgzIDEyNi4xOTM0NzQtMjgyLjAzNTc0MyAyODEuOTMyMzU3LTI4Mi4wMzU3NDMgMTU1Ljg0MzQ4NSAwIDI4Mi4wMzU3NDMgMTI2LjI5Njg2MSAyODIuMDM1NzQzIDI4Mi4wMzU3NDMgMCAxNTUuNzkxMTg0LTEyNi4xOTIyNTggMjgyLjAzNTc0My0yODIuMDM1NzQzIDI4Mi4wMzU3NDR6IiBwLWlkPSIyNjA4IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTIzNy44NDUzNDMgNDI5LjUxMjIyNmg1MS43MDUzNzdjMC04NS41MTUxNzIgNjkuNTk4NTI3LTE1NS4wNjEzOTggMTU1LjAxMDMxMy0xNTUuMDYxMzk4di01MS43MDUzNzdjLTExMy45MTg0NjQgMC0yMDYuNzE1NjkgOTIuNzQ2MTQtMjA2LjcxNTY5IDIwNi43NjY3NzV6TTk2Mi4zMzYwNzcgODQ3LjEwNTgyMWwtMjA0LjYzMjE0OS0yMDQuNjM0NTgxYy0yOS40NDA4MDYgNDguOTk5MDg1LTcwLjYzODQ3MyA5MC4wOTQ1ODItMTE5Ljc0NDU5NCAxMTkuNTM1Mzg4bDIwNC43MzkxODUgMjA0LjczOTE4NGMzMy4wODQ4NzMgMzMuMDMwMTM5IDg2LjY2MjE1MyAzMy4wMzAxMzkgMTE5LjYzNzU1OCAwIDMzLjA4NDg3My0zMi45ODAyNzEgMzMuMDg0ODczLTg2LjY2MjE1MyAwLTExOS42Mzk5OTF6IiBwLWlkPSIyNjA5IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" alt=""></div>  
        </div>
        <div class="preview-mask" v-if="!removeEnable" v-preview="src.src"></div>
      </li>
    </ul>
    
    <!-- 大图预览 -->
    <transition name="fade">
      <div class="preview-wrapper" v-show="preview.show" @click="leave"> 
        <div class="preview-loading" v-show="preview.loading"><div></div></div>
        <img 
          class="preview-img" 
          v-if="preview.current.src" 
          :src="preview.current.src"
          :alt="preview.current.title"
          v-show="!preview.loading"
        >
        <div class="preview-title" v-if="preview.isTitleEnable&&preview.current.title" v-show="!preview.loading">
          {{preview.current.title}}
        </div>
        <div class="preview-nav-left" v-if="preview.isHorizontalNavEnable" v-show="!preview.loading">
          <span class="preview-nav-arrow" @click="preAction" ></span>
        </div>
        <div class="preview-nav-right" v-if="preview.isHorizontalNavEnable" v-show="!preview.loading">
          <span class="preview-nav-arrow" @click="nextAction"></span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "vue-previewer",
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
      srcs: []
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
    preview() {
      return window.LOGIC_EVENT_BUS.LOGIC_PREVIEW
    }
  },
  methods: {
    tagImgs (arr) {
      let result = []
      for (var i = 0; i < arr.length; i++) {
        let obj = {
          sort: i,
          file: arr[i],
          src: '',
          focus: false
        }
        result.push(obj)
      }
      return result
    },
    initSrcs () {
      let srcs = this.tagImgs(this.imgs)
      console.log()
      if (((this.type === 'file') && (this.imgs.length > 0) && (typeof(this.imgs[0]) === 'object')) || (((this.type === 'url')) && (typeof(this.imgs[0]) === 'object'))) {
        let files = this.imgs
        if (window.FileReader) {
          for (var i = 0; i < files.length; i++) {
            let fr = new FileReader()
            fr.onloadend = function (i) {
              return e => {
                srcs[i].src = e.target.result
              }
            }(i)
            fr.readAsDataURL(files[i])
          }
        }
      } else {
        for (var i = 0; i < this.imgs.length; i++) {
          srcs[i].src = this.imgs[i]
        }
      }
      this.srcs = srcs
    },
    __dispatch (name, res, data) {
      this.$emit && this.$emit(name, res, data)
    },
    removePic (index) {
      let removeTarget = null
      if (this.removeInside) {
        // 由预览组件来删
        removeTarget = this.srcs.splice(index, 1)[0].file
      } else {
        // 由父组件来删
        removeTarget = this.srcs[index].src
      }
      let imgList = this.srcs.map(img => {
        return img.file
      });
      let data = {
        index: index,
        removeTarget: removeTarget,
        fileList: imgList
      };
      this.__dispatch("onRemove", "success", data)
    },
    focus (src) {
      if (this.removeEnable) {
        this.srcs.forEach(item => {
          item.focus = false
        });
        src.focus = true
        window.clearTimeout(window.timer)
        window.timer = setTimeout(() => {
          src.focus = false
        }, 3000)
      }
    },
    leave (e) {
      if (
        this.preview.show &&
        e.target.className.indexOf("preview-nav-arrow") != 0
      ) {
        this.close()
      }
    },
    close () {
      this.preview.show = false
    },
    preAction () {
      this.preview.loading = true
      let index = this.preview.list.indexOf(this.preview.current)
      if (index === 0) {
        this.preview.loading = false
        return
      }
      index--
      this.preview.current = this.preview.list[index]
      const img = new window.Image()
      img.src = this.preview.current.src
      img.onload = function() {
        setTimeout(() => {
          LOGIC_EVENT_BUS.LOGIC_PREVIEW.loading = false
        }, 500)
      }
    },
    nextAction () {
      this.preview.loading = true
      let index = this.preview.list.indexOf(this.preview.current)
      if (index === this.preview.list.length - 1) {
        this.preview.loading = false
        return
      }
      index++
      this.preview.current = this.preview.list[index]
      const img = new window.Image()
      img.src = this.preview.current.src
      img.onload = function() {
        setTimeout(() => {
          LOGIC_EVENT_BUS.LOGIC_PREVIEW.loading = false
        }, 500)
      }
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  float: left;
  position: relative;
  overflow: hidden;
  font-size: 0;
  cursor: pointer;
}
.operate {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.preview-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10000;
}
.preview-loading {
  position: absolute;
  top: 45%;
  left: 50%;
  margin-left: -7.5px;
}
.preview-loading > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  height: 25px;
  width: 25px;
  background: transparent !important;
  display: inline-block;
  -webkit-animation: rotate 0.75s 0s linear infinite;
  animation: rotate 0.75s 0s linear infinite;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
  }

  50% {
    -webkit-transform: rotate(180deg) scale(0.6);
    transform: rotate(180deg) scale(0.6);
  }

  100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}

.preview-img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.preview-nav-arrow {
  font-size: 3rem;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  background: rgba(0, 0, 0, 0);
  border-radius: 7px;
  width: 30px;
  height: 30px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
}

.preview-nav-left,
.preview-nav-right {
  position: absolute;
  height: 100%;
  margin: 0.25rem;
  width: 10rem;
  top: 0;
  color: #fff;
  transition: opacity 0.2s;
}

.preview-nav-left .preview-nav-arrow,
.preview-nav-right .preview-nav-arrow {
  transition: background 0.3s;
}

.preview-nav-left {
  left: 0;
}
.preview-nav-left .preview-nav-arrow {
  left: 0;
  margin-left: 2rem;
  transform: rotate(-45deg);
}

.preview-nav-right {
  right: 0;
}

.preview-nav-right .preview-nav-arrow {
  right: 0;
  margin-right: 2rem;
  transform: rotate(135deg);
}

.preview-title {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  font-size: 0.8rem;
  height: 2rem;
  line-height: 2rem;
}

@media all and (max-width: 768px) {
  .preview-nav-left,
  .preview-nav-right {
    width: 5rem;
  }
  .preview-nav-arrow {
    font-size: 2.5rem;
  }
  .preview-nav-left .preview-nav-arrow {
    margin-left: 0.5rem;
  }
  .preview-nav-right .preview-nav-arrow {
    margin-right: 0.5rem;
  }
}
</style>
