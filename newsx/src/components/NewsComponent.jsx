import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

import DemoData from "./DemoData.json";


export default function NewsComponent() {

    const articles = DemoData.articles;

    // fetching data from API

    // const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=398674dffbd849df94e0e54785d51b7f';
    // const url = 'https://newsapi.org/v2/top-headlines?country=us?pageSize=10&apiKey=398674dffbd849df94e0e54785d51b7f';
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=398674dffbd849df94e0e54785d51b7f";

    // const fetchFunc = async () => {
    //     let data = await fetch(url)
    //     let json = await data.json()
    //     setData(json);
    //     return json;
    // }
    // const fetchFunc = () => {
    //     return fetch(url)
    //         .then((res) => res.json())
    //         .then((d) => setData(d.articles))
    // }
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetchFunc();
    // }, [])



    // fetchFunc();
    var count = 0;
    return (
        <>
            <h2>Inside newscomponent</h2> <br /> <br />

            <div className="container">
                <div className="row">

                    {/* following code to fetch data from news api */}

                    {/* {data.map((item, index) => {
                        { count = count + 1 }
                        return (

                            <div className="col col-md4" key={index}>
                                <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} />
                            </div>
                        );
                    })} */}

                    {/* <NewsItem title={data.title} description={data.description} imageUrl={data.urlToImage} /> */}

                    {articles.map((item, index) => {
                        { count = count + 1 }
                        return (

                            <div className="col col-md4" key={index}>
                                <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} />
                            </div>
                        );
                    })}
                    {/* <NewsItem title={articls.title} description={articles.description} imageUrl={articles.urlToImage} />  */}


                </div>
            </div>

            {console.log(count)}
            


            

        </>
    )
}
