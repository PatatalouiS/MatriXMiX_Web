
import React from 'react';
import { Segment } from 'semantic-ui-react';


const LibraryHeader = () => (
    <Segment color='blue' secondary>
        Ici, vous pouvez accéder à la gestion de vos matrices, 
        les visualiser avec MathJax, en ajouter de nouvelles ou bien les supprimer. <br/>
        Afin de soulager votre machine, les calculs longs et/ou 
        de forte complexité sont effectés sur notre serveur via la même librarie Matrix
        que nous utilisons pour MatriXMiX Desktop. <br/>
        Vous pouvez visualiser une matrice en sélectionnant sa ligne associée dans le tableau.
    </Segment>
);

export default LibraryHeader;