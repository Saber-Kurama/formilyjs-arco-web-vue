<script setup lang="ts"></script>

<template>
  <div :class="$style.logoContainer">
    <a href="/">
      <img
        :class="$style.logo"
        src="//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg"
        alt="Element Plus Logo"
      />
    </a>
  </div>
</template>

<style module lang="less">
.logoContainer {
  display: flex;
  align-items: center;
  // height: var(--header-height)
  font-size: 14px;
  .logo {
    margin: 12px 8px;
    height: 18px;
    width: auto;
  }
}
</style>
