<template>
  <div class="popular-questions">
    <div class="popular-questions-container">
      <div class="title-questions">
        <div>
          <span class="gray">популярныe </span>вопросы
        </div>
        <p>
          Не нашли ответ на свой вопрос? Узнайте подробнее
          <a href="#" @click.prevent="openModal">об условиях приобретения и использования</a>
          подарочных сертификатов LEXMER
        </p>
      </div>

      <div class="questions">
        <div v-for="(question, index) in questions" :key="index" class="question">
          <div class="question-header" @click="toggleQuestion(index)">
            <span class="question-title">{{ question.title }}</span>
            <span class="icon" :class="{
              'icon-expanded': question.expanded,
              'icon-collapsed': !question.expanded,
            }">
              <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 9l4 4 4-4" />
              </svg>
            </span>
          </div>
          <div class="question-body" :class="{ opened: question.expanded }">
            <p>{{ question.answer }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <ModalTerms v-if="isModalOpen" @close="closeModal" />
  </div>
</template>


<script setup>
import { ref } from "vue";
import Title from "@/components/Title.vue";
import ModalTerms from "@/components/ModalTerms.vue";
const questions = ref([
  {
    title: "1. Что из себя представляет электронный подарочный сертификат LEXMER?",
    answer: "Ответ на вопрос 1.",
    expanded: false,
  },
  {
    title: "2. Как купить электронный подарочный сертификат LEXMER?",
    answer: "Ответ на вопрос 2.",
    expanded: false,
  },
  {
    title: "3. На что можно потратить сертификат?",
    answer: "На любые товары, в том числе на товары со скидкой. Исключения: товары из разделов «Подарочный сертификат» ",
    expanded: false,
  },
  {
    title: "4. Как оплатить заказ подарочным сертификатом?",
    answer: "Ответ на вопрос 4.",
    expanded: false,
  },
  {
    title: "5. Что будет с сертификатом, если я верну оплаченный им заказ?",
    answer: "Ответ на вопрос 5.",
    expanded: false,
  },
]);

const isModalOpen = ref(false);

const toggleQuestion = (index) => {
  questions.value[index].expanded = !questions.value[index].expanded;
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

</script>

<style lang="scss" scoped>
.popular-questions {
  .popular-questions-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 100px;

    @include breakpoint('mobile') {
      max-width: 320px;
      flex-wrap: wrap;
      padding: 20px 10px;
    }

    @include breakpoint('mobile', 'wide') {
      max-width: 480px;
    }

    @include breakpoint('tablet', 'medium') {
      max-width: 768px;
    }

    @include breakpoint('tablet', 'wide') {
      max-width: 1000px;
    }

    @include breakpoint('desktop', 'medium') {
      max-width: 1440px;
      flex-wrap: nowrap;
      gap: 80px;
    }

    @include breakpoint('desktop') {
      max-width: 1610px;
      padding: 100px;
    }

    @include breakpoint('desktop', 'wide') {
      max-width: 1920px;
    }

    .title-questions {
      display: flex;
      flex-direction: column;
      font-family: "Bebas", sans-serif;
      font-size: 85px;
      font-weight: 400;
      line-height: 76.5px;
      letter-spacing: -0.005em;
      text-align: left;

      div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        @include breakpoint('mobile', 'medium') {
          flex-direction: row;
          font-size: 48px;
          font-weight: 400;
          line-height: 43.2px;
          letter-spacing: -0.01em;
          text-align: left;
        }

        @include breakpoint('tablet', 'medium') {
          font-size: 85px;
          font-weight: 400;
          line-height: 76.5px;
          letter-spacing: -0.005em;
          text-align: left;
        }

        @include breakpoint('desktop', 'medium') {
          flex-direction: column;
          gap: 0;
        }

        @include breakpoint('mobile') {
          flex-direction: column;
          gap: 0;
          font-size: 48px;
          font-weight: 400;
          line-height: 43.2px;
          letter-spacing: -0.01em;
          text-align: left;
        }
      }

      .gray {
        color: #BCC0C5;
      }

      @include breakpoint('mobile') {
        width: 100%;
        text-align: left;
      }

      @include breakpoint('desktop', 'medium') {
        max-width: 390px;
      }

      p {
        font-family: Golos;
        font-size: 15px;
        font-weight: 400;
        line-height: 20.25px;
        text-align: left;
        margin: 20px 0 45px;

        @include breakpoint('mobile') {
          width: 100%;
        }

        @include breakpoint('desktop', 'medium') {
          width: 100%;
          max-width: 400px;
        }

        @include breakpoint('tablet', 'medium') {
          max-width: 585px;
        }

        @include breakpoint('desktop', 'medium') {
          max-width: 385px;
        }

        a {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }

  .question {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    border: solid 1px #EBEBEB;

    .question-header {
      width: 1020px;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px;
      cursor: pointer;
      font-size: 21px;
      font-weight: 400;
      line-height: 23.1px;
      text-align: left;
      user-select: none;

      @include breakpoint('desktop', 'medium') {
        width: 930px;
        padding: 20px;
      }

      @include breakpoint('mobile') {
        width: 100%;
        font-size: 23px;
      }

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ebebeb;
      }

      .arrow-icon {
        width: 25px;
        height: 25px;
        fill: none;
        stroke: #333;
        stroke-width: 2;
        transition: transform 0.3s ease;
      }

      .icon-expanded .arrow-icon {
        transform: rotate(180deg);
      }
    }

    .question-body {
      width: 680px;
      max-height: 0;
      overflow: hidden;
      transition: ease-out 0.2s;
      color: #666666;
      font-size: 18px;
      font-weight: 400;
      line-height: 23.4px;
      letter-spacing: -0.01em;
      text-align: left;
      padding: 0 30px;

      @include breakpoint('mobile') {
        width: 100%;
        display: flex;
      }

      @include breakpoint('tablet', 'medium') {
        p {
          max-width: 585px;
        }
      }

      &.opened {
        max-height: 700px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>