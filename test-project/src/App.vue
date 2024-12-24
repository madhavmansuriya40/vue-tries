<!-- option API -->
<script>
import Header from "@/components/Header.vue";
import Counter from "@/components/counter.vue";
import Accordian from "@/components/Accordian.vue";
import Form from "@/components/Form.vue";
import MultiStepForm from "@/components/MultiStepForm.vue";
import Events from "@/components/Events.vue";
import VBindForm from "@/components/VModelForm.vue";
import MiniProject1 from "@/components/MiniProject1.vue";

export default {
  components: {
    Header,
    Counter,
    Accordian,
    Form,
    MultiStepForm,
    Events,
    VBindForm,
    MiniProject1,
  },
};
</script>

<template>
  <!-- <Header />
  <Counter />
  <Accordian />
  <Form />
  <MultiStepForm />
  <Events />
  <VBindForm /> -->
  <MiniProject1 />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
