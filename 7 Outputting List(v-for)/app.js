const app = Vue.createApp({

    data() {
        return {
            showBooks: true,
            books: [
                {title: 'testname1', author: 'testauthor1', age:1},
                {title: 'testname2', author: 'testauthor2', age:2},
                {title: 'testname3', author: 'testauthor3', age:3 }
            ]
        }
    },

    methods: {
       toggleShowBooks(){
        this.showBooks = !this.showBooks
       }
    },

})

app.mount('#app')