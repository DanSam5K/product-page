Vue.component('product-details', {
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>

    `,
    props: {
        details: {
            type: Array,
            required: true
        }
    }
})

Vue.component('product-sizes', {
    template: `
    <div>   
        <ul>
            <li v-for="size in sizes"> 
            <span><input type="checkbox" > select</span>   
            {{ size }} 
            </li>
        </ul>
    </div>
    `,
    props: {
        sizes: {
        type: Array,
        required: true
      }
    }
})

Vue.component('product', {
    template:`
        <div class="product">
        <div class="product">
        <div>
            <h1>{{ title }}</h1>
        </div>
        <div>
            <a :href="linkRef" target="_blank"><img :src="image" :alt="altText" :href="linkRef"/></a>
        </div>
        <div class="product-info">
            <h2>{{ product }}</h2>
            <p>{{ description }}</p>
            <p v-if="inventory > 10">In Stock <span v-if="onSale">On Sale!</span> <span v-else>Sold Out!</span> </p>
            <p v-else-if="inventory <= 10 && inventory > 0">In Stock Almost sold out!</p>
            <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
            <p>{{sale}}</p>
            <p>User is premium:{{premium}} >> Shipping {{shipping}}</p>
             
            <div>
                <product-details :details="details"></product-details>
                <product-sizes :sizes="sizes"></product-sizes>
            </div>

            <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style=" { backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)" >
                
            </div>
            
            <div>
                <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to cart</button>
            </div>


            <button v-on:click="removeFromCart">Remove From cart</button>
        </div>
        </div>
    `,
    data() {
        return {

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
                onSale: true
            }
        
    },

    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

     //methods
     methods:{
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId) ;
        },

        updateProduct(index){
            this.selectedVariant = index;
            console.log(index)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId) ;
        }
        
    },
    //computed properties

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
        },
        shipping() {
            if(this.premium) {
                return "Free"
            } else {
                return 2.99
            }
        }
    }


})

const app = new Vue({
    el: "#app",
    data: {
        premium: true,
        cart: []
   
    },

    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        deleteCart(id) {
            this.cart.pop(id)
        }
    }
         
})