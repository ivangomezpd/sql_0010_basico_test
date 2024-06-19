import { Database } from "bun:sqlite";
const db = new Database("./Northwind_small.sqlite");

export function contarClientes(): number {
    // poner la sentencia SQL en la constante siguiente
    // SE TRATA DE HACER UNA SELECT QUE DEVUELVE EN UNA SOLA FILA 
    // Y EN UNA SOLA COLUMNA LLAMADA CONTADOR EL NÚMERO DE CLIENTES

    // const QUERY = "select count(*) contador from customer";
    // const query = db.query<any, any>(QUERY);
    // return query.all()[0].contador;
    return 0
}
export function contarProductos(): number {
    // poner la sentencia SQL en la constante siguiente
    // SE TRATA DE HACER UNA SELECT QUE DEVUELVE EN UNA SOLA FILA 
    // Y EN UNA SOLA COLUMNA LLAMADA CONTADOR EL NÚMERO DE PRODUCTOS
    
    return 0
}

export function selectWhere(): number {
    // contar cuantos  son los clientes (tabla customer) de country USA
    
   return 0
}

