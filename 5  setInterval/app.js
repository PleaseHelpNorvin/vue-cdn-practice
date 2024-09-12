const app = Vue.createApp({

    data() {
        return {

            ping: 0,
            intervalId:null,
            showBooks: true,
            togglebutton: '',
            title: 'Final Empire',
            author: 'Brandon Sanderson',
            age: 19
        }
    },

    methods: {
        pingBooks() { 
            if(!this.showBooks){
                if(!this.intervalId){
                    this.intervalId = setInterval(() => {
                        console.log(this.ping++)
                    }, 200);
                }
            }else{
                clearInterval(this.intervalId);
                this.intervalId = null;
                this.ping = 0;
                console.clear();
            }
        },


        toggleShowBooks() {
            this.showBooks = !this.showBooks;
            this.pingBooks();
            this.ping;
            
        },

        changeTitle1() {
            this.title = 'World of Randiance'
        },
        changeTitle2(title) {
            this.title = title
        },
        increaseAge() {
            this.age++
        },
        decreaseAge() {
            this.age--
        }
    },

})

app.mount('#app')