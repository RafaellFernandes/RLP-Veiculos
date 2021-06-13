export class ButtonPlus extends HTMLElement{

    constructor(){
        super();
        const div=document.createElement('div');
        const button=document.createElement('button');

        div.appendChild(button);

        this.appendChild(div);


    }
    connectedCallback(){
        const div=this.querySelector('div');
        const button=this.querySelector('button');

        div.classList.add('fixed-bottom','mb-5');
        button.classList.add('btn','btn-lg','btn-danger','rounded-pill','float-end');
        
        div.style='margin-right:2em;';
        button.innerHTML='<i class="fa fa-plus"></i>';
        button.type="button";

        button.addEventListener('click',()=>{
            let url=this.getAttribute('url');

            window.location.href=url;
        })

    }

}