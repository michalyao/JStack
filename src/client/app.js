import 'babel-polyfill';
import Dog from '../shared/dog';

const browserTiny = new Dog('Browser tiny');

document.querySelector('.app').innerText = browserTiny.bark();
