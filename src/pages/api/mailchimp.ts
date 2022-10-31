// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const client = require('@mailchimp/mailchimp_marketing');

  const { email, phone, name } = req.body;

  client.setConfig({
    apiKey: 'e5145ff832928afd15d6c48334ff4702-us13',
    server: 'us13',
  });

  const run = async () => {
    try {
      const response = await client.lists.addListMember('55c18933f8', {
        email_address: email,
        phone: phone,
        name: name,
        status: 'pending',
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  run();

  res.status(200).json({ status: 'OK' });
}
