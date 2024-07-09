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
          <img class="bottom" src="../assets/images/price/clock.svg" alt="clock" />
        </div>
        <div class="item">
          <img class="top" src="../assets/images/price/pay.svg" alt="pay" />
          <span>Гибкий выбор суммы</span>
          <span class="up">от 1 000 до 50 000 РУб.</span>
        </div>
        <div class="item">
          <span>Сертификат действует</span>
          <span class="up">бессрочно</span>
          <img class="bottom" src="../assets/images/price/infinity.svg" alt="infinity" />
        </div>
        <div class="item">
          <img class="top" src="../assets/images/price/app.svg" alt="app" />
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
  width: 100%;
  background: white;
  padding: 74px 142px;

  &_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;

    .title {
      display: inline-flex;
      flex-direction: column;
    }

    .table-price {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .item {
        width: 100%;
        padding: 33px 54px;
        outline: solid 1px #bababa;
        display: flex;
        flex-direction: column;
        gap: 27px;

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
          font-size: 42px;
          font-weight: 400;
          line-height: 37.8px;
          letter-spacing: -0.01em;
          text-align: left;
        }

        img {
          width: 31.59px;
          height: 31.59px;
          top: 180px;
          left: 61px;
          padding: 2.63px 0px 0px 0px;
          gap: 0px;
          opacity: 0px;
        }

        .top {
          margin-bottom: 31px;
        }

        .bottom {
          margin-top: 31px;
        }
      }
    }
  }
}
</style>