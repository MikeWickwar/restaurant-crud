module.exports = {

  filledIn : function (checking) {
    if(checking){
      return
    }else{
      return {errors: ["Please fill in the form"]}
    }
  }

}
