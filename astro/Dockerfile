FROM node:22

ENV WORKDIR=/app

WORKDIR ${WORKDIR}

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host"]
