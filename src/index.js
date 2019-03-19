module.exports = function check(str, bracketsConfig) {
  
  let lastOpen = "";
  let firstClose = "";
  

  let result = [];
  for (let i=0; i<str.length; i++)
    for (let j=0; j< bracketsConfig.length; j++) {
      
      if (str[i] == bracketsConfig[j][0]) {
        result.push(str[i]);
        // lastOpen = result[result.length-1];
        
         }
      else  
        if ((str[i] == bracketsConfig[j][1])&&(bracketsConfig[j][0] == result[result.length-1]))
        result.pop();
        
        // else 
        //   result.push(str[i]);
        

      }
    
    
    if (result.length > 0) 
        return false;
      else 
        return true;
  
  
  // your solution
}
//  check('[(])', [['(', ')'], ['[', ']']]);
