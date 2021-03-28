'use strict';
const names = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
let firstIndex ;
let secondIndex ;
let thirdIndex ;
let trials = 0;
let rnd=[];

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

names.forEach(num => {
  rnd.push(getRandomIntInclusive(0,num.length-1));
});


console.log(rnd);




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

  firstIndex=getRandomIntInclusive(0,BussMall.all.length -1);
  console.log(firstIndex);

  firstImage.src= BussMall.all[firstIndex].imgPath;
  firstImage.title= BussMall.all[firstIndex].name;
  firstImage.alt= BussMall.all [firstIndex].name;





  secondIndex = getRandomIntInclusive(0,BussMall.all.length-1);

  middle.src= BussMall.all[secondIndex].imgPath;
  middle.alt=BussMall.all[secondIndex].name;
  middle.title=BussMall.all[secondIndex].name;



  thirdIndex = getRandomIntInclusive(0,BussMall.all.length-1);

  third.src= BussMall.all[thirdIndex].imgPath;
  third.alt=BussMall.all[thirdIndex].name;
  third.title=BussMall.all[thirdIndex].name;

  if (firstIndex=== secondIndex || firstIndex=== thirdIndex)
  {
    firstIndex+=1;
    if (firstIndex >names.length-1)
    {
      firstIndex -=3;
    }
    if (secondIndex=== thirdIndex || secondIndex === firstIndex)

      secondIndex +=2;
    if (secondIndex>names.length-1)
    { secondIndex-=4;}
  }
  if (thirdIndex=== firstIndex || thirdIndex === secondIndex)
  {
    thirdIndex +=3;
    if (thirdIndex>names.length-1)
    {
      thirdIndex-=1 ;
    }
  }



  section.addEventListener('click' , votesClick);

  function votesClick (e)
  {

    e.preventDefault();

    if (e.target.id !== 'img-secs')
    {

      if(e.target.id === 'first-img')
      {

        BussMall.all[firstIndex].votes++ ;
        trials++;

      }

      else if ( e.target.id === 'midd-img')
      {
        BussMall.all[secondIndex].votes++;
        trials++;
      }

      else {
        BussMall.all[thirdIndex].votes++;
        trials++;
      }


    }



    if (trials===25)
    {
      alert('you have finished the trials');
    }


    console.table(BussMall.all);

    let div = document.querySelector('.result');
    let heading = document.createElement('h1');
    div.append(heading);
    heading.textContent=('the results of voting gonna be ');
    let results=document.createElement('h2');
    heading.append(results);
    results.textContent= (` the photo that has highest voting reached ${BussMall.name} and  ${BussMall.votes}`);


  }






}

render();





