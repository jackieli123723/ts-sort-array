
//heapSort--ok
var heapSort = require("ts-sort-heap").heapSort;
heapSort([3,4,57,2,100,27,343],function(data){
    console.log("heapSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var heapSortSync = require("ts-sort-heap").heapSortSync;
console.log('heapSortSync sync',heapSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var heapSortAsync = require("ts-sort-heap").heapSortAsync;
heapSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('heapSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var heapSortAsyncW = require("ts-sort-heap").heapSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await heapSortAsyncW(array4)
  console.log('heapSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()





