let arr = [];
const {Client} = require('pg')
const client = new Client({
    user: "admin",
    password: "23112006",
    host: "localhost",
    port: 5432,
    database: "ProductsTable"
})

client.connect()
.then(() => console.log("Connected successfuly"))
.then(() => client.query("insert into products values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41)", [l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23,l24,l25,l26,l27,l28,l29,l30,l31,l32,l33,l34,l35,l36,l37,l38,l39,l40,l41]))
.then(() => client.query("select * from products"))
.then(results => arr = results.rows)
.then(() => console.log(arr))
.catch(e => console.log(e))
.finally(() => client.end())

