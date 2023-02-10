import React from 'react'
import Bouton from '../../../components/Bouton/Bouton'

function Livre(props) {
  return (
    <>
    <td>{props.titre}</td>
    <td>{props.auteur}</td>
    <td>{props.pages}</td>
    <td>
      <Bouton typeBtn='btn-warning' clic={props.modification}>
        Modifier
      </Bouton>{" "}
    </td>
    <td>
      <Bouton typeBtn='btn-danger' clic={props.delete}>
        Supprimer
      </Bouton>{" "}
    </td>
    </>
  )
}

export default Livre