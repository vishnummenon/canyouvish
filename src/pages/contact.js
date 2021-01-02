import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'

const Contact = () => {
    return(
        <Layout>
            <div>
            <Header headerText="Contact Me" />
            <p>
                <a href="mailto:vishnu.mmenon@gmail.com">vishnu.mmenon@gmail.com</a>
            </p>
            </div>
        </Layout>
    )
}

export default Contact