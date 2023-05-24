import React from 'react'

export const Footer = () => {
  return (
    <div style={{
      height: '10vh',
      borderTop: '1px solid black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      backgroundColor: 'rgb(31,169,207,255)'
    }}>
      <p style={{
        color: 'white'
      }}>No olvide: "Repasar protocolos de seguridad y autocuidado en cada instalacion"</p>      
    </div>
  )
}
