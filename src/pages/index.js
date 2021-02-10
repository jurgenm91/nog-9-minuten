import React from "react"

import Layout from "../components/layout"
import YouTubeImage from "../components/youtube"
import InstagramImage from "../components/instagram"
import SEO from "../components/seo"
import Carousel from 'react-bootstrap/Carousel';
import LogoSlide from '../components/logo-slide'
import HildeSlide from '../components/hilde-slide'
import JuttaSlide from '../components/jutta-slide'
import EviSlide from '../components/evi-slide'

import "../components/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel pause={false} controls={false} indicators={false}>
  <Carousel.Item>
   <LogoSlide/>
  </Carousel.Item>
  <Carousel.Item>
  <JuttaSlide/>

  
  </Carousel.Item>
  <Carousel.Item>
  <EviSlide/>
  </Carousel.Item>
  <Carousel.Item>
    <HildeSlide/>

  </Carousel.Item>
</Carousel>

    <div className="wrapper" >
    <div id="links" className="container">
      <p className="titel">NOG 9 MINUTEN</p>
     <ul>
     <li className="youtube"> <a href="https://www.youtube.com/channel/UCJpTG0ehUUnPK0z1SAWh-QA"><YouTubeImage /></a></li>
      <li><p>Beluister op YouTube</p></li>
      <li className="instagram"><a href="https://www.instagram.com/nog_9_minuten/"><InstagramImage /></a></li>
      <li><p>Volg ons op Instagram</p></li>
      </ul>
    </div>
    </div>
    
  </Layout>
)

export default IndexPage
