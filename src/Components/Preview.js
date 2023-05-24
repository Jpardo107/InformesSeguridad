import React from 'react'
import { InformePDF } from './InformePDF'
import { PDFDownloadLink } from '@react-pdf/renderer'

export const Preview = ({ supervisor, turno, instalacion, dotacion, uniformidad, novedades, asistencia, aseo, comentario }) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Resumen de supervision</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <InformePDF
                            supervisor={supervisor}
                            turno={turno}
                            instalacion={instalacion}
                            dotacion={dotacion}
                            uniformidad={uniformidad}
                            novedades={novedades}
                            asistencia={asistencia}
                            aseo={aseo}
                            comentario={comentario} />

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <PDFDownloadLink
                            document={<InformePDF supervisor={supervisor}
                                turno={turno}
                                instalacion={instalacion}
                                dotacion={dotacion}
                                uniformidad={uniformidad}
                                novedades={novedades}
                                asistencia={asistencia}
                                aseo={aseo}
                                comentario={comentario} />}
                            fileName="ReporteSupervision.pdf">
                            <button type="button" className="btn btn-primary">Descargar reporte</button>
                        </PDFDownloadLink>

                    </div>
                </div>
            </div>
        </div>
    )
}
