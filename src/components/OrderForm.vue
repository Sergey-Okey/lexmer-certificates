<template>
  <div class="container">
    <!-- Amount selection buttons -->
    <div class="amount-buttons">
      <button v-for="amount in amounts" :key="amount" :class="{ selected: selectedAmount === amount }"
        @click="selectAmount(amount)">
        {{ amount }} ₽
      </button>
    </div>

    <!-- Send option section -->
    <div>
      <span class="title">
        <data value="2" style="color: grey">3.&nbsp;</data>Куда отправить
      </span>
      <div class="radio-container">
        <div class="message">
          <div>
            <input type="radio" id="email" value="email" v-model="sendOption" />
            <label for="email">На e-mail</label>
          </div>
          <div>
            <input type="radio" id="phone" value="phone" v-model="sendOption" />
            <label for="phone">На телефон</label>
          </div>
        </div>
      </div>
      <div>
        <input v-if="sendOption === 'email'" type="email" v-model="email" placeholder="Email" @input="validateEmail" />
        <div v-if="sendOption === 'email' && emailError" class="error">
          {{ emailError }}
        </div>
        <input v-if="sendOption === 'phone'" type="tel" v-model="phone" placeholder="+7 (___) ___-__-__"
          ref="phoneInput" @input="validatePhone" @focus="applyPhoneMask" />
        <div v-if="sendOption === 'phone' && phoneError" class="error">
          {{ phoneError }}
        </div>
      </div>

      <!-- SMS notification checkbox -->
      <div class="checkbox-container">
        <input type="checkbox" id="smsNotify" v-model="smsNotify" />
        <label for="smsNotify">
          Отправить SMS уведомление на телефон получателя
        </label>
      </div>
    </div>

    <!-- Send time section -->
    <div>
      <span class="title">
        <data value="2" style="color: grey">4.&nbsp;</data>Когда отправить
      </span>
      <div class="radio-container">
        <div>
          <input type="radio" id="immediately" value="immediately" v-model="sendTime" />
          <label for="immediately">Сразу после покупки</label>
        </div>
        <div>
          <input type="radio" id="schedule" value="schedule" v-model="sendTime" />
          <label for="schedule">Выбрать дату и время</label>
        </div>
      </div>
      <div>
        <input v-if="sendTime === 'schedule'" type="datetime-local" v-model="scheduleDate" />
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="notifyMe" v-model="notifyMe" />
        <label for="notifyMe">
          Сообщить мне, когда сертификат будет доставлен
        </label>
      </div>
    </div>

    <!-- Message section -->
    <div class="textarea">
      <span>
        <data value="2" style="color: grey">5.&nbsp;</data>Добавьте поздравление
      </span>
      <textarea v-model="message" placeholder="Сообщение для получателя" maxlength="1000"></textarea>
      <div class="message-length">
        Введено символов: {{ message.length }}/1000
      </div>
    </div>
    <ButtonPay />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Inputmask from 'inputmask';
import ButtonPay from './ButtonPay.vue';

const amounts = [
  1000, 3000, 5000, 10000, 15000, 20000, 25000, 30000, 40000, 50000,
];
const selectedAmount = ref(null);
const sendOption = ref('email');
const email = ref('');
const phone = ref('');
const emailError = ref('');
const phoneError = ref('');
const smsNotify = ref(false);
const sendTime = ref('immediately');
const scheduleDate = ref('');
const notifyMe = ref(true);
const message = ref('');

const phoneInput = ref(null);

const applyPhoneMask = () => {
  if (phoneInput.value) {
    Inputmask({ mask: "+7 (999) 999-99-99" }).mask(phoneInput.value);
  }
};

const selectAmount = (amount) => {
  selectedAmount.value = amount;
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailPattern.test(email.value) ? "Неверный формат email" : "";
};

const validatePhone = () => {
  const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
  phoneError.value = !phone.value
    ? "Пожалуйста, введите номер телефона."
    : !phonePattern.test(phone.value)
      ? "Неверный формат телефона"
      : "";
};

onMounted(() => {
  applyPhoneMask();
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: auto;

  @include breakpoint('mobile') {
    width: 100%;
    max-width: 290px;
    height: auto;
    gap: 30px;
  }

  @include breakpoint ('mobile', 'wide') {
    max-width: 480px;
  }
    @include breakpoint ('tablet', 'medium') {
      max-width: 768px
    }
}

.message {
  display: flex;

  @include breakpoint('mobile') {
    flex-wrap: wrap;
    justify-content: left;
  }

  div {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-right: 40px;
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;
    letter-spacing: -0.01em;
    text-align: left;

    @include breakpoint('mobile') {
      margin: 0;
    }
  }
}

span {
  font-family: Golos;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  margin-bottom: 20px;

  @include breakpoint('mobile') {
    font-size: 25px;
    width: 100%;
    display: flex;
    margin-bottom: 0;
  }
}

label {
  @include breakpoint('mobile') {
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    letter-spacing: -0.01em;
    text-align: left;
  }
}

.amount-buttons {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 20px;

  button {
    display: inline-block;
    padding: 5px 15px;
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;
    letter-spacing: -0.01em;
    text-align: left;

    @include breakpoint ('mobile', 'wide') {
      font-size: 16px;
      margin-top: 0px;
    }

    @include breakpoint ('mobile') {
      font-size: 16px;
    }

    &:hover {
      background-color: #f0f0f0;
    }

    &.selected {
      background-color: #e0e0e0;
    }
  }
}


input[type="radio"],
input[type="checkbox"] {
  width: 24px;
  height: 24px;
  border: 1px 0px 0px 0px;
  background-color: #f2f2f2;
  align-items: center;
  margin: 0;
  accent-color: #232323;
}

input[type="email"],
input[type="tel"],
input[type="datetime-local"],
textarea {
  width: 100%;
  height: 56px;
  gap: 5px;
  padding: 15px;
  font-size: 18px;
  font-weight: 400;
  line-height: 23.4px;
  letter-spacing: -0.01em;
  text-align: left;
  background-color: #f2f2f2;
  color: #4d4d4d;
  border: 1px solid #d9d9d9;
}

textarea {
  resize: vertical;
  height: auto;
  margin-top: 20px;

  @include breakpoint('mobile') {
    font-size: 16px;
    min-height: 140px;
  }
}

.textarea {
  position: relative;
}

.message-length {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 12px;
  color: #666;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

.radio-container {
  display: flex;
  gap: 20px;
  margin: 20px 0;

  @include breakpoint('mobile') {
    flex-wrap: wrap;
  }

  div {
    display: flex;
    align-items: center;
    gap: 15px;

    @include breakpoint('mobile') {
      align-items: flex-start;
    }
  }
}

.error {
  color: red;
  font-size: 14px;
}
</style>