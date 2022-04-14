function toggler(a,b,c){
    return function(){
        let temp=a;
        a=b;
        b=c;
        c=temp
        return a,b,c;
    }
 } 
 
 const toogle=toggler(1,2,3)
 console.log(toogle());
 console.log(toogle());
 console.log(toogle());
 console.log(toogle());
 console.log(toogle());
 console.log(toogle());
