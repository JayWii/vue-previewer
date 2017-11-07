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
          height: `${height}px`,
          backgroundImage: `url(${src.src})`,
          margin: `${margin}px ${margin}px 0 0`,
          borderRadius: `${radius}px`
        }">
        <div class="operates" :class="{ 'cur' : src.focus }" v-if="removeEnable">
          <div class="operate delete-btn" :style="{ borderWidth: `${width/2}px` }"></div>
          <div class="operate-icon delete-icon" @click="removePic(index)"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACEklEQVRoQ+2Y7TEEQRCG3zcCZEAEiICLABE4GRABMiACMkAETgROBE4EiKBVq92r3am93fnemqqdv9Mz089093RPE4UPFq4/JoCxLThZYLJA4A1EdSERObLU54vkylK2VywagIjMATw4KLVD8sdBvlM0JsAxgGcAWxZKfZA8sJAbFIkGMHhSIgErABHR2zpJpEPftvdDbmYLoK4xBsAVybs+QlsA9e9LANsZraABPo9igYxKOx9lZQHnXTMucAYQEXWjVwBLkhdNXUVkF8B7NTfbMLcgebZh7tncc+gufAA0HhQAJFvrRcR3bp0EzT1LAbgBcN11KUkBABySXNaHBFigBvgl6fTSBbkQgBnJRUSAN5LqhtbDB0AD9bM6oTwAVVxEZAJoOImI1DGQ3oUSWeARwDmAYgH0IdDfXHaAVrUY8IyOBnBLUv33f0QA0Ppfq17r4fyMGjEQG6C1nw2FL0Bt8gmgsmjnhZRkAc3smuGLdaE6s2cHeCF5GuEVGg2glXgCntEaYLALYcZF6CsUG6BV3aYM4s7apfov69zKTEiNOf1Lr5NfX22VEsC7ejSVqsC+u8rzHADafNobaj71KSIi+gg85QZottK1zx/S629+IZ1b7l5BXPmtfub3bcxsKeOcA3Rfb4AKQivHdR6wVNQUU+tpQ0sbyM4jCMD5tAQLJoAEl+q05WQBp+tKIFy8Bf4AaBbAQGHQM0YAAAAASUVORK5CYII=" alt=""></div>
          <div class="operate preview-btn" :style="{ borderWidth: `${width/2}px` }"></div>
          <div class="operate-icon preview-icon"><img v-preview="src.src" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAECklEQVRoQ9WZi1EUQRCGuyNQIhAi0AyUCIQI1AjECIQIxAiUCNQIhAiECMQIxAja+q56tobZmd3p3avi6Kqr4mAe/Xf//RpUHrnoWv3NbF9Envk5L0Tk2n++UdW7tefP7Q8DMLOnIvJaRF6JyJGI8L0ltyLynY+qXs0ps+Tv3QBc8fcicjKj9BSYD6oKoK1JFwAzw9JfFipeKnspIgBJVFsFZhaAmaH421W3jDcTG4D4uvbcJgCnzDfneu2ef4nfInKnqlhWfB/BTHDjOeKlJaeqerYGxBSAnw3lUfyk13oO6FREiJ+avOs9q7a5CsDMzhsXXrjy4fTo6ZYAfl5R5DB5MOqNEQAPWKhTCpwF2GJxb8D7klYY5GBJ3agB+O38zRU9U1Vo0BQze+mU+zNHCTMjA5WeuFDVcLK4B8DMyPGfCi2bBzdqw5WqUuSmwFL8AJEqeFqLFyh+3VIC+FvkegJ2v+ZaMyPTQDWyTS6zAFjcoGrYCwMAM8NqZJ5Z6rjyrE1tBG3CebTKmhmpF+olIR3vdZtfRHIAtcyzV1rfaUOcoHwopZaKmRmcp1DmEspIOYAyeH+oKoXonpgZWeSN//I4avX8MDcGtM3ls6oSi12SA7Bixyhtei4HKBK6qKVNhUZdMZTO2wBoWGLkyiJLjejVZbKxR0vqLgJQC+AagBR0DCtkodViZtSXj9lBoUBOHogCCKe7CQqVAERVZ7vkkkJY81dxSc0DrCP73EYLTgBAyLtTQbwqw/RyaytB7IFcZqGt0WQKjJl1pe/WGbkHaHXzLhGaHPRacsk6r+gldUPzQQ5gdVWMgmjMHaH0nAMgOMuqeKmqh1HFetYXRTFtCQUwm8puNG8T0qEhl/Yo7zFHJ1u2KuG7SgC0xqlVSLowLZFSt/IM4srX6Bq2/sgDfnitK2XIAERo2Kh5o9GBsjTUhd4rZPlF3hfRMpQj32pPmBkvE7W5enHKbr1KUHEB8aRiRUo/nWj3y4QHLKPqqD0XkYE6ZsYa5u/us6feheiPqA01EFxAwGO5ZmyYGXUFpVvD+g0PASicdbqcB526QEw2TV5oWp5IziEu+HAhl6eBPvVNrcTEGHrkygMyf8rpBjHb9U3ERG/GrK0bhiGfxVG+fKbvAjELIN3u2QP+l08hESBYnffQ9I5aS6f5ebMgugFkQJhXubj2RFgDw+CPwrxabBSfKGS1/ZMgwgAyBXA53KX4lXxPcXHdGvon6kEIxGIAEd601m4DxIMCmGgrWphHdHpwAGtB7ASABSD4r+dxtZnbBreXnhGMic3gszMeKOpN+V5as8mme905AAE67aYHOj0xPDzvpAcyEBRKut68Ix6awJ0L4hrRvZmkw6XiU9mHduRRAJjLaP8BLTrrQH3guskAAAAASUVORK5CYII=" alt=""></div>  
        </div>
        <div class="preview-mask" v-if="!removeEnable" v-preview="src.src"></div>
      </li>
    </ul>
    <lg-preview></lg-preview>
  </div>
