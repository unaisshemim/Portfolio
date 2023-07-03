import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant,fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../style";


const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Some of My <span className="text-white font-bold"> KEY...</span></p>
        <h2 className={`${styles.sectionHeadText}`}>SKILLS .</h2>
      </motion.div>
      <motion.div 
       variants={fadeIn("", "", 0.1, 1)}>

      <div className="flex flex-row  flex-wrap  justify-center gap-10 mt-10">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} index={index} />
          </div>
        ))}
      </div>
        </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
