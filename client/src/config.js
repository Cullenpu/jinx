const prod = {
  env: "production",
  api_host: "", // an empty string to signify a relative path. can also put a deployment URL.
};

const dev = {
  env: "development",
  api_host: "http://localhost:5000", // web server localhost port
  use_frontend_test_user: true, // for testing a logged in frontend only, without any actual logging in, set to true (note that the test user will have to be turned on in the backend if you want to make authenticated requests).
  id: "60660a645f3e874f446ee59b",
  email: "test@jinx.com",
  name: "Test User"
};

// export the appropriate environment
export default process.env.NODE_ENV === "production" ? prod : dev;
