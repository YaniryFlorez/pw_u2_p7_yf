console.log(Vue);

const app = Vue.createApp({
    //recomendado no crae este template aqui, sino en el doocumento html
    //template: `
    //<h1>Hola Mundo</h1>
    //<p>Con Vue.JS</p>
    //<p>{{ 2+ 1}}</p>
    //<p>{{[1,2,3,4,5,6,7]}}</p>
    //<p>{{{nombre:"Yaniry",apellido:"Florez"} }}</p>
    //<p>{{true? 'Activo':'Inactivo'}}</p>  
    //<p>1===1</p>   
    //<p>{{1===1}}</p>   
   // `
   //cada opcion que declaraemos vue lo conoce como opcion
   //options API

//en la opcion de methods se declaran asi
methods: {
    cambiarMensaje(){
        this.mensaje = 'Nuevo Mensaje';
        this.edad = 20;

    }
},
//la opcion data esta  creada para crear propiedades,
// que van ha ser el nexo entre el index.html y el app.js,
// su nombre es propiedades reactivas
data() {
    return {
        mensaje: 'Hola Mundo PWeb',
        edad:24
    }
}
})

app.mount('#myApp')

