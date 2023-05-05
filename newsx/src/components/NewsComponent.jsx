import React from 'react'
import NewsItem from './NewsItem'

export default function NewsComponent() {

    let imageUrl = "https://static.toiimg.com/thumb/msid-98646739,width-1070,height-580,imgsize-44954,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg";
    return (
        <>

            {/* <NewsItem title="cricket news" description="sample description"  imageUrl={imageUrl}/> */}

            <div className="container">

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
              

            </div>
        </>
    )
}
