import { Button } from "@/components/ui/button";

// WAY1: with the return keyword
// const Home = () => {
//   return (
//     <>
//       <Button>Click Me</Button>
//     </>
//   );
// };
// WAY2: without the return keyword
const Home = () => (
  <>
    <Button>Click Me</Button>
  </>
);

export default Home;
