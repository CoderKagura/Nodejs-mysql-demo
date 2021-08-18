exports.addDemo = function (connection) {
  const addSql = "INSERT INTO student(Sno,Sname,Sex,Age) VALUES(5022,?,?,?)";
  const addParams = ["张三", "男", "19"];
  connection.query(addSql, addParams, (error, result) => {
    if (error) return console.log("Insert error: " + error.message);
    console.log("--------------------------INSERT----------------------------");
    console.log(result);
    console.log(
      "------------------------------------------------------------\n\n"
    );
  });
};
