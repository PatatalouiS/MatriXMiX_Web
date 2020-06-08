
import React from 'react';
import { Container, Segment } from 'semantic-ui-react';


const LibraryHeader = () => (
    <Segment color='blue' secondary>
        Ici, vous pouvez accéder à la gestion de vos matrices, 
        les visualiser avec MathJax, ou bien en ajouter de nouvelles 
        afin de d'effectuer des calculs sur celles-ci. Pour l'instant, 
        les calculs sont limités à des matrices de taille 10 x 10 au maximum.
        Afin de soulager votre machine, les calculs longs et/ou 
        de forte complexité sont effectés sur notre serveur.
    </Segment>
);

export default LibraryHeader;