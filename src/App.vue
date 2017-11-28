<template>
  <div id="app">
    <vue-previewer 
      :imgs="imgs"
      :width="100"
      :margin="10"
      :radius="5"
      :removeInside="true"
      :removeEnable="true"
      deleteBtnColor="#e12e2e"
      previewBtnColor="#3caaff"
      type="url" 
      @onClose="closeHandler"
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
      imgs: ['https://farm4.staticflickr.com/3894/15008518202_b016d7d289_b.jpg','https://farm6.staticflickr.com/5584/14985868676_4b802b932a_b.jpg','https://farm4.staticflickr.com/3920/15008465772_383e697089_b.jpg']
    }
  },
  methods: {
    closeHandler () {
      console.log('cloooooose')
    },
    addImg () {
      this.imgs.push('https://farm4.staticflickr.com/3894/15008518202_b016d7d289_b.jpg')
    },
    addFile () {
      this.imgs.push(this.$refs.file.files[0])
    },
    handleRemove (fileList, index) {
      console.log(fileList, index)
      // this.imgs.splice(data.index, 1)
      this.imgs = fileList
    }
  }
}
</script>

<style>

</style>