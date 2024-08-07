import Template from "../transition";

export default function Retro() {
  return (
    <Template>
    <div className="relative flex flex-col items-center justify-center bg-black">
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <div>
              <div className="text-center text-3xl mb-8"> 
                <span className="text-white">რეტრო </span>
                <span className="text-yellow-500">ავტომობილები</span>
              </div>
            </div>
            <div className="bg-yellow-500 p-3 rounded mb-6"> 
              <p className="text-black md:block text-xl">
              Gcars-ში ჩვენ გვჯერა, რომ ზოგიერთი რამ არასოდეს გამოდის მოდიდან. თუ ხარ კოლექციონერი, ენთუზიასტი ან უბრალოდ ადამიანი, ვინც აფასებს მუდმივ დიზაინს, ჩვენ გვაქვს ბორბლები, რომლებიც თქვენს გულს აჩქარებს.
              </p>
            </div>
            <span className="text-white"> 
            Gcars-ში დაგეხმარებიან რეტრო ავტომობილის შერჩევაში,შეძენაში და მათი ნაწილების მოძიებაში
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div> 
            <img className="rounded rounded-full relative right-20" src="/test.jpg" width={200} height={200} alt="car" />
            <img className="rounded rounded-full relative left-20 bottom-6" src="/test.jpg" width={200} height={200} alt="car" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </section>
  </div>
  </Template>
  )
}
