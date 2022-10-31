// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const client = require('@mailchimp/mailchimp_marketing');

  const { email, phone, name } = req.body;

  client.setConfig({
    apiKey: process.env.MAILCHIMP_TOKEN,
    server: process.env.MAILCHIMP_SERVER,
  });

  const run = async () => {
    const response = client.lists.addListMember('55c18933f8', {
      email_address: email,
      phone: phone,
      name: name,
      status: 'pending',
    });
    console.log(response);
  };

  run();

  res.status(200).json({ status: 'OK' });
}
