import arriva from '../arriva.png';
import only from '../only.jpg';
import hep from '../hep.jpg';
import radio from '../radio.jpg';
import karlovacko from '../karlovacko.jpg';
import otp from '../otp.jpg';
import macron from '../macron.jpg';
import sport from '../super_sport.jpg';
import tommy from '../tommy.jpg';

function Footer() {
    return (
      <div className="App">
        <div className="footer">
            <h1>HNK Hajduk Split</h1><br />
            <h2>HNK HAJDUK SPLIT Official website © 1911-2023. All Rights Reserved.</h2><br />
            <h3>hajduk.split@gmail.com</h3><br /><br/>
            <h1 className="sponzori">Sponzori</h1><br /><br />


            <div className='slikaa'>
                <img src={arriva} className='arriva slikeb' />
                <img src={only} className='only slikeb' />
                <img src={hep} className='hep slikeb' />
                <img src={radio} className='radio slikeb' />
                <img src={karlovacko} className='karlovacko slikeb' />
                <img src={otp} className='otp slikeb  slikeb' />
                <img src={macron} className='macron slikeb' />
                <img src={sport} className='sport slikeb' />
                <img src={tommy} className='tommy slikeb' />
            </div>

        </div>
      </div>
    );
  }
  
  export default Footer;