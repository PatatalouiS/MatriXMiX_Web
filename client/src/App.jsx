
import React from 'react';
import './index.css';
import Header from './components/Header';
import TabMenu from './components/TabMenu';
import { Container } from 'semantic-ui-react';

const App = () => (
	<Container>
		<Header/>
		<TabMenu/>
	</Container>
);

export default App;
