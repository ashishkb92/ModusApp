import React from 'react';
import { Link } from 'react-router';
import { Carousel } from 'react-bootstrap'


import News from '../../api/NewsAPI'

class NewsPage extends React.Component {
    render() {


        let individualNews = News.map((individualNews,i)=>{

          return(
            <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={individualNews.imgsrc}/>
            <Carousel.Caption>
            <h3>{individualNews.newsHeading}</h3>
            <Link to={individualNews.newsType} className="btn btn-primary btn-lg">Read More</Link>
            </Carousel.Caption>
          </Carousel.Item>

          );
        });

        return (
          <div >
          <Carousel >
              {individualNews}
          </Carousel>
          
          </div>
        );
    }
}

export default NewsPage;
