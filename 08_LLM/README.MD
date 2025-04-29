# encore_skn11

### **sk 네트웍스 famliy ai camp를 진행하면서 배우고 실습한 코드를 기록하고 정리하는 공간(ㅣㅣㅡ)**

- 4월 15일 화요일 - llm - Prompt Engineering

    - 프롬프트 엔지니어링(Prompt Engineering)
        - LLM의 출력을 원하는 방향으로 유도하기 위한 기법
        - 지시문(prompt)을 구조적으로 설계해 성능 극대화
        - Role 설정, 조건부 지시문, few-shot 예시 등이 주요 전략
    - 주요 실습
        - OpenAI API의 `ChatCompletion` 활용
        - 시스템, 사용자, 어시스턴트 역할을 구분해 메시지 설계
        - 다양한 프롬프트 스타일의 응답 차이 비교 실험

    | 기법 유형 | 설명 | 예시 |
    |----------|------|------|
    | Role 기반 | 역할 지정으로 응답 톤 제어 | “너는 전문 요리사야.” |
    | Few-shot | 예시 제공으로 응답 유도 | “Q: ... A: ...” 반복 |
    | Chain-of-Thought | 중간 사고 과정 명시 | “생각해보면, … 따라서 …” |

---

- 4월 16일 수요일 - llm - Chat Completion과 대화 흐름 제어

    - Chat Completion API
        - GPT 모델을 활용한 멀티턴 대화 설계 가능
        - `messages` 파라미터로 이전 대화 히스토리 전달
        - temperature, top_p로 출력 다양성 조정
    - 주요 개념
        - system role을 통한 응답 스타일 설정
        - 사용자 질문과 모델 응답의 컨텍스트 유지
        - 대화 상태에 따른 자연스러운 흐름 조정
    - 주요 실습
        - 프롬프트 설계에 따른 대화 흐름 실험
        - 실시간 정보 생성, 요약, 감정 분석 프롬프트 작성

---

- 4월 17일 목요일 - llm - 음성 합성(TTS)과 음성 인식(STT)

    - TTS (Text-to-Speech)
        - 텍스트 데이터를 음성으로 변환
        - `gTTS`, `pyttsx3`, ElevenLabs 등의 라이브러리 활용
    - STT (Speech-to-Text)
        - 음성을 텍스트로 변환
        - `speech_recognition`, Whisper 등 실습
    - 주요 실습
        - 사용자의 음성을 텍스트로 인식해 응답 생성
        - TTS로 모델의 응답을 음성으로 출력
        - 마이크 입력과 함께 실시간 인터랙션 구현

    | 기술 | 설명 | 주요 라이브러리 |
    |------|------|-----------------|
    | TTS | 텍스트 → 음성 | gTTS, pyttsx3, Edge TTS |
    | STT | 음성 → 텍스트 | speech_recognition, whisper |

---

- 4월 18일 굼요일 - llm - 임베딩과 벡터 데이터베이스

    - 임베딩(Embedding)
        - 텍스트를 고차원 벡터 공간으로 변환
        - 의미 기반 유사도 검색, 클러스터링 등에 활용
    - 벡터DB
        - Chroma, FAISS, Pinecone 등을 활용한 벡터 기반 검색
        - 텍스트 검색 → 임베딩 → 유사도 기반 추천
    - 주요 실습
        - 문장 리스트 임베딩 생성 (SentenceTransformer)
        - 사용자 입력 문장과 가장 유사한 문장 검색
        - FAISS를 이용한 유사도 기반 추천 구현
        - Pinecone에 인덱싱 및 검색 API 사용

    | 라이브러리 | 역할 | 특징 |
    |------------|------|------|
    | ChromaDB | 임베딩 DB 관리 | 로컬 사용 간편 |
    | FAISS | 벡터 검색 최적화 | 빠른 거리 기반 검색 |
    | Pinecone | 클라우드 벡터 DB | 확장성 및 API 기반 검색 |
