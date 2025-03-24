# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package*.json ./
RUN pnpm install

# Copy the rest of the application
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
