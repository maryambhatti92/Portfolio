import ScholarshipHero from "./components/ScholarshipsHero";
import ScholarshipProgram from "./components/ScholarshipProgram";
import ScholarshipCategorzied from "./components/ScholarshipCategorized";
import ScholarshipProcess from "./components/ScholarshipProcess";
import CoreInitiatives from './components/CoreInitiatives';
export default function HomeHero() {
  return (
    <>
      <ScholarshipHero />
      <ScholarshipProgram />
      <ScholarshipCategorzied />
      <CoreInitiatives/>
     {/* <ScholarshipProcess /> */}
    
    </>
  );
}
