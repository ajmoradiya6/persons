import { useEffect, useState } from 'react';
import './detailsPage.css'
import { Icon } from 'react-icons-kit'
import {chevronLeft} from 'react-icons-kit/fa/chevronLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import {chevronLeft} from 'react-icons-kit/fa/chevronLeft'


function DetailsPage( ) {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const cachedPerson = localStorage.getItem('selectedPerson');
        if (cachedPerson) {
          setSelectedPerson(JSON.parse(cachedPerson));
        }
      }, []);

    useEffect(() => {
        // Put the code that should run when selectedPerson changes here
    }, [selectedPerson]);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString();
    }
    
    const handleGoBack = () => {
        setSelectedPerson(null);
        // Clear the cached person data when going back to page 1
        localStorage.removeItem('selectedPerson');
        navigate('/');
      };

    console.log(selectedPerson)
    return(
        // <div>Details Page</div>
        <div className='details-page'>
            <header className='header'>
            <button className="back-button" onClick={handleGoBack}>
                <Icon icon={chevronLeft} />
                {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
            </button>
                Details
            </header>
            <div className='details-content'>
                <div className='f-col'>
                    <img src={selectedPerson?.picture?.large} alt={`${selectedPerson?.name?.first} ${selectedPerson?.name?.last}`} />
                </div>
                <div className='second-column'>
                    <div className='tilee'>
                        <div className='label'>Name</div>
                        <div>
                            {selectedPerson?.name?.first}  {selectedPerson?.name?.last}
                        </div>
                    </div>
                    <div className='tilee'>
                        <div className='label'>Login</div>
                        <div>
                            {selectedPerson?.login?.username}
                        </div>
                    </div>
                    <div className='tilee'>
                        <div className='label'>Address</div>
                        <div>
                            {`${selectedPerson?.location?.street?.number} ${selectedPerson?.location?.street?.name}, ${selectedPerson?.location?.city}, ${selectedPerson?.location?.state}, ${selectedPerson?.location?.country}, ${selectedPerson?.location?.postcode}`}
                        </div>
                    </div>
                    <div className='tilee'>
                        <div className='label'>Email</div>
                        <div>
                            {selectedPerson?.email}
                        </div>
                    </div>
                    <div className='tilee'>
                        <div className='label'>Date Of Birth</div>
                        <div>
                            {selectedPerson?.dob && formatDate(selectedPerson.dob.date)}
                        </div>
                    </div>
                </div>
                <div className='second-column'>
                    <div className='tilee'>Current Conditions</div>
                    <div className='tilee'>Temperature</div>
                    <div className='tilee'>Pressure</div>            
                    <div className='tilee'>Humidity</div>        
                </div>    
            </div>
        </div>
    );
}

export default DetailsPage;