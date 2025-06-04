from django.shortcuts import render, redirect
from django.contrib import auth, messages
from uauth.entity.models import UserForm
from uauth.service.user_service import UserServiceImpl
from django.http import JsonResponse

user_service = UserServiceImpl.get_instance()

# Create your views here.
def logout(request):
    return render(request, 'uauth/logout.html')

def signup(request):
    if request.method == 'POST':
        form = UserForm(request.POST, request.FILES)
        
        if form.is_valid():
            user = uath_service.create(form)
            messages.success(request, "회원가입 완료!")
            
    else:
        form = UserForm()
        
    return render(request, 'uauth/signup.html', {'form': form})
