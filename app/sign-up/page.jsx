import NewsletterSection from '../../components/NewsletterSection';

export const metadata = {
  title: 'Sign Up - Hafsa Arsalan',
  description: 'Join the Fellow Designers Club for exclusive behind-the-scenes insights, studio lessons, and resources.',
};

export default function SignUpPage() {
  return (
    <div style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%' }}>
        <NewsletterSection />
      </div>
    </div>
  );
}
