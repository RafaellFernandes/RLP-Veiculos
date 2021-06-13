export class ViewPass extends HTMLElement{

    constructor(){
        super();

        const div=document.createElement('div');
        
        const input=document.createElement('input');
        const button=document.createElement('button');

       
        div.appendChild(input);
        div.appendChild(button);

        this.appendChild(div);

    }
    connectedCallback(){
        const div=this.querySelector('div');
       
        const input=this.querySelector('input');
        const button=this.querySelector('button');


        div.classList.add('col-8','input-group');
        
        input.classList.add('form-control');
        button.classList.add('btn','btn-outline-dark');
        button.innerHTML=`<span class="fa fa-eye"></span>`;

        button.type='button';
        input.type='password';

       button.addEventListener('click',()=>{
            let tipo=input.getAttribute('type');

            if(tipo==='password'){
                input.setAttribute('type','text');
                button.innerHTML=`<span class="fa fa-eye-slash"></span>`;
            }else{
                input.setAttribute('type','password');
                button.innerHTML=`<span class="fa fa-eye"></span>`;
            }



       })
       



    }
}