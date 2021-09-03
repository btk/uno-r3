const { Board, Led } = require("johnny-five");
const board = new Board();
const colors = ["00FF00", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];

board.on("ready", () => {
  const anode = new Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    },
    isAnode: true
  });

  anode.on();
  loopColor(anode, 0);
});

function loopColor(anode){
  let index = 0;
  board.loop(200, () => {
    anode.color(colors[index++]);
    if (index === colors.length) {
      index = 0;
    }
  });
}
