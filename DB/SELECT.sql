# SELECT FROM 

-- 단일 컬럼 조회
SELECT menu_name FROM tbl_menu;

-- 다중 컬럼 조회
SELECT menu_code, menu_name, menu_price, category_code, orderable_status FROM tbl_menu;

-- 전체 컬럼 조회
SELECT * FROM tbl_menu;

-- 연산 사용 가능
SELECT 12 + 17; #29
SELECT 12 - 17; #-5
SELECT 12 * 17; #204
SELECT 12 / 17; #0.7059
SELECT 12 % 17; #12


