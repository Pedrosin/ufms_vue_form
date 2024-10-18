<template>
    <div class="container">
        <form @submit.prevent="handleSubmit"    >
            <!-- Dados Pessoais -->
            <fieldset class="fildset">
                <legend>Dados Pessoais</legend>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="nome" placeholder="Nome Completo"
                        v-model="formData.nome" required>
                    <label class="floating-label" for="floatingInput">Nome Completo</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="cpf" placeholder="CPF" v-model="formData.cpf" required>
                    <label class="floating-label" for="floatingInput">CPF</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="email" placeholder="Email" v-model="formData.email" required>
                    <label class="floating-label" for="floatingInput">Email</label>
                </div>

                <label for="data-nasc" class="label">Data de Nascimento *</label>
                <input type="date" id="data-nasc" v-model="formData.dataNasc" required>

                <div class="radio-group">
                    <label class="label">Sexo*</label>
                    <input type="radio" id="masculino" value="M" v-model="formData.sexo" required>
                    <label for="masculino">M</label>
                    <input type="radio" id="feminino" value="F" v-model="formData.sexo" required>
                    <label for="feminino">F</label>
                </div>

                <div class="form-floating mb-3">
                    <select class="form-select" id="est-civil" aria-label="Floating label select example"
                        v-model="formData.estCivil" required>
                        <option value="solteiro">Solteiro</option>
                        <option value="casado">Casado</option>
                        <option value="viuvo">Viúvo</option>
                        <option value="divorciado">Divorciado</option>
                    </select>
                </div>
            </fieldset>

            <!-- Dados de Contato -->
            <fieldset class="fildset">
                <legend>Dados de Contato</legend>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="endereco" placeholder="Endereço"
                        v-model="formData.endereco" required>
                    <label class="floating-label" for="floatingInput">Endereço</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="bairro" placeholder="Bairro" v-model="formData.bairro"
                        required>
                    <label class="floating-label" for="floatingInput">Bairro</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="cidade" placeholder="Cidade" v-model="formData.cidade"
                        required>
                    <label class="floating-label" for="floatingInput">Cidade</label>
                </div>


                <div class="form-floating">
                    <select class="form-select" id="uf" aria-label="Floating label select example" v-model="formData.uf"
                        required>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AM">AM</option>
                        <option value="AP">AP</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MG">MG</option>
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="PR">PR</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="RS">RS</option>
                        <option value="SC">SC</option>
                        <option value="SE">SE</option>
                        <option value="SP">SP</option>
                        <option value="TO">TO</option>
                    </select>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="cep" placeholder="CEP" v-model="formData.cep" required>
                    <label class="floating-label" for="floatingInput">CEP</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="celular" placeholder="Celular"
                        v-model="formData.celular" required>
                    <label class="floating-label" for="floatingInput">Celular</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="telefone" placeholder="Telefone"
                        v-model="formData.telefone" required>
                    <label class="floating-label" for="floatingInput">Telefone</label>
                </div>
            </fieldset>

            <!-- Dados de Cadastro -->
            <fieldset class="fildset">
                <legend>Dados de Cadastro</legend>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="Login" placeholder="Login" v-model="formData.login"
                        required>
                    <label class="floating-label" for="floatingInput">Login</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                        v-model="formData.senha" required>
                    <label class="floating-label" for="floatingPassword">Password</label>
                </div>
                <label class="label">Deseja receber informações sobre os seguintes assuntos:</label>
                <div class="checkbox-group">
                    <input type="checkbox" id="Tecnologia" name="interesses[]" value="Tecnologia"
                        v-model="formData.interesses">
                    <label for="tecnologia">Tecnologia</label>

                    <input type="checkbox" id="Esportes" name="interesses[]" value="Esportes"
                        v-model="formData.interesses">
                    <label for="esportes">Esportes</label>

                    <input type="checkbox" id="Automoveis" name="interesses[]" value="Automoveis"
                        v-model="formData.interesses">
                    <label for="automoveis">Automóveis</label>

                    <input type="checkbox" id="Culinaria" name="interesses[]" value="Culinaria"
                        v-model="formData.interesses">
                    <label for="culinaria">Culinária</label>

                    <input type="checkbox" id="Politica" name="interesses[]" value="Politica"
                        v-model="formData.interesses">
                    <label for="Politica">Politica</label>

                    <input type="checkbox" id="Policial" name="interesses[]" value="Policial"
                        v-model="formData.interesses">
                    <label for="Policial">Policial</label>

                    <input type="checkbox" id="Tempo" name="interesses[]" value="Tempo" v-model="formData.interesses">
                    <label for="Tempo">Tempo</label>
                </div>


                <div class="checkbox-group">
                    <input type="checkbox" id="Cultura" name="interesses[]" value="Cultura"
                        v-model="formData.interesses">
                    <label for="Cultura">Cultura</label>

                    <input type="checkbox" id="Economia" name="interesses[]" value="Economia"
                        v-model="formData.interesses">
                    <label for="Economia">Economia</label>

                    <input type="checkbox" id="Jogos" name="interesses[]" value="Jogos" v-model="formData.interesses">
                    <label for="Jogos">Jogos</label>

                    <input type="checkbox" id="Educação" name="interesses[]" value="Educação"
                        v-model="formData.interesses">
                    <label for="Educação">Educação</label>

                    <input type="checkbox" id="Viagem" name="interesses[]" value="Viagem" v-model="formData.interesses">
                    <label for="Viagem">Viagem</label>

                    <input type="checkbox" id="Empregos" name="interesses[]" value="Empregos"
                        v-model="formData.interesses">
                    <label for="Empregos">Empregos</label>

                    <input type="checkbox" id="Moda" name="interesses[]" value="Moda" v-model="formData.interesses">
                    <label for="Moda">Moda e Estilo</label>
                </div>

                <div class="checkbox-group">
                    <input type="checkbox" id="autorizo" v-model="formData.autorizo" required>
                    <label for="autorizo" id="label-autorizo">Li as regras de cadastro e autorizo a criação do
                        usuário</label>
                </div>
            </fieldset>
            <!-- Botões -->
            <div class="button-group">
                <button type="button" class="btn btn-secondary" @click="goToHome">Voltar</button>
                <button type="button" class="btn btn-danger" @click="resetForm">Limpar</button>
                <button type="button" class="btn btn-success" @click="handleSubmit()">{{ modoEdicao ? 'Salvar' : 'Confirmar' }}</button>
            </div>
        </form>
        <br>
    </div>
    <NotificacaoPreencherCampos v-if="formData.showNotificationError" id="notificacao"></NotificacaoPreencherCampos>
    <NotificacaoSucesso v-if="formData.showNotificationSuccess" id="notificacao"></NotificacaoSucesso>
