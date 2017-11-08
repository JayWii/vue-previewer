<template>
  <div id="app">
    <vue-previewer 
      :imgs="imgs"
      :width="800"
      :height="800"
      :margin="10"
      :radius="5"
      :removeInside="true"
      :removeEnable="true"
      deleteBtnColor="#e12e2e"
      previewBtnColor="#3caaff"
      type="url" 
      @onRemove="handleRemove">
    </vue-previewer>
    <!-- <input type="file" ref="file" @change="addFile"> -->
    <button @click="addImg">添加图片</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // imgs: []
      imgs: ['http://images.freeimages.com/images/small-previews/f2c/effi-1-1366221.jpg','http://images.freeimages.com/images/small-previews/eb9/amon-1405220.jpg','http://images.freeimages.com/images/small-previews/500/friend-s-dog-1542741.jpg']
    }
  },
  methods: {
    addImg () {
      this.imgs.push('http://images.freeimages.com/images/small-previews/f2c/effi-1-1366221.jpg')
    },
    addFile () {
      this.imgs.push(this.$refs.file.files[0])
    },
    handleRemove (res, data) {
      console.log(res, data)
      // this.imgs.splice(data.index, 1)
      this.imgs = data.fileList
    }
  }
}
</script>

<style>

</style>