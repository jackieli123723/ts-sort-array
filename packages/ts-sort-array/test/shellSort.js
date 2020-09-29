
//shellSort--ok
var shellSort = require("ts-sort-shell").shellSort;
shellSort([3,4,57,2,100,27,343],function(data){
    console.log("shellSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var shellSortSync = require("ts-sort-shell").shellSortSync;
console.log('shellSortSync sync',shellSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var shellSortAsync = require("ts-sort-shell").shellSortAsync;
shellSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('shellSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var shellSortAsyncW = require("ts-sort-shell").shellSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await shellSortAsyncW(array4)
  console.log('shellSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()






