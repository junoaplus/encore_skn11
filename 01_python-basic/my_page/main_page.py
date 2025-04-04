import streamlit as st

st.title('실습 페이지')



nickname = st.text_input("닉네임 입력")
age = st.number_input("나이 입력: ", min_value=0, max_value=200)

r_options = ['삼성라이온즈', '기아타이거즈', 'LG트윈스', 'KT위즤', '두산베어스', 'SSG랜더스', '한화이글스', '롯데자이언츠', 'NC다이노스', '키움히어로스']
choice = st.radio('좋아하는팀 선택', r_options)
    
if st.button('입력 완료!'):
    st.write(f'이름이 뭐야?{nickname}')
    st.write(f'몇 살이야?{age}')
    st.write(f'좋아하는팀 어디야? {choice}')
