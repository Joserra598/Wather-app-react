import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/AppComponent/index.";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./StateManager/Reducers";

const store = createStore(allReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
