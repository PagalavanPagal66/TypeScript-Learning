type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let ans : number[] = [];
    for(let i:number = 0; i<arr.length;i++){
        if(Boolean(fn(arr[i],i))===true){
            ans.push(arr[i]);
        }
    }
    return ans;
};