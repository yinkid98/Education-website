import React from 'react'
import "./hero.css"
import Title from '../../common/title/title'
 const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education'/>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum ut perspiciatis voluptatem fuga repudiandae quibusdam nisi, provident eius maiores!
                 Non nostrum laudantium enim vitae facere totam culpa asperiores odit commodi!
                 <div className="button">
                    <button className='primary-btn'>
                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                     <button>
                        VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                 </div>
            </div>
        </div>
    </section>
    <div className="marigin"></div>
    </>
  )
}
export default Hero