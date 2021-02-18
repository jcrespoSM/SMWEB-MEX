var router = require('express').Router();
const { Router } = require('express');
var connection = require('../database/connection');
var queries = require('../database/queries/items');


router.get('/lista', (req, res) =>{
    connection.query(queries.listar, (err, result)=>{
        if(err){
             console.log(err);
        }else{
            // res.status(200).json({items: result});
            res.render('templates/items', {items: result});
        }
    })
})
router.get('/editar/:id', (req,res)=>{
    connection.query(queries.items(req.params.id), (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.render('templates/editar', {items: result});
        }
    })
    // res.render('templates/editar');
})

router.post('/editar/:id', (req,res)=>{
var data ={
    id: req.params.id,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    cantidad: req.body.cantidad
}

connection.query(queries.update(data), (err, result)=>{
    if(err){
        console.log(err)
    }else{
        res.redirect('/items/lista');
    }
})
})

router.get('/eliminar/:id', (req, res)=>{
    connection.query(queries.eliminar(req.params.id), (err, result)=>{
        if(err){
            console.log(err);

        }else{
            res.redirect('/items/lista');
        }

    })

})
router.get('/agregar', (req, res)=>{
    res.render('templates/agregar');
})
router.post('/agregar', (req, res)=>{
    var data={
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    cantidad: req.body.cantidad
    }
    connection.query(queries.agregar(data), (err,result)=>{
            if(err){
                console.log(err)
            }else{
                 res.redirect('/items/lista');   
            }
    })
    
})

module.exports = router;