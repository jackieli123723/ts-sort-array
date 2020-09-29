function merge(left: any[], right: any[]) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

export function mergeSortSync(arr: number[]): any {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSortSync(left), mergeSortSync(right));

}

export function mergeSort(arr: number[], callback: (data: number) => void): any {
    let result = mergeSortSync(arr)
    callback && typeof callback == 'function' && callback(result)
}

export function mergeSortAsync(arr: number[]): any {
    let result = mergeSortSync(arr)
    return Promise.resolve(result)

}


