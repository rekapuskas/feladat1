const firstDiv = document.createElement('div');
firstDiv.innerHTML = 'Első div';
const lastDiv = document.createElement('div');
lastDiv.innerHTML = 'Utolsó div';

document.getElementById('target').insertAdjacentElement("afterbegin", firstDiv);
document.getElementById('target').insertAdjacentElement("beforeend", lastDiv);
