## ts-sort-merge

sync + callback + Promise + Async/Await style mergesort implementation in typescript

## Install

```js
npm install ts-sort-merge --save-dev
yarn add  ts-sort-merge -D
```


## commonjs use  [sync + callback + Promise + Async/Await]

```js

var mergeSort = require("ts-sort-merge").mergeSort;
mergeSort([3,4,57,2,100,27,343],function(data){
    console.log("mergeSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var mergeSortSync = require("ts-sort-merge").mergeSortSync;
console.log('mergeSortSync sync',mergeSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var mergeSortAsync = require("ts-sort-merge").mergeSortAsync;
mergeSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('mergeSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var mergeSortAsyncW = require("ts-sort-merge").mergeSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await mergeSortAsyncW(array4)
  console.log('mergeSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()



```

## es6 use  [sync + callback + Promise + Async Await]

```js 

import { mergeSort, mergeSortSync, mergeSortAsync } from 'ts-sort-merge'

mergeSort([3,4,57,2,100,27,343],function(data){
    console.log("mergeSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('mergeSortSync sync',mergeSortSync([3,4,57,2,100,27,343]))

mergeSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('mergeSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await mergeSortAsync(array4)
  console.log('mergeSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```


## API
### mergeSortSync: (arr: number[]) => any;
### mergeSort: (arr: number[], callback: (data: number) => void) => any;
### mergeSortAsync: (arr: number[]) => any;

- arr - The array to sort in place
- callback - function to get sort array result 