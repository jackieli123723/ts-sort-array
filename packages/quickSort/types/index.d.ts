declare const quickSortSync: (arr: number[]) => any;
declare const quickSort: (arr: number[], callback: (data: number) => void) => any;
declare const quickSortAsync: (arr: number[]) => any;
declare function quickSortAsyncAwait(arr: number[]): Promise<any>;
export { quickSort, quickSortSync, quickSortAsync, quickSortAsyncAwait };
