# Use an official base image
FROM node:18-alpine

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