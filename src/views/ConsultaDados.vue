<template>
  <div class="container">
    <h1>Consulta de Dados</h1>
    <div class="button-group">
      <button type="button" class="btn btn-secondary" @click="goToHome">Voltar</button>
      <button type="button" class="btn btn-danger" @click="resetForm">Apagar Todos os Registros</button>
      <button type="button" class="btn btn-success" @click="goToCadastro">Novo Cadastro</button>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="(usuario, index) in usuarios" :key="usuario.id">
        <div class="card text-white bg-dark mb-3">
          <div class="card-header">{{ usuario.nome }}</div>
          <div class="card-body">
            <h5 class="card-title">Detalhes do Usuário</h5>
            <p class="card-text"><strong>CPF:</strong> {{ usuario.cpf }}</p>
            <p class="card-text"><strong>Email:</strong> {{ usuario.email }}</p>
            <p class="card-text"><strong>Data de Nascimento:</strong> {{ usuario.dataNasc }}</p>
            <p class="card-text"><strong>Sexo:</strong> {{ usuario.sexo }}</p>
            <p class="card-text"><strong>Interesses:</strong> {{ usuario.interesses.join(', ') }}</p>
          </div>
          <div class="button-group-cadastro">
            <button type="button" class="btn btn-primary" @click="editarUsuario(index)" id="btn-editar">Editar</button>
            <button type="button" class="btn btn-danger" @click="apagarRegistro(index)" id="btn-deletar">Deletar</button>
          </div>
        </div>
      </div>
    </div>
    <p class="sem-dados" v-if="usuarios.length === 0">Nenhum Cadastro Encontrado.</p>
  </div>
  <NotificacaoSucesso v-if="formData.showNotificationSuccess" id="notificacao"></NotificacaoSucesso>
</template>

<script>
import NotificacaoSucesso from '@/components/Notificacoes/NotificacaoSucesso.vue';

export default {
  name: 'ConsultaDados',
  

  components: {
    NotificacaoSucesso
  },

  data() {
    return {
      usuarios: [],
      formData: {showNotificationSuccess: false}
    };
  }, 

  created() {
    if (localStorage.getItem('showNotificationSuccess') === 'true') {
        this.formData.showNotificationSuccess = true;
        setTimeout(() => {
          this.formData.showNotificationSuccess = false;
            localStorage.removeItem('showNotificationSuccess'); // Limpa o item após o uso
        }, 4000);
    }
  },

  methods: {
    goToHome() {
      this.$router.push('/');
    },
    resetForm() {
      localStorage.removeItem('usuarios'); // Limpa o localStorage
      this.usuarios = [];
    },
    goToCadastro() {
      this.$router.push('/cadastro');
    },
    apagarRegistro(index) { //apaga o registro utilizando o index dele no array como chave
      const usuarios = JSON.parse(localStorage.getItem('usuarios'));
      usuarios.splice(index, 1);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.$router.go();
    },
    editarUsuario(index) { 
         this.$router.push({
       path: '/cadastro', 
       query: { usuarioEdicao: JSON.stringify(index) }
     });
    }
  },
  mounted() {
    // Carrega os dados do localStorage
    const existingData = JSON.parse(localStorage.getItem('usuarios')) || [];
    this.usuarios = existingData;
  }
}
</script>

<style>
h1 {
  text-align: center;
  padding: 50px;
}

.sem-dados {
  text-align: center;
  padding: 50px;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  color: rgb(219, 14, 14);
  background-color: rgb(82, 79, 79);
  text-align: center;
  margin-right: 100px;
  margin-left: 100px;
  border-radius: 10px;
}

.col-md-4 {
  padding: 3%;
}

.card-header {
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  background-color: rgb(82, 79, 79);
}

.button-group-cadastro {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 15px;
  align-items: stretch;
}

button {
  width: 150px;
  margin-top: 10px;
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 5px;
}

#btn-deletar {
  width: 100px;
  margin-bottom: 5px;
  padding: 2px;
  margin-right: 1px;
}

#btn-editar {
  width: 100px;
  margin-bottom: 5px;
  padding: 2px;
  margin-right: 6px;
}
</style>
