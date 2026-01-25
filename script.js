function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
  }
  
  // Scroll fade-in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  
  console.log("Site loaded successfully");
  