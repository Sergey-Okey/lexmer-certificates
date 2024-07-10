<template>
  <div class="order">
    <div class="order_content">
      <div class="title">
        <Title span1="Закажите сертификат в подарок" span2="" style="margin-top: 100px;" />
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

  &_content {
    width: 1920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 0 100px;

    @include breakpoint ('desktop',
      'medium') {
      width: 1440px;
      padding: 0 20px;
    }
  }

  .order-form {
    padding: 55px 60px;
    display: flex;
    width: 100%;
    background-color: white;
    margin-bottom: 100px;

    .content {
      width: 100%;
      display: flex;
      gap: 65px;


      .form {
        width: 575px;
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
      }
    }
  }
}
</style>