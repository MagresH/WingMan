# Use an OpenJDK base image
FROM openjdk:17-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file into the container
COPY target/your-application.jar app.jar

# Expose the port your application runs on
EXPOSE 8080

# Set the command to run your application
CMD ["java", "-jar", "app.jar"]

FROM postgres:9.4
COPY src/main/resources/sql/trigger1.sql /docker-entrypoint-initdb.d/trigger1.sql

FROM postgres:latest

RUN apt-get update && apt-get install -y postgis

COPY init.sql /docker-entrypoint-initdb.d/