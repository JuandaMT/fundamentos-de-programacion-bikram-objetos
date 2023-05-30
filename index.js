// OBJETOS
// DECLARACION
// 1
const Coche = {
    marca: "", 
    modelo:"",
    matricula: "",
}
// 2
const Casa = {
    codPostal:"",
    calle:"",
    portal:"",
    piso:"",
}
// 3
const FullStackDeveloper = {
    lenguajes:[],
    proyectos:[],
}
// 4
const Perro = {
    nombre:"",
    raza:"",
    color:"",
    edad:"",
    ladrar: function(){
        console.log("ladrido")
    },
    popo: function(){
        return Math.random() * 3
    }
}
// 5
const portatil = {
    marca: "Asus"
}
let marcaPortatil = portatil.marca
console.log(marcaPortatil)
// 6
let marcaPortatil2 = portatil["marca"]
// 7  ECHARLE UN VISTAZO
let grupos = Concierto.grupos
// 8
const RGB = [Led.rojo, Led.verde, Led.azul]
// 9
Portatil.modelo = 'P345'
// 10
Concierto.cartelera = "Guns N' Roses"
// 11
Concierto.fecha = new Date()
// 12
Impresora.imprimiendo = {
    nombreArchivo:"",
    copias:"",
    numPaginas:"",
}
// 13
const Noticia = {
    titular: "",
    cuerpo: "",
}
// 14
const Persona = {
    nombre:"",
    apellidos:"",
    edad:"",
}
// 15
const Avion = {
    numPasajeros: "",
    despegar: function(){
        console.log('despegando')
    },
    volar: function(){
        console.log('llegando al destino')
    },
    aterrizar: function(){
        console.log('aterrizando')
    }
}
// 16
const Paquete = {
    contenido: []
}
// 17
const Pais = {
    numHabitantes:"",
    continente:"",
    gentilicio:"",
}
// 18
let codError = O_Error.codigo;
// 19
let integrantes = Grupo.integrantes
// 20
let nivelesTinta = Impresora.tinta
// 21
let pixeles = Pantalla.pixeles
// 22
let especificaciones = Movil.especificaciones
// 23
Grupo.numIntegrantes = 5
// 24
Pantalla.dimensiones = '1920x1080'
// 25
Led.encendido = 'false si vale true y true si vale false'
// 26
Movil.temperatura = '20º'