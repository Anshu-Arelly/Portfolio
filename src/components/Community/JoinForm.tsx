import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '../UI/TextField';
import SelectField from '../UI/SelectField';
import Button from '../UI/Button';

const JoinForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    reason: ''
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
        template_subject: `New Community Member: ${formData.name}`,
        form_type: "Women in Tech Community",
        name: formData.name,
        email: formData.email,
        profession: formData.profession,
        linkedin_url: "",
        reason: formData.reason,
        message: ""
      };
      
      console.log('JoinForm templateParams:', templateParams);

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
          name: '',
          email: '',
          profession: '',
          reason: ''
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
    { value: 'other', label: 'Other' }
  ];

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-lg">
        <h4 className="font-bold text-lg mb-1">Thank you for joining!</h4>
        <p>We've received your application to join our Women in Tech community. We'll be in touch soon with next steps.</p>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="space-y-4">
        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <TextField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
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
        
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
            Why You Want to Join?
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={4}
            value={formData.reason}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff6100] focus:border-[#ff6100]"
            placeholder="Tell us why you're interested in joining our community and what you hope to gain from it."
            required
          ></textarea>
        </div>
        
        {error && (
          <div className="text-red-600 text-sm">
            {error}
          </div>
        )}
        
        <Button
          type="submit"
          primary
          fullWidth
          className="mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Join Community'}
        </Button>
      </div>
    </form>
  );
};

export default JoinForm;