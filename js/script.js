const {createApp} = Vue;

createApp({

  data(){
    return{
      chiamataAxios: "https://flynn.boolean.careers/exercises/api/random/mail",
      risultatoChiamata: "",
      indirizzi: []
    }
  },
  methods:{
    getApi(){
      for(let i = 0; i < 10; i++){
        axios.get(this.chiamataAxios)
        .then((response)=>{
          this.risultatoChiamata = "Indirizzo email: " + response.data.response;
          this.indirizzi.push(this.risultatoChiamata);
        })
      }
    }
    
  },
  mounted(){
    this.getApi();
  }

}).mount("#app");