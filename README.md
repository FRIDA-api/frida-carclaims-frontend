# FRIDA Carclaims-Frontend

Link to Live Website: https://frida-api.github.io/frida-carclaims-frontend

## Name

FRIDA Carclaims Frontend - Schadenmeldeplattform

## Description

The FRIDA Carclaims Frontend is a web application designed to streamline the process of reporting car insurance claims. This platform allows users to easily submit details about car accidents, including personal information, vehicle damage, and witness statements. The application ensures that all necessary information is collected accurately and efficiently, reducing the time and effort required to file a claim. With a user-friendly interface and seamless integration with backend services, the FRIDA Carclaims Frontend provides a comprehensive solution for managing car insurance claims.

Additionally, some data will be extracted onto the platform from the wallet pass when the website gets called, further simplifying the data entry process for users.

## Installation

To install and run the FRIDA Carclaims Frontend locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/frida-api/frida-carclaims-frontend.git
   cd frida-carclaims-frontend
   ```

2. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the project dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Ensure you have the newest version of `claimsOas.yaml`:**
   Download the latest version of `claimsOas.yaml` from the [FRIDA Carclaims Frontend repository](https://github.com/FRIDA-api/frida-carclaims-frontend).

4. **Generate the types:**
   Use the `openapi-generator-cli` to generate the types from the `claimsOas.yaml` file:
   ```bash
   npm run build-api
   # or
   yarn build-api
   ```

5. **Run the development server:**
   Start the development server to run the application locally:
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Build for production:**
   To create a production build of the application, run:
   ```bash
   npm run build
   # or
   yarn build
   ```

### Deployment

The FRIDA Carclaims Frontend is automatically deployed to GitHub Pages using a GitHub Actions pipeline. The deployment process is triggered whenever you push to the `master` branch.

1. **Build and Deploy:**
   The GitHub Actions pipeline defined in `buildanddeploy.yaml` will handle the build and deployment process. You do not need to manually build or deploy the application. Simply push your changes to the `master` branch, and the pipeline will take care of the rest.

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin master
   ```

2. **Push `claimsOas.yaml` to the marketplace:**
   The `claimsOas.yaml` file will be automatically pushed to the marketplace as part of the GitHub Actions pipeline. This ensures that the latest API specifications are always available in the marketplace.

Following these steps will help you deploy the FRIDA Carclaims Frontend efficiently.






