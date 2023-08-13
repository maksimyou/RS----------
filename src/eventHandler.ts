class EventHandler{
    nodeTable:HTMLElement;
    nodeViwer:HTMLElement;
constructor(nodeTable:HTMLElement, nodeViwer:HTMLElement){
    this.nodeTable = nodeTable;
    this.nodeViwer = nodeViwer;
}

hangEventTheTag(arg1:WeakMap<Element,Element>,arg2:WeakMap<Element,Element>){
    for (let i = 0; i < this.nodeTable.children.length; i++) {
        console.log(this.nodeViwer.children[i],this.nodeTable.children[i])
            this.nodeViwer.children[i].addEventListener('mouseover',(e)=>this.hangEventHighlightViwer(e,arg1))
            this.nodeTable.children[i].addEventListener('mouseover',(e)=>this.hangEventHighlightTable(e,arg2))
            this.nodeViwer.children[i].addEventListener('mouseout',(e)=>this.hangEventHighlightViwer(e,arg1))
            this.nodeTable.children[i].addEventListener('mouseout',(e)=>this.hangEventHighlightTable(e,arg2))
        console.log()
        }
    }

    hangEventHighlightTable(event:Event,map:WeakMap<Element,Element>){
        const elem:HTMLDivElement = event.target as HTMLDivElement;
        console.log(map.get(elem),elem)
        if(elem.classList.contains('hovered')){
            elem.children[elem.children.length-1].remove();
            map.get(elem)?.classList.remove('color-text')
            elem.classList.remove('hovered')
        }else{
            const spanInfo = document.createElement('span');
            spanInfo.textContent = `<${elem.tagName.toLowerCase()}>`
            if(Array.from(elem.classList).filter(e=>e !== 'strobe').length === 1){
                spanInfo.textContent += ` class = "${Array.from(elem.classList).filter(e=>e !== 'strobe')[0]}" `
            }
            if(elem.id) {spanInfo.textContent += ` id = "${elem.id}" `;}
            spanInfo.textContent +=`</${elem.tagName.toLowerCase()}>`
            map.get(elem)?.classList.add('color-text')
            elem.classList.add('hovered')
            spanInfo.classList.add('show')
            elem.append(spanInfo);
        }
     
    }
    hangEventHighlightViwer(event:Event,map:WeakMap<Element,Element>){
        const elem:HTMLDivElement = event.target as HTMLDivElement;
        console.log(map,elem)
        if(elem.classList.contains('color-text')){
            map.get(elem)?.children[map.get(elem)!.children.length-1].remove();
            map.get(elem)?.classList.remove('hovered')
            elem.classList.remove('color-text')
        }else{
            const spanInfo = document.createElement('span');
            spanInfo.textContent = `<${map.get(elem)?.tagName.toLowerCase()}>`
            if(Array.from(map.get(elem)!.classList).filter(e=>e !== 'strobe').length === 1){
                spanInfo.textContent += ` class = "${Array.from(map.get(elem)!.classList).filter(e=>e !== 'strobe')[0]}" `
            }
            if(map.get(elem)?.id) {spanInfo.textContent += ` id = "${map.get(elem)?.id}" `;}
            spanInfo.textContent +=`</${map.get(elem)?.tagName.toLowerCase()}>`
            map.get(elem)?.classList.add('hovered')
            elem.classList.add('color-text')
            spanInfo.classList.add('show')
            map.get(elem)?.append(spanInfo);

        }
    }

}

export default EventHandler;