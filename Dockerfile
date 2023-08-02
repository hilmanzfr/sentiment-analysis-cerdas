# Use python 3.11 (Reference: https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker/blob/master/docker-images/python3.11.dockerfile)
FROM tiangolo/uvicorn-gunicorn:python3.11

# Set the working directory to /app
WORKDIR /app

# Copy requirements.txt to the working directory
COPY requirements.txt ./

# Upgrade pip and Install the dependencies
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Download NLTK data (To download wordnet from NLTK)
RUN python -m nltk.downloader wordnet

# Copy the rest of the application to the working directory
COPY . .

# Specify the command to run
CMD ["uvicorn", "cerdas-app:app", "--host", "0.0.0.0", "--port", "80"]