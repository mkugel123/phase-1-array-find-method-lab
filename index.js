
 function superbowlWin(array) {
    const winningSeason = array.find(function (array) {
      return array.result === "W"
    })
    if(winningSeason){
     return winningSeason.year;
    }
  }