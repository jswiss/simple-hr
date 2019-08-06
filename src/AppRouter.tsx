import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function AppRouter() {
	return (
		<Router>
			<Navbar />
			<Route path="/" exact component={Home} />
		</Router>
	);
}

export default AppRouter;
