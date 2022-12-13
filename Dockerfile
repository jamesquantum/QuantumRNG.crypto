FROM python:3.9-slim-buster

RUN apt-get update && apt-get install -y \
    gcc \
    python3-dev

COPY app/app.py .
COPY app/requirements.txt .

RUN python3.9 -m pip install -r requirements.txt

EXPOSE 5000

CMD ["python3.9", "app.py"]