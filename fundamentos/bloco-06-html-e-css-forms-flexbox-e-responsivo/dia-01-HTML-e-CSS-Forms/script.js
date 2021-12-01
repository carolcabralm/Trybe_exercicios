//não está funcionando

function choseUF() {
    let states = document.getElementById('uf');
    let allStates = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let i = 0; i < allStates.length; i += 1) {
        let option = document.createElement('option');
        option.innerText = allStates[i];
        option.value = allStates[i];
        states.appendChild(option);
    }
}