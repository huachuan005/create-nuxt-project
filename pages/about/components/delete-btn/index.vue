<template>
  <div>
    <h2>About Index page</h2>
    <ul>
      <li>
        <el-button>按钮</el-button>
      </li>
      <!-- vue中视图路由的方式实现路由 -->
      <li>
        <nuxt-link :to="{ name:'index' }">Home</nuxt-link>
      </li>
    </ul>
  </div>
</template>
