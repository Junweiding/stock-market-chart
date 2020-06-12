# base image
FROM java:8

# local forlder to image
VOLUME /tmp

# copy files to docker
ADD /target/eureka1-0.0.1-SNAPSHOT.jar app.jar
RUN bash -c 'touch /app.jar'

# port 8761
EXPOSE 9100

# run
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]