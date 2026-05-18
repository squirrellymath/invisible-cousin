FROM node:22-alpine
RUN npm install -g serve
COPY artifacts/invisible-cousin/dist/public /app
WORKDIR /app
CMD ["serve", "-l", "8080", "."]
