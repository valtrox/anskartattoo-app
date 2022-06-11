export interface FormState {
    nombre: string,
    apellidos: string;
    dni: string,
    fechaNacimiento: String,
    direccion: string,
    telefono: string //puede contener prefijo,
    email: string,
    poblacion: string,
    confirmacionLectura: boolean,
    fechaFirma: String,
    signatura: String,
    fotocopiaDni: any,
    consentimiento?: FormStateUnder16[]
}

export interface FormStateUnder16 {
    nombre: string,
    apellidos: string;
    dni: string,
}