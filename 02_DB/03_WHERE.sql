# WHERE

-- 1) 비교 연산자
SELECT menu_name, menu_price, orderable_status
	FROM tbl_menu
WHERE orderable_status = 'Y';

SELECT menu_name, menu_price, orderable_status
	FROM tbl_menu
WHERE orderable_status != 'Y'; -- 같지 않다 <>, !=

SELECT menu_name, menu_price, orderable_status
	FROM tbl_menu
WHERE menu_price <= 10000;

SELECT menu_name, menu_price, orderable_status
	FROM tbl_menu
WHERE 10000 < menu_price <= 20000; -- 오류는 발생하지 않지만 원하는 값을 추출해 오지 못함, 이렇게 쓰면 안됨 

-- 2) AND
SELECT menu_name, menu_price, orderable_status
	FROM tbl_menu
WHERE 10000 < menu_price
AND menu_price <= 20000;

-- 3) OR
SELECT menu_name, menu_price, orderable_status
	FROM tbl_menu
WHERE menu_PRICE > 30000
OR menu_name = '열무김치라';

-- 4) BETWEEN
SELECT menu_name, menu_price, orderable_status
	FROM tbl_menu
WHERE menu_price BETWEEN 10000 AND 20000;

SELECT menu_name, menu_price, orderable_status
	FROM tbl_menu
WHERE menu_price NOt BETWEEN 10000 AND 20000;

-- 5) LIKE
SELECT menu_name, menu_price, orderable_status
	FROM tbl_menu
WHERE menu_name LIKE '%김치%'; -- %가 의미하는것은 뭐가 붙든지

SELECT menu_name, menu_price, orderable_status
	FROM tbl_menu
WHERE menu_name NOT LIKE '%김치%';

-- 6) IN
SELECT menu_name, menu_price, orderable_status, category_code
	FROM tbl_menu
WHERE category_code IN (4, 5, 6);

SELECT menu_name, menu_price, orderable_status, category_code
	FROM tbl_menu
WHERE category_code NOT IN (4, 5, 6);

-- 7) IS NULL
SELECT category_code, category_name, ref_category_code
	FROM tbl_category
WHERE ref_category_code IS NULL;

SELECT category_code, category_name, ref_category_code
	FROM tbl_category
WHERE ref_category_code IS NOT NULL;