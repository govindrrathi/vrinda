import Layout from "../components/layout";
import Header from "../components/header";
import Work from "../components/work"
import { getSortedWorkData } from "../lib/work";

import Footer from "../components/footer";

export async function getStaticProps() {
  const allWorkData = getSortedWorkData();
  return { props: { allWorkData }};
}

const ArtWorkPage = (allWorkData) => {
  
  return (
    <Layout pageTitle="Vrinda's Space - Art">
      <Header />
       <Work workData={allWorkData}/>
       <Footer />
    </Layout>
  )
}
export default ArtWorkPage;
