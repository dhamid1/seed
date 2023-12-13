import coupleHead from '../Pages/Images/coupleHeader_02.png';

const Banner = () => {
    return (

<div className="header">
<div className="featureHeaderContainer">
<img src={coupleHead} className="couplepicHeader" alt="Header Couple"/>
<p className='headerText'> SEED gathers resources to help. Visit our resource
to find useful tools for communication, helpful phone numbers, more!</p>
<button className='buttonHeader'>Resources</button>
</div>
</div>  
);
};

export default Banner;