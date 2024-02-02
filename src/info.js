import { getImageUrls } from './utility.js';
import './App.css';

const Info = ({ lastName, firstName, gender, height, birth, picture }) => {
    console.log("Rendering Info component");
    return (
        <section className="info">
            <div className="title">
                <img 
                    className="picture"
                    src={getImageUrls(picture)}
                    alt="Profile"
                    width={200}
                    height={200}
                />
                <ul className='textbox'>
                    <li>
                    <b>First name: </b>
                    {firstName}
                    </li>
                    <li>
                    <b>Last name: </b>
                    {lastName}
                    </li>
                    <li>
                    <b>Gender: </b>
                    {gender}
                    </li>
                    <li>
                    <b>Height: </b>
                    {height}
                    </li>
                    <li>
                    <b>Birth: </b>
                    {birth}
                    </li>
                </ul>
            </div>
        </section>
    );
   }

   export default Info;