<template>
  <div class="gallery-container">
    <div class="large-image">
      <img :src="getImageSrc(currentImage)" alt="Selected" />
    </div>
    <div class="thumbnails">
      <div v-for="(image, index) in images" :key="index" class="thumbnail" @click="selectImage(index)">
        <img :src="getImageSrc(image)" :alt="'Image ' + index" />
      </div>
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
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @include breakpoint('mobile') {
    gap: 15px;
  }
}

.large-image {
  width: 100%;
  max-width: 748.92px;
  height: auto;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
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
  }
}

.thumbnails {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 14.49px;
  width: 100%;
  max-width: 748.92px;

  @include breakpoint('mobile') {
    gap: 10px;
  }
}

.thumbnail {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: auto;
  padding-bottom: 56.25%;
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