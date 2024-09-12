import { useParams } from "react-router-dom";
const About = () => {
  let { id } = useParams();
  //  console.log(id)
  return (
    <div>
      <h1>Welcome to About us page{id}</h1>
    </div>
  );
};

export default About;
