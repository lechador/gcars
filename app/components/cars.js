

export default function Cars() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-black">
        <section className="overflow-hidden bg-yellow-500 sm:grid sm:grid-cols-2">
            <iframe
                width="100%" 
                height="100%"
                src="https://www.youtube.com/embed/MH4VbFM6Ybs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col items-center">
                <div>
                    <div className="text-center text-3xl mb-8"> 
                        <span className="text-white">დაშლილი </span>
                        <span className="text-black">ავტომობილები</span>
                    </div>
                </div>
                <div className="mx-auto max-w-xl text-center sm:text-left ">
                    <span>
                    ლორემ იპსუმ ჩმახვა დაუშვებელია მარტოვე წავუსვამ ბედავდნენ კაჭკაჭი კეტს გამავრცელებლები ცხვირზე პროვინციულ გააძრესო ინანებ რაცა ლურჯ უშვილძირობას. მტკაველის მიუდვია გამოიარო, გასაგორებლადაო იძახონ გაართულებდა მიგდებულობის ოცდაათამდე. მოჰქო ადამიანად კომისია დაფარებოდა შვილდი განძი, ორმაგი ხამხამით შესახვევშიც უშვილძირობას. დაფარებოდა გააძრესო ჰენდონის მოახსენეს თამაშობდნენ გორელებს თხრობით მოგდით ჩაგოდრებული განძი არაფერიო დაფიქრდეთ.
                    </span>
                </div>
            </div>
        </section>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </div>
  )
}
