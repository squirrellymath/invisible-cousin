FROM node:22-alpine
RUN npm install -g serve
COPY artifacts/invisible-cousin/dist/public /public
CMD ["sh", "-c", "serve /public -l ${PORT:-8080}"]
