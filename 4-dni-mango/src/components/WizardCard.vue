<template>
    <div class="wizard-card">
        <!-- Form -->
        <form class="wizard-card__form"> 
            <h1> {{ titleForm }}</h1>
            <div>
                <label for="name"> Name: </label>
                <input type="text" v-model="model.name" placeholder="What your name?"/>
            </div>
            
            <div>
                <label for="alias"> Alias:</label>
                <input type="text" v-model="model.alias" placeholder="What your alias?" />
            </div>
            
            <div>
                <label for="role"> Role:</label>
                <input type="text" v-model="model.role" placeholder="What your role?" />
            </div>
            
            <div>
                <label for="school"> School:</label>
                <input type="text" v-model="model.school" placeholder="What your school?" />
            </div>
        </form>
        <div>- - - - - -</div>
        <!-- Card -->
        <div class="wizard-card__card">
            <h1> {{ titleCard }}</h1>
            <span> <strong> Name: </strong> {{ model.name }} </span>
            <span> <strong> Alias: </strong> {{ model.alias }} </span>
            <span> <strong> Role: </strong> {{ model.role }} </span>
            <span> <strong> School: </strong> {{ model.school }} </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WizardCard',
        data() {
            return {
                titleForm: 'Formulario',
                titleCard: 'Card',
                model:  {
                    name: '',
                    alias: '',
                    role: '',
                    school: '',
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.wizard-card {
    &__form{
        background: #cbcaca;
        display: grid;
        grid-auto-rows: auto;
        grid-gap: 20px;
        justify-items: center;
    }
    &__card{
        background: #cbcaca;
        display: grid;
        grid-auto-rows: auto;
        grid-gap: 20px;
        justify-items: center;
    }   
}
</style>