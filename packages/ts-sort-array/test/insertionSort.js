
//insertionSort--ok
var insertionSort = require("ts-sort-insertion").insertionSort;
insertionSort([3,4,57,2,100,27,343],function(data){
    console.log("insertionSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var insertionSortSync = require("ts-sort-insertion").insertionSortSync;
console.log('insertionSortSync sync',insertionSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var insertionSortAsync = require("ts-sort-insertion").insertionSortAsync;
insertionSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('insertionSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var insertionSortAsyncW = require("ts-sort-insertion").insertionSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await insertionSortAsyncW(array4)
  console.log('insertionSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()





