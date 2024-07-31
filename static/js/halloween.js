// set up canvas
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const draw = () => {
  // clear and set
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#FF0000";

  let ystart = height/2;
  let frequency = Math.random();

  for (let t = 1.0; t < 1300; t += 0.004) {
    j = 10000 * Math.sin(2.0 * Math.PI * (frequency * t))
    ctx.fillRect(
        t, 
      ystart + j,
      1, 
      1)
    frequency += 0.01;
    }
}

setInterval(draw, 20);
window.addEventListener("resize", () => location.reload());
