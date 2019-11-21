var x = document.querySelector('#formControlRange1').value;
console.log(x);

// console.log(y);

function algorithm() {
  let y = document.querySelector('#formControlRange2').value;
  let z = document.querySelector('#guidedOrNot').value;
  if (z == 'Yes') {
    alert('Hello' + y);
  } else {
    alert('Oh no' + y);
  }
}

// grab values from input

// algorithm
// if values are < 5 then X. if values are > 5 && < 10 then Y. if values > 10 then Z.

// should I run this on a server?
