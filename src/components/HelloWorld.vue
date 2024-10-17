<template>
  <div class="container text-center">
    <h1 class="mt-5">Este é um projeto desenvolvido para a UFMS</h1>
    <p class="lead">
      Desenvolvido por Victor Pedroso Duma, como trabalho acadêmico da Faculdade Federal do Mato Grosso do Sul, Curso de Tecnologia da Informação, 2024.
      Este projeto foi criado com o objetivo de desenvolver uma aplicação web usando frameworks como Vue, Bootstrap e funções de javascript como localstorage.
    </p>

    <div class="button-group">
      <button @click="goToCadastro" type="button" class="btn btn-primary">Ir para Cadastro</button>
      <button @click="goToConsulta" type="button" class="btn btn-primary">Consultar Dados Cadastrados</button>
    </div>
  </div>
  <NotificacaoSucesso v-if="formData.showNotificationSuccess" id="notificacao"></NotificacaoSucesso>
</template>

<script>
import NotificacaoSucesso from './NotificacaoSucesso.vue';

export default {
  name: 'HelloWorld',

  components: {
    NotificacaoSucesso
  },

  data() {
    return {
      formData: {
        showNotificationSuccess: false
      }
    }
  },

  created() {
    console.log('Query Success:', this.$route.query.success); 
    if (this.$route.query.success === "true") {
      this.formData.showNotificationSuccess = true;
      setTimeout(() => {
        this.formData.showNotificationSuccess = false;
      }, 4000);
    }
  },

  methods: {
    goToCadastro() {
      this.$router.push('/cadastro'); // Redireciona para a rota de cadastro
    },

    goToConsulta() {
      this.$router.push('/consulta'); // Redireciona para a rota de consulta 
    }
  }
}
</script>

<style scoped>
.lead{
  margin-top: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 19px;}
.button-group {
  margin-top: 50px; 
}
.btn {
  margin: auto 10px;
}
</style>
