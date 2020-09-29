
//quickSort--ok
var quickSort = require("ts-sort-quick").quickSort;
quickSort([3,4,57,2,100,27,343],function(data){
    console.log("quickSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var quickSortSync = require("ts-sort-quick").quickSortSync;
console.log('quickSortSync sync',quickSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var quickSortAsync = require("ts-sort-quick").quickSortAsync;
quickSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('quickSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var quickSortAsyncW = require("ts-sort-quick").quickSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await quickSortAsyncW(array4)
  console.log('quickSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()


var quickSortAsyncAwait = require("ts-sort-quick").quickSortAsyncAwait;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await quickSortAsyncAwait(array4)
  console.log('quickSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()






