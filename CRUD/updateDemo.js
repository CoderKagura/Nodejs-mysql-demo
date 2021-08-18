exports.updateDemo = function (connection) {
  const updateSql = "UPDATE student SET Age = ? WHERE Sno = ?";
  const updateParams = ["19", "5021"];
  connection.query(updateSql, updateParams, (error, result) => {
    if (error) return console.log("Update error: " + error.message);
    console.log("--------------------------DELETE----------------------------");
    console.log("Update affectedRows", result.affectedRows);
    console.log(
      "------------------------------------------------------------\n\n"
    );
  });
};
