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


---

- 벡터 데이터베이스(Vector DB)

    - Vector DB는 비정형 데이터를 임베딩 벡터로 변환해 저장하고, 쿼리 벡터와의 유사도를 기반으로 빠르게 검색하는 시스템이다. 특히 LLM 기반의 RAG 구조에서 정보 검색(Retrieval) 단계의 핵심 역할을 한다.

    - Chroma DB

        - 개요
            - Chroma는 로컬에서 빠르게 사용할 수 있는 오픈소스 벡터 데이터베이스이다. 설치가 간단하고 LangChain, LlamaIndex와의 통합이 용이해 실습용으로 자주 사용된다.

        - 특징
            - 경량화된 로컬 벡터 DB
            - 기본 저장 방식은 SQLite
            - LangChain에서 기본 지원
            - 메타데이터와 함께 문서 저장 가능

        - 장점
            - 설치가 간단하고 빠른 테스트에 적합
            - 문서 삽입과 검색이 직관적
            - LangChain 통합 기능이 잘 구축되어 있음

        - 단점
            - 분산 환경이나 클라우드 지원 미비
            - 대규모 데이터 처리에 한계
            - 성능 최적화 기능 부족

        - 사용 추천
            - 소규모 프로젝트나 로컬 테스트
            - LangChain 기반 RAG 실습
            - 빠른 POC(Prototyping)

    - FAISS (Facebook AI Similarity Search)

        - 개요
            - FAISS는 Facebook AI Research에서 개발한 고성능 벡터 검색 라이브러리이다. 수백만 개 이상의 벡터도 빠르게 검색할 수 있으며, 다양한 인덱싱 기법을 지원해 정확도와 속도를 조정할 수 있다.

        - 특징
            - CPU 및 GPU 모두 지원
            - 다양한 인덱스 타입 (Flat, IVFFlat, HNSW 등)
            - 유사도 측정 방식 선택 가능 (L2, cosine 등)
            - 벡터 전용 라이브러리 (메타데이터 직접 구현 필요)

        - 장점
            - 고속 검색 처리 가능
            - 검색 정확도 및 속도 조절 가능
            - GPU 사용 시 대규모 벡터 검색도 가능

        - 단점
            - 메타데이터 저장 기능 없음
            - 직접 코드로 검색 로직을 구현해야 함
            - 설치 및 환경 세팅이 다소 복잡

        - 사용 추천
            - 수십만~수백만 개 이상의 벡터 검색
            - 대규모 정보 검색 실험
            - 고성능/고속 검색이 필요한 로컬 기반 프로젝트

    - Pinecone

        - 개요
            Pinecone은 클라우드 기반의 Fully-Managed 벡터 데이터베이스 서비스이다. 벡터를 API로 업로드하고, 검색할 수 있으며, 분산 인프라와 고가용성 지원이 뛰어나다.

        - 특징
            - 클라우드 기반 SaaS 형태
            - 자동 인덱스 관리, 확장성 보장
            - 메타데이터 저장 및 필터링 검색 지원
            - API/SDK 기반의 간편한 연동

        - 장점
            - 대규모 벡터 저장 및 고속 검색 지원
            - 관리가 필요 없는 Fully-managed 환경
            - 다양한 지역 리전 및 가용성 영역 지원

        - 단점
            - 로컬에서 사용 불가 (인터넷 필수)
            - 무료 플랜 용량 제한
            - 장기적으로 비용 발생 가능

        - 사용 추천
            - 실제 제품 또는 상용 서비스에 벡터 검색을 도입할 경우
            - 수많은 유저의 검색 요청을 처리해야 할 때
            - RAG 시스템을 클라우드에서 운영하려는 경우

    - 세 가지 Vector DB 비교 요약

    | 항목         | Chroma       | FAISS        | Pinecone     |
    |--------------|--------------|--------------|--------------|
    | 배포 형태    | 로컬         | 로컬         | 클라우드     |
    | 성능         | 중           | 매우 높음     | 높음          |
    | 확장성       | 낮음         | 중            | 매우 높음     |
    | 설정 난이도  | 매우 쉬움    | 중간          | 쉬움 (API 기반) |
    | 메타데이터 지원 | O            | X (직접 구현 필요) | O            |
    | 사용 용도    | 실습/테스트  | 고성능 검색 실험 | 대규모 상용 서비스 |


