import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAnimesStore = defineStore('anime', () => {

    const latestAnimes = ref([
        {
            id: 1,
            name: 'Nanatsu no Taizai',
            ep: 24,
            img: '/img/img-27.png'
        },
        {
            id: 2,
            name: 'Darling in the Franxx',
            ep: 1,
            img: '/img/img-26.png'
        },
        {
            id: 3,
            name: 'Douluo Dalu',
            ep: 214,
            img: '/img/img-28.png'
        },
        {
            id: 4,
            name: 'OverLord 4',
            ep: 5,
            img: '/img/img-25.png'
        },
        {
            id: 5,
            name: 'One Piece',
            ep: 1029,
            img: '/img/img-24.png'
        },
        {
            id: 6,
            name: 'Fuuto Tantei',
            ep: 2,
            img: '/img/img-23.png'
        }
    ])

    const recentAnimes = ref([
        {
            id: 1,
            name: 'Meng Qi Shi Shen',
            img: '/img/img-16.png'
        },
        {
            id: 2,
            name: 'Made in Abyss',
            img: '/img/img-15.png'
        },
        {
            id: 3,
            name: 'Prima Doll',
            img: '/img/img-14.png'
        },
        {
            id: 4,
            name: 'Isekai Ojisan',
            img: '/img/img-13.png'
        },
        {
            id: 5,
            name: 'Yuusha, Yamemasu',
            img: '/img/img-12.png'
        },
        {
            id: 6,
            name: 'Kami Kuzu Idol',
            img: '/img/img-11.png'
        }
    ])

    return { latestAnimes, recentAnimes }
})