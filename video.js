function officer () {
    var given = function () { return "Reginald"; };
    
    return rank() + " " + given() + " Thistleton";
    
    function rank () { return "Captain"; }
  }
  
  officer()
    //=> 'Captain Reginald Thistleton'