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
        href="https://quiz1-immobiliar.lovable.app"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-transparent font-sans whitespace-nowrap flex flex-row items-center justify-center gap-2 ${buttonClassName}`}
      >
        INIZIA IL QUIZ
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default NewsletterForm;
