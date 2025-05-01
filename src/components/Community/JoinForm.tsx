import { useState, FormEvent } from 'react';
import TextField from '../UI/TextField';
import SelectField from '../UI/SelectField';
import Button from '../UI/Button';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    reason: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        profession: '',
        reason: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const professionOptions = [
    { value: '', label: 'Select your profession' },
    { value: 'student', label: 'Student' },
    { value: 'junior_dev', label: 'Junior Developer' },
    { value: 'senior_dev', label: 'Senior Developer' },
    { value: 'designer', label: 'Designer' },
    { value: 'project_manager', label: 'Project Manager' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div>
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-lg">
          <h4 className="font-bold text-lg mb-1">Thank you for joining!</h4>
          <p>We've received your application to join our Women in Tech community. We'll be in touch soon with next steps.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
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
      )}
    </div>
  );
};

export default JoinForm;