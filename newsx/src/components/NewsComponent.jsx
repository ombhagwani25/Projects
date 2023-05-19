import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'



export default function NewsComponent() {
    // fetching data from API

    const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=398674dffbd849df94e0e54785d51b7f';

    // const fetchFunc = async () => {
    //     let data = await fetch(url)
    //     let json = await data.json()
    //     setData(json);
    //     return json;
    // }
    const fetchFunc = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d.articles))
    }
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFunc();
    }, [])



    // fetchFunc();
    var count = 0;
    return (
        <>
            <h2>Inside newscomponent</h2> <br /> <br />

            <div className="container">
                <div className="row">

                    {/* following code to fetch data from news api */}

                    {data.map((item, index) => {
                        { count = count + 1 }
                        return (

                            <div className="col col-md4" key={index}>
                                <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} />
                            </div>
                        );
                    })}

                    <NewsItem title={data.articles[0].title} description={data.articles[0].description} imageUrl={data.articles[0].urlToImage} />
                </div>
            </div>

            {console.log(count)}
            {/* <div className="container">

                <h4 className="display-4">NewX - Top Headlines</h4>

                {/* slider */}
            {/* <div id="carouselExample" class="carousel slide" data-ride="carousel" data-interval="1000" data-bs-pause="false" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row">
                            <div className="col col-md4">
                                <NewsItem title="hii" description="sample description" imageUrl={imageUrl} />
                            </div>
                            <div className="col col-md4">
                                <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                            </div>
                            <div className="col col-md4">
                                <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row">
                            <div className="col col-md4">
                                <NewsItem title="hii" description="sample description" imageUrl={imageUrl} />
                            </div>
                            <div className="col col-md4">
                                <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                            </div>
                            <div className="col col-md4">
                                <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row">
                            <div className="col col-md4">
                                <NewsItem title="hii" description="sample description" imageUrl={imageUrl} />
                            </div>
                            <div className="col col-md4">
                                <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                            </div>
                            <div className="col col-md4">
                                <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                            </div>
                        </div>
                    </div>
                </div>




                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}

            {/* slider > end */}


            {/* TODO  : display data from API */}
            {/* 
                <div className="row">
                    <div className="col col-md4">
                        <NewsItem title="hii" description="sample description" imageUrl={imageUrl} />
                    </div>
                    <div className="col col-md4">
                        <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                    </div>
                    <div className="col col-md4">
                        <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md4">
                        <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                    </div>
                    <div className="col col-md4">
                        <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                    </div>
                    <div className="col col-md4">
                        <NewsItem title="cricket news" description="sample description" imageUrl={imageUrl} />
                    </div>
                </div> */}


            {/* </div> */}


        </>
    )
}
