# Generated by Django 3.2.8 on 2021-10-10 18:26

from django.db import migrations, models
import pathlib
import reports.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('report_id', models.CharField(default=reports.models._get_random_transaction_id_str, max_length=32, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('generated_report', models.FilePathField(blank=True, editable=False, match='.pdf', null=True, path=pathlib.PurePosixPath('/home/tornike/Desktop/demos/notarify_demos/demo/PDF_Reports'))),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('last_name', models.CharField(blank=True, max_length=100, null=True)),
                ('role', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('company_tax_code', models.CharField(blank=True, max_length=30, null=True)),
                ('document_picture', models.ImageField(blank=True, null=True, upload_to='uploaded_images')),
            ],
        ),
    ]
