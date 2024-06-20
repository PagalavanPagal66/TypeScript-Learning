function createCounter(n: number): () => number {
    
    return function() {
        return n++;
    }
}

type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe{
    return {   
        toBe(num){
                if(num===val){
                    return true;
                }
                throw "Not Equal";
            }
        ,
        notToBe(num){
            if(num!==val){
                return true;
            }
            throw "Equal";
        }
    }
};