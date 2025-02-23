-- Q1. 재직 중인 ‘대리’들의 직원명, 직급명, 급여, 사원번호, 이메일, 전화번호, 입사일을 출력하세요. 단, 급여를 기준으로 내림차순 출력하세요.
SELECT a.emp_name, b.job_name, a.salary, a.emp_id, a.email, a.phone, a.hire_date
	FROM employee a JOIN job b on a.job_code = b.job_code
WHERE b.job_name = '대리' 
ORDER BY a.salary DESC;

-- Q2. 재직 중인 직원들을 대상으로 부서별 인원, 급여 합계, 급여 평균을 출력하고, 마지막에는 전체 인원과 전체 직원의 급여 합계 및 평균이 출력되도록 하세요. 단, 출력되는 데이터의 헤더는 컬럼명이 아닌 ‘부서명’, ‘인원’, ‘급여합계’, ‘급여평균’으로 출력되도록 하세요.
SELECT b.DEPT_TITLE AS '부서명', COUNT(e.emp_id) AS '인원', SUM(e.salary) AS '급여합계', AVG(e.salary) AS '급여평균'
	FROM employee e JOIN DEPARTMENT b ON e.dept_code = b.dept_id
GROUP BY b.dept_title

UNION ALL

SELECT '전체', COUNT(*), SUM(salary), AVG(salary)
    FROM employee;

-- Q3. 전체 직원의 직원명, 주민등록번호,전화번호,부서명,직급명을 출력하세요. 단, 입사일을 기준으로 오름차순 정렬되도록 출력하세요.
SELECT a.emp_name, a.emp_no, a.phone, c.dept_title, b.job_name
	FROM employee a JOIN job b ON a.job_code = b.job_code JOIN department c on a.dept_code = c.dept_id
ORDER BY hire_date ASC;

-- Q4-1.<1단계> 전체 직원 중 연결된 관리자가 있는 직원의 인원을 출력하세요. 참고. 연결된 관리자가 있다는 것은 관리자사번이 NULL이 아님을 의미함
SELECT COUNT(*) AS '관리자가 있는 직원 인원'
	FROM employee
WHERE manager_id IS NOT NULL;

-- Q4-2. <2단계> 1단계에서 조회한 내용에는 문제가 조금 있습니다. 관리자사번이 존재하여 연결된 관리자가 있기는 하나, 해당 관리자가 직원 목록에 존재하지 않는 직원이 있습니다.
SELECT COUNT(*) AS '유효한 관리자가 있는 직원 인인'
	FROM employee e
WHERE manager_id IS NOT NULL
AND EXISTS(
	SELECT 1
    FROM employee a
    WHERE e.manager_id = a.emp_id
);

-- Q4-3. <3단계> 모든 직원의 직원명과 관리자의 직원명을 출력하세요. 참고. ‘모든 직원’이므로 관리자가 존재하지 않는 직원도 출력되어야 합니다.
SELECT a.emp_name, e.emp_name
	FROM employee a LEFT JOIN employee e ON a.manager_id = e.emp_id;
    
-- Q4-4. <4단계> 관리자가 존재하는 직원의 직원명, 부서명, 관리자의 직원명, 관리자의 부서명을 출력하세요.
SELECT a.emp_name, b.dept_title, e.emp_name, d.dept_title
	FROM employee a LEFT JOIN employee e ON a.manager_id = e.emp_id JOIN DEPARTMENT b ON a.dept_code = b.dept_id JOIN DEPARTMENT d ON e.dept_code = d.dept_id
WHERE a.manager_id IS NOT NULL
AND EXISTS(
	SELECT 1
    FROM employee a
    WHERE e.manager_id = a.emp_id
);