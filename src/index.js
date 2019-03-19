module.exports = function check(str, bracketsConfig) {
  
  // let lastOpen = "";
  // let firstClose = "";
  
  let result = [];
  for (let i=0; i<str.length; i++) {
    result.push(str[i]);
  
      for (let j=0; j< bracketsConfig.length; j++) {
        

      // if ((str[i] == bracketsConfig[j][0])||(str[i] == bracketsConfig[j][1])) {}
      

        {if  ((str[i] == bracketsConfig[j][1])&&(result.length<2)&&(bracketsConfig[j][0] !== bracketsConfig[j][1]))
          return false;
        
        else 
          if ((str[i] == bracketsConfig[j][1])&&(bracketsConfig[j][0] == result[(result.length-2)]))
          {result.pop();
          result.pop();
          break;}
       }

          // else results.pop();
          
      }
      
  }
      


  // let result = [];
  // for (let i=0; i<str.length; i++)
  //   for (let j=0; j< bracketsConfig.length; j++) {
  //       if ((str[i] == bracketsConfig[j][1])&&(bracketsConfig[j][0] == result[result.length-1])) {
  //         result.pop();
  //         break;
  //       }

          
  //       else 
  //         if (str[i] == bracketsConfig[j][0]) {
  //           result.push(str[i]);
  //           break;
  //         }
        
  //         if ((str[i] == bracketsConfig[j][1])&&(result.length==0)) {
  //           return false;
  //         }
        

      
    
    
    if (result.length > 0) 
        return false;
      else 
        return true;
  
  
  // your solution
}
//check('{[()]}', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]);
