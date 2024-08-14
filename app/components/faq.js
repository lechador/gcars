

export default function Faq() {
    const faqs = [{
        question: "რა შემთხვევაში ვთამაშობთ აუქციონს?",
        answer: "აუციონზე მონაწილეობას ვღებულობთ იმ შემთხვევაში თუ ჩვენი ექსპერტის მიერ შერჩეული მანქანა სრულად შეესაბამება თქვენს მოთხოვნებს. ამის შემდეგ თქვენ ადასტურებთ აუქციონში მონაწილეობას. ექსპერტი ონლაინ რეჟიმში თქვენთან ერთად თამაშობს აუქციონს განსაზღვრული ბიუჯეტის შესაბამისად."
    },
    {
        question: "რა ხდება ავტომობილის დაზიანების შემთხვევაში?",
        answer: "Gcars ავტომობილის ნებისმიერი სახის დაზიანების შემთხვევაში აღწერს ზარალს და ახდენს ანაზღაურებას სრულად."
    },
    {
        question: "რა დრო სჭირდება ავტომობილის ჩამოყვანას?",
        answer: "ტრანსპორტირების საშუალო ვადაა 2-3 თვე აუქციონზე ავტომობილის ყიდვიდან. ლოჯისტიკის პროცესს სრულად თავის თავზე იღებს Gcars. ავტომობილის ჩატვირთვას და პორტამდე მიყვანას სჭირდება სულ რაღაც რამდენიმე დღე. ტრანსპორტირების ყოველ ეტაპზე გექნებათ მიმდინარე ინფორმაცია თქვენი ავტომობილის მდებარეობასა და სტატუსზე."
    },
    {
        question: "ვინ არის ავტოექსპერტი?",
        answer: "ავტოექსპერტი უზრუნველყოფს აშშ მსხვილ აუქციონებზე (COPART, IAAI, MANHEIM, PIPELINE, ADESA) თქვენი მოთხოვნების შესაბამისი ავტომობილის მოძიებას. ის პასუხისმგებელია აუქციონზე მის შეძენასა და სრულ ტრანსპორტირებაზე ფოთამდე."
    },
    {
        question: "როგორ დაგიკავშირდეთ?",
        answer: "დაგვიკავშირდით მობილურის ნომერზე: +995 557 27 07 43"
    },]
  return (
    <div className="relative flex flex-col items-center justify-center bg-black py-10">
        <div>
            <div className="text-center text-3xl mb-8"> 
                <span className="text-white">ხშირად დასმული </span>
                <span className="text-yellow-500">კითხვები</span>
            </div>
        </div>
        <div className="space-y-4 max-w-3xl">
            {
                faqs.map((faq, index) => {
                    
                    return(
                        <details
                            key={index}
                            className="group border-s-4 border-yellow-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                            open={index == 0 ? true : false}
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900">
                                {faq.question}
                            </h2>

                            <span className="shrink-0 rounded-full bg-yellow-500 p-1.5 text-gray-900 sm:p-3">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </span>
                            </summary>

                            <p className="mt-4 leading-relaxed text-gray-700">
                            {faq.answer}
                            </p>
                        </details>
                    )
                })
            }
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </div>
  )
}
