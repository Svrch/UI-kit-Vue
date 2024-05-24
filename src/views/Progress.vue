<script setup>
import Progress from '@/components/Progress/Progress.vue';
import Button from '@/components/Button.vue';
import ProgressCircle from '@/components/Progress/ProgressCircle.vue';
import { ref } from 'vue'

const percentBar = ref(40)

const addPercentBar = () => {
    percentBar.value += 10
    if (percentBar.value > 100) {
        percentBar.value = 100
    }
}

const removePercentBar = () => {
    percentBar.value -= 10
    if (percentBar.value < 0) {
        percentBar.value = 0
    }
}

const percentCircleBar = ref(10)

const addCircle = () => {
    percentCircleBar.value += 10
    if (percentCircleBar.value > 100) {
        percentCircleBar.value = 100
    }
}

const removeCircle = () => {
    percentCircleBar.value -= 10
    if (percentCircleBar.value < 0) {
        percentCircleBar.value = 0
    }
}


const percentCircleBarWarn = ref(10)

const addCircleWarn = () => {
    percentCircleBarWarn.value += 10
    if (percentCircleBarWarn.value > 100) {
        percentCircleBarWarn.value = 100
    }
}

const removeCircleWarn = () => {
    percentCircleBarWarn.value -= 10
    if (percentCircleBarWarn.value < 0) {
        percentCircleBarWarn.value = 0
    }
}


</script>

<template>
    <div class="heading-1">Progress</div>
    <div class="heading-2">Progress Bar</div>
    <div class="line line_block">
        <Progress
            maxWidth='400px'
            :percent="percentBar"
            color="primary"
        />
        <Button
            label="Remove 10%"
            @click="removePercentBar"
            color="primary"
        />
        <Button
            label="Add 10%"
            @click="addPercentBar"
            color="primary"
        />
    </div>

    <div>
        <ProgressCircle
            :percent="percentCircleBar"
            color="primary"
        />
        <Button
            label="Remove 10%"
            @click="removeCircle"
            color="primary"
        />
        <Button
            label="Add 10%"
            @click="addCircle"
            color="primary"
        />
        <ProgressCircle
            :percent="percentCircleBarWarn"
            color="warning"
        />

        <Button
            label="Remove 10%"
            @click="removeCircleWarn"
            color="warning"
        />
        <Button
            label="Add 10%"
            @click="addCircleWarn"
            color="warning"
        />
    </div>


</template>