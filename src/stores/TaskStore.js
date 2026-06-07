import { defineStore } from "pinia";


export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks: [
            {id: 1, title: 'buy some milk', isFav: false },
            {id: 2, title: 'play Gloomhaven', isFav: true},
            {id: 3, title: 'do my homework', isFav: true},
            {id: 4, title: 'study for exam', isFav: false},
        ],
        name: 'Ruba Alahmad',
        

    })
})