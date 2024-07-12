<template>
  <div class="order">
    <div class="order_content">
      <div class="title">
        <Title span1="Закажите сертификат в подарок" span2="" />
      </div>
      <div class="order-form">
        <div class="content">
          <div class="gallery">
            <span class="title">
              <data value="1" style="color: grey">1.</data> Выберите
              дизайн</span>
            <ImageGallery />
          </div>
          <div class="form">
            <span class="title">
              <data value="2" style="color: grey">1.</data> Укажите
              номинал</span>
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import OrderForm from "@/components/OrderForm.vue";
</script>

<style scoped lang="scss">
.order {
  background-color: #edf0f2;
  display: flex;
  flex-direction: column;
  height: auto;

  &_content {
    width: 100%;
    max-width: 1920px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 0 100px;

    @include breakpoint('mobile') {
      max-width: 320px;
      padding: 100px 10px;
      height: auto;
    }

    @include breakpoint ('mobile') {
     padding: 50px 10px;
    }

    @include breakpoint ('mobile', 'wide') {
      max-width: 480px;
    }

    @include breakpoint ('tablet', 'medium') {
      max-width: 768px
    }

    @include breakpoint ('tablet', 'wide') {
      max-width: 1000px
    }

    @include breakpoint('desktop', 'medium') {
      max-width: 1440px;
      padding: 100px 10px;
      gap: 45px;
    }

    @include breakpoint ('desktop') {
      max-width: 1610px;
      padding: 100px;
    }

    @include breakpoint ('desktop', 'wide') {
      max-width: 1920px;
      padding: 100px;
    }
  }

  .order-form {
    padding: 55px 60px;
    display: flex;
    height: auto;
    flex-direction: column;
    width: 100%;
    background-color: white;

    @include breakpoint('mobile') {
      padding: 20px 25px;
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 65px;
      height: auto;

      @include breakpoint('mobile') {
        flex-wrap: wrap;
        width: 100%;
        gap: 30px;
      }

      @include breakpoint('desktop', 'medium') {
        flex-wrap: nowrap;
      }

      .form {
        width: 575px;
        display: flex;
        flex-direction: column;
        height: auto;

        @include breakpoint('mobile') {
          width: 100%;
        }

        @include breakpoint ('desktop', 'medium') {
          width: 575px;
          gap: 0;
        }
      }

      .gallery {
        display: flex;
        flex-direction: column;
      }

      .title {
        font-size: 30px;
        font-weight: 400;
        line-height: 36px;
        text-align: left;
        margin-bottom: 20px;

        @include breakpoint ('mobile') {
          font-size: 25px;
          font-weight: 400;
          line-height: 43.2px;
          letter-spacing: -0.01em;
          text-align: center;
        }

        @include breakpoint ('mobile', 'wide') {
          text-align: left;
          margin-bottom: 0px;
        }
      }
    }
  }
}
</style>