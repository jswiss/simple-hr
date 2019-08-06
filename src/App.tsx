import React from 'react';
import AppRouter from './AppRouter';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-content">
				<AppRouter />
			</header>
		</div>
	);
};

export default App;
