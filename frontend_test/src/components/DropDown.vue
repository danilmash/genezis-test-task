<template lang="">
    <div ref="dropdown" class="dropdown" @click="handleOpenDropdown">
        <p class='dropdown__option dropdown__current' :value='props.modelValue'>{{selectedOption}}</p>
        <svg class='dropdown__icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
        </svg>
        <div class="dropdown__menu">
            <ul class="dropdown__options">
                <li v-for="item in items" :key="item" class="dropdown__option" @click='HandleSelect'>{{item}}</li>
            </ul>
        </div>
        
    </div>
</template>
<script setup>
import {defineProps, ref} from 'vue'
let props = defineProps({
    items: {
        required: true,
    },
    modelValue: {
        required: false
    },
})

const emit = defineEmits(['update:modelValue'])

let dropdown = ref(null)
let selectedOption = ref(props.items[0]) 
function handleOpenDropdown() {
    dropdown.value.classList.toggle('opened')
}

function HandleSelect(event) {
    selectedOption.value = event.target.innerHTML
    emit('update:modelValue', selectedOption.value)
}


</script>
<style lang="scss">
    .dropdown {
        position: relative;
        width: fit-content;
        width: 300px;

        background-color: #fafafa;
        border: 2px solid #e1e2e4;
        
        font-size: 1.5rem;

        cursor: pointer;

        &__icon {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-45%);

            width: 2rem;
            height: 2rem;

            
        }

        &__option {
            padding: 5px;
            background-color: #fafafa;
            &:hover {
                background-color: #ededed;
            }
        }


        &__menu {
            position: absolute;
            z-index: 20;
            top: 100%;
            left: -2px;
            width: calc(100% + 4px);
            height: 0; 
            
            border: 2px solid #e1e2e4;
            background-color: #fafafa;
            border-top: none;
            
            overflow: hidden;

            transition:  0.5s;
        }

        &__options {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            height: 100%;
        }

        

        &.opened {
            .dropdown__menu {
                height: 146px;

            }

        }
    }
</style>