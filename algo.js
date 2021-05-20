function checkYuGioh(n){
for (n = 1; n <= 30; n++ ) {
if((n % 2 == 0) && (n % 3 == 0) && (n % 5 == 0)){
        console.log("yu-gi-oh")
}
 else if((n % 3 == 0) && (n % 5 == 0)) {
        console.log("gi-oh")
}else if((n % 2 == 0) && (n % 3 == 0)) { 
    console.log("yu-gi")
} else if(n % 2 == 0) {
    console.log("yu")
}
 else if(n % 3 == 0) {
    console.log("gi")
} else if( n % 5 == 0) {
    console.log("oh")
} else 
console.log(n)
}
}
checkYuGioh(10);
checkYuGioh("5");
checkYuGioh("fizzbuzz")
