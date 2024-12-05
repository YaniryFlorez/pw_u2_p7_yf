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
   
},

data() {
    return {
    listafrases: frases
    }
}
})

app.mount('#myApp')