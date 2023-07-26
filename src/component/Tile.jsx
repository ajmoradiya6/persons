import './tile.css'
import { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

function Tile({ user }) {

    const [selectedPerson, setSelectedPerson] = useState(null);
    
    
    const handleSelectPerson = (person) => {
    setSelectedPerson(person);
    // Save the selected person data to local storage for persistence
    localStorage.setItem('selectedPerson', JSON.stringify(person));
    };

    
    return (
        <Link 
        to={{
            pathname: "/details"
            // state: { user } // passing the user data to the /details route 
        }}
        onClick={() => handleSelectPerson(user)}
        className = "tile-link"
        >
            <div className="tile">
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                <div className="tile-info">
                <p className="name">{user.name.first} {user.name.last}</p>
                <p className="email">{user.email}</p>
                <p className="address">{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</p>
                </div>
            </div>
        </Link>
    );
}


export default Tile;