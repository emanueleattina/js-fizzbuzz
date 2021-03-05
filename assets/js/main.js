// stampare numeri da 1 a 100
// scrivere Fizz al posto dei multipli di 3
// scrivere Buzz al posto dei multipli di 5
// scrivere FizzBuzz al posto dei multipli di 3 e 5

var i;
var vettore = [];

for(i = 0; i <= 100; i++)
{
  vettore.push(i);

  if (i % 3 == 0)
  {
    // vettore[i] = "Multiplo di 3";
    vettore.splice(i, 1, 'Fizz');
  }
  if (i % 5 == 0)
  {
    // vettore[i] = "Multiplo di 5";
    vettore.splice(i, 1, 'Buzz');
  }
  
  if ((i % 3 == 0) && (i % 5 == 0))
  {
    // vettore[i] = "Multiplo di 15";
    vettore.splice(i, 1, 'FizzBuzz');
  }
}

console.log(vettore);


for(i = 1; i < vettore.length; i++)
{
  document.getElementById('fizzBuzz').innerHTML += vettore[i] + "<br>";
}