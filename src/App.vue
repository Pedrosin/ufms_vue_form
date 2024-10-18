<template>
   <main :class="{'modo-escuro': modoEscuroAtivo}">
    <Header @trocar-tema="trocarTema" :modoEscuroAtivo="modoEscuroAtivo"></Header> <!-- Passa o evento para o Header -->
    <div id="app" class="conteudo">
      <div class ="container">
      <img alt="Vue logo" src="./assets/UFMS.png">
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</main>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';


export default {
  name: 'App',
  components: {
    Header, 
    Footer
  },
  data () {
  return{
    modoEscuroAtivo: false //inicializa no modo claro
  }
},
  methods: {   
     //Troca o estado do modo escuro no Header. true para ativar o modo escuro, false para desativar.
    trocarTema(modoEscuroAtivo) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
}

</script>

<style>
 main{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    --bg-primario: #fff;
    --texto-primario: #000;
    --navbar-bg: #1b1d1f;
    --nav-buttons-bg: #fff;
  }

img {
  display: flow-root;
  padding-top: 30px;
  margin: auto;
}

.button-group {
  margin-top: 50px; 
  display: flex;
  justify-content: center;
}

  /* modo escuro das paginas auxiliares*/
  main.modo-escuro{
    --bg-primario: rgb(35, 35, 35);
    --bg-secundario: #0d3b66;
    --texto-primario: #fff;
    --texto-secundario: #000;
    --bg-form: #363636;
    --nav-buttons-bg: rgb(211, 216, 221);
    --navbar-bg: #363636;
  }
  .conteudo {
    background-color: var(--bg-primario);
    color: var(--texto-primario);
  }
  .fildset{
    background-color: var(--bg-form);
    color: var(--texto-secundario);
  }
  label, legend{
    color: var(--texto-primario);
  }
  .floating-label{
    color: var(--texto-secundario)
  }
</style>
