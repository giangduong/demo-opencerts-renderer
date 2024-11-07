# Use an official base image
FROM node:18-alpine AS dev

# Install required packages including wget and tar
RUN apk add --no-cache curl wget tar

# Set working directory
WORKDIR /app

# Download and install VS Code Server
# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
# COPY . .

# Expose port (adjust as needed)
# EXPOSE 3000

# Start the application
CMD ["npm", "start"] 



FROM base AS build
COPY . .
RUN npm run build

FROM nginx:alpine AS prod
COPY --from=build /app/dist ./usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"] 