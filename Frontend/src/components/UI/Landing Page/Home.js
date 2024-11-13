import { Button } from '../Button/Button';
import classes from './Home.module.css';

const Home = (props) => {
    return (
        <div>
            <div className={`${classes.group}`}>
                <div className={`${classes.text}`}>
                    <div className={`${classes.welcome_content}`}>Welcome to LetterWiz</div>
                    <div className={`${classes.welcome_heading}`}>Turn your raw data into a formal document</div>
                    <div className={`${classes.welcome_description}`}>Offer Letters, Resumes and much more!</div>
                    <Button content='GET STARTED' />
                </div>
            </div>
        </div>
    );
}

export default Home;