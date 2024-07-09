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
  width: 100%;
  background-color: #edf0f2;

  &_content {
    width: 1920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 106px 100px;
    gap: 50px;
  }

  .order-form {
    width: 100%;
    padding: 55px 60px;
    display: flex;
    background-color: white;

    .content {
      display: flex;
      width: 100%;
      justify-content: space-between;
      gap: 45px;

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