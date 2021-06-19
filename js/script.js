// Vue
let vue = new Vue({
  el: "#field",
  data: {
    colorT: "red",
    sizeT: 10,
    proxod1: true,
    proxod2: false,
    proxod3l: false,
    proxod3r: false,
  },
  methods: {
    isMenu1: function () {
      this.proxod1 = !this.proxod1;
      this.proxod2 = !this.proxod2;
    },
    isMenu2l: function () {
      this.proxod2 = !this.proxod2;
      this.proxod3l = !this.proxod3l;
    },
    isMenu3r: function () {
      this.proxod2 = !this.proxod2;
      this.proxod3r = !this.proxod3r;
    },
    vuborColor: function (event) {
      switch (event.target.id) {
        case "red":
          this.colorT = "red";
          break;
        case "blue":
          this.colorT = "blue";
          break;
        case "yellow":
          this.colorT = "yellow";
          break;
        case "green":
          this.colorT = "green";
          break;
        case "violet":
          this.colorT = "violet";
          break;
        default:
          this.colorT = "red";
          break;
      }
      console.log(this.colorT);
      this.proxod1 = !this.proxod1;
      this.proxod3l = !this.proxod3l;
    },
    vuborSize: function (event) {
      switch (event.target.id) {
        case "r10":
          this.sizeT = 10;
          break;
        case "r15":
          this.sizeT = 15;
          break;
        case "r25":
          this.sizeT = 25;
          break;
        case "r35":
          this.sizeT = 35;
          break;
        case "r40":
          this.sizeT = 40;
          break;
        case "r50":
          this.sizeT = 50;
          break;
        default:
          this.sizeT = 10;
          break;
      }
      console.log(this.sizeT);
      this.proxod1 = !this.proxod1;
      this.proxod3r = !this.proxod3r;
    },
  },
});

// в переменные windowInnerWidth, windowInnerHeight
// записую ширину и высоту внутреннего размера
// окна области просмотра (вьюпорта)

let windowInnerWidth = window.innerWidth;
let windowInnerHeight = window.innerHeight;

// задаю размеры элементу "canvas"
let canvas = document.getElementById("canvas");
canvas.width = windowInnerWidth;
canvas.height = windowInnerHeight;

// создаем полотно контекст рендеринга 2D,
let ctx = canvas.getContext("2d");

var touchPosition = null; //Текущая позиция

//Перехватываем события
canvas.addEventListener("touchmove", function (event) {
  TouchMove(event);
});

//Движение пальцем по экрану
function TouchMove(event) {
  //Получаем новую позицию
  touchPosition = {
    x: event.changedTouches[0].clientX,
    y: event.changedTouches[0].clientY,
  };
  Draw(touchPosition.x, touchPosition.y);
}

//Рисуем точку текущей позиции
function Draw(x, y , diametr= vue.sizeT, color =vue.colorT) {
  // цвет размытия
  ctx.shadowColor = color;
  // радиус размытия
  ctx.shadowBlur = 15;
  // цвет круга
  ctx.fillStyle = color;
  // отрисовка круга
  ctx.beginPath();
  ctx.ellipse(x, y, diametr, diametr, Math.PI / 4, 0, 2 * Math.PI);
  ctx.fill();
}

