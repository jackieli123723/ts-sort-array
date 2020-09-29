const quickSortSync = (arr: number[]): any => {
    　　if (arr.length <= 1) { return arr; }
        const pivotIndex: number = Math.floor(arr.length / 2);
        const pivot: number = arr.splice(pivotIndex, 1)[0];
        const left:number[] = [];
        const right:number[] = [];
    　　for (let i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
    　　return quickSortSync(left).concat([pivot], quickSortSync(right));
}

const quickSort = (arr: number[],callback: (data: number) => void): any => {
    　if (arr.length <= 1) { return arr; }
        const pivotIndex: number = Math.floor(arr.length / 2);
        const pivot: number = arr.splice(pivotIndex, 1)[0];
        const left:number[] = [];
        const right:number[] = [];
    　　for (let i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
       let result = quickSortSync(left).concat([pivot], quickSortSync(right))
       callback &&  typeof callback == 'function' && callback(result)
}

const quickSortAsync = (arr: number[]): any => {
      if(arr.length <=1) {
        return arr
      }
      const pivotIndex: number = Math.floor(arr.length / 2);
      const pivot: number = arr.splice(pivotIndex, 1)[0];
      const left:number[] = [];
      const right:number[] = [];
  　　for (let i = 0; i < arr.length; i++){
  　　　　if (arr[i] < pivot) {
  　　　　　　left.push(arr[i]);
  　　　　} else {
  　　　　　　right.push(arr[i]);
  　　　　}
  　　}
    
    let result = quickSortSync(left).concat([pivot], quickSortSync(right))
    return new Promise(resolve => {
        return resolve(result)
    })
}

//另外一种方式 promise
async function quickSortAsyncAwait(arr: number[]): Promise<any> {
    if(arr.length <=1) {
      return arr
    }
    const pivotIndex: number = Math.floor(arr.length / 2);
    const pivot: number = arr.splice(pivotIndex, 1)[0];
    const left:number[] = [];
    const right:number[] = [];
　　for (let i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
  
  let result = quickSortSync(left).concat([pivot], quickSortSync(right))
  return await Promise.resolve(result)
}

export {
    quickSort,
    quickSortSync,
    quickSortAsync,
    quickSortAsyncAwait
}
