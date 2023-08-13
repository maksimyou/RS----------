import gener from '../generate';
import codeviwe from '../codeviwer';
import EventHandler from'../eventHandler'
const result = [false,false,false,false,false,false,false,false,false,false];
const Levelss = [
    {
        width:'280px',
        result:'plate',
        tags:[
            {tagName:'plate',
            class:'strobe',
            id:"",
            tags:null},
            {tagName:'bento',
            class:'',
            id:"",
            tags:null},
            ]
        },
    {
        width:'280px',
        result:'bento',
        tags:[{tagName:'plate',
        class:'',
        id:"",
        tags:{tagName:'apple',
        class:'',
        id:"",
        tags:null}},
        {tagName:'bento',
        class:'strobe',
        id:"",
        tags:null},
    ]
    },
    {
        width:'280px',
        result:'apple',
        tags:[{tagName:'plate',
        class:'blue',
        id:"",
        tags:{tagName:'apple',
        class:'strobe',
        id:"",
        tags:null}},
        {tagName:'plate',
        class:'',
        id:"",
        tags:null},
    ]
    },
    {
        width:'380px',
        result:'apple2',
        tags:[{tagName:'bento',
        class:'',
        id:"",
        tags:{tagName:'apple2',
        class:'strobe',
        id:"",
        tags:null}},
        {tagName:'plate',
        class:'',
        id:"",
        tags:{tagName:'apple',
        class:'',
        id:"",
        tags:null}},
        {tagName:'plate',
        class:'',
        id:"",
        tags:null},
    ]
    },
    {
        width:'485px',
        result:'plate > .blue',
        tags:[{tagName:'bento',
        class:'',
        id:"",
        tags:null},
        {tagName:'plate',
        class:'',
        id:"",
        tags:null},
        {tagName:'plate',
        class:'blue',
        id:"strobe",
        tags:null},
        {tagName:'triangle',
        class:'',
        id:"",
        tags:null},
    ]
    }, 
    {
        width:'485px',
        result:'triangle',
        tags:[
        {tagName:'bento',
        class:'',
        id:"",
        tags:null},
        {tagName:'triangle',
        class:'strobe',
        id:"",
        tags:null},
        {tagName:'plate',
        class:'blue',
        id:"",
        tags:null},
        {tagName:'triangle',
        class:'strobe',
        id:"",
        tags:null},
    ]
    }, 
    {
        width:'485px',
        result:'bento',
        tags:[
        {tagName:'bento',
        class:'strobe',
        id:"",
        tags:null},
        {tagName:'triangle',
        class:'',
        id:"",
        tags:null},
        {tagName:'plate',
        class:'blue',
        id:"",
        tags:null},
        {tagName:'triangle',
        class:'',
        id:"",
        tags:null},
    ]
    }, 
    {
        width:'485px',
        result:'bento > .apple2',
        tags:[
        {tagName:'bento',
        class:'',
        id:"",
        tags:{tagName:'apple2',
        class:'strobe',
        id:"",
        tags:null}},
        {tagName:'triangle',
        class:'',
        id:"",
        tags:null},
        {tagName:'plate',
        class:'blue',
        id:"",
        tags:{tagName:'apple',
        class:'strobe',
        id:"",
        tags:null}},
        {tagName:'triangle',
        class:'',
        id:"",
        tags:null},
    ]
    }, 
    {
        width:'607px',
        result:'plate > .apple',
        tags:[
        {tagName:'bento',
        class:'',
        id:"",
        tags:{tagName:'apple2',
        class:'',
        id:"",
        tags:null}},
        {tagName:'triangle',
        class:'',
        id:"",
        tags:null},
        {tagName:'plate',
        class:'blue',
        id:"",
        tags:{tagName:'apple',
        class:'strobe',
        id:"",
        tags:null}},
        {tagName:'triangle',
        class:'',
        id:"",
        tags:null},
        {tagName:'plate',
        class:'',
        id:"",
        tags:{tagName:'apple',
        class:'strobe',
        id:"rotten",
        tags:null}},
    ]
    }, 
    {
        width:'607px',
        result:'plate > .apple',
        tags:[
        {tagName:'triangle',
        class:'',
        id:"",
        tags:{tagName:'apple',
        class:'strobe',
        id:"",
        tags:null}},
        {tagName:'triangle',
        class:'strobe',
        id:"",
        tags:null},
        {tagName:'plate',
        class:'blue',
        id:"",
        tags:{tagName:'apple',
        class:'strobe',
        id:"",
        tags:null}},
        {tagName:'triangle',
        class:'',
        id:"",
        tags:null},
        {tagName:'plate',
        class:'',
        id:"",
        tags:{tagName:'apple',
        class:'strobe',
        id:"rotten",
        tags:null}},
    ]
    }, 
    
]


