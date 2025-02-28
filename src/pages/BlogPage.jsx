import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Blog = () => {
  // Sample blog posts with image property
  const blogPosts = [
    {
      title: "Why Squarespace is the Small Business Superpower",
      excerpt:
        "Discover how Squarespace empowers small businesses with its intuitive design, robust tools, and affordability.",
      image:
        "https://res.cloudinary.com/dehk7msqm/image/upload/v1736088266/Squarespace_Blog_Photo_yv6hcl.png",
    },
    {
      title: "SEO in 2025: What You Need to Know",
      excerpt:
        "Get ready for the SEO trends that will dominate in 2025. Learn how to optimize your site for better ranking and user experience.",
      image:
        "https://res.cloudinary.com/dehk7msqm/image/upload/v1736089329/SEO_Photo_zumq5o.png",
    },
    {
      title: "E-Commerce Success: Building a Profitable Online Store in 2025",
      excerpt:
        "Building an e-commerce store in 2025? Here are essential tips for a successful online store, from design to payment integration.",
      image:
        "https://res.cloudinary.com/dehk7msqm/image/upload/v1736091549/Ecommerce_Blog_Photo_e01kyh.jpg",
    },
    {
      title: "How to Set Up an Effective E-Commerce Site: A Step-by-Step Guide",
      excerpt:
        "Learn how to create an e-commerce site from scratch. This step-by-step guide covers everything from product pages to secure checkout.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "How to Optimize Your Squarespace Site for SEO",
      excerpt:
        "Get the most out of your Squarespace site with these simple yet effective SEO tips to boost your site's search rankings.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Step-by-Step: Creating a Responsive Web Design from Scratch",
      excerpt:
        "Learn how to build a responsive, mobile-friendly website with this comprehensive guide. Perfect for beginners and pros alike.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "How to Build a Product Page That Converts in 2025",
      excerpt:
        "Learn the best practices for designing product pages that convert visitors into customers in this detailed tutorial.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "10 Tips for Boosting E-Commerce SEO in 2025",
      excerpt:
        "Maximize your e-commerce store’s visibility with these actionable SEO strategies that will keep you ahead of the competition.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "How to Add Custom Code to Your Squarespace Website",
      excerpt:
        "Learn how to add custom HTML, CSS, and JavaScript to your Squarespace website to enhance its functionality and appearance.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "A Complete Guide to Using Google Analytics for SEO",
      excerpt:
        "Learn how to use Google Analytics to track and improve your website's SEO performance with this step-by-step guide.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Mastering Local SEO: A Beginner’s Guide for 2025",
      excerpt:
        "Local SEO is key for small businesses. Discover how to improve your local search presence and attract more customers to your site.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "How to Build Your First Website with Squarespace",
      excerpt:
        "Step-by-step instructions for creating your first website with Squarespace, from selecting a template to customizing your design.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "How to Optimize Web Performance for Faster Load Times",
      excerpt:
        "Learn how to optimize your website’s performance to load faster, keeping visitors engaged and improving your SEO ranking.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Building Your Portfolio from Scratch: A Web Developer's Guide",
      excerpt:
        "Learn how to build a professional web developer portfolio from scratch to showcase your skills and attract potential clients.",
      image: "https://via.placeholder.com/600x400",
    },
    // Add more blog posts here...
  ];

  // Pagination
  const postsPerPage = 10; // Set to 10 posts per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      {/* Cover Photo Section */}
      <div className="relative w-full h-auto overflow-hidden mt-15 pt-0 bg-black">
        <img
          src="https://res.cloudinary.com/dehk7msqm/image/upload/v1736032455/Blog_photo_3_apbtyu.png"
          alt="Blog Cover"
          className="w-full h-full object-cover -mt-8"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <div className="text-center"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-12 mb-12">
        {/* Main Blog Section */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold text-neon-green mb-8">Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-800"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-semibold text-neon-green mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <div className="flex justify-end">
                  <button className="flex items-center text-neon-green font-medium hover:text-white">
                    Read More{" "}
                    <span className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center space-x-4">
            {/* Pagination logic */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-neon-green disabled:text-gray-500"
            >
              Previous
            </button>
            <span className="text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="text-neon-green disabled:text-gray-500"
            >
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-neon-green mb-6">
            Categories
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <Link to="#" className="hover:text-neon-green transition-colors">
                Web Design
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-neon-green transition-colors">
                E-commerce
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-neon-green transition-colors">
                SEO Tips
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-neon-green transition-colors">
                Marketing Strategies
              </Link>
            </li>
          </ul>

          <h2 className="text-3xl font-semibold text-neon-green mt-8 mb-6">
            Recent Posts
          </h2>
          <ul className="space-y-4 text-gray-300">
            {blogPosts.slice(0, 5).map((post, index) => (
              <li key={index}>
                <Link
                  to="#"
                  className="hover:text-neon-green transition-colors text-gray-300"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold text-neon-green mb-6">
              About Me
            </h2>
            <p className="text-gray-300">
              I'm a passionate web designer and developer with years of
              experience in building beautiful and functional websites for
              businesses. Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
