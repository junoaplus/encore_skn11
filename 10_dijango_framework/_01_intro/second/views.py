from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    print(request)
    return render(request, 'second/index.html')
