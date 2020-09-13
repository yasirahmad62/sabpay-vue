<template>
      <div class="container">
      <div class="row">
    <div class="col s12 m6">
      <div class="card pink darken-1 z-depth-3">
        <div class="card-content white-text">
          <span class="card-title">Total Sales</span>
          <p id="total"></p>
          
        </div>
      </div>
    </div>

    <div class="col s12 m6">
      <div class="card yellow darken-1 z-depth-3">
        <div class="card-content white-text">
          <span class="card-title">Today's Sales</span>
          <p id="todays"></p>
        </div>
    
      </div>
    </div>
    <div  class="col s12 m6">
      <div class="card blue darken-1 z-depth-3">
        <div class="card-content white-text">
          <span class="card-title">SabPay Percentage</span>
          <p id="percent"></p>
        </div>
    </div>
    </div>
  </div>
  
  <table id = "txn_table" class="highlight centered">
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Status</th>

          </tr>
        </thead>

        <tbody>

        </tbody>
      </table>
  
  </div>
  </div>
  
    
</template>
<script>
import firebase from 'firebase'
import db from '@/firebase/init'
import moment from 'moment'
export default {
  name:'home',
    data(){
        return{
          profile: null,
          item:null,
          user:null
          
        }
    },
    created(){
    console.log("Running query....")
    db.collection("transactions").where("user.alias", "==", 'ahmad').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
        var txn = doc.data()
      
        var time = Date.now()
        console.log(time)
        console.log(txn.item.name);
        // $('#item_name').text(txn.item.name);
        
        var table_data = `<tr><td>${txn.item.customer}</td><td>${txn.item.namei}</td><td>${txn.total_price}</td><td>${txn.quantity}</td><td>${(moment(txn.item.timestamp).format('LL'))}</td><td>${txn.status}</td></tr>`;
        $('#txn_table').append(table_data);
         $('#total').text(txn.user.totalsale);
        $('#todays').text(txn.user.todays);
        $('#percent').text(txn.user.percent);
        
    });
    });
    
    }
}
// console.log("Adding txn");
//     var txn_data = '{\n' +
//         '    "user": {\n' +
//         '      "address": "Japan",\n' +
//         '      "alias": "ahmad",\n' +
//         '      "business": "Hotel",\n' +
//         '      "name": "Ahmad Yasir",\n' +
//         '      "phone": "8840285952",\n' +
//         '      "user_id": "yFUDWQYiSza15ZDXXZ8vCuY9i5d2"\n' +
//         '    },\n' +
//         '    "item": {\n' +
//         '      "customer": "Ramesh",\n' +
//         '      "namei": "Choclate",\n' +
//         '      "price": 50\n' +
//         '    },\n' +
//         '    "quantity": 3,\n' +
        
//         '    "total_price": 75,\n' +
//         '    "status": "Pending",\n' +
//         '    "created_at": "1598370709781",\n' +
//         '    "updated_at": "test"\n' +
//         '  }';
//     txn_data = JSON.parse(txn_data)
//     // consp
//     console.log(txn_data);
//     db.collection("transactions").add(txn_data)
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
</script>

<style>

</style>