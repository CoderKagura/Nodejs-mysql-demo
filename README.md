## 学习了一下 node.js 怎么连接 mysql，做了一个小 demo

### 参考资料：

- [mysql - npm (npmjs.com)](https://www.npmjs.com/package/mysql)
- [Node.js 连接 MySQL | 菜鸟教程 (runoob.com)](https://www.runoob.com/nodejs/nodejs-mysql.html)

### 遇到的问题：

#### （1）nodejs 连接 mysql 时报错`Client does not support authentication protocol requested by server; consider upgrading MySQL client`

**解决方法:**

1. 打开 PowerShell，输入`mysql -u root -p`连接 mysql；（如果不行就试试`.\mysql -u root -p`）
2. 输入`ALTER USER 'root'@localhost' IDENTIFIED WITH mysql_native_password BY 'password';`（password 是你自己的 mysql 登录密码）
3. `flush privileges;`

参考 stackoverflow 上的这个回答，最后两行命令也可以在 MySQL Workbench 中执行。

<img src="C:\Users\15724\AppData\Roaming\Typora\typora-user-images\image-20210818164652016.png" alt="image-20210818164652016" style="zoom: 80%;" />

#### （2）win10 powershell 出现找不到接受实际参数"..."的位置形式参数。

![image-20210818155023744](C:\Users\15724\AppData\Roaming\Typora\typora-user-images\image-20210818155023744.png)

**解决办法**：

带有空格的路径，把路径用""括起来既可。

![image-20210818155044455](C:\Users\15724\AppData\Roaming\Typora\typora-user-images\image-20210818155044455.png)
