import { useState } from 'react';
import './Payment.css';

export default function Payment() {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    email: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cardName.trim()) {
      newErrors.cardName = 'Cardholder name is required';
    }

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Format must be MM/YY';
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3-4 digits';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'Zip code is required';
    } else if (!/^\d{5,6}$/.test(formData.zipCode.replace(/\s/g, ''))) {
      newErrors.zipCode = 'Please enter a valid zip code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let processedValue = value;

    if (name === 'cardNumber') {
      processedValue = value.replace(/\s/g, '').slice(0, 16);
      processedValue = processedValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    }

    if (name === 'expiryDate') {
      processedValue = value.replace(/\D/g, '').slice(0, 4);
      if (processedValue.length >= 2) {
        processedValue = processedValue.slice(0, 2) + '/' + processedValue.slice(2);
      }
    }

    if (name === 'cvv') {
      processedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    if (name === 'zipCode') {
      processedValue = value.replace(/\D/g, '').slice(0, 6);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);

      setTimeout(() => {
        setPaymentSuccess(false);
        setFormData({
          cardName: '',
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          email: '',
          zipCode: '',
        });
      }, 3000);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <div className="payment-container">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Payment Successful!</h2>
          <p>Your payment has been processed successfully.</p>
          <p className="confirmation-email">
            A confirmation email has been sent to <strong>{formData.email}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        <div className="payment-header">
          <h1>Secure Payment</h1>
          <p className="security-badge">
            <span className="lock-icon">🔒</span> PCI DSS Compliant & SSL Encrypted
          </p>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-section">
            <h3>Card Information</h3>

            <div className="form-group full-width">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className={errors.cardName ? 'error' : ''}
              />
              {errors.cardName && <span className="error-message">{errors.cardName}</span>}
            </div>

            <div className="form-group full-width">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                className={errors.cardNumber ? 'error' : ''}
                maxLength="19"
              />
              {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
            </div>

            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className={errors.expiryDate ? 'error' : ''}
                  maxLength="5"
                />
                {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
              </div>

              <div className="form-group half-width">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  className={errors.cvv ? 'error' : ''}
                  maxLength="4"
                />
                {errors.cvv && <span className="error-message">{errors.cvv}</span>}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Billing Information</h3>

            <div className="form-group full-width">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group full-width">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="12345"
                className={errors.zipCode ? 'error' : ''}
                maxLength="6"
              />
              {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
            </div>
          </div>

          <div className="form-section privacy-notice">
            <p>
              Your payment information is safe and secure. We never store your card details on our servers.
            </p>
          </div>

          <button
            type="submit"
            className={`submit-button ${isProcessing ? 'processing' : ''}`}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <span className="spinner"></span>
                Processing...
              </>
            ) : (
              <>
                <span className="lock-icon">🔒</span>
                Pay Now
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
