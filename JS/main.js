document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".landingPage");
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    document.getElementById("next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    // Initially show only the first slide
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled"); // Add class when scrolled
        } else {
            header.classList.remove("scrolled"); // Remove class when at top
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const menuItems = document.querySelectorAll(".menu-item");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            // Get the selected category
            const category = this.getAttribute("data-category");

            // Show/hide menu items based on category
            menuItems.forEach(item => {
                if (item.classList.contains(category)) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll(".testimonial-item");
    const dots = document.querySelectorAll(".dot");

    function showTestimonial(index) {
        const container = document.querySelector(".testimonial-container");
        const offset = -index * (items[0].offsetWidth + 20); 
        container.style.transform = `translateX(${offset}px)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    document.querySelector(".prev").addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            showTestimonial(currentIndex);
        }
    });

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });
});

// Get the current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    // Select only the nav bar links
    const navLinks = document.querySelectorAll("nav ul li a");

    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();

    // Loop through links and add 'active' class to the current page
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
/**********************Reservations Form************************** */
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("PcFwVWdTnbjY1xH_P"); 

    let reservationForm = document.getElementById("reservationForm");

    if (!reservationForm) {
        console.error("Form not found!");
        return;
    }

    reservationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let datetime = document.getElementById("datetime").value;
        let people = document.getElementById("people").value;
        let request = document.getElementById("request").value;

        // Prepare email parameters
        let templateParams = {
            name: name,
            email: email,
            datetime: datetime,
            people: people,
            request: request
        };

        // Send email using EmailJS
        emailjs.send("service_e7begqm", "template_77xuq8q", templateParams)
            .then(function (response) {
                alert("Reservation sent successfully! ✅");
                reservationForm.reset(); // Clear form
            }, function (error) {
                alert("Error sending reservation. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});

/**************************Contact Form********************************* */
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("PcFwVWdTnbjY1xH_P"); // Replace with your actual EmailJS Public Key

    let contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        console.error("Form not found!");
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Prepare email parameters
        let templateParams = {
            name: name,
            email: email,
            message: message
        };

       // Send email using EmailJS
       emailjs.send("service_e7begqm", "template_77xuq8q", templateParams)
       .then(function (response) {
           alert("Reservation sent successfully! ✅");
           reservationForm.reset(); // Clear form
       }, function (error) {
           alert("Error sending reservation. Please try again.");
           console.error("EmailJS Error:", error);
       });
    });
});
