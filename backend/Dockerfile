# Use the official Python image as the base image
FROM python:3.11.3

# Set the working directory
WORKDIR /app

# Enter virtual environment
RUN python3 -m venv venv

# Copy the requirements file into the container
COPY backend/. /app

# Install the required Python packages
RUN . /venv/bin/activate && pip install -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose the port that your Flask app listens on
EXPOSE 5000

# Start the Flask app
CMD ["python", "app.py"]
