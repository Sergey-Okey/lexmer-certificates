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
  gap: 20px;
}

.thumbnails {
  display: flex;
  flex-direction: column;
  gap: 14.49px;
}

.thumbnail {
  position: relative;
  cursor: pointer;
  width: 171.02px;
  height: 114.01px;

  &:hover {
    padding: 5px;
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
  }
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.large-image img {
  width: 100%;
  object-fit: cover;
}

.large-image {
  width: 748.92px;
  height: 499.28px;
  position: relative;

  @include breakpoint ('desktop', 'medium') {
    width: 478.98px;
    height: 319.32px;
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

    @include breakpoint ('desktop',
      'medium') {
      font-size: 20px;
    }
  }
}
</style>