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

		console.log("start subscribe")
		const formData = new FormData(newsletterForm);
		console.log(formData)

		emailjs.init("4rgF5rEM879B_ybpZ");
		emailjs.send('service_vnmqykp', 'template_akgsy7i',{
		title: "Subscribe",
		name: formData.get('email'),
		message: "Get Bioenergy Innovation News",
		email: formData.get('email'),
		})
		.then(function(response) {
			alert('Subscribed successfully!');
			newsletterForm.reset();
		}, function(error) {
			alert('Failed to Subscribe: ' + JSON.stringify(error));
		});

		console.log("finish subscribe")

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
		
		console.log("start sending")
		const formData = new FormData(contactForm);
		console.log(formData)

		emailjs.init("4rgF5rEM879B_ybpZ");
		emailjs.send('service_vnmqykp', 'template_pxre70m',{
		title: "Contact Us",
		name: formData.get('email'),
		message: formData.get('message'),
		email: formData.get('email'),
		})
		.then(function(response) {
			alert('Email sent successfully!');
			contactForm.reset();
		}, function(error) {
			alert('Failed to send email: ' + JSON.stringify(error));
		});

		console.log("finish sending")

		setTimeout(() => {
			contactForm.style.display = '';
			contactSuccess.style.display = 'none';
		}, 3000);
	});
}



// Opens user's default email client
// function openEmailClient() {
//     const email = 'recipient@example.com';
//     const subject = 'Test Subject';
//     const body = 'Hello from JavaScript!';
    
//     const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailtoLink;
// }
