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
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 750px;

  @include breakpoint('mobile') {
    grid-template-columns: 2fr;
    grid-template-rows: auto auto;
  }

  @include breakpoint('tablet', 'wide') {
    grid-template-columns: 195px auto;
    grid-template-rows: auto;
    max-width: 100%;
  }

  @include breakpoint('desktop', 'medium') {
    grid-template-columns: 195px auto;
    grid-template-rows: auto;
  }

}

.large-image {
  width: 100%;
  height: auto;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: 'LEXMER';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 40px;
    color: white;
    line-height: 76.5px;
    letter-spacing: 30px;
    text-align: left;
    text-transform: uppercase;

    @include breakpoint('mobile') {
      font-size: 20px;
      letter-spacing: 15px;
    }

    @include breakpoint('desktop', 'medium') {
      font-size: 20px;
      letter-spacing: 15px;
    }

    @include breakpoint('tablet', 'wide') {
      width: 160px;
      height: 19px;
      top: 150px;
      left: 150px;
      gap: 0px;
      opacity: 0px;
    }
  }

  @include breakpoint('tablet', 'wide') {
    max-width: 480px;
  }

  @include breakpoint('desktop') {
    max-width: 765px;
  }
}

.thumbnails {
  display: grid;
  gap: 14.49px;
  width: 100%;

  @include breakpoint('mobile') {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @include breakpoint ('mobile', 'wide') {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 6px;
  }

  @include breakpoint('tablet', 'wide') {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }

  @include breakpoint('desktop', 'medium') {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
}

.thumbnail {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:hover {
    background-color: #edf0f2;
    border: solid 3px black;
    transition: ease 0.1s;
  }

  &::after {
    content: 'LEXMER';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 10px;
    color: white;
    font-size: 10px;

    @include breakpoint('mobile') {
      font-size: 6px;
    }
  }
}

.thumbnail img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}
</style>