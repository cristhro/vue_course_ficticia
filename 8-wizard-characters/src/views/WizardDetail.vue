<template>
  <div>
    <div v-for="key in Object.keys(model)" :key="key">
      <img v-if="key === 'image'" alt="Vue image" :src="model[key]" />
      <div v-else>
        <strong for=""> {{ capitalize(key) }}: </strong>
        <span> {{ model[key] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WizardDetail",
  props: {
    index: {
      type: [String, Number]
    }
  },
  data() {
    return {
      model: null
    };
  },
  created() {
    const list = JSON.parse(localStorage.getItem("list"));
    this.model = list[Number(this.index)];
  },
  methods: {
    capitalize(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
