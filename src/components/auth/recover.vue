<template>
   <div class="login container">
    <form class="card-panel" @submit.prevent="recover">
      <h2 class="center deep-purple-text">Recover your password</h2>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email">
      </div>
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field center">
        <button class="btn deep-purple">Send</button>
      </div>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name:"Recover",
    data(){
        return{
            email:null,
            feedback:null
        }
    },
    methods:{
        recover(){
            var auth = firebase.auth();
            var emailAddress = (this.email);

            auth.sendPasswordResetEmail(emailAddress).then(function() {
                this.feedback= "Verification email sent!"
        }).catch(function(error) {
  // An error happened.
});
        }
    }
}
</script>
<style>
.login{
  max-width: 400px;
  margin-top: 60px;
}
.login h2{
  font-size: 2.4em;
}
.login .field{
  margin-bottom: 16px;
}
</style>