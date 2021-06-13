import state from '../store/state.js';
import actions from '../store/actions.js';

export class DropDown extends HTMLElement{
    
    constructor(){
        super();

        this.state=state;
        this.actions=actions;


        const div=document.createElement('div');
        const label=document.createElement('label');
        const select=document.createElement('select');

        div.appendChild(label);
        div.appendChild(select);

        this.appendChild(div);


    }
    connectedCallback(){
        const div=this.querySelector('div');
        const label=this.querySelector('label');
        const select=this.querySelector('select');

        div.classList.add('col-8','form-group');
        label.classList.add('form-label');
        select.classList.add('form-select');

        const lb=this.getAttribute('label');
        const url=this.getAttribute('url');
        const name=this.getAttribute('name');
        select.name=name;
        label.textContent=lb;

        this.actions.listaCoisas(this.state.marcas,url);

        const db=this.state.marcas[0];

        let initopt=document.createElement('option');

        initopt.value='';
        initopt.text='';

        db.forEach(d=>{
            let opt=document.createElement('option');

            opt.value=d.id;
            opt.text=d.marca;

            select.appendChild(opt);
        })





    }

}