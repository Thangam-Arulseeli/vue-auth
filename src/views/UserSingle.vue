<template>
    <div> <p3> Single user page </p3>
         <p> User ID : {{ id }} </p>
         <p> Amount : {{ amount }}</p> 
   </div>
   <div>
    <h1> Stripe Payament Gateway Integration in Vue.js </h1>
    <pre > Publishable key will be copy & paste from stripe payment dashboard 
        So, publishableKey will be the variable here.
        :@loading="v => loading = v" 
        https://www.youtube.com/watch?v=g2Dtt4_dQQ4 
        
        NOTE: 
        1. Give the following when we integrate stripe payment for testing in the application
            EMail ID: helen@gmail.com
            CARD ID: 4242 4242 4242
            Expiry details : 12/34  - 123
    </pre>  <!--    /*  mode="payment"  :line-items="lineItems"  -->
    <stripe-checkout 
        ref="checkoutRef"
       
        :pk="publishableKey"   

        :success-url='successURL'
        :cancel-url="cancelURL"
        :@loading="v => loading = v"
     />
   <button @click="stripePay"> Pay Now </button>
  </div>
</template>
<script>
import {StripeCheckout} from '@vue-stripe/vue-stripe'
 export default{
    props: ['id'],
    data(){
        return{
            amount: 100,
            publishableKey: "pk_test_51NQjn0SD7roQ963Q4dMr7JUfWF6k0tx2DrTALUESa5Bym3sKEEFg75QoYEUoCA1z1PbzE1THx2aMIGU9YXkuHekY00ftFgU5Ee",
            loading: false,
            //  lineItems: [
            //      {
            //          price: '100',
            //          quantity: 1
            //      }
            //  ],
            successURL: 'http://localhost:8081/#/success',
            cancelURL: 'http://localhost:8081/#/error'
        }
    },
   components: {StripeCheckout},
    methods:{
        stripePay(){
           // alert('Stripe Payment Integration')
            this.$refs.checkoutRef.redirectToCheckout()
        }
    }
 }
</script>