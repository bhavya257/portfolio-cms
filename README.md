# **Portfolio CMS \- Sanity Studio**

This repository contains the Sanity Studio for Portfolio CMS. This studio is the content management system used to power
the website [bhavyajain.in](https://bhavyajain.in).

## **Quick Start**

To run this studio on your local machine, follow these steps:

1. **Clone the repository:**  
   git clone [https://github.com/bhavya257/portfolio-cms](https://github.com/bhavya257/portfolio-cms)  
   cd your-repo-name

2. **Install dependencies:**  
   npm install

3. Set up environment variables:  
   Create a file named .env.local in the root of the project and add the following variables. You can get these from
   your project's page at manage.sanity.io.
   ``` 
   SANITY_STUDIO_PROJECT_ID="your_project_id"  
   SANITY_STUDIO_DATASET="your_dataset_name"
   ``` 

4. **Run the studio:**
   ```bash
   npm run dev
   ```
   The studio should now be running at http://localhost:3333.

## **Features**

This studio is built following an opinionated set of best practices to ensure a scalable, maintainable, and
user-friendly content management experience.

* **Modular Schema Design:** Schemas are organized into logical files and directories under /schemas, separating
  document types, objects, and constants for clarity and reusability.
* **Custom Desk Structure:** The editing interface is organized using a custom desk structure (/deskStructure.js) to
  create an intuitive workflow for managing singleton documents (like a Home Page) and listable content types.
* **Optimized for Performance:** The configuration avoids unnecessary complexity, ensuring the studio remains fast and
  responsive for content editors.
* **Real-time Content Updates:** Leveraging Sanity's core features, content changes are reflected in real-time across
  all connected clients.

## **Deployment**

The production studio is deployed and hosted by Sanity. Any changes pushed to the main branch can be configured to
automatically trigger a new deployment.

You can manually deploy the studio by running:

```bash
  npx sanity deploy
```

## **Suggestions & Feedback**

If you have any suggestions or feedback regarding the structure or implementation of this CMS, please feel free to reach
out. Contact information is available on my portfolio website: [bhavyajain.in](https://bhavyajain.in).

## **License**

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License**.
See the LICENSE.md file for more details.

You must attribute the work to **Bhavya Jain** and link to this repository. This project cannot be used for commercial
purposes. You are free to share and adapt this work, but if you do, you must distribute your contributions under the
same license.