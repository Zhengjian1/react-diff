import {createElement, render, Element, renderDom} from './element';
import diff from './diff';
import patch from './patch';



let vertualDom1 = createElement('ul', {class:'list'}, [
        createElement('li', {class:'item'}, ['a']),
        createElement('li', {class:'item'}, ['b']),
        createElement('li', {class:'item'}, ['c'])
])

let vertualDom2 = createElement('ul', {class:'list-group', hh:'hh'}, [
        createElement('li', {class:'item'}, ['1']),
        createElement('li', {class:'item'}, ['b']),
        createElement('div', {class:'item'}, ['3'])
])



let el = render(vertualDom1)
renderDom(el, window.root)

let patchs = diff(vertualDom1, vertualDom2);
patch(el, patchs);
console.log(patchs)