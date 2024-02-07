<template lang="">
    <button class="button"><slot></slot></button>
</template>
<script setup>
    
</script>
<style lang='scss'>
    .button {
        border: none;
        outline: none;
        background-color:#4c8bf7;
        color: white;
        font-size: 1.5rem;
        
        padding: 5px 24px;
        border-radius: 5px;

        cursor: pointer;

        transition: 0.5s;

        &:disabled {
            background-color: #fcfcfc;
            color: black;
            border: 1px solid #e1e2e4;

            &:hover {
                background-color: #fcfcfc;
                cursor: not-allowed;
            }
        }

        &:hover {
            background-color: #3473e0;
        }
    }
</style>