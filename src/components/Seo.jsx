import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t("seo.title")}</title>
      <meta name="description" content={t("seo.description")} />
      <meta name="keywords" content={t("seo.keywords")} />
      <link rel="alternate" hreflang="en" href="https://jccustomssxm.com/en" />
      <link rel="alternate" hreflang="fr" href="https://jccustomssxm.com/fr" />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://jccustomssxm.com"
      />
    </Helmet>
  );
};

export default SEO;
