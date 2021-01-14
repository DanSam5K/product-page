
const app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        brand: "Master Vue With",
        description: "A Set of warm, fuzzy multi-coloured Socks",
        selectedVariant: 0,
        altText: "four colour variety socks",
        linkRef: "https://www.amazon.com/Losa-Kute-Womens-Casual-Nolvety/dp/B07F31CXTC",
        inventory: 0,
        details: ["80% cotton", "20% polyester", "Gender-Unisex"],
        variants: [
            {
                variantId: 1,
                variantColor: "multi-color",
                variantImage: "./images/4colourcombosocks.jpg",
                variantQuantity: 2,
                variantSale: true
            },
            {
                variantId: 2,
                variantColor: "blue",
                variantImage: "./images/blue-socks.jpg",
                variantQuantity: 0,
                variantSale: false
            },
            {
                variantId: 3,
                variantColor: "pink",
                variantImage: "./images/Pink.jpg",
                variantQuantity: 11,
                variantSale: true
            },
            {
                variantId: 4,
                variantColor: "green",
                variantImage: "./images/green.jpg",
                variantQuantity: 0,
                variantSale: false
            },
            {
                variantId: 5,
                variantColor: "yellow",
                variantImage: "./images/yellow.jpg",
                variantQuantity: 6,
                variantSale: true
            },
            {
                variantId: 6,
                variantColor: "red",
                variantImage: "./images/red.jpg",
                variantImage: 0,
                variantSale: false

            }
        ],
        sizes: ["size 37", "size 40", "size 42", "size 44"],
        cart: 0,
        onSale: true
    },
        //methods
    methods:{
        addToCart() {
        this.cart +=1 ;
        },

        updateProduct(index){
            this.selectedVariant = index;
            console.log(index)
        },
        removeFromCart() {
            this.cart -=1;
        }
    },

    computed: {
        title() {
            return this.brand + " " + this.product + " Project" 
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        sale() {
            if(this.variants[this.selectedVariant].variantSale) {
                return `${this.variants[this.selectedVariant].variantColor} ${this.product} are on sale!`
            }return `${this.variants[this.selectedVariant].variantColor} ${this.product} are not on sale!`
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