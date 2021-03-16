<template>
  <section>
    <table class="members-list" cellspacing="0">
      <thead>
        <tr>
          <td>
            ФИО
          </td>

          <td @click="sortByBirth" class="members-list__clickable">
            Дата рождения
          </td>

          <td @click="sortByReg" class="members-list__clickable">
            Дата регистрации
          </td>

          <td @click="sortByDistance" class="members-list__clickable">
            Дистанция, км
          </td>

          <td @click="sortByPayment" class="members-list__clickable">
            Взнос, руб
          </td>

          <td>
            E-mail
          </td>

          <td>
            Телефон
          </td>
        </tr>
      </thead>

      <tbody>

        <tr v-for="user in users" :key="user.id">
            <td>
              {{ user.name }}
            </td>

            <td>
              {{ user.date }}
            </td>

            <td>
              {{ user.dateOfReg }}
            </td>

            <td>
              {{ user.distance }}
            </td>

            <td>
              {{ user.payment }}
            </td>

            <td>
              {{ user.email }}
            </td>

            <td>
              {{ user.phone }}
            </td>
        </tr>

      </tbody>
    </table>
  </section>
</template>

<script>


import { mapGetters, mapState } from 'vuex';

export default {
  name: "MembersList",

  data() {
    return {
      increaseReg: true,
      increasePayment: true,
      increaseDistance: true,
      increaseBirth: true,
    }
  },

  computed: {
    ...mapGetters('users', ["users"]),

  },

  created() {
    this.$store.dispatch('users/getUsers')
  },

  methods: {
    sortByReg() {
      if (this.increaseReg) {
        this.users.sort((a, b) => {
          let val1 = a.dateOfReg.split('.');
          let val2 = b.dateOfReg.split('.');

          return new Date(val1[2], val1[1], val1[0]) - new Date(val2[2], val2[1], val2[0]);
        });
      } else {
        this.users.sort((a, b) => {
          let val1 = a.dateOfReg.split('.');
          let val2 = b.dateOfReg.split('.');

          return new Date(val2[2], val2[1], val2[0]) - new Date(val1[2], val1[1], val1[0]);
        });
      }
      this.increaseReg = !this.increaseReg;
      this.increasePayment = true;
      this.increaseDistance = true;
      this.increaseBirth = true;
    },

    sortByBirth() {
      if (this.increaseBirth) {
        this.users.sort((a, b) => {
          let val1 = a.date.split('.');
          let val2 = b.date.split('.');

          return new Date(val1[2], val1[1], val1[0]) - new Date(val2[2], val2[1], val2[0]);
        });
      } else {
        this.users.sort((a, b) => {
          let val1 = a.date.split('.');
          let val2 = b.date.split('.');

          return new Date(val2[2], val2[1], val2[0]) - new Date(val1[2], val1[1], val1[0]);
        });
      }
      this.increaseBirth = !this.increaseBirth;
      this.increasePayment = true;
      this.increaseDistance = true;
      this.increaseReg = true;

    },

    sortByDistance() {
      if (this.increaseDistance) {
        this.users.sort((a, b) => b.distance - a.distance);
      } else {
        this.users.sort((a, b) => a.distance - b.distance);
      }

      this.increaseDistance = !this.increaseDistance;
      this.increasePayment = true;
      this.increaseBirth = true;
      this.increaseReg = true;
    },

    sortByPayment() {
      if (this.increasePayment) {
        this.users.sort((a, b) => b.payment - a.payment);
      } else {
        this.users.sort((a, b) => a.payment - b.payment);
      }

      this.increasePayment = !this.increasePayment;
      this.increaseDistance = true;
      this.increaseBirth = true;
      this.increaseReg = true;
    },
  }
}
</script>

<style scoped lang="scss">
  .members-list {
    width: 100%;
    text-align: left;
    border-top: 1px solid black;
    border-right: 1px solid black;


    td {
      border-left: 1px solid black;
      border-bottom: 1px solid black;
      padding: 3px;
    }
  }

  .members-list__clickable {
    cursor: pointer;
    transition: .2s;

    &:hover {
      background: rgba(37, 37, 37, 0.1);
      transition: .2s;
    }
  }
</style>