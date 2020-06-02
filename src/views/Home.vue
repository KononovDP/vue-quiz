<template>
  <div class="home">
    <h1>Welcome to your first quiz app</h1>
    <h2>Are you ready to start?</h2>
    <router-link class="btn" :to="{name: 'Quiz'}">Start Quiz</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
