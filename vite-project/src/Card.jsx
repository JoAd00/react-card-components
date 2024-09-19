import profilePic from './assets/Foto KTP.png'


function Card(){

    return(
        <div className="card">
            <img className="profilePic" src={profilePic} alt="Profile Picture" />
            <h2 className='card-title'>JoAd</h2>
            <p className='card-text'>I'm currently still counting on JOB</p>
        </div>
    )
}

export default Card;