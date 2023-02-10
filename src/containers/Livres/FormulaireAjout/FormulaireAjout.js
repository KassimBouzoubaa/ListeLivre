import React, { useState } from "react";
import Bouton from "../../../components/Bouton/Bouton";
import {withFormik, yupToFormErrors} from "formik"
import * as Yup from "yup"

function FormulaireAjout(props) {
/* const [titre, setTitre] = useState('')
const [auteur, setAuteur] = useState('')
const [nbPages, setNbPages] = useState('') */

/* const handleValidationForm = (event) => {
  event.preventDefault()
  props.validation(titre, auteur, nbPages)
  setTitre("");
  setAuteur("");
  setNbPages("");
} */

  return (
    <>
      <h2
        className='text-center text-primary'
        style={{ fontFamily: "Sigmar One" }}
      >
        Affichage du formulaire d'ajout
      </h2>
      <form>
        <div className='mb-3'>
          <label htmlFor='titre' className='form-label'>
            Titre du livre
          </label>
          <input
            type='text'
            className='form-control'
            id="titre"
            name="titre"
            value={props.values.titre}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />
          {props.touched.titre && props.errors.titre && 
          <span style={{color:"red"}}> {props.errors.titre}</span>}
        </div>
        <div className='mb-3'>
          <label htmlFor='auteur' className='form-label'>
            Auteur
          </label>
          <input
            type='text'
            className='form-control'
            id="auteur"
            name="auteur"
            value={props.values.auteur}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />
          {props.touched.auteur && props.errors.auteur && 
          <span style={{color:"red"}}> {props.errors.auteur}</span>}
        </div>
        <div className='mb-3'>
          <label htmlFor='nbPages' className='form-label'>
            Nombre de pages
          </label>
          <input
            type='number'
            className='form-control'
            id="nbPages"
            name="nbPages"
            value={props.values.nbPages}
            onChange={(event) => props.setFieldValue("nbPages", +event.target.value)}
            onBlur={props.handleBlur}
          />
          {props.touched.nbPages && props.errors.nbPages && 
          <span style={{color:"red"}}> {props.errors.nbPages}</span>}
        </div>
        <Bouton clic={props.handleSubmit} typeBtn='btn-primary' >Valider</Bouton>
      </form>
    </>
  );
}

export default withFormik({
  mapPropsToValues : () => ({
    titre: '',
    auteur: '',
    nbPages: '',
  }),
  validationSchema : Yup.object().shape({
    titre: Yup.string()
            .min(3, 'Le titre doit avoir plus de 3 caractères')
            .max(15, 'Le titre doit avoir moins de 15 caractères')
            .required("Le titre est obligatoire"),
    auteur: Yup.string()
            .min(3, "L'auteur doit avoir plus de 3 caractères")
            .required("L'auteur est obligatoire"),
    nbPages: Yup.number()
            .lessThan(1000, 'Nombre de pages < 1000')
            .moreThan(50, 'Nombre de pages > 50')
  })
  
  ,
  handleSubmit: (values, {props}) => {
props.validation(values.titre, values.auteur, values.nbPages)
  }
})(FormulaireAjout);
