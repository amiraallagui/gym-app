import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types'
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage : (value:SelectedPage) => void;
}

function Home({setSelectedPage}: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
            id="home"
            className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
     >
        <motion.div 
            className=' md:flex mx-auto w-5/6 items-center justify-center md:h-5/6' 
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <div  className='z-10  mt-32 md:basis-3/5 '>
                <motion.div 
                     className='md:-mt-20'
                     initial="hidden"
                     whileInView='visible'
                     viewport={{once:true,amount:0.5}}
                     transition={{duration:0.5}}
                     variants={{
                        hidden:{opacity:0,x: -150},
                        visible:{opacity:1,x: -0},
                     }}
                     >
                    <div  className='relative'>
                        <div className='before:absolute before:-top-10 before:-left-10 before:z-[-1] md:before:content-evolvetext'><img src={HomePageText} alt="home page text" /></div>
                    </div>
                    <p className='mt-8 text-md '>
                    Achieve Your Dream Body at GigyGym. Experience Unparalleled Fitness Training Classes and World-Class Studios to Sculpt Your Perfect Shape. Start Your Transformation Today.
                    </p>
                </motion.div>


                <motion.div 
                className='mt-8 flex items-center gap-8 '
                initial="hidden"
                whileInView='visible'
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.2,duration:0.5}}
                variants={{
                   hidden:{opacity:0,x: -200},
                   visible:{opacity:1,x: -0},}}
                >
                    <ActionButton setSelectedPage={setSelectedPage} >
                        Join now 
                    </ActionButton>
                    <AnchorLink
                      className='text-md font-bold text-primary-500 underline hover:text-secondary-500'
                      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                      href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>
                      </AnchorLink>
                </motion.div>
            </div>


            <motion.div 
                className='flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-ent'
                initial="hidden"
                whileInView='visible'
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.2,duration:0.5}}
                variants={{
                   hidden:{opacity:0,x: 130},
                   visible:{opacity:1,x: 0},}}
                   >
                <img src={HomePageGraphic} alt="home page graphic" />
            </motion.div >
        </motion.div >

        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-primaty-100 py-10'>
                <div className='mx-auto w-5/6 '>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img src={SponsorRedBull} alt="red bull sponsor" />
                        <img src={SponsorForbes} alt="forbes sponsor" />
                        <img src={SponsorFortune} alt="fortune sponsor" />
                    </div>
                </div>
            </div>
        )}
            </section>
  )
}

export default Home