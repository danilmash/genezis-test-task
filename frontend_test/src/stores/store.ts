import { ref } from "vue";
import {defineStore} from 'pinia'

export const useTableStore = defineStore('table', () => {
  const tablesData = ref({
    companies: [],
    leads: [],
    contacts: [],
  })
  return {tablesData}
})