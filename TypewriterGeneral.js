let allHeadings = document.getElementsByTagName("h1");
let spanWhereAppearsChangingStrings = document.getElementById("txt");
let indexOFCurrentLetterFromText = 0;
let indexOfcurrentText = 0;                    
let deleteFromEnd = -20;
let timingFunction;
let changingStrings;

for(let l = 0; l < allHeadings.length; l++)
{
  if(allHeadings[l].innerHTML.indexOf("Welcome") != -1)
  {
    changingStrings = ["helping you with wedding.", "fulfilling your wedding dreams.", "creating unforgettable experiences."];
    break;
  
  } else {
    
    changingStrings = ["svatební poradenství.", "plnění Vašich svatebních přání.", "vytváření nezapomenutelných zážitků."];
  
  }
}  

setInterval(function() {
 
 if(indexOfcurrentText < changingStrings.length)
 {

    if(indexOFCurrentLetterFromText < changingStrings[indexOfcurrentText].length)
    {
       spanWhereAppearsChangingStrings.innerHTML += changingStrings[indexOfcurrentText][indexOFCurrentLetterFromText];
       indexOFCurrentLetterFromText++;

    }        
             
  if(indexOFCurrentLetterFromText >= changingStrings[indexOfcurrentText].length)
  {  
  animErase();
 
/* pokud člověk nechce efekty
  spanWhereAppearsChangingStrings.innerHTML += " ";
  indexOfcurrentText++;
  indexOFCurrentLetterFromText = 0; */
 
   }
                          
 }
 
 /* pokud člověk nechce efekty, tak tento if zakomentovat */

 if(indexOfcurrentText >= changingStrings.length)
 {  
   indexOfcurrentText = 0;
   indexOFCurrentLetterFromText = 0;
           
 }  
                 
}, 170)      

function animErase()
{
 clearInterval(timingFunction);
 
 timingFunction = setInterval(function() {
    spanWhereAppearsChangingStrings.innerHTML = changingStrings[indexOfcurrentText].substr(0, changingStrings[indexOfcurrentText].length-deleteFromEnd)
    deleteFromEnd++;

//mazání od předu. deleteFromEnd se ale musí všude nastavit na 0: .substr(deleteFromEnd, str[k].length);

 }, 50);
 
 if(spanWhereAppearsChangingStrings.innerHTML.length == 0)
 {
   clearInterval(timingFunction);
   indexOfcurrentText++;
   indexOFCurrentLetterFromText = 0;
   deleteFromEnd = -20;              
         
 }
 
}

function instaErase()
{  
 timingFunction = setTimeout(function() {
    spanWhereAppearsChangingStrings.innerHTML = "";
   
 }, 470);
 
 if(spanWhereAppearsChangingStrings.innerHTML.length == 0)
 {
 clearTimeout(timingFunction);
 indexOfcurrentText++;
 indexOFCurrentLetterFromText = 0;              
         
 }
}
