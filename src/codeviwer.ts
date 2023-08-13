"use strict";
class Сodewiver{
    elemntCodeInput:HTMLDivElement;
    elemntCodeOutput:HTMLDivElement;
    elemntsEventMap:WeakMap<Element,Element>;
    elemntsEventMap2:WeakMap<Element,Element>;
    arrayTag:Array<Element> = [];
    constructor(input:HTMLDivElement){
        this.elemntsEventMap = new WeakMap();
        this.elemntsEventMap2 = new WeakMap();
        this.elemntCodeInput = input;
        this.elemntCodeOutput = document.createElement('div');
        this.elemntCodeOutput.classList.add('markup2')
    }
    setPaddingTag(elemChi:HTMLElement = this.elemntCodeOutput):void{
        for (let i = 0; i < elemChi.children.length; i++) {
            const elementStyle = elemChi.children[i] as HTMLElement;
            elementStyle.style.paddingLeft = '15px';
            if(elementStyle.children[0]){
                this.setPaddingTag(elementStyle);
            }
        }
    }

    createElementClass(elem:Element){
        const sample:HTMLDivElement = document.createElement('div');
        let text1:string = '';
        let text2:string = '';
        text1 ='<' + elem.tagName.toLowerCase();
        console.log(elem.classList.length,elem.classList.contains('strobe'))
        if(elem.classList.length === 2&&elem.classList.contains('strobe')){
            text1 +=' class = "' + elem.classList[0].toLowerCase()+'"';
        }else if(elem.classList.length === 1&&!elem.classList.contains('strobe')){
            text1 +=' class = "' + elem.classList[0].toLowerCase()+'"';
        }
        if(elem.id){
            text1 +=" id = " + elem.id.toLowerCase();
        }
        text1+= '/>';
        sample.append(text1);
        if(elem.children[0]){
            text2 += '<' +  elem.tagName.toLowerCase()+'/>';
        }
        sample.append(text2);
        this.elemntsEventMap.set(elem,sample);
        this.elemntsEventMap2.set(sample,elem);
        return sample;
    }

    collectElementTag(elem2:Element=this.elemntCodeInput,node:Element=this.elemntCodeOutput):Element{
        console.log(node,elem2.cloneNode(true));
        for (let i = 0; i < elem2.children.length; i++) {
                node.append(this.createElementClass(elem2.children[i]));
            if(elem2.children){
                this.collectElementTag(elem2.children[i], node.children[i]);
            }}
            if(!node?.classList.contains("markup")){
                const elemmmm:ChildNode = node.childNodes[1]||document.createElement('div');
                console.log(node,elemmmm)
                node?.append(elemmmm);
            }
            return this.elemntCodeOutput
    }

    getCollectElementTag():void{
        const markup = document.querySelector('.markup') as HTMLElement;
        markup.innerHTML = '';
        const wap = markup.cloneNode(true);
        console.log(wap);
        markup.append(this.collectElementTag());
        
    }
    getMapElements(){
        console.log( this.elemntsEventMap,this.elemntsEventMap2);
        return [this.elemntsEventMap,this.elemntsEventMap2];
    }
}
export default Сodewiver;