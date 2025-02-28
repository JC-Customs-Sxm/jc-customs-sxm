import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navbar translations
          Home: "Home",
          Blog: "Blog",
          Contact: "Contact",
          Language: "Language",

          // HeroSection translations
          HeroSectionHeading: "Bring Your Business Online",

          // What We Do Section
          "What We Do": "What We Do",
          "Reliable Web Design That Grows With Your Business":
            "Reliable Web Design That Grows With Your Business",
          "Whether you’re looking to build your first online presence or refresh an existing one, we provide personalized web design solutions that cater to your unique needs.":
            "Whether you’re looking to build your first online presence or refresh an existing one, we provide personalized web design solutions that cater to your unique needs.",
          "Each website we design focuses on performance and user experience, helping you attract visitors and engage with your audience. For the first three months, we provide free site management to ensure everything runs smoothly while you get familiar with your new website. After the initial period, ongoing management is available with a monthly charge based on the volume and complexity of the updates required.":
            "Each website we design focuses on performance and user experience, helping you attract visitors and engage with your audience. For the first three months, we provide free site management to ensure everything runs smoothly while you get familiar with your new website. After the initial period, ongoing management is available with a monthly charge based on the volume and complexity of the updates required.",
          "Our goal is to build long-lasting relationships with our clients, offering continuous support and updates to ensure your site grows alongside your business.":
            "Our goal is to build long-lasting relationships with our clients, offering continuous support and updates to ensure your site grows alongside your business.",

          // What We Do Our Services Section
          "Our Services": "Our Services",
          "Explore the range of services we offer.":
            "Explore the range of services we offer.",
          "Custom Coded Websites": "Custom Coded Websites",
          "Tailored websites built from scratch to meet your unique business needs.":
            "Tailored websites built from scratch to meet your unique business needs.",
          "Squarespace Website Creation": "Squarespace Website Creation",
          "Professional websites designed using Squarespace's powerful platform.":
            "Professional websites designed using Squarespace's powerful platform.",
          "E-Commerce Solutions": "E-Commerce Solutions",
          "Full-fledged e-commerce setups to grow your online store.":
            "Full-fledged e-commerce setups to grow your online store.",
          "Maintenance & Support": "Maintenance & Support",
          "Ongoing support and updates to ensure your website's smooth operation.":
            "Ongoing support and updates to ensure your website's smooth operation.",

          // AboutUs translations
          AboutJC: "About JC Customs Sxm",
          AboutUsParagraph1:
            "At JC Customs Sxm, we understand the challenges small businesses face when it comes to establishing an online presence on a limited budget. Many business owners either face high upfront costs for a professional website or settle for less effective DIY options.",
          AboutUsParagraph2:
            "That's why we specialize in creating affordable Squarespace templates that don't compromise on design or functionality. Our goal is to provide elegant and user-friendly websites that allow your business to thrive in a competitive online space.",
          AboutUsParagraph3:
            "We take pride in understanding your business goals and crafting solutions that match your unique needs. With JC Customs Sxm, you can focus on growing your business while we handle the tech.",
          OurSkills: "Our Skills",

          // WhatWeDo translations
          WhatWeDoHeading: "What We Do",
          WhatWeDoSubheading:
            "Reliable Web Design That Grows With Your Business",
          WhatWeDoParagraph1:
            "Whether you're looking to build your first online presence or refresh an existing one, we provide personalized web design solutions that cater to your unique needs.",
          WhatWeDoParagraph2:
            "Each website we design focuses on performance and user experience, helping you attract visitors and engage with your audience. For the first three months, we provide free site management to ensure everything runs smoothly while you get familiar with your new website. After the initial period, ongoing management is available with a monthly charge based on the volume and complexity of the updates required.",
          WhatWeDoParagraph3:
            "Our goal is to build long-lasting relationships with our clients, offering continuous support and updates to ensure your site grows alongside your business.",
          OurServices: "Our Services",
          ExploreServices: "Explore the range of services we offer.",
          CustomCodedWebsites: "Custom Coded Websites",
          CustomCodedWebsitesDescription:
            "Tailored websites built from scratch to meet your unique business needs.",
          SquarespaceWebsiteCreation: "Squarespace Website Creation",
          SquarespaceWebsiteCreationDescription:
            "Professional websites designed using Squarespace's powerful platform.",
          ECommerceSolutions: "E-Commerce Solutions",
          ECommerceSolutionsDescription:
            "Full-fledged e-commerce setups to grow your online store.",
          MaintenanceSupport: "Maintenance & Support",
          MaintenanceSupportDescription:
            "Ongoing support and updates to ensure your website's smooth operation.",

          // OffersSection translations
          OffersSectionTitle: "Our Offers",
          OffersSecurityTitle: "Security",
          OffersSecurityDescription:
            "We offer robust security features for your website.",
          OffersDesignTitle: "Design",
          OffersDesignDescription: "We design beautiful, responsive websites.",
          OffersSpeedTitle: "Speed",
          OffersSpeedDescription:
            "Our websites load in no time, ensuring fast performance.",
          OffersReliabilityTitle: "Reliability",
          OffersReliabilityDescription:
            "Count on us for a smooth and error-free experience.",
          OffersSupportTitle: "Support",
          OffersSupportDescription: "Get 24/7 support with our services.",
          OffersSeoDescription: "We optimize your site for search engines.",

          // Pricing translations
          PricingSectionTitle: "Our Pricing",
          PricingBasicTitle: "Basic Squarespace Website",
          PricingBasicDescription:
            "Ideal for businesses seeking a professional and easy-to-manage online presence. This package provides all the essentials to get your site up and running smoothly.",
          PricingBasicFeature1: "Custom web design and development",
          PricingBasicFeature2: "Mobile responsive",
          PricingBasicFeature3: "Social media integration",
          PricingBasicFeature4: "Contact form",
          PricingBasicFeature5: "Newsletter integration (if needed)",
          PricingBasicFeature6: "Basic SEO setup",
          PricingBasicFeature7: "2 revision rounds",
          PricingBasicFeature8: "Training and handover",
          PricingBasicPrice: "€250 - €500",
          PricingBasicNote:
            "Note: For a personalized quote tailored to your project, please get in touch with us.",
          PricingEcommerceTitle: "Squarespace Ecommerce Site",
          PricingEcommerceDescription:
            "Perfect for businesses looking to sell products or services online. This package includes everything you need to launch a fully functional ecommerce store.",
          PricingEcommerceFeature1: "Custom ecommerce store setup",
          PricingEcommerceFeature2: "Mobile responsive design",
          PricingEcommerceFeature3: "Product catalog setup",
          PricingEcommerceFeature4:
            "Payment gateway integration (PayPal, Stripe, etc.)",
          PricingEcommerceFeature5: "Shopping cart and checkout functionality",
          PricingEcommerceFeature6: "Basic SEO setup",
          PricingEcommerceFeature7: "2 revision rounds",
          PricingEcommerceFeature8: "Training and handover",
          PricingEcommercePrice: "€750 and up",
          PricingEcommerceNote:
            "Note: For a personalized quote tailored to your project, please get in touch with us.",
          PricingCustomTitle: "Custom Coded Website",
          PricingCustomDescription:
            "For businesses that need a fully custom website built from scratch. This package is tailored to your unique requirements and includes advanced functionality.",
          PricingCustomFeature1: "Fully custom design and development",
          PricingCustomFeature2: "Mobile and tablet responsive",
          PricingCustomFeature3: "Advanced animations and interactions",
          PricingCustomFeature4:
            "Custom integrations (APIs, third-party tools, etc.)",
          PricingCustomFeature5: "Ecommerce functionality (if needed)",
          PricingCustomFeature6: "Advanced SEO optimization",
          PricingCustomFeature7: "Ongoing maintenance and support options",
          PricingCustomFeature8: "Training and handover",
          PricingCustomPrice: "€2,000 and up",
          PricingCustomNote:
            "Note: For a personalized quote tailored to your project, please get in touch with us.",

          // Recent Projects Heading
          RecentProjectsHeading: "Recent Projects",
          "Taxi Service Website": "Taxi Service Website",
          "Catering Website": "Catering Website",
          "Clothing Store Website": "Clothing Store Website",
          "Baker Website": "Baker Website",

          // Why Choose Us Section
          WhyChooseUsSectionTitle: "Why Choose Our Web Design Services?",
          WhyChooseUsFeature1Title: "Creative Web Design",
          WhyChooseUsFeature1Description:
            "Our designs are not just visually appealing but also strategically crafted to engage your audience and drive business growth.",
          WhyChooseUsFeature2Title: "Client-Centered Approach",
          WhyChooseUsFeature2Description:
            "We prioritize collaboration and transparency, ensuring that your vision is brought to life while making the process simple and stress-free.",
          WhyChooseUsFeature3Title: "User-Friendly Platforms",
          WhyChooseUsFeature3Description:
            "We specialize in creating websites using Squarespace, ensuring that even non-technical users can manage their sites effortlessly.",
          WhyChooseUsTeamworkDescription:
            "We believe in teamwork and transparency to drive the best results. Our collaborative approach ensures we work closely with clients to bring their ideas to life. By using Squarespace, we create websites that are not only powerful but also easy to manage, even for those without technical expertise.",
          WhyChooseUsApproachDescription:
            "We specialize in building websites that not only reflect your brand but also boost your online presence. Our approach ensures that every website is designed with your business goals in mind.",

          // FAQ Section
          FAQHeading: "Frequently Asked Questions",
          "faq.whatIsCustomCodedWebsite": "What is a custom coded website?",
          "faq.customCodedWebsiteAnswer":
            "A custom-coded website is a fully tailored website built from scratch to meet your unique business needs. It is designed with the specific functionality and features that best suit your business goals and brand identity.",
          "faq.customVsSquarespace":
            "What is the difference between a custom coded website and a Squarespace website?",
          "faq.customVsSquarespaceAnswer":
            "A custom coded website is built from the ground up with hand-coded solutions, offering complete flexibility in design and functionality. A Squarespace website uses the Squarespace platform, which provides pre-designed templates and user-friendly tools for easy website management. Squarespace is often more affordable and quicker to launch, but custom coding offers more complex, tailored features.",
          "faq.buildTime":
            "How long does it take to build a custom coded website?",
          "faq.buildTimeAnswer":
            "The timeline for creating a custom coded website depends on the complexity of the project. On average, it takes between 6 to 10 weeks to design, develop, and launch a fully custom website.",
          "faq.squarespaceServiceIncludes":
            "What does the Squarespace website creation service include?",
          "faq.squarespaceServiceIncludesAnswer":
            "Our Squarespace website creation service includes designing and customizing your website using the Squarespace platform. We ensure the site is optimized for both desktop and mobile devices and meets your branding and business needs.",
          "faq.ecommerceServices": "What e-commerce services do you offer?",
          "faq.ecommerceServicesAnswer":
            "We offer full-fledged e-commerce solutions, including setting up and customizing your online store, integrating payment gateways, and optimizing your site for seamless shopping experiences. Whether you're selling physical products, digital downloads, or services, we can build the right solution for you.",
          "faq.maintenanceSupport":
            "Do you offer ongoing website maintenance and support?",
          "faq.maintenanceSupportAnswer":
            "Yes, we provide ongoing maintenance and support services to ensure your website remains up-to-date, secure, and fully functional. This includes regular updates, bug fixes, and content changes, as well as assisting with any technical issues that arise.",
          "faq.prebuiltTemplates":
            "What are pre-built custom website templates?",
          "faq.prebuiltTemplatesAnswer":
            "Pre-built custom website templates are ready-to-use templates that are fully customizable to suit your needs. These templates offer a fast, affordable solution for businesses looking to get online quickly, without sacrificing design quality. You can select a template and we'll customize it to fit your brand and content.",
          "faq.manageContent":
            "Can I manage my website content after it's built?",
          "faq.manageContentAnswer":
            "Yes! All of our websites, including Squarespace and custom-coded sites, are designed with user-friendly management in mind. We provide guidance and tutorials on how to manage your content, whether that's updating text, images, or products.",
          "faq.getStarted": "How do I get started with your services?",
          "faq.getStartedAnswer":
            "To get started, simply reach out to us through our contact form or schedule a discovery call. We'll discuss your needs, budget, and timeline, and propose a customized plan for your website. From there, we'll guide you through each step of the process.",

          // Is This You Section
          "Is This You?": "Is This You?",
          "In need of a website solution that is budget-friendly and simple for you to update on your own?":
            "In need of a website solution that is budget-friendly and simple for you to update on your own?",
          "Are you considering moving your existing website from another platform to Squarespace?":
            "Are you considering moving your existing website from another platform to Squarespace?",
          "Need ongoing support for your website? We provide continuous assistance to ensure your Squarespace site stays up-to-date and runs smoothly.":
            "Need ongoing support for your website? We provide continuous assistance to ensure your Squarespace site stays up-to-date and runs smoothly.",
          "Let's Work Together": "Let's Work Together",

          // Footer Section
          "All rights reserved.": "All rights reserved.",
          "Designed with love for businesses like yours.":
            "Designed with love for businesses like yours.",
          "Terms and Conditions": "Terms and Conditions",
          "Privacy Policy": "Privacy Policy",

          // Contact Page Section
          "Contact Us": "Contact Us",
          "Ready to turn your ideas into a stunning website? Let’s work together to bring your vision to life and help your business grow online.":
            "Ready to turn your ideas into a stunning website? Let’s work together to bring your vision to life and help your business grow online.",
          "Contact Information": "Contact Information",
          "Email:": "Email:",
          "Phone:": "Phone:",
          "Address:": "Address:",
          "Operating Hours": "Operating Hours",
          "We are available to assist you during the following hours:":
            "We are available to assist you during the following hours:",
          "Mon-Fri 9AM - 6PM": "Mon-Fri 9AM - 6PM",
          "Closed on weekends": "Closed on weekends",
          "Send Us A Message": "Send Us A Message",
          "Select a Subject": "Select a Subject",
          "Web Creation": "Web Creation",
          "General Inquiries": "General Inquiries",
          Support: "Support",
          "First Name": "First Name",
          "Last Name": "Last Name",
          "Your Message": "Your Message",
          "Estimated Budget (EUR)": "Estimated Budget (EUR)",
          "Budget:": "Budget:",
          "Send Message": "Send Message",
          "Message sent successfully👌": "Message sent successfully👌",
        },
      },
      fr: {
        translation: {
          // Navbar translations
          Home: "Accueil",
          Blog: "Blog",
          Contact: "Contactez-nous",
          Language: "Langue",

          // HeroSection translations
          HeroSectionHeading: "Mettez votre entreprise en ligne",

          // What We Do Section
          "What We Do": "Ce que nous faisons",
          "Reliable Web Design That Grows With Your Business":
            "Conception Web fiable qui évolue avec votre entreprise",
          "Whether you’re looking to build your first online presence or refresh an existing one, we provide personalized web design solutions that cater to your unique needs.":
            "Que vous cherchiez à établir votre première présence en ligne ou à renouveler une présence existante, nous offrons des solutions de conception Web personnalisées qui répondent à vos besoins uniques.",
          "Each website we design focuses on performance and user experience, helping you attract visitors and engage with your audience. For the first three months, we provide free site management to ensure everything runs smoothly while you get familiar with your new website. After the initial period, ongoing management is available with a monthly charge based on the volume and complexity of the updates required.":
            "Chaque site Web que nous concevons est axé sur la performance et l'expérience utilisateur, ce qui vous aide à attirer des visiteurs et à interagir avec votre public. Pendant les trois premiers mois, nous offrons une gestion gratuite du site afin de garantir que tout fonctionne bien pendant que vous vous familiarisez avec votre nouveau site Web. Après la période initiale, une gestion continue est disponible moyennant des frais mensuels basés sur le volume et la complexité des mises à jour requises.",
          "Our goal is to build long-lasting relationships with our clients, offering continuous support and updates to ensure your site grows alongside your business.":
            "Notre objectif est d'établir des relations durables avec nos clients, en offrant un soutien et des mises à jour continus pour garantir que votre site évolue avec votre entreprise.",

          // What We Do Our Services Section
          "Our Services": "Nos services",
          "Explore the range of services we offer.":
            "Découvrez la gamme de services que nous offrons.",
          "Custom Coded Websites": "Sites Web codés sur mesure",
          "Tailored websites built from scratch to meet your unique business needs.":
            "Sites Web sur mesure conçus à partir de zéro pour répondre à vos besoins commerciaux uniques.",
          "Squarespace Website Creation": "Création de sites Web Squarespace",
          "Professional websites designed using Squarespace's powerful platform.":
            "Sites Web professionnels conçus à l'aide de la puissante plateforme Squarespace.",
          "E-Commerce Solutions": "Solutions de commerce électronique",
          "Full-fledged e-commerce setups to grow your online store.":
            "Configurations de commerce électronique complètes pour développer votre boutique en ligne.",
          "Maintenance & Support": "Maintenance et support",
          "Ongoing support and updates to ensure your website's smooth operation.":
            "Support et mises à jour continus pour assurer le bon fonctionnement de votre site Web.",

          // AboutUs translations
          AboutJC: "À propos de JC Customs Sxm",
          AboutUsParagraph1:
            "Chez JC Customs Sxm, nous comprenons les défis auxquels sont confrontées les petites entreprises lorsqu'il s'agit d'établir une présence en ligne avec un budget limité. De nombreux propriétaires d'entreprise sont confrontés à des coûts initiaux élevés pour un site Web professionnel ou se contentent d'options de bricolage moins efficaces.",
          AboutUsParagraph2:
            "C'est pourquoi nous nous spécialisons dans la création de modèles Squarespace abordables qui ne compromettent pas le design ou la fonctionnalité. Notre objectif est de fournir des sites Web élégants et conviviaux qui permettent à votre entreprise de prospérer dans un espace en ligne compétitif.",
          AboutUsParagraph3:
            "Nous sommes fiers de comprendre vos objectifs commerciaux et d'élaborer des solutions qui répondent à vos besoins uniques. Avec JC Customs Sxm, vous pouvez vous concentrer sur la croissance de votre entreprise pendant que nous nous occupons de la technique.",
          OurSkills: "Nos compétences",

          // WhatWeDo translations
          WhatWeDoHeading: "Ce que nous faisons",
          WhatWeDoSubheading:
            "Conception Web fiable qui évolue avec votre entreprise",
          WhatWeDoParagraph1:
            "Que vous cherchiez à établir votre première présence en ligne ou à renouveler une présence existante, nous offrons des solutions de conception Web personnalisées qui répondent à vos besoins uniques.",
          WhatWeDoParagraph2:
            "Chaque site Web que nous concevons est axé sur la performance et l'expérience utilisateur, ce qui vous aide à attirer des visiteurs et à interagir avec votre public. Pendant les trois premiers mois, nous offrons une gestion gratuite du site afin de garantir que tout fonctionne bien pendant que vous vous familiarisez avec votre nouveau site Web. Après la période initiale, une gestion continue est disponible moyennant des frais mensuels basés sur le volume et la complexité des mises à jour requises.",
          WhatWeDoParagraph3:
            "Notre objectif est d'établir des relations durables avec nos clients, en offrant un soutien et des mises à jour continus pour garantir que votre site évolue avec votre entreprise.",
          OurServices: "Nos services",
          ExploreServices: "Découvrez la gamme de services que nous offrons.",
          CustomCodedWebsites: "Sites Web codés sur mesure",
          CustomCodedWebsitesDescription:
            "Sites Web sur mesure conçus à partir de zéro pour répondre à vos besoins commerciaux uniques.",
          SquarespaceWebsiteCreation: "Création de sites Web Squarespace",
          SquarespaceWebsiteCreationDescription:
            "Sites Web professionnels conçus à l'aide de la puissante plateforme Squarespace.",
          ECommerceSolutions: "Solutions de commerce électronique",
          ECommerceSolutionsDescription:
            "Configurations de commerce électronique complètes pour développer votre boutique en ligne.",
          MaintenanceSupport: "Maintenance et support",
          MaintenanceSupportDescription:
            "Support et mises à jour continus pour assurer le bon fonctionnement de votre site Web.",

          // OffersSection translations
          OffersSectionTitle: "Nos offres",
          OffersSecurityTitle: "Sécurité",
          OffersSecurityDescription:
            "Nous offrons des fonctionnalités de sécurité robustes pour votre site Web.",
          OffersDesignTitle: "Conception",
          OffersDesignDescription:
            "Nous concevons de beaux sites Web réactifs.",
          OffersSpeedTitle: "Vitesse",
          OffersSpeedDescription:
            "Nos sites Web se chargent en un rien de temps, garantissant des performances rapides.",
          OffersReliabilityTitle: "Fiabilité",
          OffersReliabilityDescription:
            "Comptez sur nous pour une expérience fluide et sans erreur.",
          OffersSupportTitle: "Support",
          OffersSupportDescription:
            "Bénéficiez d'un support 24h/24 et 7j/7 avec nos services.",
          OffersSeoDescription:
            "Nous optimisons votre site pour les moteurs de recherche.",

          // Pricing translations
          PricingSectionTitle: "Nos tarifs",
          PricingBasicTitle: "Site Web Squarespace de base",
          PricingBasicDescription:
            "Idéal pour les entreprises qui recherchent une présence en ligne professionnelle et facile à gérer. Ce forfait fournit tous les éléments essentiels pour que votre site soit opérationnel et fonctionne correctement.",
          PricingBasicFeature1: "Conception et développement Web personnalisés",
          PricingBasicFeature2: "Adaptatif aux mobiles",
          PricingBasicFeature3: "Intégration des médias sociaux",
          PricingBasicFeature4: "Formulaire de contact",
          PricingBasicFeature5: "Intégration de la newsletter (si nécessaire)",
          PricingBasicFeature6: "Configuration SEO de base",
          PricingBasicFeature7: "2 cycles de révision",
          PricingBasicFeature8: "Formation et transfert",
          PricingBasicPrice: "250 à 500 euros",
          PricingBasicNote:
            "Remarque : Pour un devis personnalisé adapté à votre projet, veuillez nous contacter.",
          PricingEcommerceTitle: "Site de commerce électronique Squarespace",
          PricingEcommerceDescription:
            "Parfait pour les entreprises qui cherchent à vendre des produits ou des services en ligne. Ce forfait comprend tout ce dont vous avez besoin pour lancer une boutique de commerce électronique entièrement fonctionnelle.",
          PricingEcommerceFeature1:
            "Configuration personnalisée de la boutique de commerce électronique",
          PricingEcommerceFeature2: "Conception adaptative aux mobiles",
          PricingEcommerceFeature3: "Configuration du catalogue de produits",
          PricingEcommerceFeature4:
            "Intégration de la passerelle de paiement (PayPal, Stripe, etc.)",
          PricingEcommerceFeature5: "Fonctionnalité de panier et de paiement",
          PricingEcommerceFeature6: "Configuration SEO de base",
          PricingEcommerceFeature7: "2 cycles de révision",
          PricingEcommerceFeature8: "Formation et transfert",
          PricingEcommercePrice: "À partir de 750 euros",
          PricingEcommerceNote:
            "Remarque : Pour un devis personnalisé adapté à votre projet, veuillez nous contacter.",
          PricingCustomTitle: "Site Web entièrement personnalisé",
          PricingCustomDescription:
            "Pour les entreprises qui ont besoin d'un site Web entièrement personnalisé, conçu à partir de zéro. Ce forfait est adapté à vos besoins uniques et comprend des fonctionnalités avancées.",
          PricingCustomFeature1:
            "Conception et développement entièrement personnalisés",
          PricingCustomFeature2: "Adaptatif aux mobiles et aux tablettes",
          PricingCustomFeature3: "Animations et interactions avancées",
          PricingCustomFeature4:
            "Intégrations personnalisées (API, outils tiers, etc.)",
          PricingCustomFeature5:
            "Fonctionnalité de commerce électronique (si nécessaire)",
          PricingCustomFeature6: "Optimisation SEO avancée",
          PricingCustomFeature7:
            "Options de maintenance et de support continues",
          PricingCustomFeature8: "Formation et transfert",
          PricingCustomPrice: "À partir de 2 000 euros",
          PricingCustomNote:
            "Remarque : Pour un devis personnalisé adapté à votre projet, veuillez nous contacter.",

          // Recent Projects Heading
          RecentProjectsHeading: "Projets récents",
          "Taxi Service Website": "Site Web de service de taxi",
          "Catering Website": "Site Web de traiteur",
          "Clothing Store Website": "Site Web de magasin de vêtements",
          "Baker Website": "Site Web de boulanger",

          // Why Choose Us Section
          WhyChooseUsSectionTitle:
            "Pourquoi choisir nos services de conception Web ?",
          WhyChooseUsFeature1Title: "Conception Web créative",
          WhyChooseUsFeature1Description:
            "Nos designs ne sont pas seulement visuellement attrayants, mais également conçus de manière stratégique pour engager votre public et stimuler la croissance de votre entreprise.",
          WhyChooseUsFeature2Title: "Approche centrée sur le client",
          WhyChooseUsFeature2Description:
            "Nous privilégions la collaboration et la transparence, en veillant à ce que votre vision prenne vie tout en rendant le processus simple et sans stress.",
          WhyChooseUsFeature3Title: "Plateformes conviviales",
          WhyChooseUsFeature3Description:
            "Nous sommes spécialisés dans la création de sites Web utilisant Squarespace, garantissant que même les utilisateurs non techniques peuvent gérer leurs sites sans effort.",
          WhyChooseUsTeamworkDescription:
            "Nous croyons au travail d'équipe et à la transparence pour obtenir les meilleurs résultats. Notre approche collaborative nous permet de travailler en étroite collaboration avec nos clients pour donner vie à leurs idées. En utilisant Squarespace, nous créons des sites Web qui sont non seulement puissants, mais aussi faciles à gérer, même pour ceux qui n'ont pas d'expertise technique.",
          WhyChooseUsApproachDescription:
            "Nous sommes spécialisés dans la création de sites Web qui reflètent non seulement votre marque, mais renforcent également votre présence en ligne. Notre approche garantit que chaque site Web est conçu en tenant compte des objectifs de votre entreprise.",

          // FAQ Section
          FAQHeading: "Foire aux questions",
          "faq.whatIsCustomCodedWebsite":
            "Qu'est-ce qu'un site Web codé sur mesure ?",
          "faq.customCodedWebsiteAnswer":
            "Un site Web codé sur mesure est un site entièrement personnalisé, conçu à partir de zéro pour répondre aux besoins uniques de votre entreprise. Il est conçu avec des fonctionnalités et des caractéristiques spécifiques qui correspondent le mieux à vos objectifs commerciaux et à l'identité de votre marque.",
          "faq.customVsSquarespace":
            "Quelle est la différence entre un site Web codé sur mesure et un site Web Squarespace ?",
          "faq.customVsSquarespaceAnswer":
            "Un site Web codé sur mesure est construit à partir de zéro avec des solutions codées à la main, offrant une flexibilité totale en matière de conception et de fonctionnalités. Un site Web Squarespace utilise la plateforme Squarespace, qui propose des modèles prédéfinis et des outils conviviaux pour une gestion facile du site. Squarespace est souvent plus abordable et plus rapide à lancer, mais le codage sur mesure offre des fonctionnalités plus complexes et personnalisées.",
          "faq.buildTime":
            "Combien de temps faut-il pour créer un site Web codé sur mesure ?",
          "faq.buildTimeAnswer":
            "Le délai de création d'un site Web codé sur mesure dépend de la complexité du projet. En moyenne, il faut entre 6 et 10 semaines pour concevoir, développer et lancer un site Web entièrement personnalisé.",
          "faq.squarespaceServiceIncludes":
            "Que comprend le service de création de site Web Squarespace ?",
          "faq.squarespaceServiceIncludesAnswer":
            "Notre service de création de site Web Squarespace comprend la conception et la personnalisation de votre site Web en utilisant la plateforme Squarespace. Nous veillons à ce que le site soit optimisé pour les appareils de bureau et mobiles et qu'il réponde à vos besoins en matière de branding et de business.",
          "faq.ecommerceServices":
            "Quels services de commerce électronique proposez-vous ?",
          "faq.ecommerceServicesAnswer":
            "Nous proposons des solutions de commerce électronique complètes, y compris la configuration et la personnalisation de votre boutique en ligne, l'intégration de passerelles de paiement et l'optimisation de votre site pour des expériences d'achat fluides. Que vous vendiez des produits physiques, des téléchargements numériques ou des services, nous pouvons construire la solution qui vous convient.",
          "faq.maintenanceSupport":
            "Proposez-vous une maintenance et un support continus pour les sites Web ?",
          "faq.maintenanceSupportAnswer":
            "Oui, nous proposons des services de maintenance et de support continus pour garantir que votre site Web reste à jour, sécurisé et entièrement fonctionnel. Cela inclut des mises à jour régulières, des corrections de bugs, des modifications de contenu, ainsi qu'une assistance pour tout problème technique qui survient.",
          "faq.prebuiltTemplates":
            "Que sont les modèles de sites Web personnalisés pré-construits ?",
          "faq.prebuiltTemplatesAnswer":
            "Les modèles de sites Web personnalisés pré-construits sont des modèles prêts à l'emploi entièrement personnalisables pour répondre à vos besoins. Ces modèles offrent une solution rapide et abordable pour les entreprises qui souhaitent se mettre en ligne rapidement sans sacrifier la qualité de la conception. Vous pouvez sélectionner un modèle, et nous le personnaliserons pour qu'il corresponde à votre marque et à votre contenu.",
          "faq.manageContent":
            "Puis-je gérer le contenu de mon site Web après sa création ?",
          "faq.manageContentAnswer":
            "Oui ! Tous nos sites Web, y compris les sites Squarespace et les sites codés sur mesure, sont conçus pour une gestion conviviale. Nous fournissons des guides et des tutoriels sur la manière de gérer votre contenu, que ce soit pour mettre à jour du texte, des images ou des produits.",
          "faq.getStarted":
            "Comment puis-je commencer à utiliser vos services ?",
          "faq.getStartedAnswer":
            "Pour commencer, contactez-nous simplement via notre formulaire de contact ou planifiez un appel de découverte. Nous discuterons de vos besoins, de votre budget et de votre calendrier, et nous proposerons un plan personnalisé pour votre site Web. À partir de là, nous vous guiderons à chaque étape du processus.",

          // Is This You Section
          "Is This You?": "Est-ce vous ?",
          "In need of a website solution that is budget-friendly and simple for you to update on your own?":
            "Vous avez besoin d'une solution de site Web économique et simple à mettre à jour par vous-même ?",
          "Are you considering moving your existing website from another platform to Squarespace?":
            "Envisagez-vous de déplacer votre site Web existant d'une autre plateforme vers Squarespace ?",
          "Need ongoing support for your website? We provide continuous assistance to ensure your Squarespace site stays up-to-date and runs smoothly.":
            "Vous avez besoin d'un support continu pour votre site Web ? Nous fournissons une assistance continue pour garantir que votre site Squarespace reste à jour et fonctionne sans problème.",
          "Let's Work Together": "Travaillons ensemble",

          // Footer Section
          "All rights reserved.": "Tous droits réservés.",
          "Designed with love for businesses like yours.":
            "Conçu avec amour pour des entreprises comme la vôtre.",
          "Terms and Conditions": "Conditions générales",
          "Privacy Policy": "Politique de confidentialité",

          // Contact Page Sections
          "Contact Us": "Contactez-nous",
          "Ready to turn your ideas into a stunning website? Let’s work together to bring your vision to life and help your business grow online.":
            "Prêt à transformer vos idées en un site Web époustouflant ? Travaillons ensemble pour donner vie à votre vision et aider votre entreprise à se développer en ligne.",
          "Contact Information": "Informations de contact",
          "Email:": "E-mail :",
          "Phone:": "Téléphone :",
          "Address:": "Adresse :",
          "Operating Hours": "Heures d'ouverture",
          "We are available to assist you during the following hours:":
            "Nous sommes disponibles pour vous aider aux heures suivantes :",
          "Mon-Fri 9AM - 6PM": "Lun-Ven 9h - 18h",
          "Closed on weekends": "Fermé le week-end",
          "Send Us A Message": "Envoyez-nous un message",
          "Select a Subject": "Sélectionnez un sujet",
          "Web Creation": "Création de site Web",
          "General Inquiries": "Demandes générales",
          Support: "Support",
          "First Name": "Prénom",
          "Last Name": "Nom de famille",
          "Your Message": "Votre message",
          "Estimated Budget (EUR)": "Budget estimé (EUR)",
          "Budget:": "Budget :",
          "Send Message": "Envoyer le message",
          "Message sent successfully👌": "Message envoyé avec succès👌",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: [
        "path",
        "htmlTag",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "querystring",
      ],
      lookupFromPathIndex: 0,
      caches: ["cookie"],
    },
  });

export default i18n;
