
import React from 'react';
import './index.css';
import Header from './components/Header';
import TabMenu from './components/TabMenu';
import { Container } from 'semantic-ui-react';
import store from './utils/store';
import { Provider } from 'react-redux';

const App = () => (
	<Provider store={ store }>
		<Container>
			<Header/>
			<TabMenu/>
		</Container>
	</Provider>
);

export default App;
