let nav = document.getElementById("navmenu"); 

let stripes = document.getElementById("stripes");
         
function show()
{  
  nav.classList.toggle("active"); 
  
}  
stripes.addEventListener("click", show);

           
let switchThing = document.getElementsByTagName("input")[0];  

function darkAndLight()
{  
  let allDivs = document.getElementsByTagName("div");
  let num;
            
  if (switchThing.checked) 
  {
    num = 2;
    
    for(let i = 0; i < allDivs.length; i++)
    {
       if(allDivs[i].className == "mainContent" + num)
       {
         allDivs[i].style.backgroundColor = "black";
         allDivs[i].style.color = "white";
         allDivs[i].style.transition = "all 1s";
         num++;
       }                 
     }
    
    } else { 
       num = 2;  
       
       for(let j = 0; j < allDivs.length; j++)
       {          
          if(allDivs[j].className == "mainContent" + num)
          {        
            allDivs[j].style.backgroundColor = "#eeefea";
            allDivs[j].style.color = "black";
            allDivs[j].style.transition = "all 1s";
            num++;
          
          }
       } 
    } 
}
switchThing.addEventListener("click", darkAndLight);


let btnUp = document.createElement("button");
btnUp.innerHTML = `<i class="fa fa-arrow-up"></i>`;
btnUp.setAttribute("id", "scrollUp");
btnUp.setAttribute("class", "scrollbtn");
btnUp.style.cursor = "pointer";

document.getElementsByTagName("body")[0].appendChild(btnUp); 

let scrollBtnAppearance = document.getElementById("scrollUp");

function scrollButtonAppear()
{
  window.onscroll = function() 
  { 
    if(nav.className == "nav active" && window.innerWidth < 1055)  // toto je podmínka pro mobilní verzi a zároveň záplata na bug, kdy na PC se zazoomuje na mobilní verzi, klikne na menu(burger ikonu) a odzoomuje se zpět na PC verzi- scroll button se totiž objevoval dřív, když se kliklo na menu, protože se veškerý obsah posunul dolů.
    {                                                              
      if((window.pageYOffset/2) < 680)                             // já ale chci, aby se objevovalo na velmi podobném místě, co bez menu, proto je číslo nastaveno na 680 (na stránce jsme tedy v nižší části) 
      {    
        scrollBtnAppearance.style.display = "none";

      } else {
     
        scrollBtnAppearance.style.display = "block";
  
      }
    } else {
      
       if((window.pageYOffset/2) < 500)
      {   
       scrollBtnAppearance.style.display = "none";

      } else {
     
        scrollBtnAppearance.style.display = "block";
  
      }
      
    }
  } 
}

scrollButtonAppear();
 
function goUp()                                          
{
  window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  
}
btnUp.addEventListener("click", goUp); 

function references()
{
  let btnNext = document.getElementById("next"); 
  let btnPrev = document.getElementById("prev"); 
  let referenceTexts = document.getElementsByClassName("reference");  
  let refContainer = document.getElementsByClassName("referenceContainer")[0];
  let automaticSlideShow;
  let timeSavedOnClick = 0;
      
  let indexOfCurrentText = 0;    
     
  for(let k = 1; k < referenceTexts.length; k++)
  {
      referenceTexts[k].style.display = "none";  
      
  } 
                         
  function next()
  {          
    referenceTexts[indexOfCurrentText].style.animation = "1.3s hideElementFromCenterToLeft"; 
   
    setTimeout(function() {
      referenceTexts[indexOfCurrentText].style.display = "none"; 
      
      indexOfCurrentText++; 
    
      if(indexOfCurrentText >= referenceTexts.length)
      {
        indexOfCurrentText = 0;
             
      } 
           
      referenceTexts[indexOfCurrentText].style.display = "block"; 
      referenceTexts[indexOfCurrentText].style.animation = "1.1s showElementFromLeftToRight";  
     
    }, 850);  
    
        
  }
          
  function prev()
  {    
    referenceTexts[indexOfCurrentText].style.animation = "1.3s hideElementFromCenterToRight";
    
    setTimeout(function() {
      referenceTexts[indexOfCurrentText].style.display = "none"; 
             
      indexOfCurrentText--; 
  
      if(indexOfCurrentText < 0)
      {
        indexOfCurrentText = referenceTexts.length-1;
             
      }
           
      referenceTexts[indexOfCurrentText].style.display = "block"; 
      referenceTexts[indexOfCurrentText].style.animation = "1.1s showElementFromRightToLeft";
      
    }, 850);        
    
  } 
                                           
  function saveTime() {
    timeSavedOnClick = new Date().getTime(); 
  }  
   
  function startAutomaticSlideShow() 
  {    
    automaticSlideShow = setInterval(function() {
       if(new Date().getTime() - timeSavedOnClick > 12000)
       {       
          next();
                   
       }      

    }, 7000);
    
  } 
    
  btnNext.addEventListener("click", next);
  btnNext.addEventListener("click", saveTime);    
  btnPrev.addEventListener("click", prev);
  btnPrev.addEventListener("click", saveTime);    

  startAutomaticSlideShow();
   
   
   /* --- tento kód je alternativa k automatice, co je teď. Tahle akorát dělá to, že když se myší najede buď na tlačítka nebo okolo textu, automatika se zastaví. Když se naopak s myší posuneme jinam, automatika se zase spustí ---
      --- nefunguje ale na mobily- řeším tady jen myš. Pro aplikaci tohoto: smazat všude timeSavedOnClick a funkci startAutomaticSlideShow + to pod tímto textem odkomentovat ---
      
   function startAutomaticSlideShow() 
  {
    automaticSlideShow = setInterval(function() {
       next();

    }, 8000);
    
  } 
    
  function stopAutomaticSlideShow() 
  { 
    clearInterval(automaticSlideShow);
 
  }  

  btnNext.addEventListener("click", next);  
  btnPrev.addEventListener("click", prev);  
  
  btnNext.addEventListener("mouseleave", startAutomaticSlideShow);
  btnNext.addEventListener("mouseenter", stopAutomaticSlideShow);
  btnPrev.addEventListener("mouseleave", startAutomaticSlideShow);
  btnPrev.addEventListener("mouseenter", stopAutomaticSlideShow);  
  refContainer.addEventListener("mouseleave", startAutomaticSlideShow);
  refContainer.addEventListener("mouseenter", stopAutomaticSlideShow);*/ 
  
     
}

references();