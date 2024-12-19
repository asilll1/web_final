import './App.css';
import { useState } from 'react';

function Header() {
    return (
        <header className="header">
            <h1>Creative Space</h1>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

function Card({ title, content, color }) {
    return (
        <div className="card" style={{ backgroundColor: color }}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

function AnimatedButton({ text, onClick }) {
    return (
        <button className="animated-button" onClick={onClick}>
            {text}
        </button>
    );
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Header />

            <main className="main-content">
                <section className="hero-section">
                    <h2>Welcome to Our Creative Space</h2>
                    <p>Explore the possibilities of modern web design</p>
                    <AnimatedButton
                        text={`Clicked ${count} times!`}
                        onClick={() => setCount(count + 1)}
                    />
                </section>

                <section className="cards-container">
                    <Card
                        title="Design"
                        content="Creative and responsive designs for modern web"
                        color="#ff6b6b"
                    />
                    <Card
                        title="Develop"
                        content="Building robust and scalable applications"
                        color="#4ecdc4"
                    />
                    <Card
                        title="Deploy"
                        content="Seamless deployment and maintenance"
                        color="#45b7d1"
                    />
                </section>
            </main>
        </div>
    );
}

export default App;