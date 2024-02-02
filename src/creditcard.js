const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  }) => {
    
    const lastFourDigits = number.slice(-4);
  
    return (
      <div className='credit-card' style={{ backgroundColor: bgColor, color: color }}>
        <div className='type'></div>
        <div className='number'>**** **** **** {lastFourDigits}</div>
        <img 
          className='cardpicture'
          src={type === 'Visa' ? '/visa.png' : '/master-card.svg'}
          alt={type}
        />  
        <div className='expires'>
          Expires {expirationMonth}/{expirationYear}
        </div>
        <div className='bank'>{bank}</div>
        <div className='owner'>{owner}</div>
      </div>  
    );
  };
  
  export default CreditCard;
  