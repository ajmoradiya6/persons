import axios from 'axios';
import Tile from '../component/Tile';
import { useEffect, useState } from 'react';


function HomePage() {
    const [data, setData] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios('https://randomuser.me/api/?results=30&nat=US');
        setData(result.data);
    };
    fetchData();
    }, []);

    return (
    <div className="App">
        <header className='header'>
        Persons
        </header>
        <div className='main'>
        <div className='first-column'> 
            {data && data.results.slice(0,10).map((user, index) => (
            <div key={index} className="column">
                <Tile 
                user = {user}
                // image={user.picture.large}
                // first={user.name.first}
                // last={user.name.last}
                // email={user.email}
                // address={`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}
                />
            </div>
            ))}
        </div>
        <div className='second-column'>
        {data && data.results.slice(10,20).map((user, index) => (
        <div key={index} className="column">
            <Tile 
            user = {user}

            // image={user.picture.large}
            // first={user.name.first}
            // last={user.name.last}
            // email={user.email}
            // address={`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}
            />
        </div>
        ))}
        </div>
        <div className='third-column'> 
        {data && data.results.slice(20,30).map((user, index) => (
        <div key={index} className="column">
            <Tile 
                user = {user}

            // image={user.picture.large}
            // first={user.name.first}
            // last={user.name.last}
            // email={user.email}
            // address={`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}
            />
        </div>
        ))}
        </div>
        </div>
    </div>
    );
}

export default HomePage;