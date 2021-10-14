function exponent(y, x){
 	

    if (x === undefined || y === undefined) {
        return false;
    }
    if (y === 0) {
        return 1;
    }
    if (y === 1) {
        return x;
    }
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    return exponent(y - 1,x) * x
    
};