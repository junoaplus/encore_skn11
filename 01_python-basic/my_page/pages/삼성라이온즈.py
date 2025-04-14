import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

st.title('최근5년순위')

# 데이터 생성
data2 = pd.DataFrame({
    "년도" : [2020, 2021, 2022, 2023, 2024],
    "최근5년순위" : [8, 3, 7, 8, 2]
})

# Matplotlib를 활용한 그래프 커스텀
fig, ax = plt.subplots()

# 라인 그래프 그리기
ax.plot(data2["년도"], data2["최근5년순위"], marker='o', linestyle='-', color='b')

# y축 반전하여 순위 1이 위에 오도록 설정
ax.invert_yaxis()

# x축 눈금(년도) 설정 - 5개만 보이도록 지정
ax.set_xticks(data2["년도"])
ax.set_xticklabels(data2["년도"], fontsize=12)

# y축 눈금(순위) 설정 - 1~10까지 보이도록 지정
ax.set_yticks(range(1, 11))
ax.set_yticklabels(range(1, 11), fontsize=12)

# 축 레이블 및 제목 설정
ax.set_xlabel("년도", fontsize=14)
ax.set_ylabel("순위", fontsize=14)
ax.set_title("최근 5년 순위", fontsize=16)

# Streamlit에 그래프 출력
st.pyplot(fig)


st.title('타자주요선수')
data = pd.DataFrame({
    "선수이름" : ["구자욱", "김영웅", "강민호", "이재현", "김지찬" ],
    "타율" : [0.343, 0.252, 0.303, 0.260, 0.316],
    "출루율" : [0.417, 0.321, 0.365, 0.365, 0.405],
    "OPS" : [1.044, 0.806, 0.861, 0.784, 0.789]
})

st.dataframe(data, use_container_width = True)

st.bar_chart(data.set_index('선수이름')['타율'])
fig = data.plot.pie(
    y="OPS",
    labels = data["선수이름"],
    autopct = "%1.1f%%",
    figsize = (6,6),
    legend = False,
    title = "선수별 OPS"
).get_figure()
st.pyplot(fig)