<template>
  <div class="price">
    <div class="price_content">
      <div class="title">
        <Title span1="Универсальный" style="display: block" span2=" подарок Любому мужчине" />
      </div>
      <div class="table-price">
        <div class="item">
          <span>Оформление сертификата</span>
          <span class="up">за 1 минуту</span>
          <img class="bottom" src="@/assets/images/price/clock.svg" alt="clock" />
        </div>
        <div class="item">
          <img class="top" src="@/assets/images/price/pay.svg" alt="pay" />
          <span>Гибкий выбор суммы</span>
          <div class="">
            <span class="up">от 1 000 </span>
            <span class="up">до 50 000 РУб.</span>
          </div>
        </div>
        <div class="item">
          <span>Сертификат действует</span>
          <span class="up">бессрочно</span>
          <img class="bottom" src="@/assets/images/price/infinity.svg" alt="infinity" />
        </div>
        <div class="item">
          <img class="top" src="@/assets/images/price/app.svg" alt="app" />
          <span>Можно оплатить любую покупку</span>
          <span class="up"><a style="text-decoration: underline 2px;" href="">на lexmer.ru</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
</script>

<style scoped lang="scss">
.price {
  display: flex;
  background: white;
  padding: 74px 100px;

  @include breakpoint ('desktop', 'medium') {
    padding: 74px 20px;
  }

  @include breakpoint ('mobile') {
    padding: 60px 10px;
  }


  &_content {
    width: 1920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 50px;

    @include breakpoint ('desktop',
      'medium') {
      width: 1440px;
    }

    @include breakpoint ('mobile') {
      width: 320px;
    }

    @include breakpoint ('mobile', 'wide') {
      width: 480px;
    }

    .title {
      display: inline-flex;
      flex-direction: column;
    }

    .table-price {
      width: 100%;
      display: flex;
      justify-content: space-between;

      @include breakpoint ('mobile') {
        flex-direction: column;
      }

      .item {
        width: 100%;
        padding: 33px 54px;
        outline: solid 1px #bababa;
        display: flex;
        flex-direction: column;
        gap: 27px;

        @include breakpoint ('mobile') {
          padding: 30px 35px;
          position: relative;
          width: 100%;
          height: 100%;
        }

        div {
          display: flex;
          gap: 10px;

          @include breakpoint ('desktop',
            'medium') {
            flex-direction: column;
            width: 232px;
            gap: 0px;
          }

          @include breakpoint ('mobile') {
            flex-direction: column;
            gap: 0;

          }
        }

        span {
          width: auto;
          font-size: 18px;
          font-weight: 400;
          line-height: 23.4px;
          letter-spacing: -0.01em;
          text-align: left;


        }

        .up {
          font-family: "Bebas";
          font-size: 40px;
          font-weight: 400;
          line-height: 37.8px;
          letter-spacing: -0.01em;
          text-align: left;

          @include breakpoint ('mobile') {
            font-size: 45px;
          }
        }

        img {
          width: 31.59px;
          height: 31.59px;
          top: 180px;
          padding: 2.63px;
          gap: 0px;
          opacity: 0px;

          @include breakpoint ('mobile') {
            position: absolute;
            top: 80px;
            right: 30px;
            padding: 0;
          }
        }

        .top {
          margin-bottom: 31px;

          @include breakpoint ('mobile') {
            margin-bottom: 0;
          }

        }

        .bottom {
          margin-top: 31px;

          @include breakpoint ('mobile') {
            margin-top: 0;
          }
        }
      }
    }
  }
}
</style>