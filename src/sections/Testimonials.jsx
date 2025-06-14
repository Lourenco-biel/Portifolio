import GlowCard from '../components/GlowCard';
import TitleHeader from '../components/TitleHeader';
import { testimonials } from '../constants';

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐ Client Feedback Highlights"
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(({ imgPath, name, mentions, review }) => (
            <GlowCard card={{ review }}>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={imgPath}
                    alt={name}
                  />
                </div>
                <div>
                  <p className="font-bold">{name}</p>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-4 h-4 object-cover"
                      src={mentions.imgPath}
                      alt={mentions.name}
                    />
                    <p className="text-white-50 cursor-pointer!">
                      {mentions.name}
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
