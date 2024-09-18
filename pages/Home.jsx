import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="text">
            <h2>Welcome to OnlineStore!</h2>
            <h4>Latest Tech, Buy Now!</h4>
            
            <button>View New Tech</button>
            </div>
            <img src="/images/Home.jpg" alt=""></img>
        </div>
    );
}

export default Home;