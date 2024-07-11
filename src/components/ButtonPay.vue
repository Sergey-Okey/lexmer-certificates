<template>
  <button type="button">Купить сертификат</button>
</template>

<script setup>
</script>

<style scoped lang="scss">
button {
  width: 232px;
  height: 45px;
  padding: 10px 32px 12px 32px;
  gap: 4px;
  opacity: 0px;
  background: black;
  color: white;
  margin-top: 35px;
  cursor: pointer;
  @include breakpoint('mobile') {
      margin-top: 0;
    }
}
</style>