---

- LangChain

    - LangChain은 다양한 LLM 기능들을 체인처럼 조합하여 복잡한 워크플로우를 구성할 수 있는 프레임워크이다. 단순 질의응답을 넘어서 문서 기반 QA, 에이전트 시스템, 툴 호출 등의 작업을 구현할 수 있다.

    - 핵심 컴포넌트

        - `PromptTemplate` : 프롬프트 포맷을 템플릿으로 관리
        - `LLMChain` : 프롬프트를 모델에 넣고 응답을 받는 단위 체인
        - `Memory` : 대화 상태를 유지
        - `Retriever` : Vector DB에서 관련 문서 검색
        - `Agent` : 여러 체인을 제어하거나 외부 툴과 연결

    - LangChain은 특히 **RAG 구현에서 중심적인 역할**을 하며, 검색된 문서와 LLM을 연결하는 중간 계층 역할을 한다.

---

- RAG (Retrieval-Augmented Generation)

    - RAG는 LLM의 한계를 극복하기 위해 고안된 방식으로, 검색(Retrieval) + 생성(Generation)을 결합한 구조이다.

    - 구조 개요
        - [사용자 질문] → [질문 임베딩] → [Vector DB 검색] → [관련 문서] → [LLM 응답 생성]

    - 장점
        - 최신 정보 기반의 답변 가능
        - 파인튜닝 없이도 도메인 특화 QA 가능
        - 응답의 근거가 명확해짐

    - 단점
        - 검색 품질이 전체 응답 품질에 큰 영향을 미침
        - 긴 문서는 LLM의 입력 길이 제한에 걸릴 수 있음

---

- LLM 파인튜닝 기법
    - LLM을 특정 도메인이나 목적에 맞게 조정하는 방법으로, 여러 기법들이 있다. 이번 주에는 다양한 파인튜닝 기법을 비교하고, 적절한 선택 기준에 대해 학습했다.

