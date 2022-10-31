import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export default async function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  console.log(email)
  console.log(process.env.MAILCHIMP_API_KEY)
  console.log(process.env.MAILCHIMP_API_SERVER)
  console.log(process.env.MAILCHIMP_AUDIENCE_ID)

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });

    return res.status(200).json({ status: 'OK' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
