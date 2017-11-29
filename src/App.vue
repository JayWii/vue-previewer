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
      imgs: [
        {
          src: 'https://farm4.staticflickr.com/3894/15008518202_b016d7d289_b.jpg',
          author: 'Folkert Gorter',
          desc: 'This is dummy caption.'
        },
        {
          src: 'https://farm6.staticflickr.com/5584/14985868676_4b802b932a_b.jpg'
        },
        {
          src: 'https://farm4.staticflickr.com/3920/15008465772_383e697089_b.jpg',
          author: 'Folkert Gorter2',
          desc: 'It\'s a dummy caption. He who searches for meaning here will be sorely disappointed.'
        }
      ]
    }
  },
  methods: {
    closeHandler () {
      console.log('cloooooose')
    },
    addImg () {
      let obj = {
        src: 'https://farm6.staticflickr.com/5584/14985868676_4b802b932a_b.jpg'
      }
      this.imgs.push(obj)
    },
    handleRemove (index, fileList, target) {
      console.log(index, fileList, target)
      // this.imgs.splice(index, 1)
      this.imgs = fileList
    }
  }
}
</script>

<style>

</style>