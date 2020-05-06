function checkObjects(x,y) {
    if (typeof y !== 'object') return false;
    let keys_x = Object.keys(x)
    let keys_y = Object.keys(y)
    
    if (keys_x.length !== keys_y.length) {
      console.log('length')
      return false;
    }
    
    for (let value of keys_x) {
      if ( typeof x[value] !== 'object') {
        
        if (x[value] !== y[value]) {
          console.log('values', x[value], y[value])
          return false;
        }
        
      } else {
        
        if(!checkObjects(x[value], y[value])) {
          return false
        }
        
      }
    }
    
    return true
  }
  function deepEqual(x,y) {
    if (x === null || y === null) {
      return false;
    }
    if (typeof x === 'object') {
      if(!checkObjects(x, y)) return false;
    } else {
      
      if (x !== y) {
        console.log('values', x, y)
        return false;
      }
      
    }
    return true
  }