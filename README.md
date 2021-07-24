Pub/Sub Node.js deployment to GKE. Simulate passing of data from GKE.App -> Dataflow -> BigQuery
===================================

- app.js        - simulate server code > execute GET request and sent simulate data to "pubsub"
- package.json  - setup file to install node dependencies (files necessary to connect to GCP/pubsub)
- Dockerfile    - config file user by docker to convert node.js app code into deployable containers
- key.json      - identity file to authenticate with pubsub (create service account, give pubsub publisher permission, download the json key and save as key.json together with     app.js file)
- views folder  - index.html, stream.html is return when GET request calls for "ip:8080/" & "ip:8080/stream"

Upload-video-files-with-node.js
===================================

Step 1. Clone the repository into your vm or location
Step 2. Go to directory
Step 3. Install the necessary packages and dependencies from package.json
Step 4. Start up the server

cmd: git clone https://github.com/duanH3/pubsub-with-nodejs.git
cmd: cd pubsub-with-nodejs
cmd: npm install
cmd: node app.js
