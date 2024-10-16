<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
</svg>
<div class="alert alert-success alert-dismissible fade show" role="alert" id="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    Cadastro realizado com sucesso! <br><a href="" @click="consultaDados" class="alert-link">Clique para Visualizar</a>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</template>

<script>
export default {
    name: 'NotificacaoSucesso',
    methods: {
        consultaDados() {
            this.$router.push('/consulta'); // Redireciona para a rota de consulta (ainda não implementada)
        }
    }
}
</script>

<style>
#alert {
  margin-top: 20px;
  padding: 10px;
  position: fixed; /* define a posição como fixa */
  top: 20px; /* define a distância do topo */
  right: 30px; /* define a distância do lado direito */
  width: 330px;

}
.alert-link {
    padding: 35px;
}
</style>

