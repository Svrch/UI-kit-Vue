<script setup>
import { ref } from 'vue'
import Tab from '../components/Tab.vue';

const tabs = [
    { name: 'About', label: 'О проекте' },
    { name: 'Vue', label: 'Про Vue' },
    { name: 'React', label: 'Про React' },
]

const selectedTab = ref('Vue')

const changeTab = (tabName) => {
    selectedTab.value = tabName
}

</script>

<template>
    <div class="heading-1">Tabs</div>
    <Tab
        :names="tabs"
        :selectedTab="selectedTab"
        @changeTab="changeTab"
    >
        <div v-if="selectedTab === 'About'">Lorem ipsum dolor sit amet.</div>
        <div v-if="selectedTab === 'Vue'">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.</div>
        <div v-if="selectedTab === 'React'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quis
            tempora!</div>
    </Tab>
</template>