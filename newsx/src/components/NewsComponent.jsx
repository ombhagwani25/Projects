import React from 'react'
import NewsItem from './NewsItem'
import sampleOutput from  "../sampleOutput.json";



export default function NewsComponent() {

    let imageUrl = "https://static.toiimg.com/thumb/msid-98646739,width-1070,height-580,imgsize-44954,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg";
    let json = sampleOutput.map((data) => (
        <NewsItem  title={data.title} description={data.description} imageUrl={data.imageUrl} />
    ));
    
    

    return (        
        <>
         
        <div className="container">
            <h6 className="display-6">NewX - Top Headlines</h6>
            <div className="row">
                {json}
            </div>
        </div>
        </>
    )
}
