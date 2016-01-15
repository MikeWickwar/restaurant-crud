var restResultPack = []
module.exports = {
 rSorter : function (package){
  console.log('here sortin');
  for (var i = 0; i < package.length; i++) {
    console.log(i);
    var curRest = package[i].title;
    if (i === 0) {
      console.log("*******" + package[i].title);
      restResultPack.push(package[i++].title)
    }else{
    for (var i = 0; i < package.length; i++) {
      console.log(curRest);
      console.log(package[i].title);
      if (package[i].title != curRest){
        restResultPack.push(package[i].title)
      }
    }
  }
    console.log(restResultPack);
  }
},
  eSorter : function (restaurantsArr, package){
    console.log("sortin emp");
  }
}
