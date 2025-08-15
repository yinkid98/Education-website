import React from 'react'
import './style.css'
import Title from '../../common/title/title'
import { testimonal } from '../../../dummydata'

const Test = () => {
  return (
    <>
        <section className="testimonial padding">
            <div className="container">
                <Title subtitle='testimonial' title='Our successful student'/>
                <div className="content grid2">
                    {testimonal.map((val) => (
                        <div className="items shadow">
                            <div className="box flex">
                                <div className="im">
                                    <img src={val.cover} alt="" />
                                    <i className="fa fa-quote-left icon"></i>
                                </div>
                                <div className="name">
                                    <h2>{val.name}</h2>
                                    <span>{val.post}</span>
                                </div>
                            </div>
                            <p>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Test