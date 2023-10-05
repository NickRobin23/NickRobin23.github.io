<?php
<!DOCTYPE html>
<html>
<head>
  <title>My Portfolio</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta property="og:locale" content="en_US">
  <meta property="og:title" content="Portfolio > Nicholas Robinson">
  <meta property="og:description" content="Welcome to my Portfolio!">
  <meta property="og:image" content="https://nicksprojects.co/images/welcome.png">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="/index" class="nav-button active">Home</a></li>
        <li><a href="/portfolio/about" class="nav-button">About</a></li>
        <li><a href="/portfolio/contact" class="nav-button">Contact</a></li>
        <li><a href="/portfolio/work" class="nav-button">Past Work</a></li>
    </ul>
    </nav>
  </header>

  <section id="content">
    <h2>Welcome to My Portfolio</h2>
    <p>Here you can find projects, information about me, and a way to contact me if needed.</p>
    <p>Feel free to browse around!</p>
  </section>

  <footer>
    <p>&copy; 2023 Robin. All rights reserved.</p>
  </footer>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      let navLinks = document.querySelectorAll("nav a");
      let currentPage = window.location.pathname;

      for (let i = 0; i < navLinks.length; i++) {
        let linkPage = navLinks[i].getAttribute("href");

      if (linkPage === currentPage) {
        navLinks[i].classList.add("active");
      } else {
      navLinks[i].classList.remove("active");
      }
    }
  });
  </script>
  
  
</body>
</html>

?>