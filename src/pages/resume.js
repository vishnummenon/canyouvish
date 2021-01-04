import React from "react"
import Collapsible from "../components/collapsible"
import Header from "../components/header"
import Layout from "../components/layout"

const Resume = () => {
  const summaryBody = (
    <div>
      <ul>
        <li>4+ Years Experience in Front End Development.</li>
        <li>Frontend, UI Developer (JS, HTML, CSS, ReactJS, OJet)</li>
        <li>
          Built a scalable UI for a Dashboard Tool to monitor upgrade tasks at
          Oracle Service Cloud
        </li>
      </ul>
    </div>
  )

  const experienceBody = (
      <Collapsible
        firstHeading="Software Engineer (2020 - )"
        firstBody="KeyValue Software Systems Pvt Ltd."
        secondHeading="Information Technology Officer (2019 - 2020)"
        secondBody="Punjab National Bank"
        thirdHeading="Application Developer (2016 - 2019)"
        thirdBody="Oracle India Pvt Ltd."
        />
  )

  const educationBody = (
    <Collapsible
      firstHeading="Master of Technology, Computer Science"
      firstBody="TKM College of Engineering, Kollam, Kerala (2014-2016)"
      secondHeading="Bachelor of Technology, Computer Science"
      secondBody="Rajiv Gandhi Institute of Technology, Kottayam, Kerala (2010-2014)"
      thirdHeading="Schooling"
      thirdBody="Kendriya Vidyalaya, Kottayam, Kerala (1998-2010)"
      />
)

  return (
    <Layout>
      <Header headerText="Resume" />
      <Collapsible
        expanded="0"
        firstHeading="Summary"
        firstBody={summaryBody}
        secondHeading="Experience"
        secondBody={experienceBody}
        fourthHeading="Education"
        fourthBody={educationBody}
      />
    </Layout>
  )
}

export default Resume
