"use strict"
import Сodewiver from'./codeviwer'
import Generate from './generate'
import Levels from './assets/levels'
import EventHandler from'./eventHandler'
//const levell:Element = document.querySelector('.level-item') as Element;

console.log(!JSON.parse(localStorage.getItem('result') as string),JSON.stringify(Levels.result));
if(!JSON.parse(localStorage.getItem('number') as string)){ localStorage.setItem('number',JSON.stringify(0))}

const ggg = new Generate(Levels.Levelss);//принимает массив уровней 
ggg.createTable(JSON.parse(localStorage.getItem('number') as string));// собирает стол с предметами
ggg.setTable();// устанавливает на главную страницу
const fff = new Levels.LevelsSwitch(document.querySelector('.level-item') as HTMLUListElement,ggg.getArray());
if(!JSON.parse(localStorage.getItem('result') as string)){ localStorage.setItem('result',JSON.stringify(Levels.result))}else{fff.ValidityInput(JSON.parse(localStorage.getItem('number') as string));}
document.querySelector('.custom-btn')?.addEventListener('click',()=>{
    fff.HelpCssTag(JSON.parse(localStorage.getItem('number') as string));
})
document.querySelector('.enter-btn')?.addEventListener('click',()=>{
    fff.ValidityInput(JSON.parse(localStorage.getItem('number') as string));
})
document.querySelector('.reset')?.addEventListener('click',()=>{
    fff.ResetLevels();
})
fff.switchLevel();
const codewiv = new Сodewiver(document.querySelector('.main-screen-table-review_content') as HTMLDivElement);
codewiv.getCollectElementTag()
codewiv.setPaddingTag()
codewiv.getMapElements()
const eventHandler = new EventHandler(document.querySelector('.main-screen-table-review_content') as HTMLDivElement,document.querySelector('.markup2') as HTMLDivElement)
const mapEvent =  codewiv.getMapElements();
eventHandler.hangEventTheTag(mapEvent[1],mapEvent[0]);
console.log(codewiv);
