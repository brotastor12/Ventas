
class Producto{
    constructor(cat, pre, nom){
        this.categoria = cat;
        this.precio = pre;
        this.nombre = nom;

    }
    set_price(pre){
        precio = pre;
    }
    set_categoria(cat){
        categoria = cat;
    }
    set_name(nom){
        nombre = nom;
    }
    get_name(){
        return this.nombre
    }
    get_price(){
        return this.precio
    }
    get_cat(){
        return this.categoria
    }
}



