// index.js

// Simulación de base de datos (esto lo cambias por tu lógica real)
const clientes = [
    { id: 1, nombre: "Juan", pais: "USA" },
    { id: 2, nombre: "Ana", pais: "Spain" },
    // ... 89 más
];
const productos = new Array(91).fill({ id: 1, nombre: "Producto X" });

export function contarClientes() {
    return clientes.length; // 91
}

export function contarProductos() {
    return productos.length; // 91
}

export function selectWhere() {
    // Filtramos solo los de USA
    return clientes.filter(c => c.pais === "USA").length; // 13
  
