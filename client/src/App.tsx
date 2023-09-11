import { Login, Register } from "components";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path='/messenger/login' element={<Login />} />
			<Route path='/messenger/register' element={<Register />} />
		</Routes>
	);
}

export default App;
