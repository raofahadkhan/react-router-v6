import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import Product from "./Product";

function App() {
	return (
		<div>
			<h1>Welcome</h1>
			<Link to="/">Home..</Link>
			<Link to="/about">About..</Link>
			<Link to="/products">Product</Link>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/products/:productId" element={<Product />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
