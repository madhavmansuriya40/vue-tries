<!-- option API -->
<script>
import Header from "@/components/Header.vue";
import Counter from "@/components/counter.vue";
import Accordian from "@/components/Accordian.vue";
import Form from "@/components/Form.vue";

export default {
  components: {
    Header,
    Counter,
    Accordian,
    Form,
  },
};
</script>

<template>
  <Header />
  <Counter />
  <Accordian />
  <Form />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
