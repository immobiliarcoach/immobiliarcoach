import { ArrowRight } from "lucide-react";

interface NewsletterFormProps {
  className?: string;
  buttonClassName?: string;
}

const NewsletterForm = ({
  className = "",
  buttonClassName = "",
}: NewsletterFormProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <a
        href="https://calendly.com/immobiliarcoach/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-transparent font-sans whitespace-nowrap flex flex-row items-center justify-center gap-2 ${buttonClassName}`}
      >
        PRENOTA UNA CALL GRATUITA
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default NewsletterForm;
