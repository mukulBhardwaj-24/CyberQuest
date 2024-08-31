import { Link } from "react-router-dom";
import "../App.css"

function About() {
    return (
        <>
            <div style={{backgroundColor: "#ffffff"}}>
                <div className="heading">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus rerum libero quae culpa ducimus error aspernatur ut velit voluptate!</p>
                </div>
                <div>
                    <div className="container">
                        <section className="about">
                            <div className="image">
                                <img src="../images/utilize-a-minimalist-and-stylish-wordmark-logo-des-xcGqBIKDTFGVcYpbIl9LpQ-ykxbbDGWSzO0ZbOof51YZQ.jpeg" />
                            </div>
                            <div className="about-content">
                                <h2>Warm embrace in a cup</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium culpa commodi repudiandae nisi sunt mollitia totam provident asperiores beatae expedita, quos minus libero aperiam eaque ratione labore blanditiis veniam? Culpa corporis doloribus voluptates nostrum fuga eaque accusantium sunt, quidem dolores earum eum iste eligendi. Nihil nemo est voluptas. Qui.</p>
                                <Link className="read-more">Read More</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;