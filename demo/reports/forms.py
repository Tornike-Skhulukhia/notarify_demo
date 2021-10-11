from django import forms
from .models import Report


class ReportGenerationRequestSubmitForm(forms.ModelForm):
    class Meta:
        model = Report
        fields = [
            "name",
            "last_name",
            "country",
            "email",
            "company_tax_code",
            "document_picture",
        ]
