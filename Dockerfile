FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# Ensure vite is installed and has execution permissions
RUN npm install -g vite && chmod +x /app/node_modules/.bin/vite

# Add node_modules binaries to PATH
ENV PATH="/app/node_modules/.bin:$PATH"

EXPOSE 5173
CMD ["npx", "vite", "--host"]

