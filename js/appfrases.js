const frases=[{frase:' El que madruga dios le ayuda', autor:'Pepito Prez'},
    {frase:' El que madruga dios le ayuda', autor:'Juan Ruiz'},
    {frase:' Frase de mensaje 2 aaa', autor:'Daniel Lopez'},
    {frase:'Frase de mensaje 3 bbb', autor:'Carlos Loja'},
    {frase:' Frase de mensaje 4 ccc', autor:'David Melo'},
    {frase:' Frase de mensaje 5 ddd', autor:'Luna Ipiales'},
    {frase:' Frase de mensaje 6 eee', autor:'Omar Vargas'},
]
 
const app = Vue.createApp({
    methods: {
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);
 
            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }
 
            this.listafrases.unshift(nuevaFrase);
        },
 
        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);
 
            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }
 
            this.listafrases.push(nuevaFrase);
        },

        eventoKeyPress({charCode,keyCode,key,target}){
            if(key==="Enter"){
                //console.log('evento');
                console.log('evento');
                console.log(charCode);
                console.log(keyCode);
                console.log(key);
                console.log(target.baseURI);
                this.agregarFraseFinal();
        }
 
    },

    eventoKeyPressModificador(){
            console.log('evento');
            
            console.log(key);
            console.log(target.baseURI);
            this.agregarFraseFinal();
    }

},


    data() {
        return {
            listafrases: frases,
            frase: null,
            //autor: 'Sin autor'
            autor: null
        }
    }
})
 
app.mount('#myApp')
 