<script setup>
import Checkbox from '@/components/Checkbox/Checkbox.vue'
import CheckboxGroup from '@/components/Checkbox/CheckboxGroup.vue';
import { ref } from 'vue'

const checkboxActive = ref(false)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(false)
const listOfHeroues = ref([
    { name: 'Spider Man', id: 'h1' },
    { name: 'Batman', id: 'h2' },
    { name: 'Tor', id: 'h3' },
    { name: 'Loki', id: 'h4' },
])

const selectedHeroes = ref(['h1', 'h3'])

const listOfPerson = ref([
    { name: 'Piter', id: 'p1' },
    { name: 'Max', id: 'p2' },
    { name: 'Jack', id: 'p3' },
    { name: 'James', id: 'p4' },
    { name: 'Helga', id: 'p5' },
    { name: 'Sam', id: 'p6' },


])

const selectedPerson = ref(['p1', 'p3'])
const switchProfessional = ref(false)

</script>


<template>
    <div class="heading-1">Checkbox</div>

    <div class="heading-2">Checkbox Active</div>
    <div class="heading-3">{{ checkboxActive }}</div>
    <div class="line">
        <Checkbox
            label="Checkbox Active"
            id="checkboxActive"
            name="checkboxActive"
            value="I Like it!"
            v-model:checked="checkboxActive"
        />
    </div>

    <div class="heading-2">Checkbox Disabled</div>
    <div class="line">
        <Checkbox
            label="Checkbox disabled"
            id="checkboxDisabled"
            name="checkboxDisabled"
            value="I Like it!"
            :disabled="checkboxDisabled"
            v-model:checked="checkboxDisabledChecked"
        />
    </div>

    <div class="heading-2">Checkbox Group</div>
    <div class="line line_block">
        <p>Selected Heroes: {{ selectedHeroes }}</p>
        <CheckboxGroup
            name="Heroes"
            :options="listOfHeroues"
            v-model:value="selectedHeroes"
        />
    </div>

    <div class="heading-2">Checkbox Group</div>
    <div class="line line_block">
        <p>Selected Person: {{ selectedPerson }}</p>
        <CheckboxGroup
            name="Person"
            :options="listOfPerson"
            v-model:value="selectedPerson"
        />
    </div>

    <div class="heading-2">Switch</div>
    <div class="heading-3"> {{ switchProfessional }}</div>
    <div class="line">
        <Checkbox
            label="I'm a proffesional"
            id="swithc"
            name="swithc"
            value="I'm a proffesional"
            v-model:checked="switchProfessional"
            type="switch"
        />
    </div>


</template>