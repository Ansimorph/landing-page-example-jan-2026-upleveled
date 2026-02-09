import './App.css';
import ExplainerList from './ExplainerList/ExplainerList';
import Header from './Header/Header';
import LinkButton from './LinkButton/LinkButton';
import phones from './images/jive-phones.png';

export default function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <h1>Don’t make connecting awkward</h1>
                <p>
                    No more fumbling for business cards or searching for lost
                    contacts after an event. Jive makes it easy to exchange info
                    and keep the conversation going straight from your inbox.
                </p>
                <LinkButton size="big" href="/signup">
                    Sign up for free
                </LinkButton>

                <img
                    src={phones}
                    className="example-image"
                    alt="Two mobile phone screens showing a qr code and a email to a new jive contact"
                />

                <h2>Here's how it works</h2>

                <p>More jiving, less shucking.</p>

                <ExplainerList />
            </main>
        </div>
    );
}
