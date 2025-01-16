---
draft: false
title: Worklenz Docker Guide
snippet: Worklenz Docker Guide
image:
  src: /images/worklenz-docker.webp
  alt: Worklenz Docker Guide
publishDate: 2024-12-02
category: ""
author: Kithmina Gunasinghe
tags:
  - Guide
description: |
  Explore the Worklenz Docker Guide, designed to help you navigate Docker with ease. Unlock powerful tools and techniques for efficient container management.
---

# Worklenz Docker Guide

Efficient project management starts with tools that are not only powerful but also easy to deploy. Docker, a leading platform for containerized application deployment, is transforming the way businesses manage software installations. By simplifying complex configurations and ensuring consistency across environments, Docker has become an essential tool for modern teams. 

For Worklenz, Docker offers a seamless deployment experience tailored to the needs of both startups and enterprises. With its portability, scalability, and efficient resource management, Docker eliminates the challenges of traditional installations, allowing teams to focus on what truly matters, achieving project success. 

Discover how deploying Worklenz with Docker can elevate your team's efficiency and simplify your IT operations. 

---

## Table of Contents

- [Prerequisites](#what-you-need)
- [Step 1: Clone the Repository](#step-1-cloning-from-the-repository)
  - [Option 1: Use Git to Clone the Repository](#option-1-use-git-to-clone-the-repository)
  - [Option 2: Download the Application Files](#option-2-download-the-application-files)
- [Step 2: Prepare the Docker Environment](#step-2-prepare-the-docker-environment)
  - [Create a `.env` File](#create-a-env-file)
  - [Configure the `.env` File](#configure-the-env-file)
- [Step 3: Build and Start Containers](#step-3-build-and-start-containers)
  - [Stopping and Removing Containers](#stopping-and-removing-containers)
- [Step 4: Access the App](#step-4-access-the-app)
- [Step 5: Troubleshooting Common Issues](#step-5-troubleshooting-common-issues)
- [Additional Notes](#additional-notes)

---


## **What You Need**

Before you begin, ensure you have the following:
- A computer with Docker installed (Windows, Mac, or Linux).
- Internet access to download required files.
- Basic familiarity with opening a terminal (Command Prompt or equivalent).

If Docker isn’t installed yet, follow [this guide](https://docs.docker.com/get-docker/) to set it up first.
If Gitbash isn't installed yet, follow [this guide](https://phoenixnap.com/kb/how-to-install-git-windows) to set up gitbash in your computer

### Minimum system requirements

- **CPU**: 2+ cores
- **RAM**: 4GB minimum (8GB recommended)
- **Disk Space**: 10GB free for Docker images and containers

## Step 1: Cloning from the Repository
1. Option 1: Use Git to Clone the Repository

Open your terminal (or Command Prompt, PowerShell, or Git Bash) and execute the following command to clone the repository to your local machine:

```bash
git clone https://github.com/Worklenz/worklenz.git 
```

2. Option 2: Download the Application Files

If Git is not installed, you can manually download the files. Visit the [Worklenz repository](https://github.com/Worklenz/worklenz), click on the **"Code"** button, and select **"Download ZIP."** Extract the downloaded ZIP file and place the files in a folder named worklenz on your computer.

Navigate to the project folder:

```bash
cd worklenz
```

## Step 2: Prepare the Docker Environment

To configure the application to run with Docker, follow these steps:

### Create the `.env` File

In the project directory, navigate to the backend folder and create the `.env` file by copying the provided template:

```bash
cd worklenz-backend && cp .env.template .env
```

### Configure the `.env` File with the Necessary Credentials

```plaintext

# Server
NODE_ENV=development
PORT=3000
SESSION_NAME=worklenz.sid 
SESSION_SECRET="YOUR_SESSION_SECRET_HERE"
COOKIE_SECRET="YOUR_COOKIE_SECRET_HERE"

# CORS
SOCKET_IO_CORS=http://localhost:4200
SERVER_CORS=*

# Database
DB_USER=worklenz_backend
DB_PASSWORD=securepassword123
DB_NAME=worklenz_db
DB_HOST=worklenz_db 
DB_PORT=5432
DB_MAX_CLIENTS=50

# Google Login
GOOGLE_CLIENT_ID="12345.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GOOGLE_CALLBACK_URL="http://localhost:3000/secure/google/verify"
LOGIN_FAILURE_REDIRECT="/"
LOGIN_SUCCESS_REDIRECT="http://localhost:4200/auth/authenticate"

# CLI
ANGULAR_DIST_DIR="/path/worklenz_frontend/dist/worklenz" # Specify the location where the built Angular app is be placed 
ANGULAR_SRC_DIR="/path/worklenz_frontend"
BACKEND_PUBLIC_DIR="/path/worklenz_backend/src/public"
BACKEND_VIEWS_DIR="/path/worklenz_backend/src/views/admin"
COMMIT_BUILD_IMMEDIATELY=true

# Host
HOSTNAME=localhost:4200

# SLACK
SLACK_WEBHOOK="your-slack-webhook-url"
USE_PG_NATIVE=true

# JWT SECRET
JWT_SECRET="YOUR_JWT_SECRET_HERE"

# AWS
AWS_REGION="us-west-2"
AWS_ACCESS_KEY_ID="AWS_ACCESS_KEY_ID_HERE"
AWS_SECRET_ACCESS_KEY="AWS_SECRET_ACCESS_KEY_HERE"

# S3 Credentials
REGION="us-west-2"
BUCKET="your-bucket-name"
S3_URL="S3_URL_HERE"
S3_ACCESS_KEY_ID="S3_ACCESS_KEY_ID_HERE"
S3_SECRET_ACCESS_KEY="S3_SECRET_ACCESS_KEY_HERE"

# SES email
SOURCE_EMAIL="Worklenz <noreply@worklenz.com>"


```



## Step 3: Build and Start Containers

Start your docker engine if it’s haven’t 
Use Docker Compose to build and start the containers:
```bash
docker-compose up --build -d
```

This command will do the following:
- **Build the Docker images** if they don’t exist.
- **Start the app containers** in detached mode (-d).
- Ensure that all necessary services (like the database and app) are running.

**Stopping and Removing Containers**

To stop all running containers associated with the Worklenz project, you can use the following command:

```bash
docker-compose down
```

If you want to remove the containers, as well as the images and volumes to free up disk space, you can use:
```bash
docker system prune -a
```
<div style="font-weight: bold; color: red">
Be cautious! This command will delete unused images and volumes, which may result in losing any unsaved data in the volumes. Always ensure that you have backed up important data before running this command.
</div>



## Step 4: Access the App

Once the containers are running, you can access the Worklenz App through the following:
- **Backend URL**: http://localhost:3000
- **FrontEnd URl**:http://localhost:4200




## Step 5:  Troubleshooting Common Issues

While setting up Worklenz with Docker, you may encounter some common issues. Here are some solutions to resolve them:

### Issue 1: Containers Not Starting

**Solution for Linux/macOS**:
Check the Docker container logs for any errors:

```bash
docker-compose logs
```

If you see errors related to missing environment variables or other issues, ensure that your .env file is properly configured and all necessary fields are filled.

You can also check if there are any conflicting services or ports in use:

```bash
sudo lsof -i :3000
```

If port 3000 is in use, stop the process using it:

```bash
sudo kill -9 <PID>
```

Restart the Docker containers:

```bash
docker-compose down
docker-compose up --build -d
```

**Solution for Windows**:

Check the Docker container logs for any errors:

```cmd
docker-compose logs
```

If you see errors related to missing environment variables or other issues, verify your .env file.

To check if port 3000 is in use, run:

```cmd
netstat -ano | findstr :3000
```

Find the PID (Process ID) from the output, and stop the process using:

```cmd
taskkill /PID <PID> /F
```

Restart the Docker containers:

```cmd
docker-compose down
docker-compose up --build -d
```

### Issue 2: Database Connection Issues

**Solution for Linux/macOS**:

Ensure the database container is running:

```bash
docker ps
```

Check the database configuration in your .env file, especially:

**DB_HOST**
**DB_USER**
**DB_PASSWORD**

If the database container isn't running, try restarting it:

```bash
docker-compose down
docker-compose up --build -d
```

**Solution for Windows**:

Check if the database container is running:

```cmd
docker ps
```

Verify the database configuration in your .env file.

Restart the containers if needed:

```cmd
docker-compose down
docker-compose up --build -d
```

### Issue 3: Port Already in Use

**Solution for Linux/macOS**:

If you get an error saying a port is already in use (e.g., port 3000), you can find the process using the port:

```bash
sudo lsof -i :3000
```
If a process is using the port, kill it with:

```bash
sudo kill -9 <PID>
```

Alternatively, you can change the port in your **.env** file and restart the containers.

**Solution for Windows**:

Check if port 3000 is in use:

```cmd
netstat -ano | findstr :3000
```
Find the PID (Process ID) from the output, then terminate the process:

```cmd
taskkill /PID <PID> /F
```

You can also change the port in your **.env** file and restart the containers.


### Issue 4: Permissions Issues with Files

**Solution for Linux/macOS**:

If you encounter permission errors, ensure that the necessary files and directories are accessible by Docker. Check file permissions:

```bash
ls -l
```
Adjust file permissions using:

```bash
sudo chmod -R 755 <directory>
```

**Solution for Windows**:

If you encounter permission errors, ensure Docker Desktop has access to the necessary directories. Right-click on the folder, select Properties, and go to the Security tab to check the permissions.

### Issue 5: Unable to Connect to External Services (e.g., AWS, Google OAuth)

**Solution for Linux/macOS**:

Ensure your **.env** file is properly configured for external services like **AWS** or **Google OAuth**. Check that the required keys and URLs are correct.

You can test if external services are accessible by using curl:

```bash
curl https://your-service-url.com
```

**Solution for Windows**:

Similarly, verify that your .env file is correctly configured.

Test connectivity using curl (if installed) or use a web browser to check if external services are accessible.

### Issue 6: Slow Performance or Timeout Errors

**Solution for Linux/macOS**:

If Docker is running slowly, ensure that your machine has sufficient resources (CPU, RAM, Disk Space).

You can check resource usage with:

```bash
top
```

Consider increasing Docker's allocated memory and CPU via the Docker Desktop settings.

**Solution for Windows**:

Similarly, monitor the system's resource usage in Task Manager.

You can adjust Docker Desktop’s resource allocation through the Docker Desktop settings:

**Open Docker Desktop** > **Go to Settings** > **Resources** and adjust memory, CPU, and disk settings.

### Issue 7: Docker Daemon Not Starting

**Solution for Linux/macOS**:

Ensure that the Docker service is running. You can start Docker with:

```bash
sudo systemctl start docker
```

To check the Docker daemon status:

```bash
sudo systemctl status docker
```

**Solution for Windows**:

Ensure that Docker Desktop is running. You can start it from the Start Menu.

If Docker isn't starting, try restarting Docker Desktop or reinstalling it if necessary.

### Issue 8: Unable to Access App in Browser

**Solution for Linux/macOS**:

Make sure the containers are running:

```bash
docker ps
```

Check the port mappings in your **docker-compose.yml** file to ensure the correct ports are exposed.

If you're accessing the app from a remote machine, ensure that your firewall is configured to allow traffic on ports 3000 and 4200.

**Solution for Windows**:

Check if the containers are running:

```cmd
docker ps
```
Ensure your firewall is not blocking access to the relevant ports **(3000 and 4200)**. You can add rules to allow these ports.




## Additional notes

- **Updating Docker Images**:

To ensure you are using the latest versions of the Docker images, you can pull the latest versions before building the containers:

```bash
docker-compose pull
docker-compose up --build -d
```

- **Backing Up Volumes**:

If your Docker setup uses volumes for persistent data storage (e.g., for databases), make sure to back up your data regularly. You can do this with:

```bash
docker run --rm -v worklenz_db_volume:/data -v $(pwd):/backup ubuntu tar czf /backup/db_backup.tar.gz /data
```

- **Docker Resource Allocation**:

Adjust the resource allocation (CPU and memory) in Docker Desktop settings (Windows/Mac) or through Docker Daemon configurations (Linux) to ensure smooth operation of the app.

- **Updating Dependencies**:

If the application dependencies or Docker images are outdated, consider updating them. Use package managers (e.g., npm for Node.js) to update app dependencies inside the containers.

- **Clean Up Unused Resources**:

To free up disk space, remove unused Docker objects periodically:

```bash
docker system prune -a
```

- **Custom Ports**:

If you need to run multiple instances of Worklenz on the same machine, update the ports in the docker-compose.yml file to avoid conflicts. For example, change 3000 to 3100 for the backend and 4200 to 4300 for the frontend.

- **Monitor Logs**:

To monitor container logs in real-time for debugging, use:

```bash
docker-compose logs -f
```