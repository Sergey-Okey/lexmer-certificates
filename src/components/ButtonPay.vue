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
  outline: solid 2px black;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transition: .3s ease-in;
  }

  @include breakpoint('mobile') {
    width: 100%;
    margin-top: 0;
  }

  @include breakpoint('mobile', 'wide') {
    width: 215px;
    height: 45px;
  }
}
</style>