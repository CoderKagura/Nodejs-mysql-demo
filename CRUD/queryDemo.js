exports.queryDemo = function (connection) {
  const querySql = "SELECT * FROM student";
  connection.query(querySql, (error, result) => {
    if (error) throw error;
    console.log("--------------------------SELECT----------------------------");
    console.log(result);
    console.log(
      "------------------------------------------------------------\n\n"
    );
  });
};
