<template>
  <div class="wizard-card">
    <img class="wizard-card__image" alt="Vue image" :src="image" style="width:100%"/>
    <div class="wizard-card__container">
      <h4><b> {{ name }}</b></h4> 
      <p>{{gender}} & {{dateOfBirth}}</p> 
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "WizarsCard",
  props: {
    name: {
      type: String,
      default: ""
    },
    gender: {
      type: String,
      default: ""
    },
    dateOfBirth: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.wizard-card {
  flex: 0 1 24%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  margin: 5px;
  max-width: 240px;
  min-width: 240px;
  border-radius: 25px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  &__.container {
    padding: 2px 16px;
  }
  &__image {
    width: 100%;
    height: auto;
    border-radius: 25px 25px 0 0 ;
  }
}
</style>
