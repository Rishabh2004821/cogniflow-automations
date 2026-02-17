"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { IoLogoLinkedin } from "react-icons/io5"
import { IconType } from "react-icons"

type ContactItem = {
  icon: IconType
  label: string
  value: string
  link?: string
}

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "infocogniflow@gmail.com",
    link: "mailto:cogniflowautomations@gmail.com?subject=Business Inquiry",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8638398943",
    link: "tel:+91 8638398943", // Replace with real number
  },
  {
    icon: MapPin,
    label: "Location",
    value: " Peenya, Bengaluru, Karnataka 560057",
  },
  {
    icon: IoLogoLinkedin,
    label: "LinkedIn",
    value: "cogniflow-automations-b971823b1",
    link: "https://www.linkedin.com/in/cogniflow-automations-b971823b1/",
  },
]

export function ContactSection() {
  return (
    <section
      className="mb-28 w-full scroll-mt-28 text-center sm:mb-40"
      id="contact"
    >
      <h1 className="text-5xl mb-10">Contact Me</h1>

      <div className="flex justify-center">
        <motion.div
          className="grid gap-6 max-w-2xl lg:grid-cols-2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-xl border hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <item.icon className="mx-auto mb-4 h-8 w-8 text-gray-700 dark:text-white/80" />

              <h3 className="mb-2 font-medium text-lg">
                {item.label}
              </h3>

              {item.link ? (
                <a
                  href={item.link}
                  target={item.label === "LinkedIn" ? "_blank" : undefined}
                  rel={
                    item.label === "LinkedIn"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-gray-700 hover:underline dark:text-white/80 break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-700 dark:text-white/80">
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