const  gegege = new gener(Levelss); 


class LevelsSwitch {
    levelItem:HTMLUListElement;
    arr:Array<object>;
    constructor(items:HTMLUListElement, arr:Array<object>){
    this.levelItem = items;
    this.arr = arr;
    }

switchLevel(){
    console.log(this.arr);
    Array.from(this.levelItem.children).forEach(e=>{
        e.addEventListener('click',(e)=>{
            const elem = e.currentTarget  as HTMLElement;
            localStorage.setItem('number',JSON.stringify((e.currentTarget as Element).id));
            Array.from(this.levelItem.children).forEach(el=>{
                if(el.classList.contains('chosen')) el.classList.remove('chosen')
            })
            if(!elem.classList.contains('chosen')){
                elem.classList.add('chosen');
            }
            const numbe:number = Number(elem.id);
            console.log(elem,numbe)
            gegege.createTable(numbe);
            gegege.setTable()
            const markup = document.querySelector('.markup') as HTMLElement;
            markup.innerHTML = '';
            const code = new codeviwe(document.querySelector('.main-screen-table-review_content') as HTMLDivElement); 
            code.getCollectElementTag()
            code.setPaddingTag()
            code.getMapElements()
            const eventHandler = new EventHandler(document.querySelector('.main-screen-table-review_content') as HTMLDivElement,document.querySelector('.markup2') as HTMLDivElement)
            const mapEvent =  code.getMapElements();
            eventHandler.hangEventTheTag(mapEvent[1],mapEvent[0]);
        })
    })
} 

ValidityInput(num:number){
interface Lll {
    result?:string;
}
const str:string = (document.querySelector('.input-strobe') as HTMLInputElement).value;
let resBool:Array<boolean> = [];
const levell:Element = document.querySelector('.level-item') as Element;
    const obj:Lll = this.arr[num]
    const sss:string = localStorage.getItem('result') as string;
        resBool = JSON.parse(sss);
        console.log(resBool);
    if(obj.result === str){
        resBool[num] = true; 
    }
    
    if(!resBool[num]){
        document.querySelector('.css-html-wrapper')?.classList.add('elem-shecker');
        setTimeout(()=>{
            document.querySelector('.css-html-wrapper')?.classList.remove('elem-shecker');
        },500)
    }
console.log(resBool);

for (let i = 0; i < levell.children.length; i++) {
    if(resBool[i]) {levell.children[i].children[1].classList.add('finish')}
}
Array.from(this.levelItem.children).forEach((e,id)=>{
    console.log(id,num)
if(id === Number(num)){
    e.classList.add('chosen')
}else{
    e.classList.remove('chosen')
}
})
console.log(resBool);
localStorage.setItem('result',JSON.stringify(resBool));
}

HelpCssTag(num:number){
    interface Lll {
        result?:string;
    }
    const obj:Lll = this.arr[num]
    let text = '                                        '+obj.result;
    const timerId = setInterval(()=>{
    const input: HTMLInputElement = document.querySelector('.input-strobe') as HTMLInputElement;
    input.value = text;
    if(text[0] === ' ')  {
        text = text.slice(1)
    }else{
        clearInterval(timerId);
    }
},10)

}
ResetLevels(){
    localStorage.setItem('result',JSON.stringify(result))
    Array.from(this.levelItem.children).forEach((e)=>{
        console.log(e)
        e.children[1].classList.remove('finish')
    })
}
}
export default {LevelsSwitch,Levelss,result};