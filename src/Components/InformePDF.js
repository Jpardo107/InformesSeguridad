import React from 'react'
import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import Logo from '../Image/inout.png'


export const InformePDF = ({ supervisor, turno, instalacion, dotacion, uniformidad, novedades, asistencia, aseo, comentario }) => {
    return (
        <>
            <Document>
                <Page
                    size="A4"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "white"
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: 'start',
                            alignItems: "center",
                            backgroundColor: "white",
                            padding: 10,
                            width: '90%',
                            height: '90%',
                        }}>
                        <View style={{
                            
                        }}>
                            <Image src={Logo} style={{
                                height: '50px',
                                width: '50px',
                                borderRadius: '100%'
                            }} />
                        </View>
                        <View>
                            <Text style={{ color: "#3388af", fontSize: "25px" }}>
                                {instalacion}
                            </Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '30px'
                        }}>
                            <Text>Supervisor: {supervisor} </Text>
                            <Text>Turno: {turno} "FECHA DEL DIA"</Text>
                        </View>
                        <View >
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                borderBottom: '1px dotted black',
                                padding: '15px'
                            }}>
                                <Text> Dotacion en turno:</Text>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    justifyContent: 'center',
                                }}>
                                    <Text> {dotacion} </Text>
                                    
                                </View>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottom: '1px dotted black',
                                padding: '15px'
                            }}>
                                <Text>Uniformidad: {uniformidad} </Text>
                                <Text>Libro asistencia: {asistencia} </Text>
                                <Text>Libro novedades: {novedades} </Text>
                                <Text>Aseo: {aseo} </Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'start',
                                justifyContent: 'center',
                                padding: '15px'
                            }}>
                                <Text>Novedades: </Text>
                                <Text style={{
                                    textAlign: 'justify'
                                }}>
                                    {comentario}
                                </Text>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </>
    )
}
