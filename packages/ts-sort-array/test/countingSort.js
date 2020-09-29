//countingSort--ok
var countingSort = require("ts-sort-counting").countingSort;
countingSort([3,4,57,2,100,27,343],function(data){
    console.log("countingSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var countingSortSync = require("ts-sort-counting").countingSortSync;
console.log('countingSortSync sync',countingSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var countingSortAsync = require("ts-sort-counting").countingSortAsync;
countingSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('countingSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var countingSortAsyncW = require("ts-sort-counting").countingSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await countingSortAsyncW(array4)
  console.log('countingSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()






