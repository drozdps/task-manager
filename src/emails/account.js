const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'drozdps@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcom to the app, ${name}. Let me know how get along with the app.`
    });
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'drozdps@gmail.com',
        subject: 'Sorry to see you go',
        text: `It's sad to see you're leaving :( , ${name}. We hope to see you sometime soon`
    });
}

module.exports = {sendWelcomeEmail, sendCancellationEmail}