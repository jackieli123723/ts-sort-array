function insertionSort(arr: number[]): number[] {
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

export  function bucketSortSync(arr: number[]): any {
    if (arr.length === 0) {
        return arr;
    }

    let i;
    let minValue = arr[0];
    let maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];                // 输入数据的最小值
        } else if (arr[i] > maxValue) {
            maxValue = arr[i];                // 输入数据的最大值
        }
    }

    //桶的初始化
    // 设置桶的默认数量为5
    let bucketSize = 5;
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;
}


export function bucketSort (arr: number[],callback: (data: number) => void): any  {
    let result = bucketSortSync(arr)
    callback &&  typeof callback == 'function' && callback(result)
}

export function bucketSortAsync(arr: number[]): any {
  let result = bucketSortSync(arr)
  return  Promise.resolve(result)
}
