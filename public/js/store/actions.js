import mutations from './mutations.js';

export default{

    listaCoisas(state,url){

        fetch(url).then(response=>
            response.json()).then(data=>{
                mutations.marcasClear(state,data);
                mutations.marcasAdd(state,data);
            });

    }

}