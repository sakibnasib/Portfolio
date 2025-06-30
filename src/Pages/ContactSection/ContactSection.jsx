import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_vyolwv5",    // Replace with your EmailJS service ID
        "template_58v180p",   // Replace with your EmailJS template ID
        formRef.current,
        "AeB9bvKwr_TnqQAkR"     // Replace with your EmailJS public key
      )
      .then(
        () => {
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Message sent successfully! 🎉",
  showConfirmButton: false,
  timer: 1500
});
          setLoading(false);
          e.target.reset();
        },
        () => {
          // alert("Failed to send message, please try again.",error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen mt-10  bg-base-300 py-24 px-6 rounded-2xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-indigo-400 mb-4">📍 Contact Info</h2>

          <div className="flex items-center gap-4">
            <MapPin className="text-pink-400" />
            <p className="text-lg">Rajshahi, Bangladesh</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-pink-400" />
            <p className="text-lg">+880 1643606692</p>
          </div>

          <div className="flex items-center gap-4">
            <MessageSquare className="text-pink-400" />
            <p className="text-lg">
              <Link
                to="https://wa.me/8801643606692"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-indigo-300"
              >
                WhatsApp: +880 1643606692
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-pink-400" />
            <p className="text-lg">abcd.sakib50@gmail.com</p>
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-indigo-900 rounded-2xl p-8 shadow-xl space-y-6"
        >
          <h3 className="text-3xl font-semibold text-pink-400">📬 Send Me a Message</h3>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-indigo-800 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-indigo-800 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-indigo-800 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-pink-300 cursor-not-allowed" : "bg-pink-400 hover:bg-pink-500"
            } text-indigo-900 font-bold py-3 px-6 rounded-lg transition-all`}
          >
            {loading ? "Sending..." : "Send Message ✉️"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
