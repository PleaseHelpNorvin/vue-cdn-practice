const app = Vue.createApp({

    data() {
        return {
            showBooks: true,
            title: 'Final Empire',
            author: 'Brandon Sanderson',
            age: 19,
            y:0,
            x:0
        }
    },

    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },

        // handleEvent(){
        //     console.log('event')  
        // },

        // handleEvent(e){
        //     console.log(e, e.type)  
        // },

        handleEvent(e, data){
            console.log(e, e.type)  
            if(data) {
                console.log(data)
            }
        },
        handleMousemove(e){
          this.x = e.offsetX
          this.y = e.offsetY
        }
    },

})

app.mount('#app')