import Info from './info';
import './App.css';

const profiles = [
  { lastName: 'Doe', firstName: 'John', gender: 'Male', height: 180, birth: '1990-01-01', picture: 'men'},
  { lastName: 'Smith', firstName: 'Jane', gender: 'Female', height: 165, birth: '1992-02-02', picture: 'women'},
];

const IdCard = () => {
  console.log("Rendering IdCard component")
  return (
    <section className="idCard">
      <div className="info">
        {profiles.map((singleProfile) => (
          <Info {...singleProfile} key={singleProfile.id} />
        ))}
      </div>
    </section>
  );
};

export default IdCard;
