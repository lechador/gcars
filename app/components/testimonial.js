'use client'
import { useKeenSlider } from 'keen-slider/react'
import { FaStar } from "react-icons/fa6";

const userReviews = [{
    user: "თორნიკე", 
    star: 5,
    review: "ეს ჩემი მეორე გამოცდილებაა ამ კომპანიასთან და ისევ კმაყოფილი ვარ. მომსახურება სწრაფი და ეფექტურია. მაცნობეს ყველა დეტალი და ყველაფერი მარტივად განვახორციელე."
},
{
    user: "თაკო", 
    star: 5,
    review: "რეკომენდაციას ვუწერ ყველას, ვისაც სურს მანქანის იმპორტი. კომპანია ძალიან სანდოა და პროფესიონალური. ყველაფერი დროულად და ზუსტად განხორციელდა."
},
{
    user: "თენგო", 
    star: 5,
    review: "დიდ მადლობას ვუხდი ამ კომპანიას შესანიშნავი მომსახურებისთვის. ყველაფერი ზუსტად ისე იყო, როგორც დაპირებული ჰქონდათ. აუცილებლად მივმართავ მომავალშიც."
},
{
    user: "გიორგი", 
    star: 5,
    review: "ძალიან კმაყოფილი ვარ ამ სერვისით! მანქანა დროულად მოვიდა და ყველაფერი გეგმის მიხედვით წარიმართა. პროფესიონალური და მეგობრული მომსახურება!"
}, ]

export default function Testimonial() {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
          loop: true,
          slides: {
            perView: 1.5,
            spacing: 16,
          },
          breakpoints: {
            '(min-width: 1024px)': {
              slides: {
                perView: 2.5,
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
                <span className="text-white">მომხმარებლების </span>
                <span className="text-yellow-500">შეფასებები</span>
            </div>
        </div>
        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider" ref={sliderRef} >
                {
                    userReviews.map((review, index) => {
                        return(
                            <div className="keen-slider__slide" key={index}>
                            <blockquote
                                className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                            >
                                <div>
                                <div className="flex gap-0.5 text-yellow-500">
                                    {
                                        Array.from({ length: review.star }, (_, index) => (
                                            <FaStar key={index} />
                                        ))
                                    }
                                </div>

                                <div className="mt-4">
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                    {review.review}
                                    </p>
                                </div>
                                </div>

                                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                &mdash; {review.user}
                                </footer>
                            </blockquote>
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
