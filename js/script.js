const {createApp} = Vue;

createApp({

  data(){
    return{
      chiamataAxios: "https://flynn.boolean.careers/exercises/api/random/mail",
      risultatoChiamata: ""
    }
  },
  methods:{
    getApi(){
      axios.get(this.chiamataAxios)
      .then((response)=>{
        this.risultatoChiamata = "Indirizzo email: " + response.data.response
      })
    }
    
  },
  mounted(){
    this.getApi();
  }

}).mount("#app");