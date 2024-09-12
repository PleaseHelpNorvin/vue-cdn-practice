const app = Vue.createApp({

    data() {
        return {
            url: 'http://www.youtube.com',
            showBooks: true,
            books: [
                {title: 'testname1', author: 'testauthor1', age:1, img: '../assets/img1.jpg', isFav: true},
                {title: 'testname2', author: 'testauthor2', age:2, img: '../assets/img2.png', isFav: false},
                {title: 'testname3', author: 'testauthor3', age:3, img: '../assets/img3.png', isFav: true}
            ]
        }
    },

    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
                console.log(book.isFav)
                book.isFav = !book.isFav
            
        }
    },

})

app.mount('#app')