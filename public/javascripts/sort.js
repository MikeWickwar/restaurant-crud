var restResultPack = [];
var indRestRevArray = [];
module.exports = {

 rSorter : function (package){
  console.log('here sortin');
    package.forEach(function(rest){
      console.log(rest.title +"**************");
      for (var i = 0; i < package.length; i++) {
          if( i === rest.id){
            restResultPack.push(rest.title)
          }
      }
    })
    console.log(restResultPack);
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



  eSorter : function (restaurantsArr, package){
    console.log("sortin emp");
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
