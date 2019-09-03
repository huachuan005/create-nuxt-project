<template>
  <div>
    <h2>News Index page</h2>
    <ul>
      <!-- vue中视图路由的方式实现路由 -->
      <li>
        <nuxt-link :to="{ name:'index' }">Home</nuxt-link>
      </li>
    </ul>
  </div>
</template>
