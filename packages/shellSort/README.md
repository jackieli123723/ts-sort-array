## ts-sort-shell

sync + callback + Promise + Async/Await style shellsort implementation in typescript

## Install

```js
npm install ts-sort-shell --save-dev
yarn add  ts-sort-shell -D
```


## commonjs use  [sync + callback + Promise + Async/Await]

```js

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




```

## es6 use  [sync + callback + Promise + Async Await]

```js 

import { shellSort, shellSortSync, shellSortAsync } from 'ts-sort-shell'

shellSort([3,4,57,2,100,27,343],function(data){
    console.log("shellSort cb",data.join('-'))// output: 2-3-4-27-57-100-343
})

console.log('shellSortSync sync',shellSortSync([3,4,57,2,100,27,343]))

shellSortAsync([3,4,57,2,100,27,343]).then((res) => {
  console.log('shellSortASync promise',res) // output: [2,3, 4, 27, 57,100,343]
}).catch((error) => {
  console.log('err',error)
})

(async function () {
  var array4 = [3,4,57,2,100,27,343]
  var les = await shellSortAsync(array4)
  console.log('shellSortAsyncAwait await',les) // output: [2,3, 4, 27, 57,100,343]
})()


```


## API
### shellSortSync: (arr: number[]) => any;
### shellSort: (arr: number[], callback: (data: number) => void) => any;
### shellSortAsync: (arr: number[]) => any;

- arr - The array to sort in place
- callback - function to get sort array result 