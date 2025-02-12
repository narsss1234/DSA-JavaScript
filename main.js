function measure_time_for_function(func, ...args){
    const start = Date.now();
    func(...args);
    const end = Date.now();
    return(console.log(`Time elapsed: ${end - start} ms`));

}

// O(n)

function logItems_On(n){
    for(let i=0; i<n; i++){
        console.log(i);
    }
}

measure_time_for_function(logItems_On,10);

// O(2n) => O(n)

function logItems_O2n(n){
    for(let i=0; i<n; i++){
        console.log(i);
    }
    for(let i=0; i<n; i++){
        console.log(i);
    }
}

measure_time_for_function(logItems_O2n,10);

// O(n^2)

function logItems_On2(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            console.log(i, j);
        }
    }
}

measure_time_for_function(logItems_On2,10);

// O(n^2) is inefficient and need to be ignored as much as possible

// O(n^2 + n) => O(n^2)

function logItems_On2n(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            console.log(i, j);
        }
    }
    for(let i=0; i<n; i++){
        console.log(i);
    }
}       

measure_time_for_function(logItems_On2n,10);

// Always drop non-dominant terms in Big O

// O(1)

function logItems_O1(n){
    console.log(n + n);
}

measure_time_for_function(logItems_O1,10);

// O(log n)

