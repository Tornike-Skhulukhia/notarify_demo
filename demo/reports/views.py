import json
import logging

from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .forms import ReportGenerationRequestSubmitForm as ReportForm
from .models import Report
from .services.generate_pdf_report import generate_pdf_report
from .services.email_helpers import send_email


# from .services import
logging.basicConfig(
    format="%(levelname)s at %(asctime)s in %(funcName)s: %(message)s",
    filemode="a",
    filename="log.log",
    level=logging.INFO,
)

INDEX_FILE_PATH = "my-app/build/index.html"


def index(request):
    return render(request, INDEX_FILE_PATH)


@csrf_exempt
def handle_data_submission(request):
    """
    . get data that user sent
    . using given data generate & save report
    . send email to user with link of generated report(with pdf) page
    """
    if request.method != "POST":
        return HttpResponse("")

    form = ReportForm(request.POST, request.FILES)

    if not form.is_valid():
        return JsonResponse({"errors": [", ".join(i) for i in form.errors.values()]})

    resp = {"errors": []}
    report_obj = form.save()

    generate_pdf_report(
        user_data={
            "Name": report_obj.name or "",
            "Last name": report_obj.last_name or "",
            "Country": report_obj.country or "",
            "Email": report_obj.email or "",
            "Company Tax Code": report_obj.company_tax_code or "",
        },
        report_id=report_obj.pk,
        pdf_file_path=settings.GENERATED_PDF_REPORTS_FOLDER / f"{report_obj.pk}.pdf",
    )

    email_sent = send_email(
        sender=settings.SENDER_EMAIL,
        password=settings.SENDER_PASSWORD,
        receiver=report_obj.email,
        subject="Your Notarify Report",
        msg=f"<h1>Hi, your notarify report is ready <a href='http://localhost:8000/media/generated_reports/{report_obj.pk}.pdf'>Here<h1/>",
    )

    if not email_sent:
        resp["errors"].append(
            "Can not send email, please use real email address & correct config parameteres"
        )

    return JsonResponse(resp)