- 주요 기법

    - LoRA (Low-Rank Adaptation)

        - 정의: 기존 모델의 가중치(Weight)를 직접 수정하지 않고, 일부 층에 **저차원 행렬**을 추가로 학습시키는 방식.

        - 작동 방식:
            - Transformer의 특정 Layer에 작은 랭크(rank)의 보조 행렬을 덧붙임
            - 학습 시 보조 행렬만 업데이트하고 원래 파라미터는 고정

        - 장점:
            - 전체 모델보다 훨씬 적은 자원으로 학습 가능
            - 빠른 학습 및 추론 속도
            - 다양한 LoRA 설정으로 유연한 실험 가능

        - 단점:
            - 복잡한 응용에는 성능이 부족할 수 있음
            - Layer 선택과 rank 튜닝이 중요

        - 사용 시기:
            - 모델을 직접 수정하지 않고, 빠르게 실험하고 싶을 때
            - 로컬 환경에서 효율적으로 학습하고 싶을 때

    - QLoRA (Quantized LoRA)

        - 정의: LoRA와 양자화(Quantization)를 결합한 방식으로, **모델을 4bit로 압축**하여 매우 적은 VRAM으로도 파인튜닝이 가능하다.

        - 작동 방식:
            - LLM을 4bit로 양자화
            - 그 위에 LoRA를 적용해 학습

        - 장점:
            - 8GB 이하의 VRAM에서도 LLM 파인튜닝 가능
            - 학습 성능은 유지하면서 메모리 사용량 대폭 절감
            - HuggingFace에서 쉽게 구현 가능

        - 단점:
            - 약간의 정밀도 손실 가능성
            - 일부 복잡한 task에서는 효과 제한적

        - 사용 시기:
            - 일반 GPU 노트북에서 LLM 파인튜닝을 실습하고자 할 때
            - 빠른 실험 및 저비용 환경에서 결과를 얻고 싶을 때

    - Soft Prompt Tuning

        - 정의: 모델의 파라미터를 전혀 건드리지 않고, 학습된 임베딩 벡터(soft prompt)를 입력 앞에 붙여 성능을 조절하는 방식.

        - 작동 방식:
            - 학습 가능한 임베딩 벡터를 프롬프트 앞에 추가
            - 모델은 그대로 두고, 벡터만 최적화함

        - 장점:
            - 매우 경량 (파라미터 수십만~수백만 개 수준)
            - 모델 재배포 필요 없음 (원본 LLM 유지)
            - 다양한 태스크에 빠르게 적용 가능

        - 단점:
            - 강력한 fine-tuning 성능은 제한적
            - 임베딩 위치와 길이에 따라 성능 차이 발생

        - 사용 시기:
            - 모델을 바꾸지 않고, 응답 스타일/도메인 조절하고 싶을 때
            - 프롬프트 엔지니어링보다 약간 더 강한 제어가 필요할 때

    - RLHF (Reinforcement Learning with Human Feedback)

        - 정의: 사람의 피드백을 통해 LLM이 **더 좋은 응답을 선택하도록 강화학습**을 수행하는 방식. ChatGPT 모델이 이 방식으로 학습됨.

        - 작동 방식:
            1. 여러 개의 응답을 생성
            2. 사람 또는 모델이 응답에 선호도를 부여
            3. 보상 모델 생성 → PPO 등의 알고리즘으로 fine-tuning

        - 장점:
            - 모델이 "사람이 선호하는 응답"을 생성하도록 학습
            - 대화형 에이전트나 창의적 응답 생성에 매우 강력함

        - 단점:
            - 보상 모델 설계와 안정적인 강화학습이 어려움
            - 피드백 수집 비용 높음
            - 학습 안정성 문제 존재

        - 사용 시기:
            - 정답보다 **품질**이 중요한 응답이 필요한 경우 (예: 대화형 챗봇)
            - 충분한 사용자 피드백이 있는 경우

    - DPO (Direct Preference Optimization)

        - 정의: RLHF에서 강화학습 단계를 제거하고, **선호 데이터만으로 직접 최적화**하는 방식. 최근 각광받는 간결한 학습 방법.

        - 작동 방식:
            - 두 응답 중 어떤 응답을 선호하는지를 알려주는 데이터셋을 기반으로, 선호되는 응답의 확률을 직접 높이는 방식으로 학습

        - 장점:
            - RL 없이도 RLHF 수준의 성능 달성
            - 구현이 간단하고 학습 안정성 높음
            - HuggingFace에서도 활발히 적용 중

        - 단점:
            - 여전히 선호 데이터가 필요
            - 도메인 변화에 따른 적응력은 실험 필요

        - 사용 시기:
            - RL 없이도 사용자 선호 기반 fine-tuning이 필요할 때
            - 빠르게 안정적인 응답 품질을 확보하고 싶을 때


| 기법     | 설명                                                                 |
|----------|----------------------------------------------------------------------|
| LoRA     | 전체 파라미터가 아닌 일부 행렬만 학습하여 자원 효율화               |
| QLoRA    | LoRA + 양자화(Quantization), 저사양에서도 학습 가능                 |
| Soft Prompt | 프롬프트 앞에 학습된 임베딩을 삽입하여 미세 조정                   |
| RLHF     | 사용자 피드백을 통해 보상 모델 기반 강화학습 (ChatGPT 학습 방식)   |
| DPO      | 보상 없이 선호 데이터만으로 직접 최적화하는 방식                     |


---

## CNN (Convolutional Neural Network)

**정의:**  
이미지 인식 및 분류에 널리 사용되는 신경망 구조로, 합성곱 층과 풀링 층을 통해 이미지의 특징을 추출함.

**주요 구성 요소:**
- **합성곱 층 (Convolutional Layer):** 필터를 통해 이미지의 특징을 추출. 필터 크기, 스트라이드, 패딩 등을 조정하여 다양한 특징을 학습함.
- **풀링 층 (Pooling Layer):** 데이터의 차원을 줄이고 연산량을 줄임. 주로 Max Pooling과 Average Pooling이 사용됨.
- **활성화 함수 (Activation Function):** 주로 ReLU를 사용하여 비선형성을 부여. Leaky ReLU, Sigmoid 등도 활용 가능함.
- **완전 연결층 (Fully Connected Layer):** Flatten된 출력값을 받아 분류 작업을 수행함.

