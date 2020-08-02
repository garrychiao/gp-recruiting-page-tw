/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
var api_key = '';
var domain = 'act.gpea-mailer.org';
var mailgun = require('mailgun-js')({
    apiKey: api_key,
    domain: domain
});

var testRecipient1 = "gchiao@greenpeace.org"
var testRecipient2 = "up.chen@greenpeace.org"
var defualtRecipient = "chien.hung.liao@greenpeace.org"
var TaipeiRecipient = "shsueh@greenpeace.org"
var TaichungRecipient = "chien.hung.liao@greenpeace.org"
var KaohsiungRecipient = "sianni.chang@greenpeace.org"

exports.sendMail = (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');

    const {
        name,
        location,
        subject,
        message
    } = req.body;

    let to;

    if (!location || !subject || !message) {
        return res.status(400).send("Missing required params.")
    }

    if (name === "test") {
        to = [testRecipient1, testRecipient2]
    } else {
        to = [defualtRecipient]
        switch (location){
            case "臺北":
                to.push(TaipeiRecipient);
                break;
            case "臺中":
                to.push(TaichungRecipient);
                break;
            case "高雄":
                to.push(KaohsiungRecipient);
                break;
            default:
                return res.status(400).send("Invalid location")
        }
    }

    var data = {
        from: 'GreenpeaceRecruiting<no-reply@act.gpea-mailer.org>',
        to: to.join(","),
        subject: subject,
        text: message,
        "h:Reply-To": defualtRecipient
    };

    mailgun.messages().send(data, (error, body) => {
        console.log(error);
        if (error) {
            res.status(400).send(error);
        }

        res.set('Access-Control-Allow-Methods', 'GET, POST');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).send(body);
    });


};