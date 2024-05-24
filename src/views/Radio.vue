<script setup>

import { ref } from 'vue'
import Radio from '@/components/Radio.vue'

const footballClubs = ref([
    { name: 'CSKA Moscow', id: 'f1' },
    { name: 'Spartak Moscow', id: 'f2' },
    { name: 'Real Madrid', id: 'f3' },
    { name: 'Milan', id: 'f4' },
])

const selected = ref('')
const disabledRadio = ref(true)
const disabledRadioChecked = ref(true)



</script>

<template>
    <div class="heading-1"> Radio buttons</div>
    <div class="heading-2"> Basic </div>
    <div class="line line_block">
        <p>Selected Club: {{ selected }}</p>
        <div
            v-for="club in footballClubs "
            :key="club.id"
        >
            <Radio
                :value="club.name"
                :label="club.name"
                :id="club.id"
                name="club"
                v-model:checkedValue="selected"
            />
        </div>
    </div>

    <div class="heading-2"> Radio disabled </div>
    <div class="line">

        <Radio
            value="Radiobutton Disabled"
            label="Radiobutton Disabled"
            id="RadiobuttonDisabled"
            name="RadiobuttonDisabled"
            :disabled=disabledRadio
            v-model:checkedValue="disabledRadioChecked"
        />
    </div>


</template>