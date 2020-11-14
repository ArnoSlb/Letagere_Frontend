import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const CritiqueForm = () => {

    const HandleOnChange = () => {
        console.log('je passe dans Handle On Change')
    }

    return (
        <form className="critique-form">
            <div>
                <label htmlFor="title">Titre :</label>
                <textarea type="text" id="title" name="critical_title"> </textarea>
            </div>
        </form>
    );
}

export default CritiqueForm;