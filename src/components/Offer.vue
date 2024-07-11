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
  background: #edf0f2;
  padding: 74px 100px;

  @include breakpoint ('desktop', 'medium') {
    padding: 74px 10px;
  }

  @include breakpoint ('mobile') {
    padding: 50px 10px;
  }

  &_content {
    width: 1920px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 135px;

    @include breakpoint ('desktop', 'medium') {
      width: 1440px;
      gap: 0;
    }

    @include breakpoint ('mobile') {
      width: 320px;
      flex-direction: column-reverse;
      gap: 0px;
    }

    @include breakpoint ('mobile', 'wide') {
      width: 480px;
    }

    @include breakpoint ('tablet', 'medium') {
      width: 768px
    }

  }

  .box-title {
    width: 620px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include breakpoint ('mobile') {
      width: 294px;
      gap: 0;
    }

    @include breakpoint ('mobile', 'wide') {
      width: 400px;
    }

    @include breakpoint ('tablet', 'medium') {
      width: 620px
    }

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

      @include breakpoint ('mobile') {
        font-size: 16px;
        font-weight: 400;
        line-height: 20.8px;
        letter-spacing: -0.01em;
        text-align: center;
        margin-top: 15px;
      }

      @include breakpoint ('mobile', 'wide') {
        width: 336px;
        margin: 15px auto 0;
      }

      @include breakpoint ('tablet', 'medium') {
        font-size: 18px;
        font-weight: 400;
        line-height: 23.4px;
        letter-spacing: -0.01em;
        text-align: center;
      }

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

      @include breakpoint ('mobile') {
        margin: 25px auto 40px;
      }
    }
  }

  .box-card {
    width: 925px;

    @include breakpoint ('desktop',
      'medium') {
      width: 810px;
    }

    @include breakpoint ('mobile') {
      width: 293px;
    }

    @include breakpoint ('mobile', 'wide') {
      width: 435px;
    }

    @include breakpoint ('tablet', 'medium') {
      width: 555px
    }

    img {
      width: 100%;
    }
  }
}
</style>