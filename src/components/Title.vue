<template>
  <div class="title">
    <span>{{ span1 }}</span>
    <span class="grey">{{ span2 }}</span>
  </div>
</template>

<script>
export default {
  props: {
    span1: {
      type: String,
      default: "Электронные сертификаты Lexmer",
    },
    span2: {
      type: String,
      default: "Дарить легко",
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  display: flex;
  flex-direction: column;
}

span {
  font-family: "Bebas", sans-serif;
  font-size: 85px;
  font-weight: 400;
  line-height: 76.5px;
  letter-spacing: -0.005em;
  text-align: left;
  text-transform: uppercase;

  @include breakpoint ('mobile') {
    font-size: 48px;
    font-weight: 400;
    line-height: 43.2px;
    letter-spacing: -0.01em;
    text-align: center;
  }
}

.grey {
  color: #bcc0c5;
}
</style>