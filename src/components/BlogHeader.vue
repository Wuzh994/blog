<script setup lang="ts">

</script>

<template>
  <header class="bb" sticky top-0 flex justify-between px-6 py-2 z-10>
    <img w-12 h-12 src="../assets/avatar.png" alt="logo">
    <div flex justify-between w-full ml-6>
      <nav flex="~">
        <ul flex="~" items-center gap-x-5>
          <li><a href="#">JavaScript</a></li>
          <li>TypeScript</li>
          <li>Vue</li>
        </ul>
      </nav>
      <ul flex="~" items-center gap-x-5>
        <li>Search</li>
        <li>Github</li>
        <li>Dark</li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.bb {
  backdrop-filter: saturate(50%) blur(8px);
  background: rgba(255,255,255,.7);
}
</style>
