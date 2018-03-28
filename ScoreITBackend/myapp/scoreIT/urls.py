from django.conf.urls import url
from django.urls import include
from django.urls import path
from rest_framework import routers

from scoreIT.views import ScoreITViewSet
# from . import views

router = routers.DefaultRouter()
router.register(r'api',ScoreITViewSet,'api')

urlpatterns = [
    # path('', views.index, name='index'),
    url(r'', include(router.urls)),
]