---

## CIFAR-10

**정의:**  
10개의 클래스(비행기, 자동차, 새, 고양이, 사슴, 개, 개구리, 말, 배, 트럭)로 구성된 이미지 데이터셋.

- **이미지 크기:** 32x32 픽셀, 컬러 이미지  
- **데이터 구성:** 학습용 50,000장, 테스트용 10,000장  

**학습 목표:**  
CNN 모델을 통해 CIFAR-10 데이터를 분류하는 모델을 구축하고 평가함. 데이터 증강 기법 및 모델 성능 평가 방법에 대해 학습함.

---

## GAN (Generative Adversarial Networks)

**정의:**  
두 개의 신경망(GAN Generator, GAN Discriminator)이 서로 경쟁하며 학습하는 구조.

**구성 요소:**
- **Generator:** 랜덤한 노이즈 벡터로부터 가짜 이미지를 생성. ConvTranspose 레이어를 사용하여 이미지를 생성함.
- **Discriminator:** 실제 이미지와 가짜 이미지를 구분하는 모델. Conv 레이어를 사용하여 이미지의 진위 여부를 판별함.

**학습 과정:**  
- Generator는 Discriminator를 속이기 위해 점점 더 진짜 같은 이미지를 생성함.  
- Discriminator는 진짜와 가짜 이미지를 구분하는 능력을 향상시킴.

---

## VGG (Visual Geometry Group Network)

**정의:**  
16~19개의 레이어로 구성된 심층 신경망 모델로, 깊이를 통해 성능을 극대화한 구조.

**주요 특징:**
- 작은 필터(3x3)를 다층으로 쌓아 깊이를 늘림.  
- 네트워크의 깊이를 조정하여 VGG-16, VGG-19 모델로 확장.  
- Fully Connected Layer가 3개로 구성됨.

---

## LeNet

**정의:**  
최초의 CNN 구조 중 하나로, 손글씨 숫자 인식(MNIST)에서 높은 성능을 기록한 모델.

**구성 요소:**
- Conv → Pool → Conv → Pool → FC → FC → Output  
- 소규모 이미지 인식에 특화된 구조로, 32x32 픽셀 크기의 이미지를 인식하도록 설계됨.

---

## AlexNet

**정의:**  
ImageNet 대회에서 우승한 CNN 모델로, ReLU, Dropout, Data Augmentation 기법을 도입하여 성능을 극대화함.

**주요 특징:**
- 8개의 레이어로 구성 (5 Conv + 3 FC)  
- GPU 병렬 처리 도입으로 대규모 데이터셋 학습이 가능해짐.  
- Dropout을 통해 과적합 방지.

---

## ResNet (Residual Network)

**정의:**  
딥러닝에서 레이어가 깊어질수록 발생하는 기울기 소실 문제를 해결하기 위해, 스킵 연결(Skip Connection)을 도입한 모델.

**구성 요소:**
- Residual Block: 입력 값을 직접 출력 레이어에 전달하여, 학습을 안정화시킴.  
- 50, 101, 152 레이어 버전이 있으며, 레이어가 깊어질수록 성능이 향상됨.

---

## 모델 비교표

| 모델     | 레이어 수 | 필터 크기         | 활성화 함수 | 주요 특징                     | 데이터셋         |
|----------|-----------|------------------|--------------|-----------------------------|-----------------|
| LeNet    | 7         | 5x5              | ReLU         | 소규모 이미지 인식            | MNIST           |
| AlexNet  | 8         | 11x11, 5x5, 3x3 | ReLU         | Dropout, ReLU 도입, GPU 병렬 처리 | ImageNet        |
| VGG      | 16, 19    | 3x3              | ReLU         | 작은 필터, 깊은 구조          | ImageNet        |
| ResNet   | 50, 101, 152 | 3x3              | ReLU         | Residual Block 도입           | ImageNet        |



