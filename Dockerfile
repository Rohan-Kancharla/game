# Step 1: Use an official Node.js runtime as a parent image
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install project dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the project (assumes 'build' script is defined in package.json)
RUN npm run build

# Step 7: Expose the port the app will run on (usually 8080 for frontend apps)
EXPOSE 8080

# Step 8: Define the command to run the app (assuming a static file server or web server is used)
CMD ["npm", "start"]
