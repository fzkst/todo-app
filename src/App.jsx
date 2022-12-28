import { useState } from 'react';
import './App.css';


function App() {

  const [feladat, setFeladat] = useState("");
  const [feladatok, setFeladatok] = useState([]);



  const listazas = () => {
    const segedTomb = [];
    feladatok.forEach(elem => segedTomb.push(elem));
    if (feladat === ""){
      alert("A feladat mezőt ki kell tölteni!")
    } else {
      if (segedTomb.includes(feladat)){
        alert("Ezt már felvette a teendők közé!")
      } else {
        segedTomb.push(feladat);
        setFeladatok(segedTomb); 
        setFeladat("");
      }
    }
    
   
  };    

  const feladatTomb = [];
  feladatok.forEach((elem, index) => feladatTomb.push(
    <div className='checkbox'>
    <li key={index}><input type="checkbox" name="" id=""/> {elem}</li>    
    </div>
  ));



  return (
    <main>
      <div className="container mt-5 h-100" >
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6" id='doboz'>
            <div className="App">
              <h1>Teendők</h1>
            </div>

            <section className='my-5'>
              <h2>Feladat hozzáadása</h2>
              <div className="form-group mt-5">
                <label htmlFor="feladat_input">Feladat:</label>
                <input className="form-control" type="text" id="feladat_input" value={feladat} onChange={(event) => {setFeladat(event.target.value)}} required/>
              </div>
              <button className="btn btn-primary mt-3" type="submit" onClick={listazas}>Hozzáad</button>
            </section>

            <section>
              <h2>Teendők</h2>
              <div>
                <ul className='mt-3'>
                  {feladatTomb}
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>

  );
}

export default App;
