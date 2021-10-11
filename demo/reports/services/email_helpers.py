import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

import logging


def send_email(sender, password, receiver, subject, msg):
    logging.info(f"Sending Email to {receiver} with subject {subject}")

    message = MIMEMultipart("alternative")
    message["Subject"] = subject
    message["From"] = sender
    message["To"] = receiver

    message.attach(MIMEText(msg, "html"))

    try:
        # Create secure connection with server and send email
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender, password)
            server.sendmail(sender, receiver, message.as_string())
        logging.info(f"Email sent to {receiver} with subject {subject}")
        return True
    except:

        logging.info(f"can not send email to {receiver} with subject {subject}")
        import traceback

        logging.warning(traceback.format_exc())
        return False
