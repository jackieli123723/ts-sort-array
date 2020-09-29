
//selectionSort--ok
var selectionSort = require("ts-sort-selection").selectionSort;
selectionSort([3,4,57,2,100,27,343],function(data){
    console.log("selectionSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var selectionSortSync = require("ts-sort-selection").selectionSortSync;
console.log('selectionSortSync sync',selectionSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var selectionSortAsync = require("ts-sort-selection").selectionSortAsync;
selectionSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('selectionSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var selectionSortAsyncW = require("ts-sort-selection").selectionSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await selectionSortAsyncW(array4)
  console.log('selectionSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()





