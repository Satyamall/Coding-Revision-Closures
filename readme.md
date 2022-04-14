# Closures:

# - Create a function called toggler using closures
```js
function toggler(){ ... }
const toggle = toggler(1,2,3)

toggle() // 1 toggle() // 2 toggle() // 3 // the next time you toggle it the output is 1 toggle() // 1 toggle() // 2
```

=> 
```js
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
 // output: 
//  1
// 2
// 3
// 1
// 2
// 3

```
# What are IIFE?
=> An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```js
// IIFE
(function () {
  /* ... */
})();


// Arrow function IIFE
(() => {
  /* ... */
})();


// async IIFE
(async () => {
  /* ... */
})();
```
Examples:
```js
// Regular Function.
function Greet()
{
    console.log("Welcome to IIFE!");
};
// Execution of Regular Function.
Greet();
  
// IIFE creation and execution.
(function() { console.log("Welcome to IIFE!"); })();

// Output:
// Welcome to IIFE!
// Welcome to IIFE!
```

# Write a program to throttle using closures
```js
function throttler( callback, duration ){

}
document.addEventListener("element", throttler( callback, 1000 )
```
=> 
```js
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JavaScript | With Throttling</title>
</head>
<body>
<button id="throttle">Click Me</button>
<script>
	const btn=document.querySelector("#throttle");
    function throttler(callback,duration){
	let prev = 0;
	return (...args) => {
		let now = new Date().getTime();
		if(now - prev> duration){
		prev = now;
		return callback(...args);
		}
	}
	}
	btn.addEventListener("click", throttler(()=>{
	console.log("button is clicked")
	}, 1500));
</script>
</body>
</html>
```

# What is currying?
=> In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.

Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.

Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

Currying doesn’t call a function. It just transforms it.

Example:
```js
function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3
```

# Explain some areas where you have seen currying being implemented in React / other libraries?
=> we have used currying in react with typeScript. According to me I think I have used in redux thunk middlewares like  `function logger({ getState }) {
  return (next)=>(action)=>{next(action)}}`
```js
const List = ({
  items,
}: {
  items: string[],
}) => {
  const handleClick = (item: string) => () => {
    console.log(item);
  };
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>
          <button onClick={handleClick(item)}>
            Log
          </button>
        </li>
      ))}
    </ul>
  );
};
```