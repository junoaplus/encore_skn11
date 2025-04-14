'''
# 1. imprort 구문 사용
# our_class.py 모듈을 가져와서
import our_class as our
# 선생님 이름과 학생 수를 출력하고 
print(our.teacher_name)
print(our.student_count)

# study() 함수와 lecture() 함수를 호출하고
our.study()
our.lecture()

# 먹고 싶은 메뉴명이 5개 담긴 menus 리스트를 만들어서
menus = ['삼겹살', '햄버거', '피자', '치킨', '국밥']

# go_lunch() 함수를 호출해 오늘의 점심 메뉴를 출력해 보자!
print(our.go_lunch(menus))
'''
#######################

# 2. from-import 구문 사용 
# our_class.py 모듈을 가져와서
from our_class import teacher_name, student_count, study, lecture, go_lunch

# 선생님 이름과 학생 수를 출력하고 
print(teacher_name)
print(student_count)

# study() 함수와 lecture() 함수를 호출하고
study()
lecture()

# 먹고 싶은 메뉴명이 5개 담긴 menus 리스트를 만들어서
menus = ['삼겹살', '햄버거', '피자', '치킨', '국밥']

# go_lunch() 함수를 호출해 오늘의 점심 메뉴를 출력해 보자!
print(go_lunch(menus))

#######################

# 3. 패키지 내의 모듈 improt 
import our_class_dir.official.official_moule 
from our_class_dir.unofficial.unofficial_module import study, go_lunch

# 선생님 이름과 학생 수를 출력하고 
print(our_class_dir.official.official_moule.teacher_name)
print( our_class_dir.official.official_moule.student_count)

# study() 함수와 lecture() 함수를 호출하고
study()
lecture()

# 먹고 싶은 메뉴명이 5개 담긴 menus 리스트를 만들어서
menus = ['삼겹살', '햄버거', '피자', '치킨', '국밥']

# go_lunch() 함수를 호출해 오늘의 점심 메뉴를 출력해 보자!
print(go_lunch(menus))