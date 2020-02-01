<template>
  <div>
   <form class="wizard-form"> 
            <h1> {{ titleForm }}</h1>
            <div 
              :class="{ 'wizard-form__error-validation': nameError }"
            >
                <label for="name"> Name: </label>
                <input type="text" v-model="model.name" placeholder="What your name?"/>
            </div>
            
            <div
              :class="{ 'wizard-form__error-validation': priceError }"
            >
                <label for="alias"> Price:</label>
                <input type="text" v-model="model.price" placeholder="What price?" />
            </div>
            
            <div
              :class="{ 'wizard-form__error-validation': imageError }"
            >
                <label for="role"> Image:</label>
                <input type="text" v-model="model.image" placeholder="What your image?" />
            </div>

            <button
              @click.prevent="doSubmit"
            >
              Submit
            </button>
        </form>
  </div>
</template>

<script>
  export default {
    name: 'wizard-form',

    data() {
      return {
        titleForm: 'Formulario',
        model: {
          name: '',
          price: 0,
          image: '',
        },
      }
    },

    computed: {
      nameError({ model: { name }, checkValidate }) {
        return !checkValidate(name) 
      },
      priceError({ model: { price }, checkValidate}) {
        return !checkValidate(price)
      },
      imageError({ model: { image }, checkValidate}) {
        return !checkValidate(image)
      }
    },
    methods: {
      checkValidate(input){
        if (input.length > 3) return true;
        else return false;
      },

      doSubmit(event) {
        event.preventDefault()
        const { nameError, priceError, imageError, model } = this;

        if (!nameError && !priceError && !imageError) {
          this.$emit('on-submit', model)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
.wizard-form {
  background: #cbcaca;
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  justify-items: center;
  font-size: 2em;

  &__error-validation {
    background-color: red;
  }
}
</style>