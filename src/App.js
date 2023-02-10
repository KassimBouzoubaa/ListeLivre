import React, { useState } from "react";
import TitreH1 from "./components/Titres/TitreH1";
import Bouton from "./components/Bouton/Bouton";
import Livres from "./containers/Livres/Livres";
import Alerte from "./components/Alerte/Alerte";
function App() {
const [btn, setBtn] = useState(true)
const [alerte, setAlerte] = useState(false)

  return (
    <div className='container'>
     {alerte && <Alerte  />}
      <TitreH1>Page listant les livres</TitreH1>
      <Livres ajoutLivre={!btn} fermerAjoutLivre={() => setBtn(!btn)}/>
      <Bouton
        typeBtn='btn-success'
        css='w-100'
        clic={() => setBtn(!btn)}
      >
        {btn ? "Ajouter" : "Fermer l'ajout"}
      </Bouton>
    </div>
  );
}

export default App;
