<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <img src="@/assets/welcome.png" alt="" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #001529;
    font-size: 3rem;
    font-weight: 700;
  }

  img {
    width: 60%;
  }
}
</style>
