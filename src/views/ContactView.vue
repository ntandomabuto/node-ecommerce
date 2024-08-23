<template>
  <div class="container-fluid" id="contact-page">
    <h2>CONTACT</h2>
    <div class="row">
      <div class="col-md-6 contact-form">
        <h4>MESSAGE US</h4>
        <form action="https://formspree.io/f/myzgnzra" method="POST">
          <div class="form-group">
            <div class="input-row">
              <input type="text" name="first_name" placeholder="First Name" required>
              <input type="text" name="last_name" placeholder="Last Name" required>
            </div>
          </div>
          <div class="form-group">
            <input type="email" name="email" placeholder="email@gmail.com" required>
          </div>
          <div class="form-group">
            <textarea name="message" placeholder="Your message..." required></textarea>
          </div>
          <div class="btns">
            <button type="submit">Send</button>
            <button type="reset">Clear</button>
          </div>
        </form>
        <div class="col-md-6">
          <h4>HOW TO REACH US</h4>
          <div class="details" id="details">
            <div class="info" id="info-email">
              <p><i class="bi bi-envelope"></i> contact@wiredelectronics.com</p>
            </div>
            <div class="info" id="info-call">
              <p><i class="bi bi-telephone"></i> +27 21 123 4567</p>
            </div>
            <div class="info" id="info-address">
              <p><i class="bi bi-geo-alt"></i> The Pinnacle Building</p>
              <p>Corner of Strand and Burg Streets</p>
              <p>Cape Town, 8001</p>
            </div>
          </div>
        </div>
        <div class="newsletter-signup">
          <h4>Wired Electronics Newsletter</h4>
          <p>Sign up to receive updates, subscription offers and alerts on sales</p>
          <form action="https://formspree.io/f/myzgnzra" method="POST">
            <input type="email" name="newsletter_email" placeholder="Enter your email" required>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
h2 {
  margin: 2rem;
}

.contact-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border-radius: .5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.input-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.input-row input {
  width: calc(50% - 10px);
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #2c3e50;
  background: transparent;
  color: #2c3e50;
}

.btns {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  border: 1px solid #2c3e50;
  background-color: #2c3e50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 4px;
}

button:hover {
  background-color: #1f2b38;
}

button[type="reset"] {
  background-color: white;
  color: #2c3e50;
}

button[type="reset"]:hover {
  background-color: #2c3e50;
  color: white;
}

.col-md-6 {
  display: flex;
  flex-direction: column;
}

.container-fluid {
  padding: 0 15px;
}
  
</style>

