import CreditCard from "./creditcard";
const CreditCardData = [
    {
      type: 'Visa',
      number: '0123456789018845',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'BNP',
      owner: 'Maxence Bouret',
      bgColor: '#11aa99',
      color: 'white',
    },
    {
      type: 'Master Card',
      number: '0123456789010995',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'N26',
      owner: 'Maxence Bouret',
      bgColor: '#eeeeee',
      color: '#222222',
    },
    {
      type: 'Visa',
      number: '0123456789016984',
      expirationMonth: 12,
      expirationYear: 2019,
      bank: 'Name of the Bank',
      owner: 'Firstname Lastname',
      bgColor: '#ddbb55',
      color: 'white',
    },
  ];
  const Card = () => {
    return (
      <div>
        {CreditCardData.map((card, index) => {
          return (
            <div key={index}>
              <CreditCard
                type={card.type}
                number={card.number}
                expirationMonth={card.expirationMonth}
                expirationYear={card.expirationYear}
                bank={card.bank}
                owner={card.owner}
                bgColor={card.bgColor}
                color={card.color}
              />
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Card;