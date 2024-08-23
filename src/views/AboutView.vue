<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">ABOUT US</h2>
        <div class="about-col">
          <p class="about-text">
            Wired is a leading electronics company specializing in high-tech watches and cell phones. Our mission is to deliver cutting-edge technology and exceptional user experiences through our innovative products.
          </p>
          <p class="about-text">
            Established in 2010, we have built a reputation for quality and reliability in the electronics industry. Our dedicated team is committed to staying ahead of technological trends and meeting the needs of our customers with precision and care.
          </p>
        </div>
        <div class="values-col">
          <h2 class="section-title">OUR VALUES</h2>
          <div class="values">
            <div class="value-item">
              <h4>Innovation</h4>
              <p>At Wired, we are dedicated to pushing the boundaries of technology. We continually innovate to provide state-of-the-art electronic watches and cell phones that enhance your everyday life.</p>
            </div>
            <div class="value-item">
              <h4>Quality</h4>
              <p>We are committed to excellence in every product we offer. Each electronic watch and cell phone undergoes rigorous testing to ensure top-notch performance and durability.</p>
            </div>
            <div class="value-item">
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

<style scoped>
:root {
  --primary-color: #007bff; 
  --secondary-color: #f0f0f0; 
  --text-dark: #333; 
  --text-light: #555; 
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.about-section {
  padding: 5rem 0;
  background-color: var(--secondary-color);
  color: var(--text-dark);
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}

.col {
  flex: 1;
  min-width: 300px;
}

.about-col {
  padding: 1rem;
}

.values-col {
  padding: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  text-transform: uppercase;
  border-bottom: 3px solid var(--primary-color);
  display: inline-block;
  padding-bottom: 0.5rem;
}

.about-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.values {
  margin-top: 2rem;
}

.value-item {
  margin-bottom: 2rem;
}

.value-item h4 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.value-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-light);
}

.team-section {
  background-color: transparent;
  margin-top: 4rem;
  text-align: center;
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
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-light);
}

.team-photo {
  width: 180px;
  height: 180px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  border: 5px solid var(--primary-color);
  margin-bottom: 1rem;
}

.team-member h5 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.team-member p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-light);
}
</style>
