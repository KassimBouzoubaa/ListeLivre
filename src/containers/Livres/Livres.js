import React, { useState } from "react";
import Livre from "./Livre/Livre";
import FormulaireAjout from "./FormulaireAjout/FormulaireAjout";
import FormulaireModification from "./FormulaireModification/FormulaireModification";
import Alerte from "../../components/Alerte/Alerte";
function Livres(props) {
  const [alerte, setAlerte] = useState(false)
  const [msg, setMsg] = useState("")
  const [color, setColor] = useState("")
  const [idLivre, setIdLivre] = useState("");
  const [book, setBook] = useState([
    {
      id: 1,
      titre: "L'algorithmique selon H2PROG",
      auteur: "Mathieu GASTON",
      pages: 200,
    },
    {
      id: 2,
      titre: "La France du 19ème",
      auteur: "Albert PATRICK",
      pages: 500,
    },
    {
      id: 3,
      titre: "Le monde des animaux",
      auteur: "Marc MERLIN",
      pages: 250,
    },
    {
      id: 4,
      titre: "Le Virus d'asie",
      auteur: "Tya MILO",
      pages: 120,
    },
  ]);

  const handleDelete = (id) => {
    setBook(book.filter((e) => e.id !== id));
    setAlerte(true)
    setMsg("La suppression")
    setColor("danger")
  };
  const handleAjoutLivre = (titre, auteur, nbPages) => {
    setBook([
      ...book,
      { id: book.length + 1, titre: titre, auteur: auteur, pages: nbPages },
    ]);
    props.fermerAjoutLivre();
    setAlerte(true)
    setMsg("L'ajout")
    setColor("success")
  };
  const handleUpDate = (id, titre, auteur, nbPages) => {
     book.findIndex(data => {
        if(data.id === id) {
            data.titre = titre
            data.auteur = auteur
            data.pages = nbPages
            setIdLivre('')
            setAlerte(true)
    setMsg("La modification")
    setColor("warning")
        }
    })
  };

  const listes = book.map((data) => {
    if (idLivre !== data.id) {
      return (
        <tr key={data.id}>
          <Livre
            {...data}
            delete={() => handleDelete(data.id)}
            modification={() => setIdLivre(data.id)}
          ></Livre>
        </tr>
      );
    } else {
      return (
        <tr key={data.id}>
          <FormulaireModification
            id={data.id}
            upDate={handleUpDate}
            titre={data.titre}
            auteur={data.auteur}
            nbPages={data.pages}
          />
        </tr>
      );
    }
  });

  return (
    <>
         {alerte && <Alerte color={color} msg={msg} />}
      <table className='table text-center'>
        <thead>
          <tr className='table-dark'>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Nombres de pages</th>
            <th colSpan='2'>Actions</th>
          </tr>
        </thead>
        <tbody>{listes}</tbody>
      </table>
      {props.ajoutLivre && <FormulaireAjout validation={handleAjoutLivre} />}
    </>
  );
}

export default Livres;
