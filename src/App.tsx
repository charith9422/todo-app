import "./App.scss";
import Home from "./components/templates/Home";

function App() {
	return (
		<>
			<Home
				onChangeSearch={(v) => {
					console.log("d", v);
				}}
			/>
		</>
	);
}

export default App;
