const app = Vue.createApp({
    data() {
        return {
            title: 'Final Empire',
            author: 'Brandon Sanderson',
            age: 19
        }
    },
    methods: {
        changeTitle1(){
            this.title = 'World of Randiance'
        },
        changeTitle2(){
            this.title = title
        },
        increaseAge(){
            this.age++
        },
        decreaseAge(){
            this.age--
        }
    },
    
})

app.mount('#app')