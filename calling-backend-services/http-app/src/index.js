import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import loggingService from "./services/httpService";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

loggingService.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
