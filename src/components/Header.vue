<template>
    <header class="header">
      <h1 class="header__title">
        {{ title }}
      </h1>

    </header>
</template>

<script>
export default {
  name: 'Header',

  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
  }

  .header__button {
    margin-left: auto;
  }
</style>
