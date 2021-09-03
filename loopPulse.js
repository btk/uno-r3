const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  // Create an Led on pin 13
  const led_red = new five.Led(6);
  loopPulse(led_red);
  // "blink" the led in 500ms on-off phase periods
  //led_red.blink(500);

  const led_blue = new five.Led(5);
  loopPulse(led_blue);
  // "blink" the led in 500ms on-off phase periods
  //led_blue.blink(1000);
  const led_yellow = new five.Led(3);
  loopPulse(led_yellow);
});


function loopPulse(led){
  led.fade(10, 1000);
  setTimeout(() => {
    led.fade(255, 1000);
    setTimeout(() => {
      loopPulse(led);
    }, 1000);
  }, 1000);
}
