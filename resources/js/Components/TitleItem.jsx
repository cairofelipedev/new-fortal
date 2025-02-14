export const TitleItem =({title,icon})=>{


    return(
        <h3 class="flex gap-[8px] fill-[#ff5b00] text-sm font-semibold leading-6 text-[#83400e] whitespace-nowrap">
                            {/* <FaRegSun className="text-xl" /> */}
                            {icon}
                            {/* Fortaleza Meetings */}
                            {title}
                        </h3>
    )
}