A full-stack face detection app.
Just supply a picture link with faces and the app will present the face edges.
This app uses two Heroku servers one for the frontend, and the other as restful API that connects to a PostgreSQL database.
The app connects to clarifai with API key and query and receives the results.
you can see the backend source code at `https://github.com/wantedHorizon/FaceDetect-BackEnd`;
	
to the deploy your  app you need a clarifai api-key  , backend server and database.




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
