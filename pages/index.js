import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import Work from "../components/work"
import Service from "../components/service";
import About from "../components/about";
import Footer from "../components/footer";
import Contact from "../components/contact"

const Index = () => {
  return (
    <Layout pageTitle="Vrinda's Space">
      <Header />
       <Hero />
       <Work />
       <Contact />
       <Footer />
    </Layout>
  )
}
export default Index;
