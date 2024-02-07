<template>
    <div class="table-carousel">
        <div class="tables-container" ref="carousel">
            <div class="tables-container__table table companies-table" ref="item">
                <h2 class="table__header">Компании</h2>
                <p v-for="id in store.tablesData.companies" :key="id" class="table__item">{{ id }}</p>
            </div>
            <div class="tables-container__table table leads-table">
                <h2 class="table__header">Сделки</h2>
                <p v-for="id in store.tablesData.leads" :key="id" class="table__item">{{ id }}</p>
            </div>
            <div class="tables-container__table table contacts-table">
                <h2 class="table__header">Контакты</h2>
                <p v-for="id in store.tablesData.contacts" :key="id" class="table__item">{{ id }}</p>
            </div>
        </div>
        <div class="buttons-container">
                <Button class="buttons-container__button button-prev" @click="prevTable">Previous</Button>
                <Button class="buttons-container__button button-next" @click="nextTable">Next</Button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Button from "./Button.vue";
import { useTableStore } from "@/stores/store"

let store = useTableStore()

let carousel = ref(null)
let item = ref(null)
let itemWidth = 0
onMounted(() => {
    itemWidth = item.value.clientWidth
})

function nextTable() {
    if(carousel.value.scrollLeft < (carousel.value.scrollWidth - 2 * itemWidth))
       carousel.value.scrollBy({left: itemWidth, top: 0, behavior:'smooth'}
    );
    else {
        carousel.value.scrollTo({left: 0, top: 0, behavior: 'smooth'})
    }
}
function prevTable() {
    if(carousel.value.scrollLeft != 0)
    carousel.value.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
   else
   carousel.value.scrollTo({left: carousel.value.scrollWidth, top: 0, behavior:'smooth'});
}

</script>

<style lang="scss">
    .table-carousel {
        width: 100%;
    }

    .tables-container {
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        display: flex;
        
        &::-webkit-scrollbar {
            display: none;
        }
        &__table {
            min-width: 90%;
            height: 500px; 

            background-color: #fafafa;
            border: #e1e2e4 2px solid;

            scroll-snap-align: center;

            overflow-y: scroll;
            scrollbar-gutter: stable both-edges;

            margin: 0 5%;
        }
    }

    .table {
        

        &__header {
            position: sticky;
            top: 0;
            font-size: 2rem;
            font-weight: 600;
            text-align: center;
            padding: 20px 0;
            border-bottom: #e1e2e4 2px solid;
            background-color: #fafafa;
        }

        &__item {
            width: 100%;
            text-align: center;
            font-size: 1.5rem;
            padding: 20px 0;
            border-bottom: #e1e2e4 2px solid;

        }
    }


    .buttons-container {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;

        &__button {
            min-width: 30%;
        }
    }
</style>