import uuid

# from django.conf import settings
from django.db import models

from .services.generate_pdf_report import generate_pdf_report as create_pdf


def _get_random_transaction_id_str():
    return str(uuid.uuid4())[:8]  # for just now


class Report(models.Model):
    # we should also have user here who is authenticated

    report_id = models.CharField(
        max_length=32,
        primary_key=True,
        default=_get_random_transaction_id_str,
        editable=False,
    )

    # report generation end time
    created_at = models.DateTimeField(auto_now_add=True)

    # user supplied data for report
    name = models.CharField(max_length=100)

    last_name = models.CharField(max_length=100)

    email = models.EmailField()

    country = models.CharField(max_length=100)

    company_tax_code = models.CharField(max_length=30)

    document_picture = models.ImageField(
        upload_to="uploaded_images", null=True, blank=True
    )

    # we should also have success flags for pdf generation & email sending parts

    def generate_pdf_report(self, pdf_file_path):
        """
        Generate pdf report and return report id
        """
        user_data = {
            "name": self.name,
            "last_name": self.last_name,
            "role": self.role,
            "email": self.email,
            "company_tax_code": self.company_tax_code,
        }
        create_pdf(
            user_data=user_data, report_id=self.report_id, pdf_file_path=pdf_file_path
        )
        return self.report_id

    def __str__(self):
        return f"<Report {self.report_id} >"
