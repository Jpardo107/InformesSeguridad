import React, { useState } from 'react'
import { Checkers, DatosInstalacion } from '../../Styles/Body.Styles'
import { Preview } from '../Preview'

export const Instalacion = () => {

    const [supervisor, setSupervisor] = useState('')
    const [turno, setTurno] = useState('')

    const [instalacion, setInstalacion] = useState('')
    const [dotacion, setDotacion] = useState('')
    const [uniformidad, setUniformidad] = useState('')
    const [novedades, setNovedades] = useState('')
    const [asistencia, setAsistencia] = useState('')
    const [aseo, setAseo] = useState('')
    const [comentario, setComentario] = useState('')

    const validar = (instalacion, dotacion, uniformidad, novedades, asistencia, aseo, comentario) => {
        if (instalacion !== '' || dotacion !== '' || uniformidad !== '' || novedades !== '' || asistencia !== '' || aseo !== '' || comentario !== '') {
            alert('Se envia reporte con todos los datos')
            console.log({ instalacion }, { dotacion }, { uniformidad }, { novedades }, { asistencia }, { aseo }, { comentario },)
        }

    }

  return (
    <>
        <DatosInstalacion>
            <form onSubmit={ev => { 
                ev.preventDefault();
                  validar(supervisor, turno, instalacion, dotacion, uniformidad, novedades, asistencia, aseo, comentario)
                }} className='my-2 mx-3' >
                  <label htmlFor='txtSupervisor' className='form-label'>Supervisor: </label>
                  <input value={supervisor} onChange={ev => setSupervisor(ev.target.value)} className='form-control' id='txtSupervisor' />
                  <label htmlFor='txtTurno' className='form-label'>Turno: </label>
                  <input value={turno} onChange={ev => setTurno(ev.target.value)} className='form-control' id='txtTurno' />
                <label htmlFor='txtInstalacion' className='form-label'>Instalacion: </label>
                <input value={instalacion} onChange={ev => setInstalacion(ev.target.value)} className='form-control' id='txtInstalacion' />
                <label htmlFor='txtDotacion' className='form-label'>Dotacion en turno: </label>
                <textarea value={dotacion} onChange={ev => setDotacion(ev.target.value)} rows={4} cols={40} className='form-control' id='txtDotacion' />
                <label htmlFor='rdbUniformidad' className='form-label'>Uniformidad: </label>
                <Checkers id='rdbUniformidad' value={uniformidad} onChange={ev => setUniformidad(ev.target.value)}>
                    <div className="form-check">
                        <input value='Si' className="form-check-input" type="radio" name="rdbUniformidad" id="rdbUniformidad1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            SI
                        </label>
                    </div>
                    <div className="form-check">
                        <input value='No' className="form-check-input" type="radio" name="rdbUniformidad" id="rdbUniformidad2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            NO
                        </label>
                    </div>
                    <div>
                    </div>
                </Checkers>
                <label htmlFor='rdbLibroNov' className='form-label'>Libro de novedades: </label>
                <Checkers id='rdbLibroNov' value={novedades} onChange={ev => setNovedades(ev.target.value)}>
                    <div className="form-check">
                        <input value='Si' className="form-check-input" type="radio" name="rdbLibroNov" id="rdbLibroNov1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            SI
                        </label>
                    </div>
                    <div className="form-check">
                        <input value='No' className="form-check-input" type="radio" name="rdbLibroNov" id="rdbLibroNov2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            NO
                        </label>
                    </div>
                    <div>
                    </div>
                </Checkers>
                <label htmlFor='rdbLibroAsis' className='form-label'>Libro de asistencia: </label>
                <Checkers id='rdbLibroAsis' value={asistencia} onChange={ev => setAsistencia(ev.target.value)}>
                    <div className="form-check">
                        <input value='Si' className="form-check-input" type="radio" name="rdbLibroAsis" id="rdbLibroAsis1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            SI
                        </label>
                    </div>
                    <div className="form-check">
                        <input value='No' className="form-check-input" type="radio" name="rdbLibroAsis" id="rdbLibroAsis2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            NO
                        </label>
                    </div>
                    <div>
                    </div>
                </Checkers>
                <label htmlFor='rbdAseo' className='form-label'>Aseo: </label>
                <Checkers id='rbdAseo' value={aseo} onChange={ev => setAseo(ev.target.value)}>
                    <div className="form-check">
                        <input value='Si' className="form-check-input" type="radio" name="rbdAseo" id="rbdAseo1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            SI
                        </label>
                    </div>
                    <div className="form-check">
                        <input value='No' className="form-check-input" type="radio" name="rbdAseo" id="rbdAseo" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            NO
                        </label>
                    </div>
                    <div>
                    </div>
                </Checkers>
                <label htmlFor='txtNovedades' className='form-label'>Novedades: </label>
                <textarea value={comentario} onChange={ev => setComentario(ev.target.value)} rows={4} cols={40} className='form-control' id='txtNovedades' />
                <button className='btn btn-danger my-2 mx-1' style={{ width: '150px' }}>Limpiar todo</button>
                <button type='submit'  className='btn btn-primary my-2 mx-1' style={{ width: '150px' }} data-bs-toggle="modal" data-bs-target="#exampleModal"> Generar Informe</button>
            </form>
            <Preview 
            supervisor = {supervisor} 
            turno = {turno} 
            instalacion = {instalacion} 
            dotacion = {dotacion} 
            uniformidad = {uniformidad}
            novedades = {novedades}
            asistencia = {asistencia}
            aseo = {aseo}
            comentario = {comentario}
            />
        </DatosInstalacion>
    </>
  )
}
