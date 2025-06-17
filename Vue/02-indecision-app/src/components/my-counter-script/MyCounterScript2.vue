<script lang="ts" src="./MyCounterScript2.ts"></script>

<template>
  <section>
    <h3>Counter: {{ count }}</h3>
    <h3>square: {{ square }}</h3>

    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>
  </section>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
