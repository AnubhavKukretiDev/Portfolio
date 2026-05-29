import { useState } from "react";
import { motion } from "framer-motion";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur-xl transition-all duration-300 focus:border-violet-500/50 focus:bg-white/[0.07] focus:shadow-[0_0_30px_rgba(139,92,246,0.15)]";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (type, text) => {
    setAlert({ type, text });
    setTimeout(() => setAlert(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FIXED: Backend API instead of EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.from_name,
          email: formData.from_email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!data.success) throw new Error("Email failed");

      showAlert("success", "Message sent successfully 🚀 I'll get back to you soon.");

      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      showAlert("danger", "Failed to send message ❌");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden c-space section-spacing">

      {/* Background */}
      <Particles
        className="absolute inset-0 -z-30"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Alert */}
      {alert && <Alert type={alert.type} text={alert.text} />}

      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-violet-300">
            Contact Me
          </div>

          <h2 className="mb-6 text-heading leading-tight">
            Let’s create something{" "}
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              extraordinary together.
            </span>
          </h2>

          <p className="text-white/45 max-w-lg">
            I’m always open to opportunities, freelance work, or collaboration.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <input
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Full Name"
                className={inputClass}
                required
              />

              {/* EMAIL */}
              <input
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Email Address"
                className={inputClass}
                type="email"
                required
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={inputClass}
                rows={6}
                required
              />

              {/* BUTTON */}
              <button
                disabled={isLoading}
                className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;