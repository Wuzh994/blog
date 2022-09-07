<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {

})
</script>

<template>
  <div class="container">
    <main class="center">
      <article class="content">
        <slot>article</slot>
      </article>
    </main>
    <aside class="left">
      nav
    </aside>
    <div class="right">
      aside
    </div>
  </div>
</template>

<style scoped>
  .container {
    margin: 24px auto 0;
    overflow: hidden;
    background-color: antiquewhite;
  }

  .center {
    float: left;
    width: 100%;
  }
  .center .content {
    margin: 0 240px;
    padding: 32px 32px 0;
    background-color: #fff;
  }

  .left,
  .right {
    float: left;
    width: 240px;
    height: 100%;
    background-color: aquamarine;
  }

  .left {
    margin-left: -100%;
  }

  .right {
    margin-left: -240px;
  }
</style>
