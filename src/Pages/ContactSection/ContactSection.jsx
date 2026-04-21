// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   MessageSquare,
//   Send,
//   Loader2,
//   CheckCircle,
//   Shield
// } from "lucide-react";
// import Swal from "sweetalert2";

// export default function ContactSection() {
//   const formRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await emailjs.sendForm(
//         "service_vyolwv5",
//         "template_58v180p",
//         formRef.current,
//         "AeB9bvKwr_TnqQAkR"
//       );

//       setSuccess(true);
//       formRef.current.reset();

//       Swal.fire({
//         icon: "success",
//         title: "Message sent",
//         timer: 1500,
//         showConfirmButton: false
//       });
//     } catch {
//       Swal.fire({
//         icon: "error",
//         title: "Something went wrong",
//         text: "Please try again."
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-24">
//       <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-14">

//         {/* Info */}
//         <div>
//           <h2 className="text-3xl font-light text-gray-900 mb-6">Contact</h2>

//           <Info icon={MapPin} label="Location" value="Rajshahi, Bangladesh" />
//           <Info icon={Phone} label="Phone" value="+880 1643606692" />
//           <Info icon={Mail} label="Email" value="abcd.sakib50@gmail.com" />
//         </div>

//         {/* Form */}
//         {success ? (
//           <div className="border rounded-xl p-10 text-center">
//             <CheckCircle size={42} className="mx-auto text-green-500 mb-4" />
//             <p className="text-gray-700">I’ll get back to you soon.</p>
//           </div>
//         ) : (
//           <form
//             ref={formRef}
//             onSubmit={sendEmail}
//             className="border rounded-xl p-8 space-y-5"
//           >
//             <Input name="user_name" label="Name" required />
//             <Input name="user_email" label="Email" type="email" required />
//             <Input name="user_phone" label="Phone" />

//             <div>
//               <label className="text-sm text-gray-600 flex items-center gap-1">
//                 <MessageSquare size={12} /> Message
//               </label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 required
//                 className="w-full mt-2 px-4 py-3 border rounded-lg resize-none"
//               />
//             </div>

//             <div className="flex items-center justify-between pt-4">
//               <span className="text-xs text-gray-500 flex items-center gap-1">
//                 <Shield size={12} /> Secure
//               </span>

//               <button
//                 disabled={loading}
//                 className="bg-black text-white px-6 py-2.5 rounded-lg flex items-center gap-2 disabled:opacity-50"
//               >
//                 {loading ? (
//                   <Loader2 size={16} className="animate-spin" />
//                 ) : (
//                   <>
//                     <Send size={16} />
//                     Send
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// }

// /* Reusable components */
// const Info = ({ icon: Icon, label, value }) => (
//   <div className="flex items-start gap-3 mb-4">
//     <Icon size={18} className="text-gray-500 mt-1" />
//     <div>
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="text-gray-900">{value}</p>
//     </div>
//   </div>
// );

// const Input = ({ label, ...props }) => (
//   <div>
//     <label className="text-sm text-gray-600">{label}</label>
//     <input
//       {...props}
//       className="w-full mt-2 px-4 py-3 border rounded-lg"
//     />
//   </div>
// );


// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   MessageSquare,
//   Send,
//   Loader2,
//   CheckCircle,
//   Shield,
//   ArrowRight,
//   RefreshCcw
// } from "lucide-react";
// import Swal from "sweetalert2";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ContactSection() {
//   const formRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   // Consider moving these to a .env file for security
//   const SERVICE_ID = "service_vyolwv5";
//   const TEMPLATE_ID = "template_58v180p";
//   const PUBLIC_KEY = "AeB9bvKwr_TnqQAkR";

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
//       setSuccess(true);
//       formRef.current.reset();
      
//       Swal.fire({
//         icon: "success",
//         title: "Message Sent!",
//         text: "I'll get back to you as soon as possible.",
//         confirmButtonColor: "#000",
//       });
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Submission Failed",
//         text: "Please check your connection and try again.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-24 ">
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-16 items-start">
          
//           {/* Left Side: Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-4xl font-semibold text-gray-900 mb-4">Get in touch</h2>
//             <p className="text-gray-600 mb-10 text-lg">
//               Have a project in mind? Looking to hire? Or just want to say hi? 
//               Drop me a message and I'll reply within 24 hours.
//             </p>

//             <div className="space-y-6">
//               <ContactInfo 
//                 icon={MapPin} 
//                 label="Location" 
//                 value="Rajshahi, Bangladesh" 
//                 href="https://maps.google.com/?q=Rajshahi,Bangladesh"
//               />
//               <ContactInfo 
//                 icon={Phone} 
//                 label="Phone" 
//                 value="+880 1643606692" 
//                 href="tel:+8801643606692"
//               />
//               <ContactInfo 
//                 icon={Mail} 
//                 label="Email" 
//                 value="abcd.sakib50@gmail.com" 
//                 href="mailto:abcd.sakib50@gmail.com"
//               />
//             </div>
//           </motion.div>

//           {/* Right Side: Form Card */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100"
//           >
//             <AnimatePresence mode="wait">
//               {success ? (
//                 <motion.div 
//                   key="success"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="py-12 text-center"
//                 >
//                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <CheckCircle size={40} className="text-green-600" />
//                   </div>
//                   <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
//                   <p className="text-gray-500 mb-8">Your message has been sent successfully.</p>
//                   <button 
//                     onClick={() => setSuccess(false)}
//                     className="flex items-center gap-2 mx-auto text-sm font-medium text-gray-600 hover:text-black transition-colors"
//                   >
//                     <RefreshCcw size={16} /> Send another message
//                   </button>
//                 </motion.div>
//               ) : (
//                 <form
//                   key="form"
//                   ref={formRef}
//                   onSubmit={sendEmail}
//                   className="space-y-5"
//                 >
//                   <div className="grid grid-cols-2 gap-4">
//                     <Input name="user_name" label="Name" placeholder="John Doe" required />
//                     <Input name="user_phone" label="Phone" placeholder="+880..." />
//                   </div>
//                   <Input name="user_email" label="Email" type="email" placeholder="john@example.com" required />

