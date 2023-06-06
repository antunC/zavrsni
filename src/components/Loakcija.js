import poljud from "./poljud.png";
import React, { Component } from "react";

export class Loakcija extends Component { render()
   { return (
      <div className="App">
        <p className="lokacija_txt">Gradski stadion Poljud, poznat pod nadimkom Poljudska ljepotica, nalazi se u splitskoj četvrti Poljudu na sjeverozapadu grada, na mjestu gdje je nekad bilo ljekovito blato. Izgrađen je 1979. godine u sklopu izgradnje sportskih objekata 8. Mediteranskih igara.Autor projekta je istaknuti riječki arhitekt dr. Boris Magaš. Stadion je utjecao na arhitektonske vizure brojnih svjetskih stadiona u Italiji, Japanu (Kobe) i Maleziji. Nakon münchenskog Olimpijskog stadiona, izazvao je najviše pozornosti stručne javnosti na polju športske arhitekture.
        Na stadionu svoje domaće utakmice igra HNK Hajduk Split.</p>
      <br /><br />
      <img src={poljud} className="poljud"/>
      </div>
    );
   }
  }
  
  export default Loakcija;