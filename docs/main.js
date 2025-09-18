// Main JS for Bioenergy Bloom vanilla site

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		const targetId = this.getAttribute('href').slice(1);
		const target = document.getElementById(targetId);
		if (target) {
			e.preventDefault();
			target.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

// Newsletter form logic
const newsletterForm = document.getElementById('newsletter-form');
const newsletterSuccess = document.getElementById('newsletter-success');
if (newsletterForm && newsletterSuccess) {
	newsletterForm.addEventListener('submit', function(e) {
		e.preventDefault();
		newsletterForm.style.display = 'none';
		newsletterSuccess.style.display = 'block';
		setTimeout(() => {
			newsletterForm.style.display = '';
			newsletterSuccess.style.display = 'none';
		}, 3000);
	});
}

// Contact form logic
const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');
if (contactForm && contactSuccess) {
	contactForm.addEventListener('submit', function(e) {
		e.preventDefault();
		contactForm.style.display = 'none';
		contactSuccess.style.display = 'block';
		setTimeout(() => {
			contactForm.style.display = '';
			contactSuccess.style.display = 'none';
		}, 3000);
	});
}
