import React from "react"


import Layout from "../components/layout"
import YouTubeImage from "../components/youtube"
import InstagramImage from "../components/instagram"
import SEO from "../components/seo"
import Carousel from 'react-bootstrap/Carousel';
import EersteSlide from '../components/eerste-slide'
import TweedeSlide from '../components/tweede-slide'
import DerdeSlide from '../components/derde-slide'
import VierdeSlide from '../components/vierde-slide'
import VijfdeSlide from '../components/vijfde-slide'
import ZesdeSlide from '../components/zesde-slide'
import Fotb from '../components/fotb'

import "../components/style.css"

const IndexPage = () => (
  <Layout>

    <SEO title="NOG 9 MINUTEN" />
    <Carousel pause={false} controls={false} indicators={false}>
  <Carousel.Item>
   <EersteSlide/>
  </Carousel.Item>

  <Carousel.Item>
  <TweedeSlide/>
  </Carousel.Item>

  <Carousel.Item>
  <DerdeSlide/>
  </Carousel.Item>

  <Carousel.Item>
    <VierdeSlide/>
  </Carousel.Item>

  <Carousel.Item>
    <VijfdeSlide/>
  </Carousel.Item>

  <Carousel.Item>
    <ZesdeSlide/>
  </Carousel.Item>

</Carousel>

    <div className="wrapper" >
    <div id="links" className="container">
      <p className="titel">NOG 9 MINUTEN</p>
     <ul>
     <li className="youtube"> <a href="https://www.youtube.com/channel/UCJpTG0ehUUnPK0z1SAWh-QA"><YouTubeImage /></a></li>
      <li><a href="https://www.youtube.com/channel/UCJpTG0ehUUnPK0z1SAWh-QA"><p>Beluister op YouTube</p></a></li>
      <li className="instagram"><a href="https://www.instagram.com/nog.9.minuten/"><InstagramImage /></a></li>
      <li><a href="https://www.instagram.com/nog.9.minuten/"><p className="pInstagram">Volg ons op Instagram</p></a></li>
      </ul>
    </div>
    </div>
    <Fotb/>
  </Layout>
)

export default IndexPage
