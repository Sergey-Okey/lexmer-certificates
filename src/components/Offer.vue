<template>
  <div class="offer">
    <div class="offer_content">
      <div class="box-title">
        <Title />
        <p>
          Подарочный сертификат LEXMER — актуальный и полезный подарок для
          современного мужчины
        </p>
        <ButtonPay />
      </div>
      <div class="box-card">
        <img src="@/assets/images/order/card.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonPay from "./ButtonPay.vue";
import Title from "./Title.vue";
</script>

<style scoped lang="scss">
.offer {
  display: flex;
  width: 100%;
  background: #edf0f2;
  padding: 74px 142px;

  &_content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .box-title {
    width: 620px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      font-family: "Bebas", sans-serif;
      font-size: 85px;
      font-weight: 400;
      line-height: 76.5px;
      letter-spacing: -0.005em;
      text-align: left;
      text-transform: uppercase;
    }

    .grey {
      color: #bcc0c5;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 23.4px;
      letter-spacing: -0.01em;
      text-align: left;
      margin-top: 1rem;
    }

    button {
      width: 232px;
      height: 45px;
      padding: 10px 32px 12px 32px;
      gap: 4px;
      opacity: 0px;
      background: black;
      color: white;
      margin-top: 35px;

      @include breakpoint('desktop') {

      }
    }
  }
}
</style>