import Header from "../components/Header/Header"
import HeroCard from "../components/HeroCard/HeroCard"
import ProductInfoSection from "../components/ProductInfoSection/ProductInfoSection"
import Steps from "../components/Steps/Steps"
import Form from "../components/Form/Form"
import Footer
 from "../components/Footer/Footer"
const LoanPage = () => {
    return (
        <>
            <Header/>

            <main>
                <HeroCard />
                <ProductInfoSection />
                <Steps />
                <Form />
            </main>

            <Footer/>
        </>
    )
}

export default LoanPage