//                   <div>
//                     <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
//                       <MessageSquare size={14} className="text-gray-400" /> Message
//                     </label>
//                     <textarea
//                       name="message"
//                       rows="4"
//                       required
//                       placeholder="How can I help you?"
//                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-black/5 focus:border-black transition-all outline-none resize-none"
//                     />
//                   </div>

//                   <div className="flex items-center justify-between pt-2">
//                     <div className="flex items-center gap-1.5 text-gray-400">
//                       <Shield size={14} />
//                       <span className="text-xs">Encrypted & Secure</span>
//                     </div>

//                     <button
//                       disabled={loading}
//                       type="submit"
//                       className="group bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl flex items-center gap-2 transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
//                     >
//                       {loading ? (
//                         <Loader2 size={18} className="animate-spin" />
//                       ) : (
//                         <>
//                           <span className="font-medium">Send Message</span>
//                           <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* Better Reusable Components */

// const ContactInfo = ({ icon: Icon, label, value, href }) => (
//   <a 
//     href={href} 
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-gray-100"
//   >
//     <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
//       <Icon size={20} />
//     </div>
//     <div>
//       <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
//       <p className="text-gray-900 font-medium">{value}</p>
//     </div>
//   </a>
// );

// const Input = ({ label, name, ...props }) => (
//   <div className="w-full">
//     <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
//       {label}
//     </label>
//     <input
//       id={name}
//       name={name}
//       {...props}
//       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-black/5 focus:border-black transition-all outline-none"
//     />
//   </div>
// );





// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

// export default function ContactSection() {
//   const formRef = useRef(null);
//   const [loading, setLoading] = useState(false);

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await emailjs.sendForm(
//         "service_vyolwv5",
//         "template_58v180p",
//         formRef.current,
//         "AeB9bvKwr_TnqQAkR"
//       );
//       formRef.current.reset();
//       alert("Message sent!");
//     } catch (err) {
//       alert("Failed to send message");
//     }
//     setLoading(false);
//   };

//   return (
//     <section className=" flex items-center justify-center  text-white px-6 mb-5">
//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT */}
//         <div>
//           <h2 className="text-5xl font-bold mb-6">Connect With Me</h2>
//           <p className="text-gray-300 mb-10 leading-relaxed">
//             Have a question or want to work together? I'd love to hear from you.
//             Fill out the form or use the contact details below to reach out.
//           </p>

//           <div className="space-y-6">
//             <Info icon={MapPin} text="Rajshahi, Bangladesh" />
//             <Info icon={Phone} text="+880 1643606692" />
//             <Info icon={MessageSquare} text="WhatsApp: +880 1643606692" />
//             <Info icon={Mail} text="abcd.sakib50@gmail.com" />
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
//           <h3 className="text-3xl font-semibold mb-6 text-center">
//             Contact Form
//           </h3>

//           <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
//             <input
//               name="user_name"
//               placeholder="Your Name"
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 placeholder-gray-300 focus:outline-none"
//             />

//             <input
//               name="user_email"
//               type="email"
//               placeholder="Your Email"
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 placeholder-gray-300 focus:outline-none"
//             />

//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Your Message"
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 placeholder-gray-300 focus:outline-none"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold hover:opacity-90 transition"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// const Info = ({ icon: Icon, text }) => (
//   <div className="flex items-center gap-4 text-gray-200">
//     <Icon className="text-cyan-400" />
//     <span>{text}</span>
//   </div>
// );




import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_vyolwv5",
        "template_58v180p",
        formRef.current,
        "AeB9bvKwr_TnqQAkR"
      );
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 5000); // Reset success state after 5s
    } catch (err) {
      alert("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* 1. BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* 2. LEFT: CONTENT & INFO */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-xs font-black text-cyan-500 uppercase tracking-[0.5em]">Contact</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 italic">Collaborate.</span>
            </h3>
            <p className="text-white/40 text-lg max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid gap-6">
            <Info icon={MapPin} label="Location" value="Rajshahi, Bangladesh" />
            <Info icon={Mail} label="Email" value="abcd.sakib50@gmail.com" />
            <Info icon={MessageSquare} label="Social" value="WhatsApp: +880 1643606692" />
          </div>
        </div>

        {/* 3. RIGHT: THE GLASS FORM */}
        <div className="relative group">
          {/* Form Card Glow */}
          <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-3xl -z-10"></div>
          
          <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <InputField name="user_name" placeholder="Full Name" />
                    <InputField name="user_email" type="email" placeholder="Email Address" />
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell me about your project..."
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full py-4 rounded-2xl bg-white text-black font-bold overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <div className="h-5 w-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </button>
                </motion.form>
              ) : (
                /* 4. SUCCESS STATE (Better than alert) */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 mb-4">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                  <p className="text-white/40">Thank you, Sakib will get back to you soon.</p>
                  <button 
                    onClick={() => setSent(false)}
                    className="text-cyan-500 text-sm font-bold hover:underline pt-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helper Components for cleaner code */
const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-5 group">
    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-white/20 font-black mb-1">{label}</p>
      <p className="text-white/80 font-medium">{value}</p>
    </div>
  </div>
);

const InputField = ({ name, type = "text", placeholder }) => (
  <div className="relative">
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all"
    />
  </div>
);