## ts-sort-bucket

sync + callback + Promise + Async/Await style bucketsort implementation in typescript

## Install

```js
npm install ts-sort-bucket --save-dev
yarn add  ts-sort-bucket -D
```


## commonjs use  [sync + callback + Promise + Async/Await]

```js

var bucketSort = require("ts-sort-bucket").bucketSort;
bucketSort([3,4,57,2,100,27,343],function(data){
    console.log("bucketSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var bucketSortSync = require("ts-sort-bucket").bucketSortSync;
console.log('bucketSortSync sync',bucketSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var bucketSortAsync = require("ts-sort-bucket").bucketSortAsync;
bucketSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('bucketSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var bucketSortAsyncW = require("ts-sort-bucket").bucketSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await bucketSortAsyncW(array4)
  console.log('bucketSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()

```

## es6 use  [sync + callback + Promise + Async Await]

```js 

import { bucketSort, bucketSortSync, bucketSortAsync, bucketSortAsyncAwait} from 'ts-sort-bucket'

bucketSort([3,4,57,2,100,27,343],function(data){
    console.log("bucketSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('bucketSortSync sync',bucketSortSync([3,4,57,2,100,27,343]))

bucketSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('bucketSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await bucketSortAsync(array4)
  console.log('bucketSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```
  

## umd web browser use  [sync + callback + Promise + Async Await]

```js

<script src="https://unpkg.com/ts-sort-bucket@1.0.1/umd/index.js"></script>

tsSortBucket.bucketSort([3,4,57,2,100,27,343],function(data){
    console.log("bucketSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('bucketSortSync sync',tsSortBucket.bucketSortSync([3,4,57,2,100,27,343]))

tsSortBucket.bucketSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('bucketSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await tsSortBucket.bucketSortAsync(array4)
  console.log('bucketSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```

## API
### bucketSortSync: (arr: number[]) => any;
### bucketSort: (arr: number[], callback: (data: number) => void) => any;
### bucketSortAsync: (arr: number[]) => any;

- arr - The array to sort in place
- callback - function to get sort array result 