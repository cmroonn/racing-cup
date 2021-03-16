<template>
  <form class="form" method="POST" id="form">
   <div class="form__fields">
     <label class="form__field">
      <span>
        ФИО
      </span>
       <input type="text" name="name" v-model="name" class="mx-input">
     </label>

     <label class="form__field">
      <span>
        Дата рождения
      </span>
       <date-picker v-model="dateOfBirth"
                    format="DD.MM.YYYY"
                    class="form__field__datepicker" />
     </label>

     <label class="form__field" :class="{ 'form__field-error': $v.email.$error }">
      <span>
        E-mail
      </span>
       <input type="email" name="email" v-model.trim="$v.email.$model" class="mx-input">
     </label>

     <label class="form__field" :class="{ 'form__field-error': $v.phone.$error }">
      <span>
        Телефон
      </span>
       <masked-input v-model.trim="$v.phone.$model" mask="\+\7 (111) 111 11-11" class="mx-input"/>
     </label>

     <label class="form__field">
      <span>
        Дистанция
      </span>
       <select name="distance" v-model="distance" class="mx-input">
         <option value="" disabled selected>Выбор дистанции</option>
         <option value="3">3км</option>
         <option value="5">5км</option>
         <option value="10">10км</option>
       </select>
     </label>

     <label class="form__field" :class="{ 'form__field-error': $v.payment.$error }">
      <span>
        Сумма взноса, руб
      </span>

       <input type="number" v-model.trim="$v.payment.$model" class="mx-input">
     </label>
   </div>


    <button type="submit" v-on:click.prevent="addNewUser($event)" class="form__submit" :disabled="isButtonDisabled">
      Отправить заявку
    </button>
  </form>
</template>

<script>
import Vue from 'vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import MaskedInput from 'vue-masked-input';

import Vuelidate from 'vuelidate';

import {
  required, email, minLength, numeric,
} from 'vuelidate/lib/validators';

import BasicButton from '@/components/BasicButton.vue';

import { mapActions } from 'vuex';

Vue.use(Vuelidate);

export default {
  name: 'Form',
  components: {
    DatePicker,
    MaskedInput,
    BasicButton,
  },

  data() {
    return {
      dateOfBirth: null,
      phone: null,
      distance: null,
      payment: null,
      email: null,
      name: null,
    };
  },

  validations: {
    name: {

    },

    email: {
      email,
    },

    dateOfBirth: {
      required,
    },

    phone: {
      minLength: minLength(18),
    },

    payment: {
      numeric,
    },
  },

  computed: {
    isButtonDisabled() {
      if (this.name && this.phone && this.distance && this.email && this.payment && this.dateOfBirth) {
        return false;
      } else {
        return true;
      }
    },
  },

  methods: {
    ...mapActions("users", ["addUser"]),

    addNewUser(event) {
      event.preventDefault();

      const newUser = {
        name: this.name,
        date: this.dateOfBirth.toLocaleDateString('ru'),
        payment: this.payment,
        distance: this.distance,
        phone: this.phone,
        email: this.email,
      }

      this.addUser(newUser);

      this.name = null;
      this.dateOfBirth = null;
      this.phone = null;
      this.payment = null;
      this.distance = null;
      this.email = null;
    }
  }
};
</script>

<style scoped lang="scss">
  .form__fields {
    display: flex;
    flex-wrap: wrap;
  }
  .form__field {
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    flex: 1;

    span {
      text-align: left;
    }
  }

  .form__field__datepicker {
    width: 100%;
  }

  .form__field-error {
    input {
      border-color: #ff6054;
    }
  }

  .form__field__msg {
    text-align: left;
    font-size: 14px;
    color: #ff6054;
    margin: 5px 0 0;
  }

  .form__submit {
    width: 100%;
    max-width: 500px;
    margin: 25px 0 0;
    height: 50px;
    background: #4340eb;
    color: white;
    font-size: 1em;
    cursor: pointer;
    transition: .2s;
    border: none;

    &:hover {
      opacity: .8;
      transition: .2s;
    }

    &:disabled {
      opacity: .4;
      cursor: not-allowed;
    }
  }
</style>
