
const app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                name: 'Four Colour Combo Socks',
                image: './images/4colourcombosocks.jpg',
                alt: 'four colour variety socks',
                inStock: true,
                onSale: true
            },
            {
                name: 'Three in One Socks',
                image: './images/threeinonesocks.jpg',
                alt: '3 contain in one pack socks',
                inStock: false,
                onSale: false
            },
            {
                name: 'Ash Socks',
                image: './images/ashsocks.jpg',
                alt: 'ash colour socks',
                inStock: true,
                onSale: true

            }
        ],
                       
    }
        
})