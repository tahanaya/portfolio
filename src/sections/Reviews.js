import { motion } from 'framer-motion';
import { Quote, Linkedin } from 'lucide-react';
import "../styles/Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      name: "Ayoub Oulad Maalem",
      role: "CTO at Tech Corp",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFMv06HA7lTpw/profile-displayphoto-shrink_800_800/B4EZOgC0FoGYAc-/0/1733556914448?e=1745452800&v=beta&t=urckg-rewpfOkhLqDNzyJW4ATbhq5IEw8JIEj4Q-dhI",
      quote: "Working with Taha was an absolute pleasure. His technical expertise and attention to detail are unmatched.",
      linkedin: "https://www.linkedin.com/in/ayoub-oulad-maalem-222099211/"
    },
    {
      name: "El Aouad Ouail",
      role: "Product Manager",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEstasb4KyYRw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703797952666?e=1745452800&v=beta&t=fs0zknPnvdVTzdvCWfofsdkg0rKOwCaN2uQNL81e5zU",
      quote: "Taha delivered exceptional results on our project. His communication and problem-solving skills are top-notch.",
      linkedin: "https://linkedin.com/in/el-aouad-ouaail"
    },

    {
        name: "Imad Ech-chriki",
        role: "Founder & CEO at StartupX",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQGi-kfRlYr13A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718225542004?e=1745452800&v=beta&t=oYZgKOqZOqIcWC7vuIVHWZXuTcRSLGD7q3J-wFbAIW4",
        quote: "Taha's ability to translate complex requirements into elegant solutions is remarkable. He exceeded all our expectations.",
        linkedin: "https://www.linkedin.com/in/echchriki-imad/"
      },
      {
        name: "Issam Samadi",
        role: "Senior Developer at CodeMasters",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQHc4U6Z34nJAQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713606367785?e=1745452800&v=beta&t=XhggKIwYzuMslzU1PCzEJivTSX4CHClACIHIgKQhQII",
        quote: "Collaborating with Taha was a game-changer for our team. His clean code and architectural insights elevated our entire project.",
        linkedin: "https://www.linkedin.com/in/issam-samadi-706455221/"
      }

    // Add more reviews as needed
  ];

  return (
    <section className="reviews-section">
      {/* Animated background */}
      <motion.div 
      id="reviews"
        className="animated-bg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="reviews-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Client <span className="highlight">Reviews</span></h2>
          <p>What people say about working with me</p>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.name}
              className="review-card"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Hover overlay */}
              <div className="card-hover-overlay" />

              <div className="card-content">
                <motion.div 
                  className="quote-icon"
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                >
                  <Quote />
                </motion.div>

                <p className="review-text">{review.quote}</p>

                <div className="client-info">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="client-image" 
                  />
                  <div>
                    <h4>{review.name}</h4>
                    <p>{review.role}</p>
                    <a 
                      href={review.linkedin} 
                      className="linkedin-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={16} />
                      <span>View Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;