from django.urls import path
from uauth.controller import views
from django.contrib.auth import views as auth_views

app_name = 'uauth'

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='uauth/login.html'), name='login'),
    path('logout/', views.logout, name='logout'),
    path('signup/', views.signup, name='signup'),
]

