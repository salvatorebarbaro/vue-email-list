// const creatApp = Vue.creatApp;
// stessa cosa di scrivere:
const { createApp } = Vue

createApp({
    data() {
        return {

            emails:[],

        }
    },
    // al caricamento della pagina
    mounted(){
        
        for(let i = 0; i<10 ;i++)
        {
            // .then significa poi mettiamo una arrow function per definire l'elemento e non la finestra
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) =>
            {
                this.emails.push(email)
                console.log(this.emails[i])
            })
        }
        
    }
}
).mount('#app');