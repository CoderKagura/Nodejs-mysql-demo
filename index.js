let mysql = require("mysql");
const { queryDemo } = require("./CRUD/queryDemo");
const { addDemo } = require("./CRUD/addDemo");
const { deleteDemo } = require("./CRUD/deleteDemo");
const { updateDemo } = require("./CRUD/updateDemo");

// 2.获取连接
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "010601",
  database: "test",
});
// 也可以用url的形式输入参数
// const connection = mysql.createConnection("mysql://user:password@host/database");

connection.connect((error) => {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }
});

//3.进行增删改查
queryDemo(connection);
// addDemo(connection);
// deleteDemo(connection);
// updateDemo(connection);

// 4.断开连接
connection.end((error) => {
  if (error) {
    console.log("error ending: " + error.stack);
    return;
  }
});
