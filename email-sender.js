const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail', // ou un autre service de messagerie
    auth: {
        user: 'bentoughoritiskander@gmail.com', //  votre adresse email
        pass: '12345Azert' //  votre mot de passe
    }
});


const mailOptions = {
    from: 'bentoughoriiskander@gmail.com',// l'adresse email de l'expidateur
    to: 'ibentoughorit@gmail.com', // l'adresse email du destinataire
    subject: 'Test d\'envoi d\'email',
    text: 'Ceci est un email de test envoyé avec Nodemailer!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Erreur lors de l\'envoi: ' + error);
    }
    console.log('Email envoyé: ' + info.response);
});