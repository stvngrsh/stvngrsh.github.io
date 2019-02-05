import "./style.scss";

const main = document.getElementById("main");
const container = document.getElementById("container");
const card = document.getElementById("card");

const mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
  },
  show: function() {
    return "(" + this.x + ", " + this.y + ")";
  }
};

mouse.setOrigin(container);

const updateCard = event => {
  mouse.updatePosition(event);
  updateTransformStyle(
    ((mouse.y / card.offsetHeight) * 30).toFixed(2),
    ((mouse.x / card.offsetWidth) * 30).toFixed(2)
  );
};

const updateMain = event => {
  mouse.updatePosition(event);
  updateTransformStyle(
    ((mouse.y / main.offsetHeight) * 200).toFixed(2),
    ((mouse.x / main.offsetWidth) * 200).toFixed(2)
  );
};

const updateTransformStyle = (x, y) => {
  let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  card.style.transform = style;
  card.style.webkitTransform = style;
  card.style.mozTransform = style;
  card.style.msTransform = style;
  card.style.oTransform = style;
};

let timeout = null;
let drag = false;

const handleMouseEnter = event => {
  if (!drag) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      card.className = "";
    }, 500);
    updateCard(event);
  }
};

const handleMouseLeave = event => {
  if (!drag) {
    card.className = "smooth";
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      card.style = "";
    }, 10);
  }
};

const handleMouseMoveHover = event => {
  event.preventDefault();
  updateCard(event);
};
const handleMouseMoveDrag = event => {
  updateMain(event);
};

const handleMouseDown = event => {
  drag = true;
  container.className = "dragging";
  container.onmousemove = undefined;
  main.onmousemove = handleMouseMoveDrag;
};

const handleMouseUp = event => {
  drag = false;
  container.className = "";
  container.onmousemove = handleMouseMoveHover;
  main.onmousemove = undefined;
  handleMouseLeave(event);
};

container.onmouseenter = handleMouseEnter;
container.onmouseleave = handleMouseLeave;
container.onmousemove = handleMouseMoveHover;
container.onmousedown = handleMouseDown;
main.onmouseup = handleMouseUp;
