import React from 'react'
import Title from '../common/title/title'
import { homeAbout } from '../../dummydata'
import AWrapper from '../../AWrapper'
import "./about.css"

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src="./images/about.webp" alt="" />
            </div>
            <div className="right row">
                <Title subtitle='LEARN ANYTING' title='Benefits About Online Learning Expertise'/>
                <div className="items">
                    {homeAbout.map((val) => (
                        <div className="item flexSb">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                                <h2>{val.title}</h2>
                                <h2>{val.desc}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
      <AWrapper/>
    </>
  )
}

export default AboutCard