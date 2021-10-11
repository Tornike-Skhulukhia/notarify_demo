from django.urls import path
from .views import handle_data_submission, index

urlpatterns = [
    path("", index),
    path("reports/api/handle_data_submission/", handle_data_submission),
]
