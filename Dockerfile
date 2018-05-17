# Dockerfile using multistagging for deployment
FROM node:8.9.4-alpine as builder

ENV HOME=/home/node

RUN mkdir -p $HOME/web
WORKDIR $HOME/web

COPY package.json .

RUN yarn

COPY . .

# Build the application
RUN yarn build

# Deployment stage using nginx
FROM nginx:1.13.9-alpine as deployment

COPY --from=builder /home/node/web/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
