import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBIcon, MDBBtn, MDBSideNav, MDBSideNavItem, MDBSideNavLink, MDBSideNavMenu, MDBSideNavCollapse } from 'mdb-react-ui-kit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
