import React from 'react'
import './Home.css'
import aiImg from '../../assets/ai.png'
import serviceImg from '../../assets/services.png'
import supportImg from '../../assets/support.png'

const Home = () => {
  return (
    <div className="home-main-container container">
      <div className="hero-section">
        <p className='heading'>Empowering the future of AI Agents</p>
        <p className="desc">AI driven by cutting-edge technology</p>
      </div>
      <div className="services-section">
        <div className="service-item">
          <img src={aiImg} alt="" />
          <p className="heading">AI Development</p>
          <p className="desc">We specialize in designing, building, and fine-tuning cutting-edge artificial intelligence models tailored to meet your business goals. From natural language processing to computer vision and predictive analytics, our AI development process ensures high accuracy, efficiency, and adaptability. Whether you're starting from scratch or enhancing existing systems, our experts deliver robust models ready for real-world application.</p>
        </div>
        <div className="service-item">
          <img src={serviceImg} alt="" />
          <p className="heading">Custom Solutions</p>
          <p className="desc">Every business has unique challenges—and we build AI to match. Our custom solutions service provides personalized AI systems designed to address your specific workflows, data structures, and strategic goals. We work closely with your team to understand requirements and build AI integrations that drive automation, insight, and decision-making, all while ensuring scalability and future-proof architecture.</p>
        </div>
        <div className="service-item">
          <img src={supportImg} alt="" />
          <p className="heading">Real-time Support</p>
          <p className="desc">AI doesn't sleep—and neither do we. Our real-time support ensures your AI systems remain operational, efficient, and responsive 24/7. Whether it’s troubleshooting model behavior, optimizing performance, or assisting your team with integration issues, our support specialists are always available. We also provide proactive monitoring, updates, and performance tuning to keep your AI agents running at peak performance.</p>
        </div>
      </div>
    </div>
  )
}

export default Home