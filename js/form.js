const contactForm = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');

contactForm.addEventListener('submit', function(event) {
   event.preventDefault();

   // Données du formulaire
   const name = document.getElementById('name').value;
   const prenom = document.getElementById('prenom').value;
   const subject = document.getElementById('subject').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   const formData = new FormData();
   formData.append('name', name);
   formData.append('prenom', prenom);
   formData.append('subject', subject);
   formData.append('email', email);
   formData.append('message', message);

   // ENvoyer les donees au form.php
   fetch('form.php', {
      method: 'POST',
      body: formData
   })
   .then(function(response) {
      if (response.ok) {
         // Cacher le formulaire
         contactForm.style.display = 'none';

         // Afficher le message de confirmation
         confirmationMessage.style.display = 'flex';
     } else {
        console.error('Erreur lors du traitement du formulaire.');
      }
   })
   .catch(function(error) {
     console.error('Erreur lors du traitement du formulaire :', error);
   });
});
