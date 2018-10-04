FROM python:latest
MAINTAINER Shekhar Gulati "shekhargulati84@gmail.com"
COPY . /app
WORKDIR /app
RUN apt-get update
RUN apt-get install -y vim
RUN pip install -r requirements.txt
RUN pip install -U flask-cors
ENTRYPOINT ["python"]
#ENTRYPOINT ["tail", "-f", "/dev/null"]
EXPOSE 5000
CMD ["app.py"]
