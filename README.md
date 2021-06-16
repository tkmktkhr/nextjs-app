### Docker Container

Build image for dev mode

`docker image build --no-cache --build-arg ENVIRONMENT=dev -t <name:tag> .`

Start container

`docker container run -p <local-port>:8080 <image:tag>`

### Docker Compose

See `docker-compose.yml`

`docker-compose up --build web`

### Docker for Mac

When using `host.docker.internal` in development mode, set the bellow line in `/etc/hosts`.

`127.0.0.1 host.docker.internal`
