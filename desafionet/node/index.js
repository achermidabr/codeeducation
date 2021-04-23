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

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    let name = req.query.name;
    if(typeof name !== 'undefined' && name){
        let sql = "INSERT INTO people(name) values(?)"
        connection.query(sql,name, function (err, result) {
            if (err) throw err;
            console.log('Nome ' + name + ' adicionado')
        })
    }

    let finalResult = '<h1>Full Cycle Rocks!</h1><ul>'

    sql = "SELECT name FROM people"
    connection.query("SELECT name FROM people", function (err, result, fields) {
        if (err) throw err;
        console.log("Result:" + result);
        result.forEach(element => {
            finalResult = finalResult + '<li>' + element.name + '</li>'
        });
        connection.end()
        
        finalResult = finalResult + '</ul>'
        console.log("FinalResult: " + finalResult);

        res.send(finalResult)
      });

})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})