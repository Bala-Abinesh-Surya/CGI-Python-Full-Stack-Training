# Install the python 3.8 minimal version from the python docker hub official image
FROM python:3.8-slim

# Creating an 'app' folder and setting that as working directory
WORKDIR /app

# Copying everything from the current folder to the 'app' folder
COPY . /app

# Install the packages mentioned in the 'requirements.txt' file
RUN pip install --no-cache-dir -r requirements.txt

# Command which the container executed by default when it runs
# 'python app.py'
CMD ["python", "app.py"]