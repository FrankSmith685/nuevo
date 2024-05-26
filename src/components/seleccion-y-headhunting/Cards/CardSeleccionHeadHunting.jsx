const CardSeleccionHeadHunting = ({ navegator1,navegator2,title, description, image,subTitle_1,description_1 }) => {
    return (
        <div className="bg-white shadow-md p-0 flex flex-nowrap w-full h-auto ">
            <div className="w-full ">
                {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
            </div>
            <div className="p-4 w-full">
                <p className="text-sm text-gray-400 ">{navegator1} {'>'} {navegator2}</p>
                <h2 className="text-3xl font-bold py-2">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <h2 className="text-3xl font-bold py-2 text-red-500">{subTitle_1}</h2>
                <p className="text-gray-600 mt-2">{description_1}</p>
            </div>
        </div>
    );
}

export default CardSeleccionHeadHunting;