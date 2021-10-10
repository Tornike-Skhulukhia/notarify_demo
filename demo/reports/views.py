from django.http import HttpResponse
from django.shortcuts import render
from .models import Report

# from .services import


def handle_data_submission(request):
    """
    . get data that user sent
    . using given data generate & save report
    . send email to user with link of generated report(with pdf) page
    """

    return HttpResponse("Done!")


# def get_pdf_with_transaction_id(request, file_id):
#     """
#     Send page with just pdf document using given pdf file id
#     """
#     pass
