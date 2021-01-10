
const app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        description: "A Set of warm, fuzzy multi-coloured Socks",
        image: "./images/4colourcombosocks.jpg",
        altText: "four colour variety socks",
        linkRef: "https://www.amazon.com/Losa-Kute-Womens-Casual-Nolvety/dp/B07F31CXTC",
        inStock: true,
        inventory: 11,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-Unisex", "Color-multiColor"],
        variants: [
            {
                variantId: 1,
                variantColor: "blue",
                variantImage: "./images/blue-socks.jpg"
            },
            {
                variantId: 2,
                variantColor: "pink",
                variantImage: "./images/Pink.jpg"
            },
            {
                variantId: 3,
                variantColor: "green",
                variantImage: "./images/green.jpg"
            },
            {
                variantId: 4,
                variantColor: "yellow",
                variantImage: "./images/yellow.jpg"
            },
            {
                variantId: 5,
                variantColor: "red",
                variantImage: "./images/red.jpg"
            }
        ],
        sizes: ["size 37", "size 40", "size 42", "size 44"],
        cart: 0
    },
        //methods
    methods:{
        addToCart() {
        this.cart +=1 ;
        },

        updateProduct(variantImage){
            this.image = variantImage;
        },
        removeFromCart() {
            this.cart -=1;
        }
    }
     


    // el: '#app',
    // data: {
    //     products: [
    //         {
    //             name: 'Four Colour Combo Socks',
    //             image: './images/4colourcombosocks.jpg',
    //             alt: 'four colour variety socks',
    //             inStock: true,
    //             onSale: true,
    //             details: ['50% cotton', '50% polyester', 'Gender-unisex'],
    //             variants: [
    //                 {
    //                     variantId: 1,
    //                     variantColor: 'multi-color'
    //                 }
    //             ]

    //         },
    //         {
    //             name: 'Three in One Socks',
    //             image: './images/threeinonesocks.jpg',
    //             alt: '3 contain in one pack socks',
    //             inStock: false,
    //             onSale: false,
    //             details: ['40% cotton', '60% polyester', 'Gender-male'],
    //             variants: [
    //                 {
    //                     variantId: 3,
    //                     variantColor: 'Shade var Color'
    //                 }
    //             ]

    //         },
    //         {
    //             name: 'Ash Socks',
    //             image: './images/ashsocks.jpg',
    //             alt: 'ash colour socks',
    //             inStock: true,
    //             onSale: true,
    //             details: ['80% cotton', '20% polyester', 'Gender-unisex'],
    //             variants: [
    //                 {
    //                     variantId: 3,
    //                     variantColor: 'Ash Color'
    //                 }
    //                           ]

    //         }
    //     ],
                       
    // }
        
})