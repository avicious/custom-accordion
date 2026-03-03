import { useState, useRef } from "react";
import styles from "./CustomAccordion.module.css";
import { ChevronDown } from "lucide-react";

const CustomAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.active : ""}`}>
      <button
        className={styles.header}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        type="button"
      >
        <span>{title}</span>
        <ChevronDown
          className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
          size={20}
        />
      </button>

      <div
        id="accordion-content"
        className={styles.wrapper}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        role="region"
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
