<template>
    <div class="navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <router-link :to="{name:'home'}">SabPay</router-link>
                <ul class="right">
                    <li v-if="!user"><router-link :to='{name:"Signup"}'>Signup</router-link></li>
                    <li v-if="!user"><router-link :to='{name:"Login"}'>Login</router-link></li>
                    <li v-if="user" >{{user.email}}</li>
                    <li v-if="user"><a @click="logout">Logout</a></li>
                    <li v-if="user"><a href="https://y-chat-528dd.web.app/chat" target="blank"><i class='bx bxs-help-circle'></i></a></li> 
                </ul>
            </div>
        </nav>
    </div>

</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name:"Navbar",
    data(){
        return{
            user:null,
            name:null
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.push({name:'Login'})
            })
        }
    },
    created(){
        let user = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.user=user
            }else{
                this.user = null
            }
        })
        db.collection("transactions").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
        var txn = doc.data()
        console.log(txn.item.name);
        // $('#item_name').text(txn.item.name);
        $(logged).text(txn.user.name)
        console.log(txn.user.name)
    });
    });
    }
}
      

</script>
<style >

</style>