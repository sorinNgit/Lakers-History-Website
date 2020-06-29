var myContainer = document.getElementById("cnt");
const buttonFact=document.querySelector(".button");
var i=0;
buttonFact.addEventListener("click",function(){
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET','http://localhost:3000/legend_facts');

ourRequest.onload=function(){
  var facts=JSON.parse(ourRequest.responseText);
  renderHTML(facts);
};
ourRequest.send();
});

function renderHTML(data){
  var htmlString= "";
  htmlString="<p id='text"+i+"'>"+data[i].fact+"</p>"

  myContainer.insertAdjacentHTML('beforeend',htmlString);
  i+=1;

}

function size_font(){
  let optionSize= document.getElementById("option-size"),
    text1=document.getElementById('text0');
    text2=document.getElementById('text1');
    text3=document.getElementById('text2');
    text4=document.getElementById('text3');
    text5=document.getElementById('text4');
    text6=document.getElementById('text5');
    text7=document.getElementById('text6');
    text1.style.fontSize=optionSize.value+'px';
    text2.style.fontSize=optionSize.value+'px';
    text3.style.fontSize=optionSize.value+'px';
    text4.style.fontSize=optionSize.value+'px';
    text5.style.fontSize=optionSize.value+'px';
    text6.style.fontSize=optionSize.value+'px';
    text7.style.fontSize=optionSize.value+'px';

}

function change_font(){
let optionFont=document.getElementById('option-font'),
  text1=document.getElementById('text0');
  text2=document.getElementById('text1');
  text3=document.getElementById('text2');
  text4=document.getElementById('text3');
  text5=document.getElementById('text4');
  text6=document.getElementById('text5');
  text7=document.getElementById('text6');
  text1.style.fontFamily=optionFont.value;
  text2.style.fontFamily=optionFont.value;
  text3.style.fontFamily=optionFont.value;
  text4.style.fontFamily=optionFont.value;
  text5.style.fontFamily=optionFont.value;
  text6.style.fontFamily=optionFont.value;
  text7.style.fontFamily=optionFont.value;
}

function deleteFact() {
    var id = document.getElementById("factid").value;
    $.ajax({
        url: 'http://localhost:3000/legend_facts/'+id,
        type: 'DELETE',
        success: function(data) {
            console.log(data);

        }
    })
}


function insertFact() {
    var fact2 = document.getElementById("fact1").value;
    var newFact = {
        fact: fact2,
    }
    $.ajax({
        url: 'http://localhost:3000/legend_facts/',
        type: 'POST',
        data: newFact,
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error);
        }
    });
}


function getFact(id) {
    $.ajax({
        url: 'http://localhost:3000/legend_facts?id=' + id,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            replaceFact(data[0])
        }
    });
}

function replaceFact(factz) {
    var newFact1 = document.getElementById("fact2").value;
    factz.fact=newFact1;
    $.ajax({
        url: 'http://localhost:3000/legend_facts/2',
        type: 'PUT',
        data: factz,
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error);
        }
    });
}



// random predict

$(document).ready(function() {

function getPredict() {
  var predicts=[{
  predict: "Lakers will be no. 1 seed.",
  }, {
    predict: "LeBron is going to be MVP.",
  }, {
    predict: "Kuzma is going to get traded this summer.",
  }, {
    predict: "Alex Caruso is going to be MVP.",
  }, {
    predict: "Lakers are going to be NBA Champions.",
  }, {
    predict: "Lakers are going to go 60-21.",
  }, {
    predict: "Lakers are going to defeat Clippers in the playoffs.",
  }, {
    predict: "James Harden is traded to Lakers this summer.",
  }, {
    predict: "Paul George is going to get traded to the Lakers this summer.",
  }, {
    predict: "Kyrie joins LeBron next season.",
  }, {
    predict: "Lakers are going to be champions 3 years in a row.",
  }, {
    predict: "Lakers are going to go 81-0 next season.",
  },  ];

    var len = predicts.length;
    var randomNumber = Math.floor(Math.random() * len);

    for (var i=0; i<=len; i++) {
      var newPredict = predicts[randomNumber].predict;
    }

    var predictContainer = $("#predictContainer");
    predictContainer.append('<p>' + newPredict + '</p>');
  }
    getPredict();


});


