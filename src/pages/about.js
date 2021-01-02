import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'

const About = () => {
    return(
        <Layout>
        <div style={{color: 'teal'}}>
            <Header headerText="About Me!!" />
            <p>Software Developer by profession. Writer by passion.</p>
        </div>
        </Layout>
    )
}

export default About