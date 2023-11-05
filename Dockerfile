# Step 1: Build the React application
FROM node:16-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the codebase into the container
COPY . .

# Build the application using npx to run the local nx command
RUN npx nx build frontend --configuration=production

# Step 2: Serve the app with nginx
FROM nginx:stable-alpine as production

# Copy the built assets from the build container to the nginx container
COPY --from=build /app/dist/apps/frontend /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Define the command to run your app using CMD which defines your runtime
CMD ["nginx", "-g", "daemon off;"]
