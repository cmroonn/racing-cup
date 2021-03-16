<template>
  <div class="home">
    <Header title="Racing cup" class="header"/>

    <Form />

    <members-list class="member-list" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Form from '@/components/Form.vue';
import MembersList from '@/components/MembersList.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Form,
    MembersList,
  },
};
</script>

<style scoped>
  .header {
    margin-bottom: 50px;
  }

  .member-list {
    margin-top: 50px;
  }
</style>
