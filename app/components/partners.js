'use client'
import { useKeenSlider } from 'keen-slider/react'

const logos = [{
    logo: "/Picture6.png", 
},
{
    logo: "/Picture6.png", 
},
{
    logo: "/Picture6.png", 
},
{
    logo: "/Picture6.png", 
},
]

export default function Partners() {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
          loop: true,
          slides: {
            perView: 2.5,
            spacing: 16,
          },
          breakpoints: {
            '(min-width: 1024px)': {
              slides: {
                perView: 5,
                spacing: 32,
              },
            },
          },
        },
        []
      )
  return (
    <div className="relative flex flex-col items-center justify-center bg-black pt-10 py-20 overflow-x-hidden	">
        <div>
            <div className="text-center text-3xl mb-8"> 
                <span className="text-white">ჩვენი </span>
                <span className="text-yellow-500">პარტნიორები</span>
            </div>
        </div>
        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider" ref={sliderRef} >
                {
                    logos.map((logo, index) => {
                        return(
                            <div className="keen-slider__slide" key={index}>
                                <img src={logo.logo} alt='partner_logo' />
                            </div>
                        )
                    })
                }
            </div>
            </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </div>
  )
}
