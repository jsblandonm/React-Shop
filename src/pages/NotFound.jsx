import React from 'react';
import {Link} from 'react-router-dom';
import '@styles/NotFound.scss'


export const NotFound = () => {
    return (
        <div className="NotFound">
            <img
                src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
                alt=""
            />
            <Link to="/">
                <h1>Return to Home</h1>
            </Link>
        </div>
    );
};

// const NotFound = () => {
//     return (
//         <div>
//             <h1 clasName="title-404">404</h1>
//             <p className="text-404">Ooops! Pagina no encontrada</p>
//             <a clasName="button-404" href="#">Regrese a la pagiana de inicio</a>
//         </div>
//     );
// }

export default NotFound;
