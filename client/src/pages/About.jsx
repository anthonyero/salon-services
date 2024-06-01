import React from 'react';
import './About.css'

const About = () => {
  return (
    <section>
      <div className='about-main'>
        <div className='about-img-div'>
          <img src='/img/magicnail.png' alt='about-img' className='about-img' />
        </div>
        <div className='about-words'>
          <div className='about-salon'>
            <h2>About</h2>
            <p>  Information about the salon...</p>
            <p>  In a charming village nestled in the hills, a young woman named Ella dreamed of creating
              a salon where everyone could feel beautiful. Despite being mistreated by her vain stepmother
              and stepsisters, who called her "Cinderella" because of her dirty chores, Ella secretly learned
              hairstyling from old attic books. One day, a royal ball was announced, and while her stepsisters
              prepared, Cinderella wished she could create beautiful nails for the event but lacked the
              connections. Her fairy godmother appeared, transforming her rags into a stunning gown and
              giving her magical tools to create exquisite nail designs. In the dead of night, Cinderella
              repainted her stepsisters' nails, and in the morning, they went to the ball, unaware of the
              transformation.
              At the ball, the prince marveled at the intricate nail art on the stepsisters and, upon learning
              they didn’t know who created it, was motivated to find the talented artist. He announced that he
              would hold a contest for the best nail artist in the kingdom, promising a grand reward. Ella,
              hearing the announcement, decided to participate. Her magical tools helped her create the most
              stunning designs, impressing everyone, including the prince. When it was revealed that Ella was
              the mysterious artist behind the stepsisters' nails, she told the prince about her dream to open
              a salon.
              Impressed by her skill and determination, the prince provided the resources to fulfill her dream.
              Cinderella's salon became famous for making everyone feel like royalty. Her kindness and talent
              transformed the village, and she lived happily ever after, not as a princess, but as the beloved
              owner of the most magical salon in the land. </p>
          </div>
          <div className='about-artists'>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
