<template>
  <div class="UserProfilePreview">
    <div>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>
    <el-color-picker
            v-model="color1"
            @active-change = 'changeColor'
    >

    </el-color-picker>
    <div style="width: 100px;height: 100px;color: var(--color-test);"></div>
    <div class="colorTest"></div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        color1:'#409EFF',
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeColor(color){
        console.log(color)
        document.getElementsByTagName('body')[0].style.setProperty('--color-test', color)
      }
    },
    created(){
      console.log(this.$router)
    },
  }
</script>
<style scoped lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .colorTest{
    width: 100px;
    height: 100px;
    color: var(--color-test);
  }
</style>
