import Battery from "./topOptions/Battery";
import Layout from "./topOptions/Layout";
import PerButton from "./topOptions/PerButton";
import Time from "./topOptions/Time";

const TopOptions = () => {
  return (
    <article>
      <Layout />
      <Time />
      <Battery />
      <PerButton />
    </article>
  );
};

export default TopOptions;
