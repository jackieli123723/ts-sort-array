let arrLength: number;
function maxHeap(input: number[], i: number) {
    let left = 2 * i + 1
    let right = 2 * i + 2
    let max = i

    if (left < arrLength && input[left] > input[max]) {
        max = left
    }

    if (right < arrLength && input[right] > input[max])     {
        max = right
    }

    if (max != i) {
        swap(input, i, max)
        maxHeap(input, max)
    }
}

function swap(input: number[], indexA: number, indexB: number) {
    const temp = input[indexA]

    input[indexA] = input[indexB]
    input[indexB] = temp
}

export  function heapSortSync(input: number[]): any {   
    arrLength = input.length

    for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1)      {
        maxHeap(input, i)
      }

    for (let i = input.length - 1; i > 0; i--) {
        swap(input, 0, i)
        arrLength--

        maxHeap(input, 0)
    }
    return input
}


export function heapSort (arr: number[],callback: (data: number) => void): any  {
    let result = heapSortSync(arr)
    callback &&  typeof callback == 'function' && callback(result)
}

export function heapSortAsync(arr: number[]): any {
  let result = heapSortSync(arr)
  return  Promise.resolve(result)
}
