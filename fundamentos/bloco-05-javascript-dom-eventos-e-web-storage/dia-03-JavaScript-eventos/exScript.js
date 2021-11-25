function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercício 1:
//O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  let ulDays = document.getElementById('days');

  for (let i = 0 ; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');


    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    }
    else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    }
    else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    }
    else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    }
         
  }

}

createDays();

//Exercício 2:
//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//Adicione a este botão a ID "btn-holiday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function feriados(feriados) {
  let buttonContainer = document.getElementsByClassName("buttons-container")[0];
  let button = document.createElement('button');
  button.id = "btn-holiday";
  button.innerHTML = feriados;
  buttonContainer.appendChild(button);
}

feriados("Feriados");

//Exercício 3:
//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
function recebeClick() {
  let clickB = document.getElementById('btn-holiday');
  let holidays = document.querySelectorAll('.holiday');
  let color = 'rgb(238,238,238)';
  let newColor = 'pink';

  clickB.addEventListener('click', function() {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === newColor) {
        holidays[i].style.backgroundColor = color;
      }
      else {
        holidays[i].style.backgroundColor = newColor;
      }
    }
  })    
};
recebeClick();


//Exercício 4:
//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//Adicione a este botão o ID "btn-friday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .


function createBF (entrada) {
  let buttonFriday = document.createElement('button');
  buttonFriday.innerHTML = entrada;
  buttonFriday.id = "btn-friday";
  let divButCont = document.getElementsByClassName("buttons-container")[0];
  divButCont.appendChild(buttonFriday);
}
createBF("Sexta-feira");

//Exercício 5:
//Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function modText (fridays) {
  let sextas = document.querySelectorAll('.friday');
  let butFriday = document.getElementById('btn-friday');
  let sentence = "Sextou!!!";

  butFriday.addEventListener('click', function() {
    for (let i = 0; i < sextas.length; i += 1) {
      if (sextas[i].innerHTML !== sentence) {
        sextas[i].innerHTML = sentence;
      }
      else {
        sextas[i].innerHTML = fridays[i];
      }
    }
  })
}

let dezFridays = [ 4, 11, 18, 25 ];
modText(dezFridays);

//Exercício 6:
//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//Dica - Propriedade: event.target .

function zoomIn() {
  let day = document.querySelector ('#days');

  day.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '600';
  })
};

function zoomOut() {
  let day = document.querySelector ('#days');

  day.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })  
};
zoomIn();
zoomOut();

//Exercício 7:
//Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function task(tarefa) {
  let task = document.createElement('span');
  let divTask = document.getElementsByClassName('my-tasks')[0];

  task.innerHTML = tarefa;
  divTask.appendChild(task);
}
task('estudar')


//Exercício 8:
//Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function legenda (cor) {
  let divTask = document.getElementsByClassName('my-tasks')[0];
  let element = document.createElement('div');
  element.className = 'task';
  element.style.backgroundColor = cor;
  divTask.appendChild(element);
}

legenda('orange');


//Exercício 9:
//Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
//Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function select () {
  let taskSelected = document.getElementsByClassName('task selected');
  let task = document.querySelector('.task');

  task.addEventListener('click', function(event) {
    if(taskSelected.length === 0) {
      event.target.className = 'task selected';
    }
    else {
      event.target.className = 'task';
    }
  })
}

select();