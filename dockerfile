FROM node:16-alpine AS devCon
# Copy all except files in .gitignore
COPY . .
RUN npm i

FROM node:16-slim
# COPY --from=[container name] From/path To/path
EXPOSE 8080
COPY --from=devCon /src /src
COPY --from=devCon /node_modules /node_modules
COPY --from=devCon ["/.env*", "/next.config.js", "package*.json", "tsconfig.json", "./"]
RUN npm run build
ARG ENVIRONMENT
ENV ENVIRONMENT=$ENVIRONMENT
CMD npm run $ENVIRONMENT