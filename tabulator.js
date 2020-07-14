//Build Tabulator
var table = new Tabulator("#example-table", {
    height:"311px",
    layout:"fitColumns",
    placeholder:"No Data Set",
    columns:[
    {title:"appKey", field:"appKey", sorter:"string"},
        {title:"appSecret", field:"appSecret", sorter:"string",},
        {title:"productSellerCode", field:"productSellerCode", sorter:"string"},
        {title:"title", field:"title",sorter:"string"},
        {title:"subtitle", field:"subtitle", sorter:"string"},
        {title:"description", field:"description", sorter:"string"},
        {title:"domestic", field:"domestic", sorter:"string",},
        {title:"category_id", field:"category_id", sorter:"string"},
        {title:"specialProductInfo_key1", field:"specialProductInfo_key1",sorter:"string"},
        {title:"specialProductInfo_value1", field:"specialProductInfo_value1", sorter:"string"},
        {title:"price", field:"price", sorter:"string"},
        {title:"currencyType", field:"currencyType", sorter:"string",},
        {title:"image_url1", field:"image_url1", sorter:"string"},
        {title:"image_order1", field:"image_order1",sorter:"string"},
        {title:"approvalStatus", field:"approvalStatus", sorter:"string"},
        {title:"groupAttribute", field:"groupAttribute", sorter:"string"},
        {title:"groupItemCode", field:"groupItemCode", sorter:"string",},
        {title:"itemName", field:"itemName", sorter:"string"},
        {title:"attribute_name1", field:"attribute_name1", sorter:"string"},
        {title:"attribute_value1", field:"attribute_value1", sorter:"string"},
        {title:"saleStartDate", field:"saleStartDate", sorter:"string"},
        {title:"saleEndDate", field:"saleEndDate", sorter:"string",},
        {title:"productionDate", field:"productionDate", sorter:"string"},
        {title:"expirationDate", field:"expirationDate",sorter:"string"},
        {title:"productCondition", field:"productCondition", sorter:"string"},
        {title:"preparingDay", field:"preparingDay", sorter:"string",},
        {title:"discount_startDate", field:"discount_startDate", sorter:"string"},
        {title:"discount_endDate", field:"discount_endDate", sorter:"string"},
        {title:"discount_type", field:"discount_type", sorter:"string"},
        {title:"stockItem_bundle1", field:"stockItem_bundle1", sorter:"string"},
        {title:"stockItem_mpn1", field:"stockItem_mpn1", sorter:"string",},
        {title:"stockItem_gtin1", field:"stockItem_gtin1", sorter:"string"},
        {title:"stockItem_n11CatalogId1", field:"stockItem_n11CatalogId1", sorter:"string"},
        {title:"stockItem_oem1", field:"stockItem_oem1", sorter:"string"},
        {title:"stockItem_quantity1", field:"stockItem_quantity1", sorter:"string"},
        {title:"stockItem_sellerStockCode1", field:"stockItem_sellerStockCode1", sorter:"string",},
        {title:"stockItem_attribute_name1", field:"stockItem_attribute_name1", sorter:"string"},
        {title:"stockItem_attribute_value1", field:"stockItem_attribute_value1", sorter:"string"},
        {title:"stockItem_optionPrice1", field:"stockItem_optionPrice1", sorter:"string"},
        {title:"unitType", field:"unitType", sorter:"string"},
        {title:"unitWeight", field:"unitWeight", sorter:"string"},
    ],
});

async function test() {
            let url = 'https://raw.githubusercontent.com/yani-eniz/WebProject/master/urls.json';
            let response = await fetch(url);
            let commits = await response.json(); // читаем ответ в формате JSON
            table.setData(commits);
            console.log(commits);
}
function test1() {
            let arr;
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
            .then(() => client.query("select * from products"))
            .then(results => arr = results.rows
            .then(() => table.setData(arr))
            .then(() => console.log(arr))
            .catch(e => console.log(e))
            .finally(() => client.end())
            )}