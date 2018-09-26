//getting data from the firebase db
//snapshot is what will be recieved back when the db method is called
db.collection('cafes').get().then((snapshot) => {
  //console.log(snapshot.docs);

  //getting data with a foreach loop
    snapshot.docs.forEach(doc => {
    //use .data function to get every data stored in the document
    console.log(doc.data())
  })

})