const div1 = document.createElement('div');
div1.innerHTML =  'Első div';
const div2 = document.createElement('div');
div2.innerHTML = 'Második div';

document.body.prepend(div1);
document.body.append(div2);