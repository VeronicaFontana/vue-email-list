const {createApp} = Vue;

createApp({

  data(){
    return{
      chiamataAxios: "https://flynn.boolean.careers/exercises/api/random/mail",
      risultatoChiamata: "",
      indirizzi: [],
      flag: true
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
    },
    loading(){
      setTimeout(()=>{
        this.flag = false;
      },2000)
    }
    
  },
  mounted(){
    this.getApi();
    this.loading();
  }

}).mount("#app");