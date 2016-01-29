function Script2()
{
  var delay = ( function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

delay(function(){
  var player=GetPlayer();
  var myVar=player.GetVar("10secs");
  var myVar2=player.GetVar("secs");
  var myVar3=player.GetVar("mins");
  var myVar4=player.GetVar("10mins");
  var myVar5=player.GetVar("hours");

  if (myVar == 9) {
    myVar = 0;
    ++myVar2;
  }
  else if (myVar2 == 6) {
    myVar2 = 0;
    ++myVar3;
    ++myVar;
  }
  else if (myVar3 == 9) {
    myVar3 = 0;
    ++myVar4;
    ++myVar;
  }
  else if (myVar4 == 6) {
    myVar4 = 0;
    ++myVar5;
    ++myVar;
  }
  else if (myVar5 == 23) {
    myVar5 = 0;
    ++myVar;
  }
  else {    myVar++;   }

  player.SetVar("10secs",myVar);
  player.SetVar("secs",myVar2);
  player.SetVar("mins",myVar3);
  player.SetVar("10mins",myVar4);
  player.SetVar("hours",myVar5);

}, 100 ); // end delay
}
