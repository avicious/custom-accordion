import { useState } from "react";
import styles from "./CustomAccordion.module.css";
import { ChevronDown } from "lucide-react";

const CustomAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen && styles.active}`}>
      <div
        className={`${styles.header} ${isOpen && styles.active}`}
        onClick={toggleAccordion}
      >
        <p>{title}</p>

        <ChevronDown className={`${styles.icon} ${isOpen && styles.active}`} />
      </div>

      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default CustomAccordion;
