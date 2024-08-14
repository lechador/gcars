import { FaHandHoldingUsd, FaCalculator, FaUnlock, FaNewspaper, FaTruckLoading} from "react-icons/fa";
import { FaDesktop, FaPhotoFilm  } from "react-icons/fa6";
import { RiUserHeartLine, RiAuctionFill  } from "react-icons/ri";
import { MdOutlineContentPasteSearch, MdNetworkCheck  } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import Template from "../transition";




export default function Features() {
    const iconColor = "rgb(234 179 8)"
    const iconSize = 50
  return (
    <Template>
    <div className="relative flex items-center justify-center bg-black ">
        <div className="my-10">
            <div className="text-center text-3xl mb-8"> 
                <span className="text-white">GCARS </span>
                <span className="text-yellow-500">გთავაზობთ</span>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-24">
                <div className="flex flex-col items-center">
                    <RiUserHeartLine size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">
                        დახმარება ავტომობილის შერჩევის პროცესში
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <MdOutlineContentPasteSearch size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">
                    ავტომობილის სრული ისტორია
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <FaCalculator size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">
                    ავტომობილის ხარჯების დათვლა
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <FaUnlock size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">
                        დახურულ აუქციონებზე წვდომა
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <RiAuctionFill size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">
                        copart, iaai, manheim, pipeline, adesa აუქციონებში მონაწილეობა
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <FaDesktop size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">         
                        ტრანსპორტირების კალკულატორზე წვდომა
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <FaPhotoFilm size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">
                    ფოტო ამერიკის და საქართველოს პორტებიდან
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <FaNewspaper size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">
                    ოფიციალური ხელშეკრულება
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <MdNetworkCheck size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">
                    ავტოლიზინგი / დაფინანსება
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <IoDocumentAttach size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">
                    მანქანის რეგისტრაციისთვის
                    ან რეექსპორტისთვის საჭირო ყველა დოკუმენტი
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <GrUserManager size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">24/7 პირადი მენეჯერი</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaTruckLoading  size={iconSize} color={iconColor} />
                    <span className="text-white mt-2 max-w-40 text-center">ევაკუატორის
                    მომსახურეობა</span>
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </div>
    </Template>
  )
}
