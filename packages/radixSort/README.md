## ts-sort-radix

sync + callback + Promise + Async/Await style radixsort implementation in typescript

## Install

```js
npm install ts-sort-radix --save-dev
yarn add  ts-sort-radix -D
```


## commonjs use  [sync + callback + Promise + Async/Await]

```js

var radixSort = require("ts-sort-radix").radixSort;
radixSort([3,4,57,2,100,27,343],function(data){
    console.log("radixSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var radixSortSync = require("ts-sort-radix").radixSortSync;
console.log('radixSortSync sync',radixSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var radixSortAsync = require("ts-sort-radix").radixSortAsync;
radixSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('radixSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var radixSortAsyncW = require("ts-sort-radix").radixSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await radixSortAsyncW(array4)
  console.log('radixSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()



```

## es6 use  [sync + callback + Promise + Async Await]

```js 

import { radixSort, radixSortSync, radixSortAsync } from 'ts-sort-radix'

radixSort([3,4,57,2,100,27,343],function(data){
    console.log("radixSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('radixSortSync sync',radixSortSync([3,4,57,2,100,27,343]))

radixSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('radixSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await radixSortAsync(array4)
  console.log('radixSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```


## API
### radixSortSync: (arr: number[]) => any;
### radixSort: (arr: number[], callback: (data: number) => void) => any;
### radixSortAsync: (arr: number[]) => any;

- arr - The array to sort in place
- callback - function to get sort array result 