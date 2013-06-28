function fizzbuzz(start, end){
    l = [];
    for (var i = start; i <= end; i++){
        if(i % 15 == 0){
            l.push("fizzbuzz");
        }else if (i % 3 == 0){
            l.push("fizz");
        }else if(i % 5 == 0){
            l.push("buzz");
        }else{
            l.push(""+i);
        }
    }
    return l;
}
