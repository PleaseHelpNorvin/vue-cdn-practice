const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            togglebutton:'',
            title: 'Final Empire',
            author: 'Brandon Sanderson',
            age: 19
        }
    },
    methods: {
        toggleBooks(){
            this.showBooks=!this.showBooks
             if(!this.showBooks){
                this.togglebutton = 'hidebooks'
             }else{
                this.togglebutton = 'showBooks'
             }
        },
        changeTitle1(){
            this.title = 'World of Randiance'
        },
        changeTitle2(title){
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