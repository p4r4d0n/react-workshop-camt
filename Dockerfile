FROM node:8.11.3
LABEL maintainer "Paradon"
WORKDIR /my-app
COPY . /my-app
RUN yarn install
# RUN npm run build
EXPOSE 3000
CMD ["yarn", "start"]

