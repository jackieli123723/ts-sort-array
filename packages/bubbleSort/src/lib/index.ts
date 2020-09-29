export  function bubbleSortSync(arr:number[]): any {
    let len: number = arr.length;
    for (let i = 0; i < len; i++) {
        let hasChange = false; // 提前退出冒泡循环的标志位
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                const temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
                hasChange = true; // 表示有数据交换
            }
        }
        if (!hasChange) break; 
    }
    return arr;
}

export function bubbleSort (arr: number[],callback: (data: number) => void): any  {
       let result = bubbleSortSync(arr)
       callback &&  typeof callback == 'function' && callback(result)
}

export function bubbleSortAsync(arr: number[]): any {
     let result = bubbleSortSync(arr)
     return  Promise.resolve(result)

}



