function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash = args.join(',');
      let idx = cache.findIndex((item)=> item.hash === hash); 
      if (idx !== -1 ) {
          console.log("Из кэша: " + cache[idx].value); 
          return "Из кэша: " + cache[idx].value;
      } else {
          let result = func(...args); 
          cache.push({hash: hash, value: result}) ; 
          if (cache.length > 5) { 
            cache.shift();
          }
          console.log("Вычисляем: " + result);
          return "Вычисляем: " + result;  
      }
  }

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timeout;
  let isDelayed = false;

  function wrapper(...args) {        
    clearTimeout(timeout);
    
    if(isDelayed) {
      timeout = setTimeout(() => {            
        func.apply(this, args);            
        console.timeEnd("time");   
      }, ms);  
    } else {
      isDelayed = true;
      func.apply(this, args);
    }     
  };

  return wrapper;
}

function debounceDecorator2(func, ms) {
  let timeout;
  let isDelayed = false;

  function wrapper(...args) {
    ++wrapper.count;
    clearTimeout(timeout);
    
    if(isDelayed) {
      timeout = setTimeout(() => {            
        func.apply(this, args);            
        console.timeEnd("time");   
      }, ms);  
    } else {
      isDelayed = true;
      func.apply(this, args);
    }     
  };

  wrapper.count = 0;
  return wrapper;
}
