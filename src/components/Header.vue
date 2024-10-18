<template>
  <nav class="navbar">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" @click="goToHome"
        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house"
            viewBox="0 0 16 16">
            <path
              d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
          </svg>
        </span>
      </button>
        <!-- Troca o ícone dinamicamente com base no estado -->
        <button class="navbar-toggler" type="button" @click="toggleModoEscuro">
        <span v-if="modoEscuroAtivo">
          <!-- Ícone para modo escuro -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-brightness-low-fill" viewBox="0 0 16 16">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
          </svg>
        </span>
        <span v-else>
          <!-- Ícone para modo claro -->
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
            <path
              d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
          </svg>
        </span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DefoutHeader',
  props: ['modoEscuroAtivo'], // Recebe o estado do modo escuro como prop
  methods: {
    goToHome() {
      this.$router.push('/'); // Redireciona para Home
    },
    toggleModoEscuro() {
      this.$emit('trocar-tema', !this.modoEscuroAtivo); // Emite evento para o componente pai
    },
    mounted() {
    console.log("modoEscuroAtivo prop in Header.vue:", this.modoEscuroAtivo); // Verifica a prop recebida no início
  }
  }
};
</script>

<style scoped>
.navbar {
  position-anchor: top;
  top: 0;
  background-color: var(--navbar-bg);
  display: flex;
  flex-wrap: wrap;
  
  flex-direction: row;
}

path,button { 
  color: var(--nav-buttons-bg);
  border-color: var(--nav-buttons-bg)
}

.container-fluid{
  justify-content: space-around;
}

button:hover{
  path {
    color: var(--texto-secundario); 
  }
  color: var(--texto-secundario);
  background-color: var(--nav-buttons-bg);
}
</style>