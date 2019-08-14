// add solution here


function theBeatlesPlay(arrayOfMusicians,arrayOfInstruments){
  var array=[];
  for(let i=0;i<arrayOfMusicians.length; i++){
    array.push(arrayOfMusicians[i]+" plays "+arrayOfInstruments[i]);
  }
  return array;
  }
  
 function johnLennonFacts(facts){
  
   var i=0;
   while(facts[i]<facts.length-1){
     facts.push([i] + '!!!');
   }
   return facts;
 }