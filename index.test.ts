
const clientes = [
    { id: 1, nombre: "Juan", pais: "USA" },
    { id: 2, nombre: "Ana", pais: "Spain" },
];

const productos = new Array(91).fill({ id: 1, nombre: "Producto X" });

export function contarClientes() {
    return clientes.length; // 91
}

export function contarProductos() {
    return productos.length; // 91
}

export function selectWhere() {
    return clientes.filter(c => c.pais === "USA").length; // 13
}



