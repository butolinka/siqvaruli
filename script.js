const items=document.querySelectorAll(".item");
items.forEach(item=>{
    item.addEventListener("click", ()=>{
        removeFocus();
        item.classList.add('selected');
    })
})
removeFocus=()=>{
    items.forEach(item=>{
        item.classList.remove('selected');
    })
}

function independenceGeorgia(){
    const indepGeorgia = new Date ('May 26, 2022 18:00');
    
    const now = new Date();
    const diff = indepGeorgia-now;
     
    const msInSecond=1000;
    const msInMinute=60*1000;
    const msInHour=60*60*1000;
    const msInDay=24*60*60*1000;
    const DisplayDay=Math.floor(diff/msInDay);
    document.querySelector('#georgiad').textContent=DisplayDay;
    const DisplayHour=Math.floor((diff%msInDay)/msInHour);
    document.querySelector('#georgiah').textContent=DisplayHour;
    const DisplayMinutes=Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('#georgiam').textContent=DisplayMinutes;
    const DisplaySeconds=Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('#georgias').textContent=DisplaySeconds;

    if (diff<=0){
        document.querySelector('#georgiad').textContent=0;
        document.querySelector('#georgiah').textContent=0;
        document.querySelector('#georgiam').textContent=0;
        document.querySelector('#georgias').textContent=0;
        clearInterval(timer);

        hereIsIndependenceGeorgia();
    }
}
let timer=setInterval( independenceGeorgia, 1000);

function hereIsIndependenceGeorgia(){
    const selebrateGID= document.querySelector('#happyGID');
    selebrateGID.textContent="Happy Georgia Independance day! 05/26/2022"
}

function summer(){
    const summertime = new Date ('June 03, 2022 18:00');
    
    const now = new Date();
    const diff = summertime-now;
     
    const msInSecond=1000;
    const msInMinute=60*1000;
    const msInHour=60*60*1000;
    const msInDay=24*60*60*1000;
    const DisplayDay=Math.floor(diff/msInDay);
    document.querySelector('#summerd').textContent=DisplayDay;
    const DisplayHour=Math.floor((diff%msInDay)/msInHour);
    document.querySelector('#summerh').textContent=DisplayHour;
    const DisplayMinutes=Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('#summerm').textContent=DisplayMinutes;
    const DisplaySeconds=Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('#summers').textContent=DisplaySeconds;

    if (diff<=0){
        document.querySelector('#summerd').textContent=0;
        document.querySelector('#summerh').textContent=0;
        document.querySelector('#summerm').textContent=0;
        document.querySelector('#summers').textContent=0;
        clearInterval(timerSummer);

        hereIsSummer();
    }
}
let timerSummer=setInterval( summer, 1000);

function hereIsSummer(){
    const selebrateS= document.querySelector('#happyS');
    selebrateS.textContent="Here is summer! Enjoy! 06/03/2022"
}

function independanceDay(){
    const indepDay = new Date ('July 04, 2022 18:00');
    
    const now = new Date();
    const diff = indepDay-now;
     
    const msInSecond=1000;
    const msInMinute=60*1000;
    const msInHour=60*60*1000;
    const msInDay=24*60*60*1000;
    const DisplayDay=Math.floor(diff/msInDay);
    document.querySelector('#indepd').textContent=DisplayDay;
    const DisplayHour=Math.floor((diff%msInDay)/msInHour);
    document.querySelector('#indeph').textContent=DisplayHour;
    const DisplayMinutes=Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('#indepm').textContent=DisplayMinutes;
    const DisplaySeconds=Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('#indeps').textContent=DisplaySeconds;

    if (diff<=0){
        document.querySelector('#indepd').textContent=0;
        document.querySelector('#indeph').textContent=0;
        document.querySelector('#indepm').textContent=0;
        document.querySelector('#indeps').textContent=0;
        clearInterval(timerIndep);

        hereIsIndependanceDay();
    }
}
let timerIndep=setInterval( independanceDay, 1000);

function hereIsIndependanceDay(){
    const selebrateID= document.querySelector('#happyID');
    selebrateID.textContent="Happy Independance Day! 07/04/2022"
}

gsap.from('h1',{
    duration:2, opacity:0
})
gsap.from(".description",{
    duration:2, opacity:0
})

gsap.from('a',{
    duration:1.5, x:-200, stagger:0.5, delay:0.5, opacity:0
})

gsap.from('.item',{
    duration:1.5, x:-200, stagger:0.5, delay:0.5, opacity:0
})

gsap.from('.bookAnim',{
    duration:2, y:-200, stagger:0.5, delay:0.5, opacity:0
})

gsap.from('.picture',{ scale:0.1, duration:2})