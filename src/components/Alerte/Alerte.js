import React from 'react'

function Alerte(props) {
    const message = `${props.msg} a été réalisé avec succès.`
    const color = `alert alert-${props.color}`
  return (
    <div className={color} role="alert">
  {message}
</div>
  )
}

export default Alerte