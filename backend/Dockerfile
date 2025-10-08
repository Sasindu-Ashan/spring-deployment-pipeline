# Backend Dockerfile
FROM openjdk:21-jdk-slim
WORKDIR /app
RUN mkdir /logs

# Use relative path from build context (backend folder)
COPY target/point-of-sale-0.0.1-SNAPSHOT.jar app.jar
COPY application-docker.properties ./application.properties
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
