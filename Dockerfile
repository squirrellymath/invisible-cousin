FROM node:22-alpine
RUN npm install -g serve
COPY artifacts/invisible-cousin/dist/public /public
CMD ["serve", "/public", "-l", "8080"]
