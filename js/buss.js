'use strict';
const names = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
let firstIndex ;
let secondIndex ;
let thirdIndex ;



function BussMall(name) {

  this.name = name;
  this.imgPath = `images/${name}` ;
  this.showTimes = 0;
  this.votes = 0;


  BussMall.all.push(this);
}
BussMall.all = [];


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


for (let i = 0 ; i< names.length ; i ++ )
{
  new BussMall (names[i]);
}
console.log(BussMall.all);

// console.table(BussMall.all);
let section = document.getElementById('img-sec');
let firstImage = document.getElementById('first-img');
let middle = document.getElementById('midd-img');
let third=document.getElementById('third-img');

function render(){

  firstIndex=getRandomIntInclusive(0,names.length);

  firstImage.src= BussMall.all[firstIndex].imgPath;
  firstImage.title= BussMall.all[firstIndex].name;
  firstImage.alt= BussMall.all [firstIndex].name;


  secondIndex = getRandomIntInclusive(0,names.length);

  middle.src= BussMall.all[secondIndex].imgPath;
  middle.alt=BussMall.all[secondIndex].name;
  middle.title=BussMall.all[secondIndex].name;



  thirdIndex = getRandomIntInclusive(0,names.length);

  third.src= BussMall.all[thirdIndex].imgPath;
  third.alt=BussMall.all[thirdIndex].name;
  third.title=BussMall.all[thirdIndex].name;


  section.addEventListener('click' , votesClick);

  function votesClick (e)
  {



    if (e.target.id !== 'img-secs')
    {

      if(e.target.id === 'first-img')
      {

        BussMall.all[firstIndex].votes++ ;

      }

      else if ( e.target.id === 'midd-img')
      {
        BussMall.all[secondIndex].votes++;
      }

      else {
        BussMall.all[thirdIndex].votes++;
      }


    }




    console.table(BussMall.all);



  }






}


render();





