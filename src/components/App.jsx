import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';

function App() {
	function showSettings(event) {
		event.preventDefault();
	}
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
