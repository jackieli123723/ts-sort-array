## ts-sort-counting

sync + callback + Promise + Async/Await style countingsort implementation in typescript

## Install

```js
npm install ts-sort-counting --save-dev
yarn add  ts-sort-counting -D
```


## commonjs use  [sync + callback + Promise + Async/Await]

```js

var countingSort = require("ts-sort-counting").countingSort;
countingSort([3,4,57,2,100,27,343],function(data){
    console.log("countingSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})


var countingSortSync = require("ts-sort-counting").countingSortSync;
console.log('countingSortSync sync',countingSortSync([3,4,57,2,100,27,343]))// output: [2,3, 4, 27, 57,100,343]



var countingSortAsync = require("ts-sort-counting").countingSortAsync;
countingSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('countingSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})


var countingSortAsyncW = require("ts-sort-counting").countingSortAsync;
(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await countingSortAsyncW(array4)
  console.log('countingSortAsync await',les) // output: [2,3, 4, 27, 57,100,343]
})()



```

## es6 use  [sync + callback + Promise + Async Await]

```js 

import { countingSort, countingSortSync, countingSortAsync } from 'ts-sort-counting'

countingSort([3,4,57,2,100,27,343],function(data){
    console.log("countingSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('countingSortSync sync',countingSortSync([3,4,57,2,100,27,343]))

countingSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('countingSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await countingSortAsync(array4)
  console.log('countingSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```


## API
### countingSortSync: (arr: number[]) => any;
### countingSort: (arr: number[], callback: (data: number) => void) => any;
### countingSortAsync: (arr: number[]) => any;

- arr - The array to sort in place
- callback - function to get sort array result 