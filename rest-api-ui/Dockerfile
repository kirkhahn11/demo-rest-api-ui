FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# pass off static resources (everything in the dist folder)
# passing it to a web server
FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/rest-api-ui/ /usr/share/nginx/html
