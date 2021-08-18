exports.deleteDemo = function (connection) {
  const deleteSql = "DELETE FROM student WHERE Sno=?";
  const deleteParams = ["5022"];
  connection.query(deleteSql, deleteParams, (error, result) => {
    if (error) return console.log("Delete error: " + error.message);
    console.log("--------------------------DELETE----------------------------");
    console.log("DELETE affectedRows", result.affectedRows);
    console.log(
      "------------------------------------------------------------\n\n"
    );
  });
};
