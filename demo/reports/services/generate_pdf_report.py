import uuid
from datetime import datetime

from fpdf import FPDF


FONT = "times"


class PDF(FPDF):
    def footer(self):

        self.set_y(-15)
        self.set_font(FONT, "I", 8)

        # page number
        self.cell(0, 10, "page " + str(self.page_no()) + "/{nb}", 0, 0, "C")


def generate_pdf_report(user_data, report_id, pdf_file_path):
    """
    generates and saves pdf files using given user_data.

    args:
        1. user_data - list of lists/tuples containing key/values to show in document
        2. report_id - report id string shown in pdf title
        3. pdf_file_path - full path to save generated pdf file in
    """
    created_at = datetime.now().strftime("%d.%m.%Y %H:%M:%S")

    # use portrait mode
    pdf = PDF(orientation="P", unit="mm")
    pdf.add_page()

    pdf.set_margins(10, 10, 10)
    pdf.set_font(FONT, size=32)

    # header
    pdf.set_font(size=20)
    pdf.cell(
        txt=f"Report N{report_id} | {created_at}", h=12, center=True, ln=1, border="B"
    )

    pdf.set_font(size=14)
    pdf.ln(h=4)

    for question, answer in user_data:
        # question
        pdf.set_font(style="B")
        pdf.cell(txt=" " * 10 + f"{question}:", w=100, h=16, ln=0)

        # answer
        pdf.set_font(style="")
        pdf.cell(w=0, h=16, txt=answer, ln=1)

    # add image
    pdf.page = 1

    pdf.set_y(13)
    pdf.set_x(23)
    pdf.image("notarify.png", w=23, link="https://notarify.io/")

    # Generate
    pdf.output(pdf_file_path)
