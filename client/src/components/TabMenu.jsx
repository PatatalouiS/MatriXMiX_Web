
import React from 'react';
import LibraryTab from './LibraryTab/LibraryTab';
import ComputeTab from './ComputeTab/ComputeTab';
import { Tab } from 'semantic-ui-react';

const panes = [
    { menuItem : 'Calculer', render : () => <ComputeTab/> },
    { menuItem : 'Librarie', render : () =>  <LibraryTab/> }
];

const TabMenu = () => (
    <Tab panes={ panes } menu={{ color : 'blue' }} />
);

export default TabMenu;