<script setup>
import Button from '@/components/Button.vue'

const eventForBtn = () => {
    alert('You clicked btn!')
}

</script>

<template>
    <h1 class="heading-1">Button</h1>

    <h2 class="heading-2">Colors</h2>
    <div class="line">
        <Button
            label="primary"
            color="primary"
        />
        <Button
            label="second"
            color="second"
        />
        <Button
            label="success"
            color="success"
        />
        <Button
            label="info"
            color="info"
        />
        <Button
            label="warning"
            color="warning"
        />
        <Button
            label="danger"
            color="danger"
        />
    </div>

    <h2 class="heading-2">Rounded</h2>
    <div class="line">
        <Button
            label="primary"
            color="primary"
            :rounded="true"
        />
        <Button
            label="second"
            color="second"
            :rounded="true"
        />
        <Button
            label="success"
            color="success"
            :rounded="true"
        />
        <Button
            label="info"
            color="info"
            :rounded="true"
        />
        <Button
            label="warning"
            color="warning"
            :rounded="true"
        />
        <Button
            label="danger"
            color="danger"
            :rounded="true"
        />
    </div>

    <h2 class="heading-3">Disabled</h2>
    <div class="line">
        <Button
            label="primary"
            color="primary"
            :disabled="true"
            :rounded="true"
        />
        <Button
            label="second"
            color="second"
            :disabled="true"
            :rounded="true"
        />
    </div>

    <h2 class="heading-2">Outlined</h2>
    <div class="line">
        <Button
            label="primary"
            color="primary"
            :outlined="true"
        />
        <Button
            label="second"
            color="second"
            :outlined="true"
        />
        <Button
            label="success"
            color="success"
            :outlined="true"
        />
        <Button
            label="info"
            color="info"
            :outlined="true"
        />
        <Button
            label="warning"
            color="warning"
            :outlined="true"
        />
        <Button
            label="danger"
            color="danger"
            :outlined="true"
        />
    </div>

    <h2 class="heading-2">Icon</h2>
    <div class="line">
        <Button
            color="primary"
            icon="heart"
        />
        <Button
            color="second"
            icon="hand"
        />
        <Button
            color="success"
            icon="address-book"
        />
        <Button
            color="info"
            icon="credit-card"
        />
        <Button
            color="warning"
            icon="lemon"
        />
        <Button
            color="danger"
            icon="hourglass"
        />
        <Button
            color="primary"
            icon="face-smile"
        />
    </div>

    <h2 class="heading-2">Icon and Outlined</h2>
    <div class="line">
        <Button
            color="primary"
            icon="heart"
            :outlined="true"
        />
        <Button
            color="second"
            icon="hand"
            :outlined="true"
        />
        <Button
            color="success"
            icon="address-book"
            :outlined="true"
        />
        <Button
            color="info"
            icon="credit-card"
            :outlined="true"
        />
        <Button
            color="warning"
            icon="lemon"
            :outlined="true"
        />
        <Button
            color="danger"
            icon="hourglass"
            :outlined="true"
        />
        <Button
            color="primary"
            icon="face-smile"
            :outlined="true"
        />
    </div>

    <h2 class="heading-2">Icon</h2>
    <div class="line">
        <Button
            color="primary"
            icon="heart"
        />
        <Button
            color="second"
            icon="hand"
        />
        <Button
            color="success"
            icon="address-book"
        />
        <Button
            color="info"
            icon="credit-card"
        />
        <Button
            color="warning"
            icon="lemon"
        />
        <Button
            color="danger"
            icon="hourglass"
        />
        <Button
            color="primary"
            icon="face-smile"
        />
    </div>

    <h2 class="heading-2">Normal and Large</h2>
    <div class="line">
        <Button
            label="normal"
            color="primary"
            size="normal"
        />
        <Button
            label="large"
            color="primary"
            size="large"
        />
    </div>

    <h2 class="heading-2">Event</h2>
    <div class="line">
        <Button
            label="Event"
            color="primary"
            @click123="eventForBtn"
        />
    </div>
</template>
