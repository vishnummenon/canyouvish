import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/about/">About Me</Link>
      <Header headerText="Hello World!" />
    </div>
  )
}
