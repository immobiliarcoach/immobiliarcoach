import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import FeaturedCard from "@/components/FeaturedCard";
import NewsletterForm from "@/components/NewsletterForm";
import Button from "@/components/Button";
import { articles } from "@/data/articles";
import parisRestaurant from "@/assets/paris-restaurant-bw.jpg";
import logoLarge from "@/assets/logo-immobiliar-coach-large.png";

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
            <img src={logoLarge} alt="Immobiliar Coach" className="mx-auto mb-6 w-48 sm:w-56 md:w-72 lg:w-80 h-auto" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center mb-6 leading-[0.95] md:leading-[0.9] tracking-[-1px] md:tracking-[-3px] uppercase hero-outline">
              Immobiliar Coach
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 max-w-2xl mx-auto">
              Aiutiamo chi compra casa a prendere decisioni corrette tramite un metodo strutturato e indipendente
            </p>

            <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Un servizio di consulenza per privati che stanno acquistando casa e vogliono chiarezza, metodo e protezione prima delle decisioni più delicate.
            </p>

            {/* CTA */}
            <NewsletterForm className="max-w-3xl mx-auto justify-center" />
          </div>
        </section>

        {/* Intro Section */}
        <section className="px-5 md:px-20 pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Comprare casa è una delle decisioni economiche più importanti della vita.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-4">
              <strong>Immobiliar Coach</strong> nasce per aiutare chi compra casa a orientarsi, valutare e decidere nei momenti che contano davvero.
            </p>
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
