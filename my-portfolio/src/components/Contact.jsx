import React, {useState} from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});       
    const validateForm = () => {
        let errors = {};
        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.message) {
            errors.message = 'Message is required';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Send!",formData);
        }
    };

    return (
        <section className="py-20 fade-in">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Contact me</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full mb-4 p-3 border border-gray-300 rounded"
          />
          {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          <textarea
            placeholder="Mensaje"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full mb-4 p-3 border border-gray-300 rounded"
          ></textarea>
          {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
          <button type="submit" className="bg-blue-500 text-white p-3 rounded">Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
