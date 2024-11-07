# Use an official base image
FROM node:18-alpine AS dev

# Install curl
RUN apk add --no-cache curl

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
# COPY . .

# Expose port (adjust as needed)
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 

FROM dev AS build
COPY . .
RUN npm run build

FROM nginx:alpine AS prod
COPY --from=build /app/dist ./usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"] 