//bubbleSort--ok

var bubbleSort = require("ts-sort-bubble").bubbleSort;
bubbleSort([3,4,57,2,100,27,343],function(data){
    console.log("bubbleSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var bubbleSortSync = require("ts-sort-bubble").bubbleSortSync;
console.log('bubbleSortSync sync',bubbleSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var bubbleSortAsync = require("ts-sort-bubble").bubbleSortAsync;
bubbleSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('bubbleSortAsync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var bubbleSortAsyncW = require("ts-sort-bubble").bubbleSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await bubbleSortAsyncW(array4)
  console.log('bubbleSortAsyncW await',les) // output: [2,3, 4, 27, 57,100,343]
})()


