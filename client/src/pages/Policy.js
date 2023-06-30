import React from 'react'
import Layout from '../components/Layout/Layout'
const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2018/03/privacy-policy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          
        </div>
      </div>
    </Layout>
  )
}

export default Policy