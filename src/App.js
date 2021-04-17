import { Route, Routes, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import ProductHome from "./ProductHome";

function App() {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Welcome to Nested Routing</h1>
			<Link to="/">Home..</Link>
			<Link to="/about">About..</Link>
			<Link to="/products">Product..</Link>
			<Link to="/products/mobile">Mobile..</Link>
			<Link to="/products/laptop">Laptop..</Link>
			<button
				onClick={() => {
					navigate("about");
				}}
			>
				Display About Page
			</button>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/products" element={<Product />}>
					<Route path="/" element={<ProductHome />}></Route>
					<Route path=":productId" element={<ProductDetails />}></Route>
				</Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
