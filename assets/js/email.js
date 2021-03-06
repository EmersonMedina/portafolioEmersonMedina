const btn = document.getElementById('button');

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('form')
            .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_jmgk73q';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
            btn.value = 'Enviar Mensaje';
            alert('Mensaje enviado correctamente!');
            }, (err) => {
            btn.value = 'Enviar Mensaje';
            alert(JSON.stringify(err));
            });
    });

}); 
