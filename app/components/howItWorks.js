import { GiAtSea } from "react-icons/gi";

const procedures = [{
    name: "პროცედურის სახელი", 
    icon: <GiAtSea size={50} />,
    desc: "აცქერდება საყდრებია ვაკელებად განწირულის მემაწვნის განისვენებს. ჩემსავით ვიხილო კოლექტიურმა საჩუქრებიც ვაკელებად აცქერდება სიზუსტე ჭიშკართან დამანებებდეთ გამოეძებნა"
},
{
    name: "პროცედურის სახელი", 
    icon: <GiAtSea size={50} />,
    desc: "აცქერდება საყდრებია ვაკელებად განწირულის მემაწვნის განისვენებს. ჩემსავით ვიხილო კოლექტიურმა საჩუქრებიც ვაკელებად აცქერდება სიზუსტე ჭიშკართან დამანებებდეთ გამოეძებნა"
},
{
    name: "პროცედურის სახელი", 
    icon: <GiAtSea size={50} />,
    desc: "აცქერდება საყდრებია ვაკელებად განწირულის მემაწვნის განისვენებს. ჩემსავით ვიხილო კოლექტიურმა საჩუქრებიც ვაკელებად აცქერდება სიზუსტე ჭიშკართან დამანებებდეთ გამოეძებნა"
},
{
    name: "პროცედურის სახელი", 
    icon: <GiAtSea size={50} />,
    desc: "აცქერდება საყდრებია ვაკელებად განწირულის მემაწვნის განისვენებს. ჩემსავით ვიხილო კოლექტიურმა საჩუქრებიც ვაკელებად აცქერდება სიზუსტე ჭიშკართან დამანებებდეთ გამოეძებნა"
},
{
    name: "პროცედურის სახელი", 
    icon: <GiAtSea size={50} />,
    desc: "აცქერდება საყდრებია ვაკელებად განწირულის მემაწვნის განისვენებს. ჩემსავით ვიხილო კოლექტიურმა საჩუქრებიც ვაკელებად აცქერდება სიზუსტე ჭიშკართან დამანებებდეთ გამოეძებნა"
}]

export default function HowItWorks() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-black py-10">
        <div>
            <div className="text-center text-3xl"> 
                <span className="text-yellow-500">პროცედურები</span>
            </div>
        </div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                {
                    procedures.map((proc, index) => {
                        return(
                            <div key={index} className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{index+1}</div>
                                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    {proc.icon}
                                    </div>
                                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-gray-300 mb-1 text-xl">{proc.name}</h2>
                                    <p className="leading-relaxed">{proc.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </section>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </div>
  )
}
