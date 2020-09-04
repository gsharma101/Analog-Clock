console.log("This coce is for making Analog Clock");


setInterval(() => {
    let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
   let hRotate = 30*hour + min/2;
   let mRotate = 6*min;
   let sRotate = 6*sec;

   hourHand.style.transform = `rotate(${hRotate}deg)`
   minHand.style.transform = `rotate(${mRotate}deg)`
   secHand.style.transform = `rotate(${sRotate}deg)`

}, 1000);