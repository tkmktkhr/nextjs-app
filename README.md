## Next.js Environment

`next dev`: development mode, `next start`: production mode.According to it, the server refers .env.<development or production>.

> **Note** 
> `.env` is default value on all environment(development, production).

When Deploying a server by `Dockerfile`, switch `npm run dev` or `npm run prod` by `ENVIRONMENT` value. (ex. Deploying a server on GAE, `ENVIRONMENT` should be set by `env_variables` in app.yaml)

### Docker Container

Build image for dev mode
`docker image build --no-cache --build-arg ENVIRONMENT=dev -t <name:tag> .`
Start container
`docker container run -p <local-port>:8080 <image:tag>`

### Docker Compose

> **Note** 
> After updating the content in `Dockerfile`, remove the cache then execute build.

`docker-compose build --no-cache web`

`docker-compose up web`

Other, if you want to build a server then boot it up,

`docker-compose up --build web`

### Docker for Mac

When using `host.docker.internal` in development mode, set the bellow line in `/etc/hosts`.
`127.0.0.1 host.docker.internal`

## PRODUCTION

> **Warning** 
> Regarding a port, it should be `EXPOSE 3000` in `Dockerfile` for Azure App Service, for Google App Engine, should be `EXPOSE 8080`.
> `npm run start`

## ENVIRONMENT

To load `process.env` on a client side add `NEXT_PUBLIC_` on the prefix of valuables.

> **Note** 
> Deploying on GAE with Github Secrets, env will not be loaded on production mode, unless using `next.config.js`.
