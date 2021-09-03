var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  const button = new five.Button(2);
  const led_red = new five.Led(11);
  const led_green = new five.Led(10);
  led_red.on();
  led_green.off();

  var l = new five.LCD({
      controller: "PCF8574T"
  });

  l.useChar("heart");
  l.cursor(0, 0).print("hello tiktok :heart:");

  button.on("down", function() {
    changeText(true, led_red, led_green, l);
  });

  button.on("up", function() {
    changeText(false, led_red, led_green, l);
  });

});

function changeText(state, red, green, lcd){
  if(state){
    red.off();
    green.on();
    lcd.clear();
    lcd.cursor(0, 0).print("follow me");
    lcd.cursor(1, 0).print("for more :)");
  }else{
    red.on();
    green.off();
    lcd.clear();
    lcd.cursor(0, 0).print("hello :heart:");
  }
}
