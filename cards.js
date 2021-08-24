import React from 'react';
import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../components/card';

const cards = () => {
    return ( 
        <div className="row m-2 my-3">
            <Card heading="Stress" btntext="Learn More" btncolor="warning" cardtext="Stress like the mordern day virus. Many people get stressed out over things no matter the age. Let's look at various ways to prevent stress." />
            <Card heading="Anger" btntext="Learn More" btncolor="danger" cardtext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quae dolores iure inventore exercitationem, autem consequatur earum reiciendis adipisci modi quis voluptatum vel magni deserunt?" />
            <Card heading="Acceptance" btntext="Learn More" btncolor="primary" cardtext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quae dolores iure inventore exercitationem, autem consequatur earum reiciendis adipisci modi quis voluptatum vel magni deserunt?" />
            <Card heading="Anger" btntext="Get started" btncolor="secondary" cardtext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quae dolores iure inventore exercitationem, autem consequatur earum reiciendis adipisci modi quis voluptatum vel magni deserunt?" />
    
</div>
     );
}
 
export default cards;