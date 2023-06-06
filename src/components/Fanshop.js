import gace from '../gace.jpg';
import gornji_dres from '../gornji_dres.jpg';
import gornja_trenerka from '../gornjidio_trenerke.jpg';
import hudica from '../hudica.jpg';
import majica from '../majica.jog.jpg';
import polo_majica from '../polo_majice.jpg';
import salica from '../salica.jpg';
import stucne from '../stucne.jpg';
import torba from '../torba.jgg.jpeg';



function Fanshop() {
    return (
      <div className="App">
        <h1>Fanshop : </h1><br /><br />
        <div className='glavni_fan'>
            

            <div className='prvi shop'>
                <img src={gace} className='slike'/><br />
                <h1 className='naslovi_shop'>Hajdukove gaće</h1><br />
                <h2 className='naslovi_shop'>19,99 €</h2>
                <a href='https://shop.hajduk.hr/new?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wedNXBeobLSd0qTyfvWM8Tz6ImY6vikT7B_R_SH_HJ26-BrLR-8a4aAt0PEALw_wcB' className='link'>Kupi</a>
            </div>

            <div className='drugi shop'>
                <img src={gornji_dres} className='slike'/><br />
                <h1 className='naslovi_shop'>Hajdukov gornji dio dresa</h1><br />
                <h2 className='naslovi_shop'>39,99 €</h2>
                <a href='https://shop.hajduk.hr/new?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wedNXBeobLSd0qTyfvWM8Tz6ImY6vikT7B_R_SH_HJ26-BrLR-8a4aAt0PEALw_wcB' className='link'>Kupi</a>
            </div>

            <div className='treci shop'>
                <img src={gornja_trenerka} className='slike'/><br />
                <h1 className='naslovi_shop'>Hajdukova trenerka</h1><br />
                <h2 className='naslovi_shop'>29,99 €</h2>
                <a href='https://shop.hajduk.hr/new?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wedNXBeobLSd0qTyfvWM8Tz6ImY6vikT7B_R_SH_HJ26-BrLR-8a4aAt0PEALw_wcB' className='link'>Kupi</a>
            </div>

            <div className='cetvrti shop'>
                <img src={hudica} className='slike'/><br />
                <h1 className='naslovi_shop'>Hajdukova hudica</h1><br />
                <h2 className='naslovi_shop'>29,99 €</h2>
                <a href='https://shop.hajduk.hr/new?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wedNXBeobLSd0qTyfvWM8Tz6ImY6vikT7B_R_SH_HJ26-BrLR-8a4aAt0PEALw_wcB' className='link'>Kupi</a>
            </div>

            <div className='peti shop'>
                <img src={majica} className='slike'/><br />
                <h1 className='naslovi_shop'>Hajdukova majica</h1><br />
                <h2 className='naslovi_shop'>19,99 €</h2>
                <a href='https://shop.hajduk.hr/new?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wedNXBeobLSd0qTyfvWM8Tz6ImY6vikT7B_R_SH_HJ26-BrLR-8a4aAt0PEALw_wcB' className='link'>Kupi</a>
            </div>

            <div className='sesti shop'>
                <img src={polo_majica} className='slike'/><br />
                <h1 className='naslovi_shop'>Hajdukova polo majica</h1><br />
                <h2 className='naslovi_shop'>24,99 €</h2>
                <a href='https://shop.hajduk.hr/new?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wedNXBeobLSd0qTyfvWM8Tz6ImY6vikT7B_R_SH_HJ26-BrLR-8a4aAt0PEALw_wcB' className='link'>Kupi</a>
            </div>

            <div className='sedmi shop'>
                <img src={salica} className='slike'/><br />
                <h1 className='naslovi_shop'>Hajdukova šalica</h1><br />
                <h2 className='naslovi_shop'>14,99 €</h2>
                <a href='https://shop.hajduk.hr/new?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wedNXBeobLSd0qTyfvWM8Tz6ImY6vikT7B_R_SH_HJ26-BrLR-8a4aAt0PEALw_wcB' className='link'>Kupi</a>
            </div>

            <div className='osmi shop'>
                <img src={stucne} className='slike'/><br />
                <h1 className='naslovi_shop'>Hajdukove štucne</h1><br />
                <h2 className='naslovi_shop'>9,99 €</h2>
                <a href='https://shop.hajduk.hr/new?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wedNXBeobLSd0qTyfvWM8Tz6ImY6vikT7B_R_SH_HJ26-BrLR-8a4aAt0PEALw_wcB' className='link'>Kupi</a>
            </div>

            {/* <div className='deveti shop'>
                <img src={torba} className='slike'/><br />
                <h1 className='naslovi_shop'>Hajdukova školska torba</h1><br />
                <h2 className='naslovi_shop'>34,99 €</h2>
                <a href='https://shop.hajduk.hr/new?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wedNXBeobLSd0qTyfvWM8Tz6ImY6vikT7B_R_SH_HJ26-BrLR-8a4aAt0PEALw_wcB' className='link'>Kupi</a>
            </div> */}
        </div>

      </div>
    );
  }
  
  export default Fanshop;