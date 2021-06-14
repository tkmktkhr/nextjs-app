### Docker Container

Build image for dev mode

`docker image build --no-cache --build-arg ENVIRONMENT=dev -t <name:tag> .`

Start container

`docker container run -p <local-port>:8080 <image:tag>`

### Docker Compose

See `docker-compose.yml`

`docker-compose up --build web`
