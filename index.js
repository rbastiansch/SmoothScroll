let verify = true;
const middleValue = 0;
const speedIncrement = 0.2;

const goDown = topPos => {
  const rockBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let speed = 2;
  const middleValue = scrollY + ((topPos - scrollY) / 2);

  const scroll = setInterval(() => { 
    speed = scrollY < middleValue ? speed + speedIncrement
    : scrollY > middleValue && speed > 1 ? speed - speedIncrement
    : speed;

    window.scroll(0, scrollY + Math.round(speed));
    verify = scrollY >= topPos || scrollY === rockBottom ? true : false;
    verify ? clearInterval(scroll) : null;
  }, 1);  
}

const goUp = topPos => {
  let speed = 2;            
  const middleValue = scrollY + ((topPos - scrollY) / 2);

  const scroll = setInterval(() => {
    speed = scrollY < middleValue && speed > 1 ? speed - speedIncrement
    : scrollY > middleValue ? speed + speedIncrement
    : speed;

    window.scroll(0, scrollY - Math.round(speed));
    verify = scrollY <= topPos || scrollY === 0 ? true : false;
    verify ? clearInterval(scroll) : null;
  }, 1);
}

const scrolling = element => {
  const topPos = document.getElementById(element).offsetTop - 80;
  const scrollingDirection = () => {
    topPos > scrollY ? goDown(topPos) : null;
    topPos < scrollY ? goUp(topPos) : null;
    return false;
  }
  verify = verify ? scrollingDirection() : verify;
}