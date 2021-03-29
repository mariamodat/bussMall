'use strict';
const names = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
let firstIndex ;
let secondIndex ;
let thirdIndex ;
let trials = 0;
let rnd=[];
let viewsArr=[];
let votesArr=[]; 

function BussMall(name) {

  this.name = name;
  this.imgPath = `images/${name}` ;
  this.showTimes = 0;
  this.votes = 0;
  this.views = 0 ;


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
// console.log(BussMall.all);

console.table(BussMall.all);

let section = document.getElementById('img-sec');
let firstImage = document.getElementById('first-img');
let middle = document.getElementById('midd-img');
let third=document.getElementById('third-img');

function render(){

  firstIndex=getRandomIntInclusive(0,BussMall.all.length -1);
  // console.log(firstIndex);

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
}





  section.addEventListener('click' , votesClick);

  function votesClick (e)
  {

    // e.preventDefault();
    BussMall.all[firstIndex].views++ ;
    BussMall.all[secondIndex].views++ ;
    BussMall.all[thirdIndex].views++ ;



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
    if (trials <5 )
{
render();


}


  }

  render();



let btn = document.getElementById('res');
btn.addEventListener('click' , resultChart) ;

function resultChart (event) 
{

    // console.table(BussMall.all);

    let div = document.querySelector('.result');
    let ulElem = document.createElement('ul');
    div.append(ulElem);
    // ulElem.textContent=('the results of voting gonna be ');
    for (let j=0 ; j<BussMall.all.length ; j++)
    {

    let liElem =document.createElement('li');
    ulElem.append(liElem);
    liElem.textContent= (` ${BussMall.all[j].name} it has  ${BussMall.all[j].votes} Votes and ${BussMall.all[j].views} Views as well !`);
    }

     for (let i = 0; i < BussMall.all.length; i++) {
        votesArr.push(BussMall.all[i].votes);
        viewsArr.push(BussMall.all[i].views);

    // btn.removeEventListener('click', resultChart);
  }
}


render();

// console.log(names);
// console.log(votesArr);
// console.log(viewsArr);


function chartRender() {
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: names,
      datasets: [{
        label: 'Items Votes',
        backgroundColor: '#003049',
        borderColor: '#bc4b51',
        data: votesArr
      },
      {
        label: 'Items Views',
        backgroundColor: '#f95738',
        borderColor: '#aec3b0',
        data: viewsArr
      }]
    },

    // Configuration options go here
    options: {}
  });
}

chartRender();