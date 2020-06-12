
import React from 'react';
import { Segment } from 'semantic-ui-react';

const Footer = () => {
    return (
        <Segment 
            basic
            id='footer'
            textAlign='center' 
            className='full-width transparent' >
            Réalisé pour l'UE LIFPROJET <br/>
            Université Claude Bernard Lyon1 <br/>
            Pour tout renseignement, suggestions d'améliorations,
            ou bien repport de bugs, merci de me contacter par mail : <br/>
            <a href='mailto:maxime.olivie@etu.univ-lyon1.fr'> Support technique </a>
        </Segment>
    )
};

export default Footer;