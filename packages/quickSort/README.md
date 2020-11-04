## ts-sort-quick

sync + callback + Promise + Async/Await style quicksort implementation in typescript

## Install

```js
npm install ts-sort-quick --save-dev
yarn add  ts-sort-quick -D
```


## commonjs use  [sync + callback + Promise + Async/Await]

```js

var quickSort = require("ts-sort-quick").quickSort;
quickSort([3,4,57,2,100,27,343],function(data){
    console.log("quickSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var quickSortSync = require("ts-sort-quick").quickSortSync;
console.log('quickSortSync sync',quickSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var quickSortAsync = require("ts-sort-quick").quickSortAsync;
quickSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('quickSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var quickSortAsyncW = require("ts-sort-quick").quickSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await quickSortAsyncW(array4)
  console.log('quickSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()


var quickSortAsyncAwait = require("ts-sort-quick").quickSortAsyncAwait;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await quickSortAsyncAwait(array4)
  console.log('quickSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()

```

## es6 use  [sync + callback + Promise + Async Await]

```js 

import { quickSort, quickSortSync, quickSortAsync, quickSortAsyncAwait} from 'ts-sort-quick'

quickSort([3,4,57,2,100,27,343],function(data){
    console.log("quickSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('quickSortSync sync',quickSortSync([3,4,57,2,100,27,343]))

quickSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('quickSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await quickSortAsync(array4)
  console.log('quickSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```



## umd web browser use  [sync + callback + Promise + Async Await]

```js

<script src="https://unpkg.com/ts-sort-quick@1.0.1/umd/index.js"></script>

tsSortQuick.quickSort([3,4,57,2,100,27,343],function(data){
    console.log("quickSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('quickSortSync sync',tsSortQuick.quickSortSync([3,4,57,2,100,27,343]))

tsSortQuick.quickSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('quickSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await tsSortQuick.quickSortAsync(array4)
  console.log('quickSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()

```


## API
### quickSortSync: (arr: number[]) => any;
### quickSort: (arr: number[], callback: (data: number) => void) => any;
### quickSortAsync: (arr: number[]) => any;
### quickSortAsyncAwait(arr: number[]): Promise<any>;

- arr - The array to sort in place
- callback - function to get sort array result 