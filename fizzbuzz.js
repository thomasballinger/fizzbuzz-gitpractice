function loop(){
    l = [];
    for (var i = 0; i < 100; i++){
        if (i % 3 == 0){
            l.push("fizz")
        }
    }
    return l
}
document.write(loop());
// this isn't really fizzbuzz
