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