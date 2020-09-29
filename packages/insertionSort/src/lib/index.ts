export function insertionSortSync(arr: number[]): any {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return arr;
}

export function insertionSort (arr: number[],callback: (data: number) => void): any {
    let result = insertionSortSync(arr)
    callback &&  typeof callback == 'function' && callback(result)
}

export function insertionSortAsync (arr: number[]): any {
    let result = insertionSortSync(arr)
    return  Promise.resolve(result)
}

