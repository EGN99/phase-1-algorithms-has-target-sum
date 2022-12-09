function hasTargetSum(array, target) {
  

  for(let i = 0; i < array.length-1; i++){
   
    for(let j = i+1; j < array.length; j++){
        
      if(array[i]+array[j] === target){
        return true
      }
    }
  } 

  return false;
}


  
  

/* 
  Write the Big O time complexity of your function here


  n+n+1=(2n+1)=0(n)
*/

/* 
  Add your pseudocode here
  
    for element i in array
    for each other element j in the array
      If their sum matches the target sum
        return true
  If none of the sums match the target sum
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
