from django.http import Http404
from django.shortcuts import render
from .models import Wands


def index(request):
    all_wands = Wands.objects.all()
    return render(request,'home/index.html', {'all_wands' : all_wands })

# def detail(request, wand_id):
#     try:
#         wand = Wands.objects.get(pk=wand_id)
#     except Wands.DoesNotExist:
#         raise Http404("Page Does not exist")
#     return render(request, 'home/detail.html', {'wand' : wand})

def detail(request):
    all_wands = Wands.objects.all()
    return render(request, 'home/detail.html',{'all_wands' : all_wands})

def cart(request):
    all_wands = Wands.objects.all()
    return render(request, 'home/cart.html',{'all_wands' : all_wands})