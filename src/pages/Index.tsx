import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import FeaturedCard from "@/components/FeaturedCard";
import NewsletterForm from "@/components/NewsletterForm";
import Button from "@/components/Button";
import { articles } from "@/data/articles";

const Index = () => {
  const [visibleArticles, setVisibleArticles] = useState(6);

  const loadMore = () => {
    setVisibleArticles((prev) => Math.min(prev + 3, articles.length));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-5 md:px-20 pt-12 md:pt-20 pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base uppercase tracking-[2px] text-foreground/60 mb-4 font-sans">
              Decisioni corrette prima di firmare
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center mb-8 leading-[0.9] tracking-[-1px] md:tracking-[-2px]">
              Consulenze specialistiche per chi compra casa e vuole prendere decisioni consapevoli nei momenti che contano
            </h1>

            {/* Newsletter CTA */}
            <NewsletterForm className="max-w-3xl mx-auto justify-center" />
          </div>
        </section>

        {/* Featured Card */}
        <section className="px-5 md:px-20 pb-8 md:pb-12">
          <FeaturedCard {...articles[0]} />
        </section>

        {/* Articles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-x-5 gap-y-8 md:pt-16 md:px-20 md:pb-8 md:gap-x-16 md:gap-y-8">
          {articles.slice(1, visibleArticles).map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </section>

        {/* Load More */}
        {visibleArticles < articles.length && (
          <div className="text-center py-12">
            <Button onClick={loadMore} variant="transparent">
              CARICA ALTRI
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
