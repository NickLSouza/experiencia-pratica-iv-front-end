function somenteNumeros(valor) {
    return valor.replace(/\D/g, "");
}

function formatarCPF(valor) {
    const numeros = somenteNumeros(valor).slice(0, 11);

    if (numeros.length <= 3) return numeros;
    if (numeros.length <= 6) return numeros.replace(/(\d{3})(\d+)/, "$1.$2");
    if (numeros.length <= 9) return numeros.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
    return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formatarTelefone(valor) {
    const numeros = somenteNumeros(valor).slice(0, 11);

    if (numeros.length <= 2) return numeros ? `(${numeros}` : "";
    if (numeros.length <= 6) return numeros.replace(/(\d{2})(\d+)/, "($1) $2");
    if (numeros.length <= 10) return numeros.replace(/(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
    return numeros.replace(/(\d{2})(\d{5})(\d+)/, "($1) $2-$3");
}

function formatarCEP(valor) {
    const numeros = somenteNumeros(valor).slice(0, 8);
    if (numeros.length <= 5) return numeros;
    return numeros.replace(/(\d{5})(\d{1,3})/, "$1-$2");
}

const cpf = document.querySelector("#cpf");
const telefone = document.querySelector("#telefone");
const cep = document.querySelector("#cep");

if (cpf) {
    cpf.addEventListener("input", () => {
        cpf.value = formatarCPF(cpf.value);
    });
}

if (telefone) {
    telefone.addEventListener("input", () => {
        telefone.value = formatarTelefone(telefone.value);
    });
}

if (cep) {
    cep.addEventListener("input", () => {
        cep.value = formatarCEP(cep.value);
    });
}

const formulario = document.querySelector("#form-cadastro");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

if (formulario && mensagemSucesso) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        mensagemSucesso.hidden = false;
        mensagemSucesso.focus();
        formulario.reset();
    });
}
