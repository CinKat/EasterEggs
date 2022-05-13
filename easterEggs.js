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
    return setInterval(animation, 500);
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
      default:
        console.log("Not found game");
    }
  }


  loader.load(nameGame, ...arg);
  return loader;
}

function Clock() {
  console.log("Clock: 16:25")
}


//let clock = new EasterEggs("clock");