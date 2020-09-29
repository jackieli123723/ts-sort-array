
// bucketSort--ok

var bucketSort = require("ts-sort-bucket").bucketSort;
bucketSort([3,4,57,2,100,27,343],function(data){
    console.log("bucketSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var bucketSortSync = require("ts-sort-bucket").bucketSortSync;
console.log('bucketSortSync sync',bucketSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var bucketSortAsync = require("ts-sort-bucket").bucketSortAsync;
bucketSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('bucketSortAsync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var bucketSortAsyncW = require("ts-sort-bucket").bucketSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await bucketSortAsyncW(array4)
  console.log('bucketSortAsyncW await',les) // output: [2,3, 4, 27, 57,100,343]
})()