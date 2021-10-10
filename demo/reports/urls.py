from django.urls import path
from .views import handle_data_submission

urlpatterns = [
    path("handle_data_submission/", handle_data_submission),
    # path('reports/<str:pdf_id>', get_pdf),
]
