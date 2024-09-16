<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">ABOUT US</h2>
      <div class="about-col">
        <p class="about-text">
          Wired is a leading electronics company specializing in high-tech watches and cell phones. Our mission is to deliver cutting-edge technology and exceptional user experiences through our innovative products. We focus on precision engineering and advanced features to redefine the possibilities of modern electronics.
        </p>
        <p class="about-text">
          Founded in 2010, we’ve built a solid reputation for quality and reliability. Our dedicated team, including Erin Caitlin Williams and Ntando Mabuto, is committed to staying ahead of technological trends and meeting our customers' needs with precision and care. As technology evolves, we strive to lead the way with products that enhance daily life and set new industry standards.
        </p>
      </div>
      <div class="values-col">
        <h2 class="section-title">OUR VALUES</h2>
        <div class="values">
          <div class="value-item" data-aos="fade-up">
            <h4>Innovation</h4>
            <p>At Wired, we are dedicated to pushing the boundaries of technology. We continually innovate to provide state-of-the-art electronic watches and cell phones that enhance your everyday life.</p>
          </div>
          <div class="value-item" data-aos="fade-up">
            <h4>Quality</h4>
            <p>We are committed to excellence in every product we offer. Each electronic watch and cell phone undergoes rigorous testing to ensure top-notch performance and durability.</p>
          </div>
          <div class="value-item" data-aos="fade-up">
            <h4>Customer-Centric Design</h4>
            <p>Our products are designed with you in mind. We focus on creating user-friendly, stylish, and functional electronics that meet your needs and exceed your expectations.</p>
          </div>
        </div>
      </div>
      <div class="team-section">
        <h3 class="section-title">MEET THE TEAM</h3>
        <div class="team">
          <div class="team-member">
            <img src="https://erin-caitlin.github.io/nodeEOMP.images/images/Erin.jpg" alt="Erin Caitlin Williams" class="team-photo">
            <h5>Erin Caitlin Williams</h5>
            <p>Erin brings over a decade of experience in design and creative direction to the team, ensuring that every project meets the highest standards of quality and innovation.</p>
          </div>
          <div class="team-member">
            <img src="https://erin-caitlin.github.io/nodeEOMP.images/images/Ntando.png" alt="Ntando Mabuto" class="team-photo">
            <h5>Ntando Mabuto</h5>
            <p>Ntando's expertise in visual design and his keen eye for detail help transform concepts into stunning visual experiences that resonate with audiences.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos';

export default {
  mounted() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true 
    });
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

:root {
  --primary-color: #007bff; 
  --secondary-color: #f0f0f0; 
  --background-color: #ffffff;
  --text-dark: #333; 
  --text-light: #555; 
  --font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
  /* background: #efeaea; */
  /* opacity: .9; */
}

.about-section {
  padding: 4rem 2rem; 
  background-color: var(--secondary-color);
  color: var(--text-dark);
}

.about-col, .values-col, .team-section {
  background-color: var(--background-color); 
  border-radius: 8px; 
  padding: 2rem; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin-bottom: 2rem; 
}

.section-title {
  font-size: 2rem; 
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--primary-color);
  text-transform: uppercase;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
}

.about-text, .value-item p {
  font-size: 1rem; 
  line-height: 1.6;
  color: var(--text-light);
}

.values {
  margin-top: 2rem;
}

.value-item {
  margin-bottom: 1.5rem;
}

.value-item h4 {
  font-size: 1.25rem; 
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.team-section {
  text-align: center;
  background: #ffffff;
}

.team {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

}

.team-member {
  flex: 1;
  min-width: 250px;
  text-align: center;
  font-size: 0.875rem; 
  line-height: 1.5;
  box-shadow: 1px 1px 5px 1px black ;

}

.team-photo {
  width: 160px; 
  height: 160px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  border: 4px solid var(--primary-color); 
  margin-bottom: 1rem;
}

.team-member h5 {
  font-size: 1.125rem; 
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.team-member p {
  font-size: 0.875rem; 
  line-height: 1.5;
  color: var(--text-light);
}
</style>