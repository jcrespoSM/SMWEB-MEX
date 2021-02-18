const items = {

///COMIENZA LA CONSULTA DE CONTENIDO GENERAL DE INVENTARIO
    listar: `SELECT * FROM items WHERE items.estado = 1`,
    //LISTAR MONITORES QUE SEAN DE ESTADO 1, ACTIVOS
    monitores: `SELECT * FROM items WHERE items.estado = 1 and items.descripcion = 'Monitor'`,
    //LISTAR IMPRESORAS QUE SEAN DE ESTADO 1, ACTIVOS
    impresoras: `SELECT * FROM items WHERE items.estado = 1 and items.descripcion = 'Impresora'`,
    //LISTAR LAPTOPS QUE SEAN DE ESTADO 1, ACTIVOS
    laptops: `SELECT * FROM items WHERE items.estado = 1 and items.descripcion = 'Laptop'`,
    items:(id)=>{
    return `SELECT * FROM items WHERE items.iditems=${id}`
    },
/// COMIENZA LA ACTUALIZACION DE CONTENIDO EN LA TABLA GENERAL DE INVENTARIO    
    update: (data)=>{
        return `UPDATE items SET 
        nombre='${data.nombre}',
        descripcion='${data.descripcion}',
        cantidad=${data.cantidad}
        WHERE items.iditems=${data.id}`
    },

    eliminar: (id)=>{
        return `UPDATE items SET estado=0 WHERE items.iditems =${id}`
    },

    agregar: (data)=>{
        return `INSERT INTO items
        (iditems, nombre, descripcion, cantidad, estado) 
        VALUES (NULL, '${data.nombre}', '${data.descripcion}', '${data.cantidad}', '1');`
    }
};
module.exports = items;