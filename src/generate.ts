
class Generate{
    arr:Array<object>;
    table:HTMLElement;
constructor(arr:Array<object>){
    this.arr=arr;
    this.table = document.createElement('div');
}

createTable(num: number){
    //const ooo = objectKeys(this.obj[num]);
    console.log(this.arr,num);
    for (const key of Object.entries(this.arr[num])) {
        if(key[0]==='width') {this.table.style.width = key[1];}
        if(key[0]==='tags') {
            for (const key2 of key[1]) {
                const nodeTable = document.createElement(key2['tagName']);
                if(key2['class']) {nodeTable.classList.add(key2['class'])}
                nodeTable.id = key2['id']
                this.table.append(nodeTable);
                if(key2['tags']) {
                    let nodeTable2:Element = document.createElement('div');
                    for (const key3 of Object.entries(key2['tags'])) {
                        if(key3[0]==='tagName') {
                            const str:string = key3[1] as string;
                            nodeTable2 = document.createElement(str);}
                        if(key3[0]==='class'&&key3[1]) {nodeTable.classList.add(key3[1])}
                        if(key3[0]==='id') {
                            const str:string = key3[1] as string;
                            nodeTable.id = str;
                            }
                        nodeTable.append(nodeTable2);
                    }
            }
        }console.log(key)
    }}
console.dir(this.table);
}

setTable(){
   const table = document.querySelector('.main-screen-table-review_content') as HTMLElement;
   const side = document.querySelector('.main-screen-table-review_side') as HTMLElement;
   table.innerHTML = '';
   Array.from(this.table.children).forEach(e=>table?.append(e))
   const str:string = this.table.style.width; 
   console.log(this.table.style.width)
   table.style.width = str;
   side.style.width= str;
}
getArray(){
return this.arr;
}
}
export default Generate;