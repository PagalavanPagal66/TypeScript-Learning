function valid(mid : number,m : number, position: number[]) : boolean{
    let curr : number = 1;
    let past : number = position[0];
    let len : number = 0;
    for(let i: number = 1;i<position.length;i++){
        let diff = position[i] - past;
        if(len+diff >= mid){
            past = position[i];
            curr++;
            len = 0;
        }
        else{
            len+=diff;
            past = position[i];
        }
        if(curr>=m){
            return true;
        }
    }
    return curr>=m;
}
function maxDistance(position: number[], m: number): number {
    position.sort(function(a, b){return a - b});
    let start : number = 1;
    let n : number = position.length;
    let end : number = position[n-1]-position[0];
    let ans : number = 0;
    while(start<=end){
        let mid : number = Math.floor(start+(end-start)/2);
        if(valid(mid,m,position)){
            //console.log(mid);
            ans = Math.max(ans,mid);
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
    return ans;
};