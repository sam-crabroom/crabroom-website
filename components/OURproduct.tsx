import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";
export default function Ourproduct() {
  return (
    <section>
      <div className="max-w-6xl mx-auto sm:px-0">
        <div className="pb-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10"></div>

          {/* Items */}

          <div
            className="max-w-sm py-4 md:py-0 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <Link href="/">
            {/* {"/paymentgateway"} */}
              <div className="h-[20rem] w-full flex items-center justify-center ">
                <PinContainer title="/crabroom.com/paymentgateway">
                  <div
                    className="flex basis-full flex-col p-4 tracking-tight rounded-md text-white sm:basis-1/2 w-[20rem] h-[20rem]"
                    style={{ backgroundColor: "white" }}
                  >
                    <h3 className="max-w-xs !pb-2 !m-0 font-ethnocentric text-base text-sky-500">
                      PG-POS Matchmaker
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        Find your ideal payment gateway or POS system with our
                        tool by filtering through features, costs, and more to
                        make an informed business decision.
                      </span>
                      <br />
                    </div>
                    <div
                      className="flex flex-1 w-full rounded-lg mt-10 bg-gradient-to-br from-sky-400 via-sky-600 to-sky-700"
                      style={{ height: "200", width: "300" }}
                    />
                  </div>
                </PinContainer>
              </div>
            </Link>
            <Link href="/">
            {/* {"/qrcodeman"} */}
              <div className="h-[20rem] w-full flex items-center justify-center">
                <PinContainer title="/crabroom.com/qrcodemanufactures">
                  <div
                    className="flex basis-full flex-col p-4 tracking-tight rounded-md text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]"
                    style={{ backgroundColor: "white" }}
                  >
                    <h3 className="max-w-xs !pb-2 !m-0 font-ethnocentric text-base text-sky-500 text-md">
                      DineBot
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        AI-driven digital menu maximizing profits with
                        high-margin dish recommendations, reduces waste through
                        inventory management, and promotes upselling, all while
                        streamlining service operations.
                      </span>
                    </div>
                    <div
                      className="flex flex-1 w-full rounded-lg mt-5 bg-gradient-to-br from-sky-400 via-sky-600 to-sky-700"
                      style={{ height: "200", width: "300" }}
                    />
                  </div>
                </PinContainer>
              </div>
            </Link>
            <Link href="/">
              <div className="h-[20rem] w-full flex items-center justify-center">
                <PinContainer title="/crabroom.com/qrcodemanufactures">
                  <div
                    className="flex basis-full flex-col p-4 tracking-tight rounded-md text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]"
                    style={{ backgroundColor: "white" }}
                  >
                    <h3 className="max-w-xs !pb-2 !m-0 font-ethnocentric text-base text-sky-500">
                      Build Now, Pay Later
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        Allowing online business owners to develop
                        transaction-heavy web applications immediately and
                        offering flexible, innovative payment solutions later.
                      </span>
                    </div>
                    <div
                      className="flex flex-1 w-full rounded-lg mt-10 bg-gradient-to-br from-sky-400 via-sky-600 to-sky-700"
                      style={{ height: "200", width: "300" }}
                    />
                  </div>
                </PinContainer>
              </div>
            </Link>
            <Link href="/"> 
            {/* /gemini */}
              <div className="h-[20rem] w-full flex items-center justify-center">
                <PinContainer title="/crabroom.com/qrcodemanufactures">
                  <div
                    className="flex basis-full flex-col p-4 tracking-tight rounded-md text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]"
                    style={{ backgroundColor: "white" }}
                  >
                    <h3 className="max-w-xs !pb-2 !m-0 font-ethnocentric text-base text-sky-500">
                      Demo
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        Discover our portfolio of previous payment integration
                        projects, showcasing our expertise and diverse solutions
                        in financial transaction technology.
                      </span>
                    </div>
                    <div
                      className="flex flex-1 w-full rounded-lg mt-10 bg-gradient-to-br from-sky-400 via-sky-600 to-sky-700"
                      style={{ height: "200", width: "300" }}
                    />
                  </div>
                </PinContainer>
              </div>
            </Link>

            <Link href="/">
              <div className="h-[20rem] w-full flex items-center justify-center ">
                <PinContainer title="/crabroom.com/qrcodemanufactures">
                  <div
                    className="flex basis-full flex-col p-4 tracking-tight rounded-md text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]"
                    style={{ backgroundColor: "white" }}
                  >
                    <h3 className="max-w-xs !pb-2 !m-0 font-ethnocentric text-base text-sky-500">
                      Consultation
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        Get a free initial consultation on payment integrations,
                        leveraging our expertise to enhance your business's
                        transaction capabilities and financial technology
                        solutions.
                      </span>
                    </div>
                    <div
                      className="flex flex-1 w-full rounded-lg mt-10 bg-gradient-to-br from-sky-400 via-sky-600 to-sky-700"
                      style={{ height: "200", width: "300" }}
                    />
                  </div>
                </PinContainer>
              </div>
            </Link>
            <Link href="/">
              <div className="h-[20rem] w-full flex items-center justify-center ">
                <PinContainer title="/crabroom.com/qrcodemanufactures">
                  <div
                    className="flex basis-full flex-col p-4 tracking-tight rounded-md text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]"
                    style={{ backgroundColor: "white" }}
                  >
                    <h3 className="max-w-xs !pb-2 !m-0 font-ethnocentric text-base text-sky-500">
                      Development
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        Experience rapid development with Stripe-certified
                        experts, ensuring fast turnover, PCI compliance, and
                        advanced payment solutions tailored to your business
                        needs.
                      </span>
                    </div>
                    <div
                      className="flex flex-1 w-full rounded-lg mt-10 bg-gradient-to-br from-sky-400 via-sky-600 to-sky-700"
                      style={{ height: "200", width: "300" }}
                    />
                  </div>
                </PinContainer>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
