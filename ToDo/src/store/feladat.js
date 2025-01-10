import { ref } from 'vue'
import { defineStore } from 'pinia'


export const feladatokStore = defineStore('feladat', () => {
    const feladatok = ref([
        {
            nev : "1. feladat",
            leiras : "leiras",
            allapot : true || false,
            hatarido : "ma"
        },
        {
            nev : "2. feladat",
            leiras : "leiras",
            allapot : true || false,
            hatarido : "holnap"
        },
    ])
    return { feladatok }
})