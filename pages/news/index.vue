<template>
  <div>
    <h2>News Index page</h2>
    <p>NewsID:{{ $route.params.newsId }}</p>
    <ul>
      <!-- vue中简单方式实现路由 -->
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
    </ul>
  </div>
</template>
