## ts-sort-insertion

sync + callback + Promise + Async/Await style insertionsort implementation in typescript

## Install

```js
npm install ts-sort-insertion --save-dev
yarn add  ts-sort-insertion -D
```


## commonjs use  [sync + callback + Promise + Async/Await]

```js

var insertionSort = require("ts-sort-insertion").insertionSort;
insertionSort([3,4,57,2,100,27,343],function(data){
    console.log("insertionSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var insertionSortSync = require("ts-sort-insertion").insertionSortSync;
console.log('insertionSortSync sync',insertionSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var insertionSortAsync = require("ts-sort-insertion").insertionSortAsync;
insertionSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('insertionSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var insertionSortAsyncW = require("ts-sort-insertion").insertionSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await insertionSortAsyncW(array4)
  console.log('insertionSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```

## es6 use  [sync + callback + Promise + Async Await]

```js 

import { insertionSort, insertionSortSync, insertionSortAsync } from 'ts-sort-insertion'

insertionSort([3,4,57,2,100,27,343],function(data){
    console.log("insertionSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('insertionSortSync sync',insertionSortSync([3,4,57,2,100,27,343]))

insertionSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('insertionSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await insertionSortAsync(array4)
  console.log('insertionSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```


## umd web browser use  [sync + callback + Promise + Async Await]

```js

<script src="https://unpkg.com/ts-sort-insertion@1.0.1/umd/index.js"></script>


tsSortInsertion.insertionSort([3,4,57,2,100,27,343],function(data){
    console.log("insertionSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('insertionSortSync sync',tsSortInsertion.insertionSortSync([3,4,57,2,100,27,343]))

tsSortInsertion.insertionSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('insertionSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await tsSortInsertion.insertionSortAsync(array4)
  console.log('insertionSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```


## API
### insertionSortSync: (arr: number[]) => any;
### insertionSort: (arr: number[], callback: (data: number) => void) => any;
### insertionSortAsync: (arr: number[]) => any;

- arr - The array to sort in place
- callback - function to get sort array result 