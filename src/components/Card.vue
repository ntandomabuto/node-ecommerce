<template>
    <div class="card">
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComp"
}
</script>

<style scoped>
.card {
    background-color: transparent;
    border: none;
    width: 15rem;
}
.card-header {
    background-color: none;
}
</style>