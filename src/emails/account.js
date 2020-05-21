const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.SENDGRID_API_KEY

const sendWelcomeEmail = (email, name) => {
    try {
        sgMail.setApiKey(sendgridAPIKey)
        sgMail.send({
            to: email,
            from: 'seme.legate@gmail.com',
            subject: 'Thanks for joining in',
            text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
        })
    } catch (e) {

    }
}

const sendCancelationEmail = (email, name) => {
    try {
        sgMail.setApiKey(sendgridAPIKey)
        sgMail.send({
            to: email,
            from: 'seme.legate@gmail.com',
            subject: `Goodbye, thank you for having us, ${name}!`,
            text: `We're sad to see you go, ${name}. Is there anything to keep you on board?`
        })
    } catch (e) {

    }
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}