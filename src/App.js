import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [num, setNum] = useState(0);
  const [ans, setAns] = useState('');
  const [isCalc, setIsCalc] = useState(false);
  useEffect(() => {
    console.log(ans);
  }, [ans])
  if (isCalc) {
    return (
      <>
        <section className="showcase">
          <div className="content">
            <h1>Fibonacci Sequence</h1>
            <h3>The Numbers of Nature</h3>
            <textarea style={{
              width: '50vw'
            }}>{ans}</textarea>
            <form>
              <input onClick={(e) => {
                setIsCalc(false);
                setAns('');
                e.preventDefault();
              }} type="submit" value="Reset" />
            </form>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="showcase">
          <div className="content">
            <h1>Fibonacci Sequence</h1>
            <h3>The Numbers of Nature</h3>
            <form>
              <input onChange={(e) => {
                setNum(e.target.value);
                console.log(num);
                e.preventDefault();
              }} type="number" id="nthterm" placeholder="Enter the nth Term" name="nthterm" min="0" />
              <input onClick={(e) => {
                if (num.match(/^[1-9]\d*$/g)) {
                  setAns(fib(num));
                  setIsCalc(true);
                  console.log(ans);
                } else {
                  alert('Enter only +ve numbers');
                  window.location.reload();
                }
                e.preventDefault();
              }} type="submit" value="Submit" />
            </form>
          </div>
        </section>
      </>
    );
  }
}


const fib = (num) => {
  var arr = [[0], [1]];
  for (var i = 2; i <= num; i++) {
    arr.push(add(arr[i - 1].toString(), arr[i - 2].toString()));
  }
  return arr[num];
}

const add = (str1, str2) => {
  let sum = "";
  let str1Length = str1.length;
  let str2Length = str2.length;

  if (str2Length > str1Length) {
    let temp = str2;
    str2 = str1;
    str1 = temp;
  }

  let carry = 0;
  let a;
  let b;
  let temp;
  let digitSum;
  for (let i = 0; i < str1.length; i++) {
    a = parseInt(str1.charAt(str1.length - 1 - i));
    b = parseInt(str2.charAt(str2.length - 1 - i));
    b = b ? b : 0;
    temp = (carry + a + b).toString();
    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1));
    carry = carry ? carry : 0;
    sum = i === str1.length - 1 ? temp + sum : digitSum + sum;
  }

  return sum;
}

export default App;
