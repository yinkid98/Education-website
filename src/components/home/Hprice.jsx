import React from 'react'
import Title from '../common/title/title'
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
    <section className="hprice padding">
        <Title subtitle='Our pricing' title='pricing & packages'/>
        <div className="price container grid">
            <PriceCard/>
        </div>
    </section>
    </>
  )
}

export default Hprice