import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '../UI/TextField';
import SelectField from '../UI/SelectField';
import Button from '../UI/Button';

const BrandingForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    profession: '',
    linkedin_url: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Initialize EmailJS
      emailjs.init("O1OKZP9-nne1L3Fb4");

      const templateParams = {
        template_subject: `New LinkedIn Branding Inquiry: ${formData.from_name}`,
        form_type: "LinkedIn Personal Branding",
        name: formData.from_name,
        email: formData.from_email,
        profession: formData.profession,
        linkedin_url: formData.linkedin_url || "",
        reason: "",
        message: formData.message
      };
      
      console.log('BrandingForm templateParams:', templateParams);

      // Send the email using EmailJS
      const result = await emailjs.send(
        'service_koydh28',
        'template_woxoupg',
        templateParams,
        'O1OKZP9-nne1L3Fb4'
      );

      if (result.text === 'OK') {
        setIsSubmitted(true);
        setFormData({
          from_name: '',
          from_email: '',
          profession: '',
          linkedin_url: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const professionOptions = [
    { value: 'student', label: 'Student' },
    { value: 'professional', label: 'Professional' },
    { value: 'founder', label: 'Founder' },
    { value: 'agency_owner', label: 'Agency Owner' },
    { value: 'other', label: 'Other' }
  ];

  if (isSubmitted) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          Your message has been sent successfully. I'll get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="space-y-4">
          <TextField
            label="Full Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          
          <TextField
            label="Email Address"
            name="from_email"
            type="email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          
          <SelectField
            label="Your Profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            options={professionOptions}
            required
          />
          
          <TextField
            label="LinkedIn Profile URL"
            name="linkedin_url"
            value={formData.linkedin_url}
            onChange={handleChange}
            required
          />
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Main Goals
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff6100] focus:border-[#ff6100]"
              placeholder="What are your main goals for improving your LinkedIn presence?"
              required
            ></textarea>
          </div>
          
          {error && (
            <div className="text-red-600 text-sm">
              {error}
            </div>
          )}
          
          <Button type="submit" primary disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>

      <div className="mt-6 text-center text-gray-600 text-sm">
        You can also reach me directly at{' '}
        <a 
          href="mailto:anshu.arelly17@gmail.com" 
          className="text-[#ff6100] hover:underline"
        >
          anshu.arelly17@gmail.com
        </a>
      </div>
    </>
  );
};

export default BrandingForm;