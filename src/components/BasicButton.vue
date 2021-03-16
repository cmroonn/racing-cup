<template>
    <button :disabled="isDisabled" :type="type">
      {{ text }}
    </button>
</template>

<script>
export default {
  name: 'BasicButton',
  props: {
    text: String,
    isDisabled: Boolean,
    type: String,
  },
};
</script>

<style scoped lang="scss">
  button {
    border: none;
    background-color: #2c3e50;
    color: white;
    font-size: 18px;
    padding: 15px 20px;
    cursor: pointer;
    transition: .2s ease;

    &:hover {
      transition: .2s ease;
      opacity: .85;
    }

    &:disabled {
      opacity: .4;
    }
  }
</style>
