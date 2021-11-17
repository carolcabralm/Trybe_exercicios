const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const urg = document.getElementsByClassName('emergency-tasks')[0];
urg.style.backgroundColor = 'pink';

const nurg = document.getElementsByClassName('no-emergency-tasks')[0];
nurg.style.backgroundColor = 'yellow';

const foo = document.getElementById('footer-container');
foo.style.backgroundColor = 'blue';

const et = document.querySelectorAll('.emergency-tasks h3');
for(let i = 0; i < et.length; i += 1) {
    et[i].style.backgroundColor = 'purple';
}

const net = document.querySelectorAll('.no-emergency-tasks h3');
for(let j = 0; j < net.length; j += 1) {
    net[j].style.backgroundColor = 'black';
}
