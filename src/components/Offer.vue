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
  width: 100%;
  display: flex;
  background: #edf0f2;


  &_content {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 135px;
    padding: 50px 100px;

    @include breakpoint ('mobile') {
      max-width: 320px;
      flex-wrap: wrap-reverse;
      gap: 0px;
      padding: 50px 20px;
    }

    @include breakpoint ('mobile', 'wide') {
      max-width: 480px;
      padding: 50px 20px;
    }

    @include breakpoint ('tablet', 'medium') {
      max-width: 768px;
      padding: 50px 20px;
    }

    @include breakpoint ('tablet', 'wide') {
      max-width: 1000px;
      padding: 50px 20px;
      flex-wrap: nowrap;
    }

    @include breakpoint ('desktop', 'medium') {
      max-width: 1440px;
      gap: 0;
    }

    @include breakpoint ('desktop') {
      max-width: 100%;
      padding: 50px 100px;
    }

    @include breakpoint ('desktop', 'wide') {
      max-width: 1920px;
      gap: 135px;
    }

  }

  .box-title {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include breakpoint ('mobile') {
      max-width: 320px;
      gap: 0;
    }

    @include breakpoint ('mobile', 'wide') {
      max-width: 100%;
    }

    @include breakpoint ('tablet', 'medium') {
      max-width: 100%;
    }

    @include breakpoint ('tablet', 'wide') {
      max-width: 400px;
    }

    @include breakpoint ('desktop', 'medium') {
      max-width: 620px;
    }

    span {
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
      width: 100%;
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
        max-width: 336px;
        margin: 15px auto 0;
      }

      @include breakpoint ('tablet', 'medium') {
        font-size: 18px;
        font-weight: 400;
        line-height: 23.4px;
        letter-spacing: -0.01em;
        text-align: center;
      }

      @include breakpoint ('tablet', 'wide') {
        margin: 15px 0;
        text-align: left;
      }

      @include breakpoint ('desktop', 'medium') {
        max-width: 445px;
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
        margin: 25px auto 0;
      }

      @include breakpoint ('tablet', 'wide') {
        margin: 25px 0;

      }
    }
  }

  .box-card {
    width: 100%;
    height: auto;

    @include breakpoint ('desktop') {
      max-width: 810px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>