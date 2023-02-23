export default async function formHandler(req, res) {
  
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_APIKEY);

  const { method, body } = req;

  const mailData = {
    from: 'hakusingo@gmail.com',
    to: body.formEmail,
    bcc: 'hakusingo@gmail.com',
    subject: 'ワンオーシャンへの問い合わせありがとうございます。',
    html: 
    `<p>以下のお問い合わせを受け付けました。回答をお待ちください。<br />
    ワンオーシャン代表 徳門</p>
    <hr>
    <p>お名前：${body.formName}</p>
    <p>アドレス：${body.formEmail}</p>
    <p>電話番号: ${body.phone}</p>
    <p>ツアー内容: ${body.menu}</p>
    <p style="white-space: pre-wrap;">お問合わせ内容：${body.message}</p>`,
  }

  const responses = sgMail.send(mailData)
    .then(
      responses => res.status(200).json(JSON.stringify(responses))
    )
    .catch(
      error => res.status(500).json(JSON.stringify(error))
    )

}