</template>

<script>
import NotificacaoPreencherCampos from '@/components/Notificacoes/NotificacaoPreencherCampos.vue';
import NotificacaoSucesso from '@/components/Notificacoes/NotificacaoSucesso.vue';
//import { defineSSRCustomElement } from 'vue';

//VERIFICAR VALIDAÇÃO E MASCARA DE DADOS

// defineSSRCustomElement('email',value => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    return emailRegex.test(value) ? true : 'Email inválido';
// })

// defineSSRCustomElement('cpf', value => {
//   const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
//   return cpfRegex.test(value) ? true : 'CPF inválido';
// });

export default {
    components: {
        NotificacaoPreencherCampos,
        NotificacaoSucesso
    },
    created() {
        const index = Number(this.$route.query.usuarioEdicao);
        if (isNaN(index) === false && index !== null && index !== undefined) {
        this.editarUsuario(Number(index)); //carrega os dados do usuário se ele estiver em modo edição
     }
    },
    data() {
        return {
            formData: { //inicia o form de cadastro em branco
                nome: '',
                cpf: '',
                email: '',
                dataNasc: '',
                sexo: '',
                estCivil: '',
                endereco: '',
                bairro: '',
                cidade: '',
                uf: '',
                cep: '',
                celular: '',
                telefone: '',
                login: '',
                senha: '',
                interesses: [],
                autorizo: false,
                showNotificationError: false,
                showNotificationSuccess: false
            },
            modoEdicao: false, // Indica se o formulário está no modo de edição
            usuarioEdicao: null
        };
    },
    methods: {
        handleSubmit() {
            if (this.modoEdicao) {
                // Se estiver em modo de edição, atualiza o registro
                this.atualizarUsuario();
            } else {
                // Caso contrário, realiza o cadastro normal
                this.cadastrarUsuario();
            }
        },

        cadastrarUsuario() {
            if (Object.keys(this.formData).some(key => this.formData[key] === '' || (Array.isArray(this.formData[key]) && this.formData[key].length === 0))) { // Verifica se todos os campos do formulaário foram preenchidos
                this.formData.showNotificationError = true; // Exibe a notificação de preenchimento incorreto
                setTimeout(() => {
                    this.formData.showNotificationError = false; // Remove a notificação de preenchimento incorreto depois de 4 segundos
                }, 4000);
            } else {
            //Verifica se já existem dados no localStorage
            const existingData = JSON.parse(localStorage.getItem('usuarios')) || [];
            // Adiciona o novo usuário
            existingData.push(this.formData);
            // Atualiza o localStorage com os novos dados
            localStorage.setItem('usuarios', JSON.stringify(existingData));
            localStorage.setItem('showNotificationSuccess', 'true'); //usa o localsorage para passar parametro de sucesso para a pagina inicial mostrar notificação de sucesso
            this.goToHome();
            //this.$router.push({ path: '/', query: { success: true } });
             }
        },

        atualizarUsuario() {
            const usuarioEdicao = this.$route.query.usuarioEdicao; //pega o parametro da url
            const index = JSON.parse(usuarioEdicao); //pega o index do usuarioo com base no parametro
            this.usuarioEdicao = index;
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; //captura os dados do user no localStorage pela lista de usuários

            // Verificando se o índice é válido e se existe um usuário no índice especificado
            if (this.usuarioEdicao !== null ) {
                usuarios[this.usuarioEdicao] = { ...this.formData }; // Atualiza os dados do usuário
                localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Salva toda a lista de usuários
            } else {
                console.error('Erro: índice do usuário inválido ou usuário não encontrado.');
            }
            localStorage.setItem('showNotificationSuccess', 'true'); //usa o localsorage para passar parametro de sucesso para a pagina inicial mostrar notificação de sucesso
            this.$router.push('/consulta');
},
        goToHome() {
            this.$router.push('/'); // Redireciona para Home
        },
        resetForm() {
            Object.assign(this.$data, this.$options.data())
        },
        editarUsuario(index) {
            //usa o indice para capturar o json correspondente
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario = usuarios[index];
        this.modoEdicao = true;

        // Preencher os campos do formulário com os dados do usuário selecionado
        this.formData.nome = usuario.nome;
        this.formData.cpf = usuario.cpf;
        this.formData.email = usuario.email;
        this.formData.dataNasc = usuario.dataNasc;
        this.formData.sexo = usuario.sexo;
        this.formData.estCivil = usuario.estCivil;
        this.formData.endereco = usuario.endereco;
        this.formData.bairro = usuario.bairro;
        this.formData.cidade = usuario.cidade;
        this.formData.uf = usuario.uf;
        this.formData.cep = usuario.cep;
        this.formData.celular = usuario.celular;
        this.formData.telefone = usuario.telefone;
        this.formData.login = usuario.login;
        this.formData.senha = usuario.senha;
        this.formData.interesses = usuario.interesses;
        this.formData.autorizo = usuario.autorizo;
        }
    }
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

form {
    width: fit-content;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 50px;
}

fieldset {
    border: 2px solid #ccc;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px 20px 30px 40px;
}

legend {
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
}

.label {
    font-weight: bold;
}

input:not([type="checkbox"]),
select {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

select:focus,
input:focus {
    border-color: #4CAF50;
    outline: none;
}

select:invalid,
input:invalid {
    border-color: red;
}

.radio-group {
    width: calc(10% - 22px);
    margin-bottom: 10px;
    display: flex;
    align-items: baseline;
    gap: 10px;
}

.checkbox-group {
    width: fit-content;
    margin-bottom: 10px;
    display: flex;
    align-items: baseline;
    gap: 10px;
    flex-direction: row;
    flex-wrap: nowrap;
    width: calc(10% - 22px);
}

.checkbox-group label {
    white-space: nowrap;
    /* Impede quebra de linha dentro das labels */
}


#label-autorizo {
    color: red;
    transition: color 0.3s ease-in-out;
}

#autorizo:checked+#label-autorizo {
    color: green;
}

.button-group {
    display: flex;
    justify-content: center;
}

button {
    width: 100px;
    margin-top: 10px;
    margin-right: 30px;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 5px;
}

.floating-label input {
    height: 1px;
    /* diminui a altura da caixa de input */
    padding: 5px 10px;
    /* ajusta o padding para manter o texto no centro */
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
}

.form-floating :not(.form-select) {
    height: calc(3rem + 1px);
    line-height: 1.25;
}

.form-select {
    padding-top: 0.375rem;
    height: calc(3rem + 1px);
    line-height: 1.25;
}
</style>