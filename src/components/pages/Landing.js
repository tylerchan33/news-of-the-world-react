import { Link } from "react-router-dom"

function Landing(props) {
    const savedArticles = props.faves.map((article, i) => {
        return (
            <div key={`article${i}`}>
            <h3><Link to={`/articles/${i}`}>{article.title}</Link></h3>
            <p>{article.content}</p>
            <button onClick={() => props.handleClick(article)}>Save Article!</button>
        </div>
        )
    })
    return (
        <div>
            <h1>WELCOME TO CHANNEL 5 NEWS!</h1> 
            <label htmlFor="news-search">Search for News:</label>
            <form onSubmit={props.userSearch}>
                <input 
                    id="news-search"
                    type="text"
                    value={props.search}
                    onChange={props.handleChange}
                >
                </input>
                <Link to={"/articles"}><button type="submit">Submit</button></Link>
            </form>
            <h1>Saved Articles:</h1>
            {savedArticles}
        </div>
    )
}

export default Landing;