
import './App.css';
import { useState } from 'react';
 
function App() {


  // function getElem(){
  //   return <div><h1>Test Text</h1><img /></div>
  // }
  const [x,setX] =useState(0);
  const [o,setO] = useState(0);
  const [winner, setWinner] = useState("");
  const [isCross, setIsCross] = useState(true);
  const [Arr, setArr] = useState(['', '', '', '', '', '', '', '', '']);
  function name(params) {
    
  }


  function izmen(e) {
    if (winner !== "") {
      return;
    }
    if (isCross) {
      if (Arr[parseInt(e.target.id)] != "") {
        //  return;
      }
      e.target.innerHTML = 'X';
      
      setIsCross(false);
      Arr[parseInt(e.target.id)] = 'X';
      setArr(Arr)
      Vinner()
      return;
    }
    if (!isCross) {
      if (Arr[parseInt(e.target.id)] != "") {
        return;
      }
      e.target.innerHTML = 'O';
      setIsCross(true);
      Arr[parseInt(e.target.id)] = 'O';
      setArr(Arr)
      console.log(Arr);
      Vinner()
      
    }
  }

  function Vinner() {
    if (Arr[0] == Arr[1] && Arr[1] == Arr[2] && Arr[0] != '') {
      console.log(Arr[1]);
      setWinner(Arr[1]);
      if (Arr[1] === "X") {
        setX(x + 1);
      } else if (Arr[1] === "O") {
        setO(o + 1);
      }
      return;
    }
    if (Arr[0] == Arr[4] && Arr[4] == Arr[8] && Arr[4] != '') {
      console.log("vin");
      setWinner(Arr[4]);
      if (Arr[4] === "X") {
        setX(x + 1);
      } else if (Arr[4] === "O") {
        setO(o + 1);
      }
      return;
    }
    if (Arr[0] == Arr[3] && Arr[3] == Arr[6] && Arr[3] != '') {
      console.log("vin")
      setWinner(Arr[3])
      if (Arr[3] === "X") {
        setX(x + 1);
      } else if (Arr[3] === "O") {
        setO(o + 1);
      }
      return;
    }
    if (Arr[1] == Arr[4] && Arr[4] == Arr[7] && Arr[4] != '') {
      console.log("vin")
      setWinner(Arr[4]);
      if (Arr[4] === "X") {
        setX(x + 1);
      } else if (Arr[4] === "O") {
        setO(o + 1);
      }
      return;
    }
    if (Arr[2] == Arr[4] && Arr[4] == Arr[6] && Arr[4] != '') {
      console.log("vin")
      setWinner(Arr[4]);
      if (Arr[4] === "X") {
        setX(x + 1);
      } else if (Arr[4] === "O") {
        setO(o + 1);
      }
      return;
    }
    if (Arr[2] == Arr[5] && Arr[5] == Arr[8] && Arr[5] != '') {
      console.log("vin")
      setWinner(Arr[5]);
      if (Arr[5] === "X") {
        setX(x + 1);
      } else if (Arr[5] === "O") {
        setO(o + 1);
      }
      return;
    }
    if (Arr[3] == Arr[4] && Arr[4] == Arr[5] && Arr[4] != '') {
      console.log("vin")
      setWinner(Arr[4]);
      if (Arr[4] === "X") {
        setX(x + 1);
      } else if (Arr[4] === "O") {
        setO(o + 1);
      }
      return;
    }
    if (Arr[6] == Arr[7] && Arr[7] == Arr[8] && Arr[7] != '') {
      console.log("vin")
      setWinner(Arr[7]);
      if (Arr[7] === "X") {
        setX(x + 1);
      } else if (Arr[7] === "O") {
        setO(o + 1);
      }
      return;
    }

  }
  function reborn() {
    console.log("qwe");
    setArr(['', '', '', '', '', '', '', '', '']);
    setWinner("");
    setIsCross(true);
    return Arr.map((item, index) => {
      return <>
      <div className='gorizont'>
        <div key={`elem-${index}`} className='vertical' onClick={e => { izmen(e); }} id={index}>
          {item}
        </div>
        </div>
        {/* {(index + 1) % 3 == 0?<br/>:""} */}

    
      </>
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>X:{x}</div>
        <div>.   O:{o}.</div>
        <div className='Win'>Победитель {winner}</div>
        <div className='gorizont'>
        {
          
          Arr.map((item, index) => {
            return <>
            
              <div key={`elem-${index}`} className='vertical' onClick={e => { izmen(e); }} id={index}>
                {item}
              </div>

            
            
              {(index + 1) % 3 == 0?<br/>:""}
            </>
          })
        }
        </div>
        <button className='butReborn' onClick={ e => reborn(e)}>Заново </button>
        {/* <div className='gorizontal'>
          <div className='vertical' onClick={e => { izmen(e); }} id='0'>
            ffgd
          </div>
          <div className='vertical' onClick={e => { izmen(e); }} id='1'>
            ffgd
          </div>
          <div className='vertical' onClick={e => { izmen(e); }} id='2'>
            ffgd
          </div>
        </div>
        <div className='gorizontal' >
          <div className='vertical' onClick={e => { izmen(e); }} id='3'>
            ffgd
          </div>
          <div className='vertical' onClick={e => { izmen(e); }} id='4'>
            ffgd
          </div>
          <div className='vertical' onClick={e => { izmen(e); }} id='5'>
            ffgd
          </div>
        </div>
        <div className='gorizontal'>
          <div className='vertical' onClick={e => { izmen(e); }} id='6'>
            ffgd
          </div>
          <div className='vertical' onClick={e => { izmen(e); }} id='7'>
            ffgd
          </div>
          <div className='vertical' onClick={e => { izmen(e); }} id='8'>
            ffgd
          </div>
        </div> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
