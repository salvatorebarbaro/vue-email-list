// const creatApp = Vue.creatApp;
// stessa cosa di scrivere:
const { createApp } = Vue

createApp({
    data() {
        return {



        }
    },
    // al caricamento della pagina
    mounted(){
        
        for(let i = 0; i<10 ;i++)
        {
            // .then significa poi
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) =>
            {
                console.log(email)
            })
        }
        
    }
}
).mount('#app');