import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface TourCardProps {
  slug: string;
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  groupSize: string;
  rating: number;
  badge?: string;
}

const TourCard = ({ slug, image, title, description, price, duration, groupSize, rating, badge }: TourCardProps) => {
  const { t } = useLanguage();
  return (
    <Link to={`/tour/${slug}`} className="block h-full" target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        className="group flex flex-col h-full overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {badge && (
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              {badge}
            </div>
          )}
          <div className="absolute top-3 right-3 bg-foreground/80 text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
            {price}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-serif text-xl text-foreground font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>

          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary" /> {duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-primary" /> {groupSize}
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-primary" fill="currentColor" /> {rating}
            </span>
          </div>
          
          <div className="mt-auto">
            <span className="inline-block w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2.5 text-sm font-medium transition-colors">
              {t.tourCard.readMore}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default TourCard;
