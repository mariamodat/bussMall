  
  
  
  function  BussMall (name , imgPath , showTimes) {

this.name = name ;
this.imgPath = imgPath ;
this.showTimes=showTimes; 

BussMall.all.push (this);
  }
  BussMall.all=[];


  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  BussMall.prototype.imgRandom = 