 //Sum all the numbers in the array
 function sumItems(array) {
  let sum =0
  array.forEach(element => {
    if (Array.isArray(element)){
      sum += sumItems(element)
    } else {
      sum += element
    }
  })
  return sum;  
}


// was trting to do it withou a forEach 
/*
function sumItems(array) {

  if (array.length === 0){
    return 0
  }
  let element = array[0]
  //console.log('array', array, 'element', element)
  // if (Array.isArray(element)) {
  //   return sumItems(element)
  // }else{
  console.log(array)
  array = Array.isArray(array) ? array : [array]
  return sumItems(array.slice(1)) + Array.isArray(element) ? sumItems(element): element 
  
}
*/



module.exports = sumItems;