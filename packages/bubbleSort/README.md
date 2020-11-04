## ts-sort-bubble

sync + callback + Promise + Async/Await style bubblesort implementation in typescript

## Install

```js
npm install ts-sort-bubble --save-dev
yarn add  ts-sort-bubble -D
```


## commonjs use  [sync + callback + Promise + Async/Await]

```js

var bubbleSort = require("ts-sort-bubble").bubbleSort;
bubbleSort([3,4,57,2,100,27,343],function(data){
    console.log("bubbleSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var bubbleSortSync = require("ts-sort-bubble").bubbleSortSync;
console.log('bubbleSortSync sync',bubbleSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var bubbleSortAsync = require("ts-sort-bubble").bubbleSortAsync;
bubbleSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('bubbleSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var bubbleSortAsyncW = require("ts-sort-bubble").bubbleSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await bubbleSortAsyncW(array4)
  console.log('bubbleSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```

## es6 use  [sync + callback + Promise + Async Await]

```js 

import { bubbleSort, bubbleSortSync, bubbleSortAsync } from 'ts-sort-bubble'

bubbleSort([3,4,57,2,100,27,343],function(data){
    console.log("bubbleSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('bubbleSortSync sync',bubbleSortSync([3,4,57,2,100,27,343]))

bubbleSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('bubbleSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await bubbleSortAsync(array4)
  console.log('bubbleSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```

## umd web browser use  [sync + callback + Promise + Async Await]

```js

<script src="https://unpkg.com/ts-sort-bubble@1.0.1/umd/index.js"></script>

tsSortBubble.bubbleSort([3,4,57,2,100,27,343],function(data){
    console.log("bubbleSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('bubbleSortSync sync',tsSortBubble.bubbleSortSync([3,4,57,2,100,27,343]))

tsSortBubble.bubbleSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('bubbleSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await tsSortBubble.bubbleSortAsync(array4)
  console.log('bubbleSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()

```

## API
### bubbleSortSync: (arr: number[]) => any;
### bubbleSort: (arr: number[], callback: (data: number) => void) => any;
### bubbleSortAsync: (arr: number[]) => any;

- arr - The array to sort in place
- callback - function to get sort array result 