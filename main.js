// dev 3

// setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let playerb = {
  x: 600,
  y: 250,
  r: 15,
  speed: 5,
  color: "blue",
};
let playero = {
  x: 350,
  y: 250,
  r: 50,
  speed: 5,
  color: "orange",
};

requestAnimationFrame(draw);
function draw() {
  // canvas background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // blue circle
  ctx.fillStyle = playerb.color;
  ctx.beginPath();
  ctx.arc(playerb.x, playerb.y, playerb.r, 0, 2 * Math.PI);
  ctx.fill();

  // orange circle
  ctx.fillStyle = playero.color;
  ctx.beginPath();
  ctx.arc(playero.x, playero.y, playero.r, 0, 2 * Math.PI);
  ctx.fill();

  document.addEventListener("mousemove", mousemove);

  function mousemove(e) {
    // mouse coordinates
    const mx = e.clientX - cnv.offsetLeft;
    const my = e.clientY - cnv.offsetTop;

    // moving blue circle
    playerb.x = mx;
    playerb.y = my;

    // blue circle distance
    ab = mx - playerb.x;
    bb = my - playerb.y;
    cb = Math.sqrt(ab * ab + bb * bb);

    // orange circle distance
    ao = mx - playero.x;
    bo = my - playero.y;
    co = Math.sqrt(ao * ao + bo * bo);
    if (cb + co < playerb.r + playero.r) {
      playero.x = Math.floor(Math.random() * 799) + 1;
      playero.y = Math.floor(Math.random() * 599) + 1;
    }
  }

  requestAnimationFrame(draw);
}
