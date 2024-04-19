

export default function CarImages() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-black">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-2">
            <div className="h-full rounded-lg bg-gray-200">
                <img src="/car2.webp" alt="car_image" />
            </div>
            <div className="h-full rounded-lg bg-gray-200">
                <img src="/car2.webp" alt="car_image" />
            </div>
            <div className="h-full rounded-lg bg-gray-200">
                <img src="/car2.webp" alt="car_image" />
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </div>
  )
}
