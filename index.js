let verify = true;
const middleValue = 0;
const speedIncrement = 0.2;

function goDown(topPos){
  const rockBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let speed = 2;
  const middleValue = scrollY + ((topPos - scrollY) / 2);

  const scroll = setInterval(() => {  
    if(scrollY<middleValue){
      speed = speed + speedIncrement;
    }else if(scrollY>middleValue && speed > 1){
      speed = speed - speedIncrement;
    }

    window.scroll(0, scrollY + Math.round(speed));
    if(scrollY >= topPos || scrollY === rockBottom){
      verify = true;
      clearInterval(scroll);
    }
  }, 1);  
}

function goUp(topPos){
  let speed = 2;            
  const middleValue = scrollY + ((topPos - scrollY) / 2);

  const scroll = setInterval(() => {
    if(scrollY<middleValue && speed > 1){
      speed = speed - speedIncrement;
    }else if(scrollY>middleValue){
      speed = speed + speedIncrement;
    }

    window.scroll(0, scrollY - Math.round(speed));
    if(scrollY <= topPos  || scrollY === 0){
      verify = true;
      clearInterval(scroll);                
    }
  }, 1);
}

function scrolling(element){
  const topPos = document.getElementById(element).offsetTop - 80;
  if(topPos>scrollY && verify ){
    verify = false;
    goDown(topPos);
  }else if(topPos<scrollY && verify){
    verify = false;
    goUp(topPos);
  }
}