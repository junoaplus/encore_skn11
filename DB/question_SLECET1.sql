use menudb;
-- Q1.상위 카테고리 코드가 NULL이 아닌 카테고리의 크드와 카테고리명을 출력하세요. 단, 카테고리묘명을 기준으로 내림차순 정렬하여 출력하세요.
SELECT category_code, category_name
	FROM tbl_category
WHERE category_code IS NOT NULL
ORDER BY category_name DESC;

-- Q2.메뉴명에 '밥'이 포함되고, 가격이 20,000원 이상 30,000원 이하인 메뉴와 메뉴명과 가격을 출력하세요.
SELECT menu_name, menu_price
	FROM tbl_menu
WHERE menu_name LIKE '%밥%'
AND menu_price BETWEEN 20000 AND 30000;

-- Q3.가격이 10,000원 미만이거나, 메뉴명에 김치가 포함되는 메뉴의 모든 컬럼을 출력하세요. 단, 가격을 기준으로 오름차순 정렬하고, 추가로 메뉴명을 기준으로 내림차순 정렬하여 출력하세요.
SELECT menu_code, menu_name, menu_price, category_code, orderable_status
	FROM tbl_menu
WHERE menu_price < 10000
	OR menu_name LIKE '%김치%'
ORDER BY menu_price ASC, menu_name DESC;

-- Q4.Q1에서 출력한 카테고리명 결과를 참고하여, 카테고리가 기타, 쥬스, 커피에 해당하지 않는 메뉴 중 메뉴 가격이 13,000원인 메뉴의 모든 컬럼을 출력하세요. 단, 주문이 불가능한 상품은 출력하지 않습니다.
SELECT *
	FROM tbl_menu
WHERE category_code NOT IN (8, 9, 10)
AND menu_price = 13000
AND orderable_status = 'Y';

use employeedb;
-- Q5.재직 중이고 휴대폰 마지막 자리가 2인 직원 중 입사일이 가장 최근인 직원 3명의 사원번호, 직원명, 전화번호, 입사일, 퇴직여부를 출력하세요. 참고. 퇴사한 직원은 퇴직여부 컬럼값이 ‘Y’이고, 재직 중인 직원의 퇴직여부 컬럼값은 ‘N’
SELECT emp_id, emp_name, phone, hire_date, ent_yn
	FROM employee
WHERE ent_yn = 'N' 
AND phone LIKE '%2'
ORDER BY hire_date DESC
LIMIT 3
	