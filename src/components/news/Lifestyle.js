import React from 'react';
import { Link } from 'react-router';
import News from '../../api/NewsAPI'
const Lifestyle = ()=>{
  let individualNews = News[2];
  return(
    <div>
    <h3>Fitness enthusiast Milind Soman to flag off Cult 10K run in Bengaluru</h3>
      <img width={900} height={500} alt="900x500" src={individualNews.imgsrc}/>
      <p>Fitness enthusiasts have much to look forward to next week as model and avid barefoot runner Milind Soman will flag off the second edition of Cult 10K and 5K run here on May 13, organisers have announced.</p>
      <p>Soman will flag off the run along with Mukesh Bansal and Ankit Nagori, co-founders of cure.fit — a holistic technology-led health platform — from Kanteerava Stadium at 6 a.m..</p>
      <p>“Running is a great exercise to stay active and healthy, and people can choose to set their own pace. We are glad that fitness icon Milind Soman continues to be a part of it,” Bansal said in a statement on Saturday.</p>
      <p>“The first edition saw an amazing response and will continue to add various interesting formats in future too,” Bansal noted.</p>
      <p>Denim has been used as the core in the collection, but in a new ‘Indie-Denim’ avatar.</p>
      <p>The winner of the 10k run will receive a cash award of Rs. 50,000, followed by Rs. 25,000 and Rs. 10,000 for second and third positions respectively.</p>
      <p>Cult.fit is a chain of premier fitness centers, focused on training fitness enthusiasts without using traditional gymnasium equipment.</p>
      <Link to="news" className="btn btn-primary btn-lg">Back</Link>
    </div>
  );
};

export default Lifestyle;
