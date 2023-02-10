import React, { useState } from 'react'
import Bouton from '../../../components/Bouton/Bouton'

function FormulaireModification(props) {
const [titre, setTitre] = useState(props.titre)
const [auteur, setAuteur] = useState(props.auteur)
const [nbPages, setNbPages] = useState(props.nbPages)
const [id, setId] = useState(props.id)

    const handleValidation = () => {
props.upDate(id, titre, auteur, nbPages)
    }
  return (
    <>
    <td><input type="text" className='form-control' onChange={(e) => setTitre(e.target.value)} value={titre}></input> </td>
    <td><input type="text" className='form-control' onChange={(e) => setAuteur(e.target.value)} value={auteur}></input></td>
    <td><input type="text" className='form-control' onChange={(e) => setNbPages(e.target.value)} value={nbPages}></input></td>
    <td>
      <Bouton typeBtn='btn-primary' clic={() => handleValidation()}>
        Valider
      </Bouton>{" "}
    </td>
    </>
  )
}

export default FormulaireModification