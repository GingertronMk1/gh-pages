<template>
  <div>
    Hello
    <ButtonCheckbox v-model="test1" label="test 1" />
    <ButtonCheckbox v-model="test2" label="test 2" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      test1: false,
      test2: true,
    };
  },
};
</script>
