export function shellSortSync(arr: number[]): any {
    let len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 3) {
        //动态定义间隔序列
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (let i = gap; i < len; i++) {
            temp = arr[i];
            let j = i - gap;
            for (; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}



export function shellSort(arr: number[], callback: (data: number) => void): any {
    let result = shellSortSync(arr)
    callback && typeof callback == 'function' && callback(result)
}

export function shellSortAsync(arr: number[]): any {
    let result = shellSortSync(arr)
    return Promise.resolve(result)

}



