# GROUP BY

-- 단일 컬럼 GROUP BY + COUNT 함수 
SELECT category_code, COUNT(*)
	FROM tbl_menu
GROUP BY category_code;

-- 단일 컬럼 GROUP BY + SUM 함수 
SELECT category_code, SUM(menu_price)
	FROM tbl_menu
GROUP BY category_code;

-- 단일 컬럼 GROUP BY + AVG 함수 
SELECT category_code, AVG(menu_price)
	FROM tbl_menu
GROUP BY category_code;

-- 다중 컬럼 GROUP BY + COUNT 함수 
SELECT category_code, menu_price, COUNT(*)
	FROM tbl_menu
GROUP BY category_code, menu_price
ORDER BY category_code, menu_price;