</template>
<script>
import PicturePreview from './pic-preview'
import Vue from 'vue'
Vue.use(PicturePreview)

export default {
  name: 'vue-previewer',
  props: {
    imgs: {
      type: [Array],
      default: []
    },
    width: {
      type: [Number],
      default: 80
    },
    height: {
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
    type: {
      type: [String],
      default: 'url' // url则imgs的值为图片链接，file则imgs的值为图片文件
    }
  },
  data () {
    return {
      srcs: []
    }
  },
  mounted () {
    this.initSrcs()
  },
  watch: {
    imgs () {
      this.initSrcs()
    }
  },
  methods: {
    initSrcs () {
      if (this.type === 'file') {
        let files = this.imgs
        if (window.FileReader) {
          let srcs = []
          for (var i = 0; i < files.length; i++) {
            let fr = new FileReader()
            let obj = {
              file: files[i],
              src: '',
              focus: false
            }
            fr.onloadend = (e) => {
              obj.src = e.target.result
              srcs.push(obj)
            }
            fr.readAsDataURL(files[i])
          }
          this.srcs = srcs
        }
      } else {
        let srcs = this.imgs.map((img) => {
          let obj = {
            file: img,
            src: img,
            focus: false
          }
          return obj
        })
        this.srcs = srcs
      }
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
      let imgList = this.srcs.map((img) => {
        return img.file
      })
      let data = {
        index: index,
        removeTarget: removeTarget,
        fileList: imgList
      }
      this.__dispatch ('onRemove', 'success', data)
    },
    focus (src) {
      if (this.removeEnable) {
        this.srcs.forEach((item) => {
          item.focus = false
        })
        src.focus = true
        // window.clearTimeout(window.timer)
        // window.timer = setTimeout(() => {
        //   src.focus = false
        // }, 3000)
      }
    },
    someMethod () {

    }
  }
}
</script>
<style scoped>
ul, img {padding: 0;}
.preview-list {box-sizing: border-box;overflow: hidden;}
.preview-item {background-size: cover;background-repeat: no-repeat;background-position: center;float: left;position: relative;overflow: hidden;font-size: 0;cursor: pointer;}
.operate{position: absolute;left: 0;top: 0;width: 0;height: 0;border-style: solid;}
.operates, .preview-mask {width: 100%;height: 100%;opacity: 0;transition: .6s;pointer-events: none;overflow: hidden;}
.operates.cur, .preview-mask {opacity: 1;pointer-events: inherit;}
.delete-btn {border-color: transparent transparent #e12e2e #e12e2e;}
.preview-btn {border-color: #3caaff #3caaff transparent transparent;}
.operate-icon {position: absolute;width: 100%;height: 100%;}
.operate-icon img {position: absolute;width: 50%;box-sizing: border-box;z-index: 1;}
.delete-icon img {left: 0;bottom: 0;padding: 5%;}
.preview-icon img {right: 2%;top: 2%;padding: 8%;}
</style>
