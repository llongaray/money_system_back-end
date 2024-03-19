from django.urls import path  # Importe a função path do módulo django.urls
from .views import index  # Importe a view index

urlpatterns = [
    path('', index, name='index'),  # Defina a URL da página inicial
]
