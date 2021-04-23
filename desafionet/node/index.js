const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysqldb',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const sqlSelect = 'SELECT name FROM people'
const sqlInsert = 'INSERT INTO people(name) values(?)'

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    let name = req.query.name;
    if(typeof name !== 'undefined' && name){
        insertSQL(name, connection)
    }

    var finalResult = '<h1>Full Cycle Rocks!</h1><ul>'
    connection.query(sqlSelect, function (err, result, fields) {
        if (err) throw err;
        console.log("Result:" + result);
        result.forEach(element => {
            finalResult = finalResult + '<li>' + element.name + '</li>' 
        });
        
        finalResult = finalResult + '</ul>'
        console.log("FinalResult: " + finalResult);
        connection.end()
        res.send(finalResult)
    });
})

function insertSQL(name, connection){
        connection.query(sqlInsert,name, function (err, result) {
            if (err) throw err;
            console.log('Nome ' + name + ' adicionado')
        })
}

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})