document.addEventListener('DOMContentLoaded',function () {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");



  var raw = JSON.stringify({
    "db_string": "postgres://tobi:zhSMteRUE0M0vnFzvPjSZvSjw0CCwhcc@dpg-chn3fam7avj3o316dqv0-a.oregon-postgres.render.com/trofy",
    "db_type": "sql",
    "nameOfDb": "postgresql",
    "groupTable": "auctions_category",
    "itemTable": "auctions_listing",
    "dbName": "TrofyDB",
    "foreignKey": "Category_id",
    "primaryKey": "id"
  });

  /* ROUTE 1 FETCH API KEY */
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://trofy.onrender.com/api/getAPIKey", requestOptions)
    .then(response => response.json())
    .then(result => {
      const api_key =Object.values(result)[0];
      console.log(api_key)

      /*ROUTE 2 GET DATABASE DETAILS */
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
        'api_key':api_key
        }

      };
      
      fetch(`https://trofy.onrender.com/api/connectionData?api_key={{api_key}}`, requestOptions)
        .then(response => response.json())
        .then(result => {          
          console.log(result)                   
        })
        .catch(error => console.log('error', error));


      /* ROUTE 3 UPDATE DB DETAILS */
      var myHeaders = new Headers();
      myHeaders.append("api_key", api_key);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "db_string": "mongodb+srv://wurafadaka:2KnhrZmyt77LWfHP@wurafadaka.9vc2yie.mongodb.net/?retryWrites=true&w=majority",
        "db_type": "nosql",
        "nameOfDb": "Mongodb",
        "col_table_name": "products",
        "dbName": "FADAKA"          });

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://trofy.onrender.com/api/connectionData", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
        })
        .catch(error => console.log('error', error)); 

      /* ROUTE 4 VIEW GROUP DATA  */
      var myHeaders = new Headers();
      myHeaders.append("api_key", api_key);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://trofy.onrender.com/api/fetchGroups", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


      /* ROUTE 5 UPLOAD USER PREFERENCE */
      var myHeaders = new Headers();
      myHeaders.append("api_key", api_key);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "user_id": "64139dd9100ce68debb24d5d",
        "preference_list": [
          {
            "pref_rating": 3,
            "item_pref_list": [
              "6435293a4a720b3c1f3ad0b2"
            ]
          }
        ]
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://trofy.onrender.com/api/getUserPreference", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


      /* ROUTE 6 RETRIEVE USER PRODUCTS BASED ON PREFERENCE  */
      var myHeaders = new Headers();
      myHeaders.append("api_key", api_key);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://trofy.onrender.com/api/getUserPreference?user=64139dd9100ce68debb24d5d&pref_rating=3", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      })
    .catch(error => console.log('error', error));



})

