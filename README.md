Project repository for our **WeStock Web Application**

## Backend
The project is a three tier applicatin with the backend provided through https://github.com/StockApp-Org/StockAPI.
We chose to separate the React app repository from the API to more easily identify issues, both in code as well as collaborations.

The site is also hosted at http://98.128.173.59:8080/ which is Daniel's own homeserver, using Ubuntu 18.04 LTS and Apache2 as the OS and webserver infrastructure.

### Funcitonality
The app sports a number of features such as:
- Sign In authentication against database with hashed passwords
- Sign Up feature with a GDPR data disclaimer
- Graphing over owned stock shares
- Table view and calculated details regarding users owned portfolio
- "Purchase" functionality (The user can purchase in the sense that they can add shares to their portfolio, but there is no tracking of currency)
- Settings
  - Change personal data
  - Change password
  - "Preferences" (This feature is only for show at this stage, we are pulling industries from the database and displaying, but those selections does not have any effect on the actual functionality
  - Pull full user data in compliance with GDPR
  - Delete account completely in compliance with GDPR
  
### Extras
We have also worked with Continous Integration here on GitHub by setting up an action workflow which builds the project upon Pull Requests and Merges, and then stores the generated artifact under the actions for easy retrieval and deployment.

![Build and generate artifact CI](https://github.com/StockApp-Org/StockApp/workflows/Build%20and%20generate%20artifact%20CI/badge.svg?branch=staging)
