
import React from 'react';
import LibraryTab from './LibraryTab/LibraryTab.jsx';
import { Tab } from 'semantic-ui-react';

const panes = [
    { menuItem : 'Calculer', render : () => { } },
    { menuItem : 'Librarie', render : () =>  <LibraryTab className='white-bg'/> }
];

const TabMenu = () => (

    <Tab panes={ panes } menu={{ color : 'blue' }} />
    
);

export default TabMenu;