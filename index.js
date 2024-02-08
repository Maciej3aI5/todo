let obiekty=[];
document.getElementById('submit').addEventListener("click",()=>{
    if(document.getElementById('nazwa').value!="")
    {
        const nazwa = document.getElementById('nazwa').value;
        const projekt = new Projekt(nazwa);
        projekt.dodawanie();
        obiekty.push(projekt);
    }
})
class Projekt{
    constructor(nazwa){
        this.lista=document.createElement('li');
        this.lista2=document.createElement('li');
        this.ul=document.createElement('ul');
        this.button=document.createElement('button');
        this.button.innerText=nazwa;
        this.todo=document.createElement('div');
        this.buttonTodo=document.createElement('button');
        this.buttonTodo.innerText="Dodaj";
        this.input=document.createElement('input');
    }
    dodawanie(){
        this.lista.id=Math.floor(Math.random()*1000);
        this.lista.appendChild(this.button);
        this.lista.classList.add('element');

        this.todo.style.height="100%";
        this.todo.style.display="none";
        this.todo.classList.add('todo');
        this.input.classList.add('input');
        this.input.setAttribute('type','text');

        document.querySelector('ul').appendChild(this.lista);
        document.getElementById('lista').appendChild(this.todo);

        this.buttonTodo.classList.add('guzior');
        
        this.todo.appendChild(this.input);
        this.todo.appendChild(this.buttonTodo);
        this.todo.appendChild(this.ul);
        this.ul.classList.add('ul');
        this.button.addEventListener("click",()=>{
            for(let i=0;i<obiekty.length;i++)
            {
                if(obiekty[i].lista.id==this.lista.id){
                    obiekty[i].todo.style.display="flex";
                }
                else{
                    obiekty[i].todo.style.display="none";
                }
            }
        })
        this.buttonTodo.addEventListener("click",()=>{
            if(this.input.value!=""){
            const list=document.createElement('li');
            list.innerHTML=this.input.value+'  <input class="checkbox" type="checkbox">';
            list.classList.add("element");
            this.ul.appendChild(list);
            }
        })
    }
}