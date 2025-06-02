from django.shortcuts import render
from datetime import datetime

def index(request):
    return render(request, 'app/index.html')

def basics(request):
    context = {
        'name': '홍길동',
        'height': 190,
        'hobby': ["야구", "축구", "먹기"],
        'today': datetime.now(),
        'users':[
            {"id": 1, "name": "김정원", "study": True},
            {"id": 2, "name": "이민정", "study": False},
            {"id": 3, "name": "정민호", "study": True}
        ],
        "users":[],
        "eng_name": "juno",
        "price": 030115.030115
    }
    return render(request, 'app/01_basics.html', context)

def layout(request):
    return render(request, 'app/02_layout.html')

def staticfiles(request):
    return render(request, 'app/03_staticfiles.html')

def urls(request):
    return render(request, 'app/04_urls.html')

def product(request, id):
    print("@@@ path variable [id] @@@", id)
    return render(request, 'app/04_urls.html')

def search(request):
    print("@@@ query string [q] @@@", request.GET.get('q'))
    q = request.GET.get('q')
    lang = request.GET.get('lang')
    return render(request, 'app/04_urls.html')

