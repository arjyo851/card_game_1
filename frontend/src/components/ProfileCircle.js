import React from 'react';

const ProfileCircle = ({ name, currentName, color }) => {
    return (
        <div className="flex-centered-column profilecirclediv">
            <div className='profilecirclecontainer'>
                {name === currentName ?
                    (<div className="profilecircle flex-centered currentturn" style={{backgroundColor: color}}>{name.substring(0, 1).toUpperCase()}</div>)
                    :
                    (<div className="profilecircle flex-centered" style={{backgroundColor: color}}>{name.substring(0, 1).toUpperCase()}</div>)
                }

            </div>
            <h3>{name}</h3>
        </div>
    )
}

export default ProfileCircle;