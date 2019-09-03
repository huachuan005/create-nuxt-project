<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1>首页</h1>
      <ol>
        <!-- <a href="/">home</a> 使用a标签在组件的页面中这样写相当于刷新当前页面 -->
        <li><nuxt-link :to="{ name: 'index' }">Home</nuxt-link></li>
        <li><nuxt-link :to="{ name: 'about' }">about</nuxt-link></li>
        <li><nuxt-link :to="{ name: 'news', params: newObj }">news</nuxt-link></li>
<!--        <li><nuxt-link to="/about/components/delete-btn">delete-btn</nuxt-link></li>-->
        <li><nuxt-link :to="{ name: 'about-detail' }">about-detail</nuxt-link></li>
        <li><nuxt-link :to="{ name: 'about-components-delete-btn' }">delete-btn</nuxt-link></li>
        <li><el-button @click="onClick">about组件中得删除按钮页面</el-button></li>
      </ol>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        newObj: {
          newsId: '3306ID',
          id: '38716ID'
        }
      }
    },
    methods: {
      onClick() {
        console.log(this.$route)
        this.$router.push({name:"about-components-delete-btn"})
     }
    }
  }
</script>

<style lang="less" scoped>
</style>
