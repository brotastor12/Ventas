
class Carro{
    constructor(){
        this.lista = {};
        this.precioTotal = 0;
    }
    agregarProducto(prod, cant){
        if(this.lista[prod] != null){
            this.lista[prod] += cant;
        } else{
            this.lista[prod] = cant;
        }
        this.precioTotal += prod.precio * cant;
    }
    get_prod(indice){
        this.lista[indice];
    }
    print_carro(){
        for(let i = 0; i< this.lista.length; i++){
            console.log(this.lista[i].nombre + ' ' + this.lista[i][this.lista[i]]);
        }
        console.log(this.precioTotal);
    }
    
}