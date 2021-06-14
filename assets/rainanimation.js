var makeItRain = function() {
    //clear out everything
    $('.rain').empty();
  
    var increment = 0;
    var drops = "";
    var backDrops = "";
  
    while (increment < 93) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (2 - 2 + 1) + 2));
      //increment
      increment += (Math.floor(Math.random() * (28 - 1 + 1) + 1));
      if(increment > 100){
        increment = 98; 
      }
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; top: ' + (randoFiver - 200) + 'px; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.' + randoHundo + 's;"></div></div>';
      // backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.8' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div>';
    }
  
    $('.rain.front-row').append(drops);
    // $('.rain.back-row').append(backDrops);


  }

makeItRain();