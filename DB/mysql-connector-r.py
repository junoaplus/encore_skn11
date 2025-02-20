# pip  install mysql-connector-python 

import mysql.connector

connection = mysql.connector.connect(
    host = 'localhost',
    user = 'ohgiraffers',
    password = 'ohgiraffers',
    database = 'menudb'   
)

cursor = connection.cursor()

cursor.execute("SELECT menu_code, menu_name, menu_price FROM tbl_menu")
result = cursor.fetchall()

# print(result)
for row in result:
    print('menucode:', row[0], "/", 'menucode:', row[1], '/', 'menuprice:', row[2])
    
    
cursor.close()
connection.close()