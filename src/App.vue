<template>
  <div id="app">
    <vue-previewer :imgs="imgs" :removeEnable="true" type="url" @onRemove="handleRemove"></vue-previewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: ['http://covteam.u.qiniudn.com/ka2.jpg','http://covteam.u.qiniudn.com/ka2.jpg']
    }
  },
  methods: {
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