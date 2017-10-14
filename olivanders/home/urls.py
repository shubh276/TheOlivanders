from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),

    url(r'^details.html', views.detail, name='detail'),

    url(r'^cart.html', views.cart, name='cart'),

    url(r'^index.html', views.index, name='index'),
]