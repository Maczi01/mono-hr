Brief description of your project goes here.

Getting Started with Docker
These instructions will cover usage information for the Docker container and help you to get the app up and running on your local machine for development and testing purposes.

Prerequisites
Ensure you have Docker installed on your system. You can download it from Docker's website.

Running the App with Docker
To get the frontend running in a Docker container, follow these steps:

Clone the repository to your local machine (if you haven't already):

```
git clone https://your-repository-url
```
Navigate to the root directory of the project:
```
cd path-to-your-project
```
Build the Docker image:

```
docker build -t monofront -f apps/frontend/Dockerfile .
```
This command will build a Docker image named monofront based on the Dockerfile located in apps/frontend.
```
Once the image has been built, you can run the container:

docker run -d -p 8080:80 --name my-react-app monofront
```
This will start a container named my-react-app running your React application, accessible at http://localhost:8080.

