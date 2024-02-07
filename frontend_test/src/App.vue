<template lang="">
  <main>
    <DropDown v-model="selectedOption" :items="options"></DropDown>
    <Button class="create-button" @click="createItem" :disabled='isDisabled' ref="button">Создать</Button>
    <DataTables></DataTables>
  </main>
</template>
<script setup>
import { computed, ref } from "vue";
import axios from 'axios';
import {useTableStore} from '@/stores/store'
import Button from "./components/Button.vue";
import DropDown from "./components/DropDown.vue";
import DataTables from "./components/DataTables.vue";

let store = useTableStore()
let options = ref([
  "Не выбрано",
  "Сделка",
  "Компания",
  "Контакт",
])

const isDisabled = computed(() => {
  if (selectedOption.value == 'Не выбрано') {
    return true
  } else {
    return false
  }
})

let button = ref(null)
let selectedOption = ref(options.value[0])


async function createItem() {
  let data = null
  button.value.$el.innerHTML = '<span class="loader"></span>'
  switch(selectedOption.value) {
    case options.value[1]:
      data = await axios.post('http://localhost:3000/leads')
      store.tablesData.leads.push(data.data)
      break
    case options.value[2]:
      data = await axios.post('http://localhost:3000/companies')
      store.tablesData.companies.push(data.data)
      break
    case options.value[3]:
      data = await axios.post('http://localhost:3000/contacts')
      store.tablesData.contacts.push(data.data)
      break
  }
  button.value.$el.innerHTML = 'Создать'
}



</script>
<style lang="scss">
  .loader {
    width: 29px;
    height: 29px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
    }
  100% {
      transform: rotate(360deg);
    }
  } 

  .create-button {
    min-width: 150px;
  }
</style>