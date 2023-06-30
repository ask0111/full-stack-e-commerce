import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://cdn.xl.thumbs.canstockphoto.com/about-us-word-on-wooden-table-stock-images_csp33290352.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          
        </div>
      </div>
    </Layout>
  )
}

export default About