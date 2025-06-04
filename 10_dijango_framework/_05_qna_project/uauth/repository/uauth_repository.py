from abc import ABC, abstractmethod
from uauth.entity.models import UserDetail

class UAuthRepository(ABC):
    @abstractmethod
    def create(self, **kwargs):
        pass

class UAuthRepositoryImpl(UAuthRepository):
    __instance = None

    def __new__(cls):
        if cls.__instance is None:
            cls.__instance = super().__new__(cls)
        return cls.__instance

    @classmethod
    def get_instance(cls):
        if cls.__instance is None:
            cls.__instance = cls()
        return cls.__instance

    def create(self, **kwargs):
        user = kwargs.pop('user')
        birthday = kwargs.pop('birthday')
        profile = kwargs.pop('profile')
        
        return UserDetail.objects.create(
            user=user, 
            birthday=birthday, 
            profile=profile
        )