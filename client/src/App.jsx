
import React from 'react';
import './index.css';
import Header from './components/Header';
import TabMenu from './components/TabMenu';
import { Container } from 'semantic-ui-react';
import store from './utils/store';
import { Provider } from 'react-redux';
import Footer from './components/Footer';

const App = () => (
	<Provider store={ store }>
		<Container>
			<Header/>
			<TabMenu/>
			<Footer/>
		</Container>
	</Provider>
);

export default App;
