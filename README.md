# project description

Test Project For Notarify. Allows us to submit form and get generated pdf report link where we can see this document. Project is done in limited amount of time, so things are not optimized for real production environment.

# how to run

1. clone this repo and go to its folder
2. create new Python virtual environment and activate it
3. intsall requirements from requirements.txt file
4. go to django app folder(demo) and run

```bash
python manage.py runserver
```

5. Go to http://localhost:/8000
6. Submit data you want and view status notification
7. set SENDER_EMAIL and SENDER_PASSWORD environmental variables or change them in settings.py file to real values to be able to send emails from gmail account, and make sure to allow less secure
   apps access to given account from [link](https://myaccount.google.com/lesssecureapps)

# viewing data in django admin

visit: http://localhost:8000/admin/reports/report/ to see info about generated reports and user supplied data in django admin.
We can identify report with its id from url that was sent in email and see corresponding
report here, for example, if link is http://localhost:8000/media/generated_reports/f0df87c4.pdf,
in admin we should find report with id of f0df87c4.

# basic project tree overview

...

# Improvement Areas

1. Validations(Front/Back)
2. Better Logging
3. Celery to generate reports and then send emails
4. DjangoRest for API
5. Docker-compose for deployment

# Contribute

1. Back - change django files
2. Front - go to reports/front/my-app/ folder and run npm install to generate react project that you can then build, after which changes will automatically be visible(use private/incognito tab if cache causes issues)
