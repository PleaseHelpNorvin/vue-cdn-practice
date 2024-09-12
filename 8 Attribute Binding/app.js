const app = Vue.createApp({

    data() {
        return {
            url: 'http://www.youtube.com',
            showBooks: true,
            books: [
                {title: 'testname1', author: 'testauthor1', age:1, img: '../assets/img1.jpg'},
                {title: 'testname2', author: 'testauthor2', age:2, img: '../assets/img2.png'},
                {title: 'testname3', author: 'testauthor3', age:3, img: '../assets/img3.png'}
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