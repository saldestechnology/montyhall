# Use the official Deno image as the base image
FROM denoland/deno:1.33.2

# Set the working directory
WORKDIR /app

# Copy the project files to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 8000