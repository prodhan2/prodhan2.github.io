# pages/urls.py
from django.urls import path

from .views import home_page_view
from .views import About_us_view
urlpatterns = [
    path("", home_page_view, name="home"),
    path("about/", About_us_view, name="x"),
]