import React from 'react';
import { Link } from 'react-router';
import News from '../../api/NewsAPI'
const Fashion = ()=>{
  let [individualNews] = News;
  return(
    <div>
    <h3>Acid attack survivor Ritu Saini walks at the Asian Designer Week 2017</h3>
      <img width={900} height={500} alt="900x500" src={individualNews.imgsrc}/>
      <p>Acid attack survivor Ritu Saini walked the ramp as a showstopper for designer Disha Chadha at the Asian Designer Week 2017 here on Saturday.</p>
      <p>The three-day fashion extravaganza is taking place at the Talkatora Stadium here, and Saini took to the ramp on day two.</p>
      <p>She walked the ramp in Chadha’s latest collection ‘For Example’, designed for the modern gypsy. The line is inspired by the saying ‘Beauty Lies Within’.</p>
      <p>Talking about the experience, Saini said in a statement: “What caught my attention was the theme of the collection which was ‘Embracing the inner beauty’. Although, I’ve participated in various fashion shows and events, Asian Designer Week is special as it has given me a great opportunity.”</p>
      <p>Denim has been used as the core in the collection, but in a new ‘Indie-Denim’ avatar.</p>
      <p>Giving an insight into the collection, Chadha said: “The collection stems out from the concept ‘Beauty Lies Within’ and Ritu was the perfect person to reflect the concept beautifully. Ritu represented the same passion for the cause and reflected the beauty of the collection through her strong personality.”</p>
      <p>“The motifs and patterns on the denims are Indie-Boho. Otherwise considered as a western fabric, we’ve tried to give denim an Indian touch,” Chadha added.</p>
      <Link to="news" className="btn btn-primary btn-lg">Back</Link>
    </div>

  );
};

export default Fashion;
