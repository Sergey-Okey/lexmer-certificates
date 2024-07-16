<template>
  <div class="gallery-container">
    <div class="thumbnails">
      <div v-for="(image, index) in images" :key="index" class="thumbnail" @click="selectImage(index)">
        <img :src="getImageSrc(image)" :alt="'Image ' + index" />
      </div>
    </div>
    <div class="large-image">
      <img :src="getImageSrc(currentImage)" alt="Selected" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
      selectedImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.selectedImageIndex];
    },
  },
  methods: {
    selectImage(index) {
      this.selectedImageIndex = index;
    },
    getImageSrc(image) {
      return require(`@/assets/images/gallery/${image}`);
    },
  },
};
</script>

<style scoped lang="scss">
.gallery-container {
  display: flex;
  width: 100%;
  height: auto;
  gap: 10px;

  @include breakpoint ('mobile') {
    flex-wrap: wrap-reverse;
  }

  @include breakpoint ('mobile', 'wide') {}

  @include breakpoint ('tablet', 'medium') {}

  @include breakpoint ('tablet', 'wide') {
    flex-wrap: nowrap;
  }

  @include breakpoint ('desktop', 'medium') {}

  @include breakpoint ('desktop') {}

  @include breakpoint ('desktop', 'wide') {}

  .large-image {
    width: 100%;
    max-width: 765px;

    @include breakpoint ('mobile') {}

    @include breakpoint ('mobile', 'wide') {}

    @include breakpoint ('tablet', 'medium') {}

    @include breakpoint ('tablet', 'wide') {}

    @include breakpoint ('desktop', 'medium') {
      max-width: 500px;
    }

    @include breakpoint ('desktop') {
      max-width: 500px;
    }

    @include breakpoint ('desktop', 'wide') {
      max-width: 765px;
    }

    img {
      width: 100%;
      display: flex;
    }
  }

  .thumbnails {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    @include breakpoint ('mobile') {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    @include breakpoint ('mobile', 'wide') {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }

    @include breakpoint ('tablet', 'wide') {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      max-width: 168px;
    }

    .thumbnail {
      cursor: pointer;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>