// countdown


// .getTime() pentru milisecunde

let launchDate = new Date("Jun 29, 2020 18:14:50").getTime();

//tick la fiecare secunda
let timer = setInterval(tick, 1000);

function tick () {

  let now = new Date().getTime();
  let t = launchDate - now;

  // Check if time is above 0
  if (t > 0) {

    // zile
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // 1=01
    if (days < 10) { days = "0" + days; }

    // ore
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    // minute
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    // secunde
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }


    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    document.querySelector('.countdown').innerText = time;
  }
}


// birthday

function birthday(){
  let date2 = document.getElementById("date1").value;
  console.log(date2);
  var date3=date2.split("#");
  let aux=date3[1];
  date3[1]=date3[0];
  date3[0]=aux;
  date3=date3.join("/");
  console.log(date3)
  let formattedDate = new Date(date3);
  console.log(formattedDate)


  let timer = setInterval(tick, 1000);

  function tick () {
    let now = new Date().getTime();
    let t = now-formattedDate;

    if (t > 0) {
      // ani
      let years = Math.floor(t / (1000 * 60 * 60 * 24 * 365));

      // zile
      let days = Math.floor(t % (1000 * 60 * 60 * 24 * 365)/(1000*60*60*24));
      // 1=01
      if (days < 10) { days = "0" + days; }

      // ore
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours < 10) { hours = "0" + hours; }

      // minute
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      if (mins < 10) { mins = "0" + mins; }

      // secunde
      let secs = Math.floor((t % (1000 * 60)) / 1000);
      if (secs < 10) { secs = "0" + secs; }

      let time = `${years} : ${days} : ${hours} : ${mins} : ${secs}`;

      document.querySelector('.countdown1').innerText = time;
    }
  }

}




// animatie

const canvas=document.getElementById('canvas');
const c=canvas.getContext('2d');
let drawing= new Image();
let drawing2= new Image();
drawing.src="https://upload.wikimedia.org/wikipedia/ro/thumb/1/1c/LA_Lakers_logo.svg/1024px-LA_Lakers_logo.svg.png";
drawing2.src="https://i.dlpng.com/static/png/6562931_preview.png";
//drawing.onload = function() {
   //c.drawImage(drawing,canvas.width/2,canvas.height/2);
//};
canvas.width=innerWidth;
canvas.height=innerHeight;

function randomInt(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


function Cerc(x,y,radius,color){
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.color=color;
  this.radians=Math.random()*Math.PI*2; // random pentru a nu avea toate mingiile in acelasi loc
  this.velocity=0.05; //viteza cu care se misca mingea
  this.distanceFromCenter={
    x: randomInt(50,120),
    y: randomInt(50,120)
  };

  this.update=() =>{
    c.drawImage(drawing,x-45,y-25,130,86); //logoul
    this.radians+=this.velocity;
    this.x= x+Math.cos(this.radians)*this.distanceFromCenter.x;
    this.y= y+Math.sin(this.radians)*this.distanceFromCenter.y;
    c.drawImage(drawing2,this.x,this.y,25,25); //mingea
    //this.draw();
  };

  this.draw=() => {
    c.beginPath();
    c.fill();
    c.closePath();
  };
  }

let puncte;
function init(){
  puncte=[];
  for(let i=0;i<10;i++){
    radius=(Math.random()*2)+1;
    puncte.push(new Cerc(canvas.width/2,canvas.height/2,radius,'purple'));
  }
  console.log(puncte);
}

function animate(){
  requestAnimationFrame(animate);
  c.fillStyle='rgba(255,255,255,0.2)'
  c.fillRect(0,0,canvas.width,canvas.height);

  puncte.forEach(punct => {
    punct.update();
  });
};

init();
animate();
//8.18
