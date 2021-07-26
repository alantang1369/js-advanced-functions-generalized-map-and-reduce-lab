// Add your functions here
function map(array, f){
    let r = []
    for (let i = 0; i< array.length; i++){
        r.push(f(array[i]))
    }
    return r
}

function reduce(array, f , start){
    let r;
    if (start){
        r = start;
        for( let i=0; i<array.length; i++){
            r = f(array[i], r);
        }
        return r;
    }else {
        r = array[0];
        for ( let i=1; i < array.length; i++){
            r = f(array[i],r)
        }
        return r;
    }

}