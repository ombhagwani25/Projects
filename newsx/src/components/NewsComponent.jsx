import React from 'react'
import NewsItem from './NewsItem'
// import sampleOutput from  "../sampleOutput.json";



export default function NewsComponent() {
    // fetching data from API
    
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=398674dffbd849df94e0e54785d51b7f';

    const  fetchFunc =  async () => {
        let data = await fetch(url)
        let json = await data.json()
        return json;
    }  
    

    let imageUrl = "https://static.toiimg.com/thumb/msid-98646739,width-1070,height-580,imgsize-44954,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg";


    return (
        <>

            {/* <NewsItem title="cricket news" description="sample description"  imageUrl={imageUrl}/> */}

            {/* <div className="container">

                <h4 className="display-4">NewX - Top Headlines</h4>
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
                </div>

            </div> */}


            <div className="container">
                
                <h4 className="display-4">NewX - Top Headlines</h4>
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
                </div>
              

            </div>

           
        </>
    )
}
