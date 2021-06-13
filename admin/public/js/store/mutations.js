export default{
    marcasClear(state,payload){
        state.splice(payload.index,1);
        localStorage.setItem('marcas',JSON.stringify(state));
    },
    marcasAdd(state,payload){
        state.push(payload);
        localStorage.setItem('marcas',JSON.stringify(state));

    }
}