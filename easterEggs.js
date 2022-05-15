function Loader() {
  let index = 0;
  let frames = ["|", "/", "-", "\\"];

  this.execute;
  this.callback;

  const animation = () => {
    console.clear();
    if (index === 4) index = 0;
    console.log(frames[index]);
    index++;

  }

  this.render = () => {
    return setInterval(animation, 300);
  }

  this.load = (name, ...arg) => {
    const interval = this.render();
    setTimeout(() => {
      clearInterval(interval);
      console.clear();
      this.execute = this.callback(name, ...arg);
    }, 3000);
  }
}

function EasterEggs(nameGame, ...arg) {
  const loader = new Loader();
  loader.callback = function (nameGame, ...arg) {
    switch (nameGame) {
      case "clock":
        return Clock();
      case "marquee":
        return Marquee(...arg);
      default:
        console.log("Not found game");

    }
  }


  loader.load(nameGame, ...arg);
  return loader;
}

function Clock() {
  let interval = setInterval(() => {
    const date = new Date();
    console.clear();
    let [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    console.log(`${hour}:${minutes}:${seconds}`);
  }, 1000)

  window.addEventListener("click", () => {
    clearInterval(interval);
    console.clear();
    console.log("Let's keep playing!");
  })

}

function Marquee(phrase, size) {
  phrase = phrase.split("");
  phrase.length = phrase.length + size
  let arr = [];

  for (let i = 0; i < size; i++) {
    arr.push(" ");
  }
  const interval = setInterval(() => {
    console.clear();
    arr.shift();
    arr.push(phrase.shift());
    console.log(arr.join(""));
    if (phrase.length === 0) {
      clearInterval(interval);
      console.clear();
    }
  }, 1000)
}

