type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let ans : number;
    if(nums.length==0){
        return init;
    }
    ans = fn(init,nums[0]);
    for(let i:number = 1;i<nums.length;i++){
        ans = fn(ans,nums[i]);
    }
    return ans;
};