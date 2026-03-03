import CustomAccordion from "./components/CustomAccordion";
import { DATA_LIST } from "./utils/data";

const App = () => {
  return (
    <div className="container">
      {DATA_LIST.map(({ id, title, description }) => (
        <CustomAccordion key={id} title={title}>
          <p>{description}</p>
        </CustomAccordion>
      ))}
    </div>
  );
};

export default App;
