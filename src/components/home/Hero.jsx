import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero'>
      <h1>Basti Ki Pathshala</h1>
      <h1 style={{ color: "gold" }}>Foundation</h1>
      <p>Join us in our mission to break the barriers of education in underserved communities.
        With your support, we can provide quality education to children living in slum areas,
        empowering them with the knowledge and skills they need to build a brighter future. Together,
        let’s make a difference. Take action today and be a part of the change!</p>
      <Link to="/volunteer"><button type="button" class="btn btn-warning " >Join us</button></Link>

    </section>
  )
}

export default Hero
