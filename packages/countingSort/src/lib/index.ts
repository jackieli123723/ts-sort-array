export  function countingSortSync(arr: number[],maxValue?: number): any {
   // 1.
   let i; 
   let indexOfReturn = 0;
   let count = [];
   let max = maxValue || 9

   // 2.
   for (i = 0; i <= max; i++) {
      count[i] = 0;
   }

   // 3.
   for (i = 0; i < arr.length; i++) {
      count[arr[i]]++;
   }

   // 4.
   for (i = 0; i <= max; i++) {
      while (count[i]-- > 0) {
        arr[indexOfReturn++] = i;
      }
   }
   return arr;
}

export function countingSort (arr: number[],callback: (data: number) => void): any  {
   let result = countingSortSync(arr)
   callback &&  typeof callback == 'function' && callback(result)
}

export function countingSortAsync(arr: number[]): any {
 let result = countingSortSync(arr)
 return  Promise.resolve(result)

}