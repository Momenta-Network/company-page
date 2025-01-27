import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Team = () => {
  const team = [
    {
      name: "Emir Avci",
      role: "Co-Founder & CEO",
      image: "/assets/team/emir.png",
      bio: "Prev. Systemic Trust Custody, Ripple, MEXC",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Steven Ng",
      role: "Co-Founder & CTO",
      image: "/assets/team/steven.png",
      bio: "Prev. Zoox, AMD, Ciena",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Rei Tsunemi",
      role: "Co-Founder & COO",
      image: "/assets/team/rei.png",
      bio: "Prev. RBC",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
          <p className="text-xl text-gray-600">Meet the minds behind Momenta</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="relative mb-8 mx-auto w-64 h-64 rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-momenta-purple mb-2">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-momenta-purple transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-momenta-purple transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-momenta-purple transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};