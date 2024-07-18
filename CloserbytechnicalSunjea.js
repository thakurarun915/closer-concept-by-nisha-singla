//closer in javascript by te hnical suneja
var sun =function(a){
    console.log("Hello Viewrs"+a);
    var c=4;
    return function(b){
        return a+b+c;

    }

}

var store =sun(2);//calling sun function this is for me var varib ales has funcnction scope and global and can we run from any  other 

console.log(store(5));