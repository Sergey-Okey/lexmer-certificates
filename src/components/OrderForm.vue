<template>
  <div class="container">
    <!-- Amount selection buttons -->
    <div class="amount-buttons">
      <button
        v-for="amount in amounts"
        :key="amount"
        :class="{ selected: selectedAmount === amount }"
        @click="selectAmount(amount)"
      >
        {{ amount }} ₽
      </button>
    </div>

    <!-- Send option section -->
    <div>
      <span class="title">
        <data value="2" style="color: grey">3.</data> Куда отправить
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
        <input
          v-if="sendOption === 'email'"
          type="email"
          v-model="email"
          placeholder="Email"
          @input="validateEmail"
        />
        <div v-if="sendOption === 'email' && emailError" class="error">
          {{ emailError }}
        </div>
        <input
          v-if="sendOption === 'phone'"
          type="tel"
          v-model="phone"
          placeholder="+7 (___) ___-__-__"
          ref="phoneInput"
          @input="validatePhone"
          @focus="applyPhoneMask"
        />
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
        <data value="2" style="color: grey">4.</data> Когда отправить
      </span>
      <div class="radio-container">
        <div>
          <input
            type="radio"
            id="immediately"
            value="immediately"
            v-model="sendTime"
          />
          <label for="immediately">Сразу после покупки</label>
        </div>
        <div>
          <input
            type="radio"
            id="schedule"
            value="schedule"
            v-model="sendTime"
          />
          <label for="schedule">Выбрать дату и время</label>
        </div>
      </div>
      <div>
        <input
          v-if="sendTime === 'schedule'"
          type="datetime-local"
          v-model="scheduleDate"
        />
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="notifyMe" v-model="notifyMe" />
        <label for="notifyMe">
          Сообщить мне, когда сертификат будет доставлен
        </label>
      </div>
    </div>

    <!-- Message section -->
    <div>
      <span>
        <data value="2" style="color: grey">5.</data> Добавьте поздравление
      </span>
      <textarea
        v-model="message"
        placeholder="Сообщение для получателя"
        maxlength="1000"
      ></textarea>
      <div class="message-length">
        Введено символов: {{ message.length }}/1000
      </div>
    </div>
  </div>
</template>

<script>
import Inputmask from "inputmask";

export default {
  data() {
    return {
      amounts: [
        1000, 3000, 5000, 10000, 15000, 20000, 25000, 30000, 40000, 50000,
      ],
      selectedAmount: null,
      sendOption: "email",
      email: "",
      phone: "",
      emailError: "",
      phoneError: "",
      smsNotify: false,
      sendTime: "immediately",
      scheduleDate: "",
      notifyMe: false,
      message: "",
    };
  },
  methods: {
    applyPhoneMask() {
      Inputmask({ mask: "+7 (999) 999-99-99" }).mask(this.$refs.phoneInput);
    },
    selectAmount(amount) {
      this.selectedAmount = amount;
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = !emailPattern.test(this.email)
        ? "Неверный формат email"
        : "";
    },
    validatePhone() {
      const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
      this.phoneError = !this.phone
        ? "Пожалуйста, введите номер телефона."
        : !phonePattern.test(this.phone)
        ? "Неверный формат телефона"
        : "";
    },
  },
};
</script>


<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.message {
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-right: 40px;

    font-family: Golos;
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;
    letter-spacing: -0.01em;
    text-align: left;
  }
}
span {
  font-family: Golos;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  margin-bottom: 20px;
}

.amount-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 20px;
}

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

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected {
    background-color: #e0e0e0;
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
  width: 575px;
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
  margin-top: 20px;
}

.message-length {
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
  div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}

.error {
  color: red;
  font-size: 14px;
}
</style>
