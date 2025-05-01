import { useState, FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '../UI/TextField';
import SelectField from '../UI/SelectField';
import Button from '../UI/Button';

const BrandingForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    linkedinUrl: '',
    goals: ''
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
      // Initialize EmailJS with your public key
      emailjs.init("O1OKZP9-nne1L3Fb4");
      
      // Send the email using EmailJS
      await emailjs.sendForm(
        'service_koydh28', // EmailJS service ID
        'template_woxoupg', // EmailJS template ID
        form.current!,
        'O1OKZP9-nne1L3Fb4' // Your EmailJS public key
      );

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        profession: '',
        linkedinUrl: '',
        goals: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const professionOptions = [
    { value: '', label: 'Select your profession' },
    { value: 'founder', label: 'Founder' },
    { value: 'agency_owner', label: 'Agency Owner' },
    { value: 'student', label: 'Student' },
    { value: 'professional', label: 'Professional' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Work With Me
        </h3>
        
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-lg">
            <h4 className="font-bold text-lg mb-1">Thank you for your inquiry!</h4>
            <p>I'll review your information and get back to you within 1-2 business days.</p>
          </div>
        ) : (
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
              
              <TextField
                label="LinkedIn Profile URL"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                required
              />
              
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                  Main Goals
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  value={formData.goals}
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
              
              <Button
                type="submit"
                primary
                fullWidth
                className="mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </Button>
            </div>
          </form>
        )}
        
        <div className="mt-6 text-center text-gray-600 text-sm">
          You can also reach me directly at{' '}
          <a 
            href="mailto:anshu.arelly17@gmail.com" 
            className="text-[#ff6100] hover:underline"
          >
            anshu.arelly17@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandingForm;