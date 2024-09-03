FROM node:20
WORKDIR /app

COPY backend/package*.json ./backend/

COPY frontend/package*.json ./frontend/

RUN cd backend && npm install

RUN cd frontend && npm install

COPY backend ./backend

COPY frontend ./frontend

RUN cd frontend && npm run build

EXPOSE 3001

CMD ["sh","-c", "cd /app/backend && node server.js & cd /app/frontend && npx serve -s build"]