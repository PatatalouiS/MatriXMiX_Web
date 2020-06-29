
import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

const Footer = () => {
    return (
        <Grid column='equal' stackable divided id='footer'>
            <Grid.Column width={5}>
                <Segment basic className='footer-segment'>
                    Réalisé pour l'UE LIFSTAGE <br/>
                    Université Claude Bernard Lyon1 <br/>
                </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
                <Segment basic className='footer-segment'>
                    Pour tout renseignement, suggestions d'améliorations,
                    ou bien repport de bugs, merci de me contacter par mail : <br/>
                    <a 
                        id='contact-link' 
                        href='mailto:maxime.olivie@etu.univ-lyon1.fr'> 
                        Support technique 
                    </a>
                </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
                <Segment basic className='footer-segment'>
                    Maxime OLIVIE <br/>
                    P1710179
                </Segment>
            </Grid.Column>
        </Grid>
    )
};

export default Footer;