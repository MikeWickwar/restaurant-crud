var indRestRevArray = [];

// function getStars(rating) {
//   var stars = [];
//   while (rating--){
//     stars.push('i.star.fa.fa-star')
//     return stars
//   }
// }
module.exports = {

  //FUTURE ME START HERE WITH ADMIN PAGE GET REst rating passed in from r sorter to not be undefined.
  //nmutas video was dope watch it again.

 rSorter : function (package){
   var restResultPack = [];
   var titlArr = [];
   var ratingArr = [];
   console.log('here sortin');
    package.forEach(function(rest){
      console.log(rest.title +"************** " +rest.id);
        restResultPack.push(rest.title, rest.rating);
    })
    console.log("/,,/");
    return restResultPack
},

  idSort : function (package) {
    var idArr = [];
    package.forEach(function(rest){
      idArr.push(rest.id)
    })
    console.log(idArr);
    return idArr
  },

  revSorter : function (totalRevArr, id) {
    console.log(id);
    console.log('***********************');
    console.log(totalRevArr);

    },


  reviewArr : function (restId, totalRevArr) {
    console.log(restId);
    console.log('***********************');
    console.log(totalRevArr[0]);
      for(dinner in totalRevArr){
        if (restId === dinner.id) {
          indRestRevArray.push('bawls')
        }
      }
      console.log(indRestRevArray);
    },
      // totalRevArr.forEach(function(){
        // if (restId === totalRevArr.id){
        //   indRestRevArray.push('bawls')
        // }

  empSorter : function (totalEmpArr, restId){
    var empArr = [];
    console.log("sortin emp"+totalEmpArr+"bbbbbbbb"+restId);
    totalEmpArr.forEach(function (employee) {
      console.log(employee);
      if(restId === employee.rest_id ){
        empArr.pusj('employee')
      }
    })
    console.log(empArr+"^@^^@^^@^@^@^@^@^^@^@^^@^@@^");
    return empArr
  },

  indiRestSorter : function (restaurantsArr, id) {
    var thisRest;
    console.log(restaurantsArr + id +"*****&*&*&*&*&*&");
    restaurantsArr.forEach(function (rest) {
      console.log(rest.id+id+"TDTDTDTDTDTDTDTDTD");
      if (rest.id ==  id){
        console.log(rest.id+"PSPSPAOKASDPOKAS  ");
          thisRest = rest
      }
    })
    return thisRest
    }
  }




// var restResultPack = []
// module.exports = {
//  rSorter : function (package){
//   console.log('here sortin');
//   for (var i = 0; i < package.length; i++) {
//     console.log(i);
//     var curRest = package[i].title;
//     if (i === 0) {
//       console.log("*******" + package[i].title);
//       restResultPack.push(package[i].title)
//     }else{
//     for (var i = 0; i < package.length; i++) {
//       console.log(curRest);
//       console.log(package[i].title);
//       if (package[i].title != curRest){
//         restResultPack.push(package[i].title)
//       }
//     }
//   }
//     console.log(restResultPack);
//   }
// },
//   eSorter : function (restaurantsArr, package){
//     console.log("sortin emp");
//   }
// }
