from django.shortcuts import render
from qna.entity.models import Question

def index(request):
    question_list  = Question.objects.all().order_by('-created_at')
    context = {'questions': question_list}
    return render(request, 'qna/question_list.html', context)