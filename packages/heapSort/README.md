## ts-sort-heap

sync + callback + Promise + Async/Await style heapsort implementation in typescript

## Install

```js
npm install ts-sort-heap --save-dev
yarn add  ts-sort-heap -D
```


## commonjs use  [sync + callback + Promise + Async/Await]

```js

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




```

## es6 use  [sync + callback + Promise + Async Await]

```js 

import { heapSort, heapSortSync, heapSortAsync } from 'ts-sort-heap'

heapSort([3,4,57,2,100,27,343],function(data){
    console.log("heapSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('heapSortSync sync',heapSortSync([3,4,57,2,100,27,343]))

heapSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('heapSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await heapSortAsync(array4)
  console.log('heapSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```


## API
### heapSortSync: (arr: number[]) => any;
### heapSort: (arr: number[], callback: (data: number) => void) => any;
### heapSortAsync: (arr: number[]) => any;

- arr - The array to sort in place
- callback - function to get sort array result 