// import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn: "https://0fc863a8e8e246028ef63b470c132ebf@sentry.io/1813268",
  //   release: "v0.0.0.1",
  //   environment: "development-test"
  // });
}

function log(error) {
  console.error(error);
  //Sentry.captureException(error);
}

export default {
  init,
  log
};
