import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'ชื่อจำเป็นต้องกรอก';
    if (!formData.email.trim()) {
      e.email = 'อีเมลจำเป็นต้องกรอก';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      e.email = 'รูปแบบอีเมลไม่ถูกต้อง';
    }
    if (!formData.message.trim()) {
      e.message = 'ข้อความจำเป็นต้องกรอก';
    } else if (formData.message.trim().length < 10) {
      e.message = 'พิมพ์อย่างน้อย 10 ตัวอักษร';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // เดโม: จำลองการส่ง 1.5 วินาที (แทนที่ด้วยการเรียก API/บริการส่งอีเมลจริงได้)
      await new Promise(res => setTimeout(res, 1500));

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's work together!</p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Your name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="you@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (<><Send size={18} /> Send Message</>)}
              </button>

              {status === 'success' && (
                <div className="success-message">ส่งข้อความสำเร็จ! จะติดต่อกลับโดยเร็วที่สุด</div>
              )}
              {status === 'error' && (
                <div className="error-message">มีบางอย่างผิดพลาด ลองใหม่อีกครั้ง</div>
              )}
            </form>
          </div>

          {/* Contact Information / Socials */}
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={22} />
              <div>
                <h4>Email</h4>
                <p>kotchawq@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={22} />
              <div>
                <h4>Phone</h4>
                <p>+66 94 620 5558</p>
              </div>
            </div>

            <div className="contact-item">
              <MapPin size={22} />
              <div>
                <h4>Location</h4>
                <p>Chiang Mai, Thailand</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="https://github.com/itskotcha" target="_blank" rel="noreferrer noopener"><Github size={22} /></a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer noopener"><Linkedin size={22} /></a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer noopener"><Twitter size={22} /></a>
              </div>
            </div>

            {/* ตัวเลือก: ปุ่ม mailto แบบเร็วๆ */}
            <a
              className="btn-secondary"
              href={`mailto:tawantippkun200501@gmail.com?subject=Project%20Inquiry&body=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project...`}
            >
              Quick Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;