const count = document.getElementById('count')
const print = document.getElementById('print')
const fizzbuzz = document.getElementById('fizzbuzz')

/**
 * print 1 - N (N = value of count box)
 * if number divisible by 15 print 'fizzbuzz'
 * if number divisible by 5 print 'fizz'
 * if number divisible by 3 print 'buzz' 
 * if not divisible by 3 or 5, print the number itself
 * 
 * 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz ..... 
 */

print.onclick = function () {
  for(int i = 1; i <= count; i++){
      if(i%15 == 0){
          var ul = document.getElementById("fizzbuzz");
          var li = document.createElement("li");
          li.appendChild(document.createTextNode("fizzbuzz"));
          ul.appendChild(li);
      }
      else if(i%5 == 0){
          var ul = document.getElementById("fizzbuzz");
          var li = document.createElement("li");
          li.appendChild(document.createTextNode("fizz"));
          ul.appendChild(li);
      }
      else if(i%3 == 0){
          var ul = document.getElementById("fizzbuzz");
          var li = document.createElement("li");
          li.appendChild(document.createTextNode("buzz"));
          ul.appendChild(li);
      }
      else{
          var ul = document.getElementById("fizzbuzz");
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(i));
          ul.appendChild(li);
      }
  }
}
