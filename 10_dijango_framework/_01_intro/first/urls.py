from django.urls import path
from first import views

urlpatterns = [
    path('', views.index, name="index"),
    path('hello/', views.hello, name="hello"),
    path('lunch/', views.lunch, name="lunch")
]