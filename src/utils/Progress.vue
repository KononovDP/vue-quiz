<template>
  <div class="progress">
    <div class="progress-wrap">
      <span class="progress-number" :style="{left: percent+'%'}">{{percent}}%</span>
      <div class="progress-bar" :style="{width: percent+'%'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-progress",
  props: {
    percent: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  padding: 25px 0;
  &-wrap {
    position: relative;
    width: 100%;
    height: 15px;
    border: 1px solid #ccc;
    border-radius: 50px;
  }
  &-number {
    position: absolute;
    transform: translate(-50%, -100%);
    font-size: 16px;
    transition: all .3s;
  }
  &-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #ccc;
    transition: all .3s;
  }
}
</style>