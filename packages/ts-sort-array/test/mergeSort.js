
//mergeSort--ok
var mergeSort = require("ts-sort-merge").mergeSort;
mergeSort([3,4,57,2,100,27,343],function(data){
    console.log("mergeSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var mergeSortSync = require("ts-sort-merge").mergeSortSync;
console.log('mergeSortSync sync',mergeSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var mergeSortAsync = require("ts-sort-merge").mergeSortAsync;
mergeSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('mergeSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var mergeSortAsyncW = require("ts-sort-merge").mergeSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await mergeSortAsyncW(array4)
  console.log('mergeSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()







