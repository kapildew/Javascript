const hearts = [];

function generateHeart(x, y, scale) {
  const heart = document.createElement("div");
  heart.setAttribute("class", "heart");
  document.body.appendChild(heart);
  heart.time = 6000;
  heart.x = x;
  heart.y = y;
  heart.scale = scale;
  heart.style.left = heart.x + "px";
  heart.style.top = heart.y + "px";
  heart.style.transform = "scale(" + scale + "," + scale + ")";
  hearts.push(heart);
  return heart;
}

function update() {
  for (let i = 0; i < hearts.length; i++) {
    const heart = hearts[i];
    heart.time -= 50;
    if (heart.time > 0) {
      heart.y -= 0.5;
      heart.style.left =
        heart.x + Math.sin((heart.y * heart.scale) / 30) + "px";
      heart.style.top = heart.y + "px";
    } else {
      heart.parentNode.removeChild(heart);
      hearts.splice(i, 1);
      i--;
    }
  }
}

document.onmousemove = (e) => {
  const heart = generateHeart(e.pageX, e.pageY, Math.random() * 0.8 + 0.2);
  heart.time = 6000;
  const text = document.createElement("div");
  text.setAttribute("class", "text");
  text.textContent = "I love you Priya";
  heart.appendChild(text);
};

setInterval(update, 50);
