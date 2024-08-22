<template>
  <div class="container-fluid" id="contact-page">
  <h2>WE WANT TO HEAR FROM YOU</h2>
  <div class="contact-form">
    <form action="https://formspree.io/f/myzgnzra" method="POST">
      <div class="form-group">
        <div class="input-row">
          <input type="text" name="first_name" placeholder="First Name" required>
        </div>
        <div class="input-row">
          <input type="text" name="last_name" placeholder="Last Name" required>
        </div>
      </div>
      <div class="form-group">
        <input type="email" name="email" placeholder="email@example.com" required>
      </div>
      <div class="form-group">
        <textarea name="message" placeholder="Your message..." required></textarea>
      </div>
      <div class="btns">
        <button type="submit">Send</button>
        <button type="reset">Clear</button>
      </div>
    </form>
  </div>
    <div class="row">
      <h3>HOW TO REACH US:</h3>
      <div class="row" id="details">
      <div class="col" id="info">
      <h5>Email:</h5>
        <p>General Inquiries & Customer Support:</p>
        <p>contact@wiredelectronics.com</p>
        <p>support@wiredelectronics.com</p>
      </div>
      <div class="col" id="info">
        <h5>Call:</h5>
        <p>Cape Town (021): +27 21 123 4567</p>
        <p>Durban (031): +27 31 123 4567</p>
        <p>Pretoria (012): +27 12 123 4567</p>
      </div>
      <div class="col" id="info">
        <h5>Address</h5>
        <p>The Pinnacle Building</p>
        <p>Corner of Strand and Burg Streets</p>
        <p>Cape Town, 8001</p>
      </div>
    </div>
    </div>
</div>
</template>


<script>
</script>

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

#details {
    display: flex;
    justify-content: center;
    align-items: center; 
    text-align: left; 
    gap: 20px;
}

#info {
    text-align: center;
}

.row {
    justify-content: center;
}

</style>