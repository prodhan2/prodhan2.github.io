# pages/views.py
from django.shortcuts import HttpResponse

def home_page_view(request):
    return render(request, "home.html")

def about_us_view(request):
    return render(request, "about_us.html")
