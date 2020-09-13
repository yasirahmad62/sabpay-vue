<template>
  <div class="signup container">
    <form class="card-panel" @submit.prevent="signup">
      <h2 class="center deep-purple-text">Signup</h2>
           <div class="field">
        <label for="name">Full Name</label>
        <input id="name" type="text" v-model="name">
      </div>
      <div class="field">
        <label for="alias">Username</label>
        <input id="alias" type="text" v-model="alias">
      </div>
      <div class="field">
        <label for="business">Type of Business</label>
        <input id="business" type="text" v-model="business">
      </div>
      <div class="field">
        <label for="phone">Phone Number</label>
        <input id="phone" type="text" v-model='phone'>
      </div>
      <div class="field">
        <label for="address">Address</label>
        <input id="address" type="text" v-model="address">
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>
 
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field center">
        <button class="btn deep-purple">Signup</button>
      </div>
    </form>
  </div>
</template>
<script>
import db from '@/firebase/init'
import slugify from 'slugify'
import firebase from 'firebase'
export default {
  name: 'Signup',
  data(){
    return{
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null,
      phone:null,
      business:null,
      name:null,
      address:null
    }
  },
  methods: {
    signup(){
      if(this.alias && this.email && this.password&&this.address&&this.phone&&this.business&&this.name){
        this.feedback = null
        this.slug = slugify(this.alias, {
          replacement: '_',
          lower: true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if(doc.exists){
            this.feedback = 'This alias already exists'
          } else {
          // this alias does not yet exists in the db
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              ref.set({
                alias: this.alias,
                name: this.name,
                user_id: cred.user.uid,
                phone:this.phone,
                business:this.business,
                address:this.address,
                email:this.email
              })
            }).then(() => {
              this.$router.push({ name: 'home' })
            })
            .catch(err => {
              this.feedback = err.message
            })
          }
        })
      } else {
        this.feedback = 'Please fill in all fields'
      }
    }
  }
}
</script>
<style>
.signup{
  max-width: 400px;
  margin-top: 60px;
}
.signup h2{
  font-size: 2.4em;
}
.signup .field{
  margin-bottom: 16px;
}
</style>