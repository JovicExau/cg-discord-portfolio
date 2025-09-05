// Configuration pour l'envoi d'emails
// Dans un vrai projet, vous utiliseriez un service comme SendGrid, Nodemailer, ou Resend

export interface EmailConfig {
  to: string;
  from: string;
  subject: string;
  html: string;
  text: string;
}

export async function sendEmail(config: EmailConfig): Promise<boolean> {
  try {
    // Simulation d'envoi d'email
    // Dans un vrai projet, vous intégreriez ici votre service d'email préféré
    
    console.log('Envoi d\'email:', {
      to: config.to,
      from: config.from,
      subject: config.subject,
      timestamp: new Date().toISOString()
    });

    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
}

export function generateContactEmailTemplate(contactData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): EmailConfig {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #3b82f6;">Nouveau message de contact</h2>
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Nom:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Sujet:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${contactData.message}</p>
      </div>
      <p style="color: #6b7280; font-size: 14px;">
        Message envoyé depuis le portfolio AcZone
      </p>
    </div>
  `;

  const text = `
Nouveau message de contact

Nom: ${contactData.name}
Email: ${contactData.email}
Sujet: ${contactData.subject}

Message:
${contactData.message}

---
Message envoyé depuis le portfolio AcZone
  `;

  return {
    to: process.env.NEXT_PUBLIC_EMAIL || 'acZone@email.com',
    from: contactData.email,
    subject: `Portfolio Contact: ${contactData.subject}`,
    html,
    text
  };
}
