(function Fibonacciaize(){
  
  const CIRCLES_SECTION = document.querySelector('.circles-section');
  const SQUARES_SECTION = document.querySelector('.squares-section');
  const RECTANGLES_SECTION = document.querySelector('.rectangles-section');
  
  return createElemsFromFibonacciRow(10);
  
  
  
//**********************
  
  
  function createElem(elemType, width, parentElem){
    var elem = document.createElement('div');
    elem.classList.add('bordered');
    elem.style['background-color'] = 'rgb(' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ')';
    
    if(elemType != 'rectangle'){
      if(window.innerWidth < 800){
        elem.style.width = width / 4 + 'rem';
        elem.style.height = width / 4 + 'rem';
      }
      
      else if(window.innerWidth >= 800){
        elem.style.width = width / 3 + 'rem';
        elem.style.height = width / 3 + 'rem';
      }
      elem.classList.add('middle-element');
      if(elemType == 'circle') elem.classList.add('circle');
    }
    else if(elemType == 'rectangle'){
      if(window.innerWidth < 800){
        elem.style.width = width / 2 + 'rem';
      }
      else if(window.innerWidth >= 800){
        elem.style.width = width + 'rem';
      }
      
      elem.classList.add('rectangle');
    } 
    
    parentElem.appendChild(elem);
    
    return elem;
    
  }
  
  
  
  function createElemsFromFibonacciRow(num){
  
  var arr = [0, 1];
  
  for(let i = 2; i <= num; i++){
    arr[i] = arr[i-2] + arr[i-1];
  }
    
  arr.shift();
    
  for(let i = 0; i < arr.length; i++){
    createElem('rectangle', arr[i], RECTANGLES_SECTION).textContent = arr[i];
  }
    
  for(let i = arr.length - 1; i >= 0; i--){
    createElem('square', arr[i], SQUARES_SECTION);
    createElem('circle', arr[i], CIRCLES_SECTION);
  }
  console.log(arr);
  return arr;
}
}) ();
