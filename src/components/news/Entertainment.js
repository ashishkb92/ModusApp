import React from 'react';
import { Link } from 'react-router';
import News from '../../api/NewsAPI'
const Entertainment = ()=>{
  let individualNews = News[1];
  return(
    <div>
    <h3>Baahubali 2 box office collection day 9: SS Rajamouli film becomes first Indian movie ever to collect Rs 1000 crore</h3>
      <img width={900} height={500} alt="900x500" src={individualNews.imgsrc}/>
      <p>SS Rajamouli’s film Baahubali 2 has achieved a rare feat. The film has become the first Indian movie ever to collect Rs 1000 crore. Baahubali 2 has collected around Rs 800 crore in Indian and Rs 200 crore in the overseas market, making it highest grossing Indian film ever. Trade tracker Ramesh Bala confirmed the same and tweeted, “With ₹ 800+ Cr in India and ₹ 200+ Cr in Overseas, #Baahubali2 becomes the 1st Indian movie to do ₹ 1000 Cr @ WW BO.. 👏👏 #1000croreBaahubali.”</p>
      <p>The Prabhas film earlier collected Rs 735 crore in the domestic market and Rs 180 crore in the overseas market. Trade tracker Ramesh Bala tweeted the figures, “#Baahubali2 8 Days WW BO (Final) #India : Nett – 580 Crs Gross – ₹735 Crs Overseas: Gross – 180 Crs Total – 915 Crs.” The film’s Hindi version collected Rs 19.75 crore on Friday and trade analyst Taran Adarsh observed that film will cross Rs 300 crore (nett.) mark before the second weekend. Taran tweeted, “#Baahubali2 will surpass ₹ 300 cr mark before Weekend 2 concludes… [Week 2] Fri 19.75 cr. Total: ₹ 266.75 cr nett. India biz. HINDI.”</p>
      <p>Baahubali 2 is also doing well in the overseas market. The film can very soon collect Rs 100 crore at US box office. Taran said, ” #Baahubali2 is racing towards ₹ 100 cr in the USA alone… Simply UNIMAGINABLE… Week 2 Fri $ 570,297. Await final numbers. FANTASTIC! @Rentrak.” The film’s figures in Australia are also astounding. Taran tweeted Australia figures of Baahubali 2, “More #Baahubali2 is SUPERB in Australia as well… TillFriday [5 May]: HINDI A$ 1,520,229 [₹ 7.26 cr] and TAMIL A$ 692,818 [₹ 3.31 cr]. @Rentrak.”</p>
      <p>Baahubali 2 stars Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah Bhatia, Ramya Krishnan and Sathyaraj in pivotal roles.</p>
      <Link to="news" className="btn btn-primary btn-lg">Back</Link>
    </div>

  );
};

export default Entertainment;
