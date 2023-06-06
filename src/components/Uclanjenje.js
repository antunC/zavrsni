import uclanjenje from '../navslika.jpg';

function Uclanjenje() {
    return (
      <div className="App">
        

      <div className="clanstvo">
        <h1>Pomozi Hajduku u daljnim osvajanjima i uclani se</h1><br />
        
        <div className="forme">
            <p>Vase ime : </p>
            <input type="text"></input><br />

            <p>Vase prezime : </p>
            <input type="text"></input><br />
            
            <p>Datm rodenja : </p>
            <input type="text"></input><br /><br /><br />

            <button> Uclani se !</button><br /><br /><br />
            <img src={uclanjenje} className='uclanjenje'/>
        </div>
      </div>


      </div>
    );
  }
  
  export default Uclanjenje;