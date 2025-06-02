from abc import ABC, abstractmethod
from qna.entity.models import Question

class QuestionRepository(ABC):
    @abstractmethod
    def find_all(self):
        pass


class QuestionRepositoryImpl(QuestionRepository):
    __instance = None

    def __new__(cls):
        if cls.__instance is None:
            cls.__instance = super().__new__(cls)
        return cls.__instance
    
    def find_all(self):
        return self.__question_repository.find_all()
    
    @classmethod
    def get_instance(cls):
        if cls.__instance is None:
            cls.__instance = cls()
        return cls.__instance
    
    
    