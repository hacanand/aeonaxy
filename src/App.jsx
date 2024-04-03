import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import PaypalStats from "./components/PaypalStats";
import PaypalPayMethods from "./components/PaypalPayMethods";
import WhyPaypal from "./components/WhyPaypal";
import PaypalApprovalCard from "./components/PaypalApprovalCard";
import PaypalOrchestration from "./components/PaypalOrchestration";
import PaypalMangeRisk from "./components/PaypalMangeRisk";
import { FaArrowRight } from "react-icons/fa";
import PaypalModularSol from "./components/PaypalModularSol";
import PaypalVideoCard from "./components/PaypalVideoCard";
import PaypalCMO from "./components/PaypalCMO";
import PaypalIntegration from "./components/PaypalIntegration";
import PaypalContact from "./components/PaypalContact";
import PaypalQuotes from "./components/PaypalQuotes";
import PaypalFooter from "./components/PaypalFooter";

function App() {
  return (
    <div className="w-full h-full  ">
      <div className="mx-8 p-2">
        <NavigationBar />
      </div>
      <div className=" bg-zinc-200 shadow h-[1px]"></div>
      <div className="mx-8 p-2 flex flex-col gap-8">
        <Hero />
        <PaypalStats />
        <PaypalPayMethods />
        <WhyPaypal />
      </div>
      <div className="mt-20">
        <PaypalApprovalCard />
      </div>
      <div className="mx-8 p-2 flex flex-col gap-8">
        <WhyPaypal />
        <PaypalOrchestration />
        <WhyPaypal />
      </div>
      <div className="mt-20">
        <PaypalMangeRisk />
      </div>
      <div className="mx-8 p-2 flex flex-col gap-8">
        <WhyPaypal />
        <div className=" flex font-semibold text-blue-600 text-wrap">
          About Fraud Protection
          <div className="m-1">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <PaypalModularSol />
      </div>
      <div className="flex flex-col ">
        <PaypalVideoCard />
      </div>
      <div className="mt-20">
        <PaypalCMO />
      </div>
      <div className="flex mx-8 flex-col gap-8">
        <PaypalIntegration />
      </div>
      <div className="mt-20 ">
        <PaypalContact />
      </div>
      <div className="flex mx-8 flex-col gap-8">
        <PaypalQuotes />
        <PaypalFooter/>
      </div>
    </div>
  );
}

export default App;
