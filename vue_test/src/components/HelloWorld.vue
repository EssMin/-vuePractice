<template>
  <div class="hello">

    <button @click="click">123412341</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    click(){
      this.$router.push('/about')
    }
  }
}
</script>

<style scoped>

</style>
