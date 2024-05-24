<script setup>

import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core';
import { helpers, minLength, maxLength, numeric, email, sameAs } from '@vuelidate/validators';
import Button from '@/components/Button.vue';

import Input from '@/components/Input.vue'


const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const frontendField = ref('')

const mustBeFrontend = (value) => value.includes('frontend')

const rules = computed(() => ({
    nameField: {
        minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
    },
    emailField: {
        email: helpers.withMessage(`Вы ввели неверный email`, email)
    },
    luckyField: {
        maxLength: helpers.withMessage(`Максимальная длина 5`, maxLength(5)),
        numeric: helpers.withMessage(`Можно использовать только цифры`, numeric)
    },
    confirmPasswordField: {
        sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
    },
    frontendField: {
        frontendField: helpers.withMessage(`Строка должна содержать слово frontend`, mustBeFrontend)
    }
}))

const v = useVuelidate(rules, { nameField, emailField, luckyField, confirmPasswordField, frontendField })

const submitForm = () => {
    v.value.$touch()
    if (v.value.$error) return
    alert('Form submited')
}

// const testFn = (value) => {
//     console.log(value);
// }

</script>

<template>
    <div class="heading-1">Inputs</div>
    <form @submit.prevent="submitForm">
        <Input
            label="Your name"
            name="name"
            placeholder="Input your name"
            v-model:value="v.nameField.$model"
            :error="v.nameField.$errors"
        />
        <Input
            label="Your email"
            name="email"
            placeholder="Input your email"
            v-model:value="v.emailField.$model"
            :error="v.emailField.$errors"
        />
        <Input
            label="Your lucky number"
            name="number"
            placeholder="Input your lucky number"
            v-model:value="v.luckyField.$model"
            :error="v.luckyField.$errors"
        />

        <Input
            label="Password"
            name="password"
            placeholder="Input your password"
            v-model:value="passwordField"
            type="password"
        />

        <Input
            label="Confirm password"
            name="confirm"
            placeholder="Please confirm password"
            v-model:value="v.confirmPasswordField.$model"
            :error="v.confirmPasswordField.$errors"
            type="password"
        />

        <Input
            label="Input frontend"
            name="frontend"
            placeholder="Please input frontend"
            v-model:value="v.frontendField.$model"
            :error="v.frontendField.$errors"
        />
        <Button
            label="Submit"
            color="success"
            @click123=""
        />

    </form>

</template>