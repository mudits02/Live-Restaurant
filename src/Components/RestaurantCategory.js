import ItemList from "./ItemList";

const RestaurantCategory = ({ data , isOpen , setShowIndex }) => {

    const toggleAccordion = () => {
        setShowIndex();
    }

    return (
        <div className="border-b-2">
            <div 
                className="flex justify-between items-center cursor-pointer w-6/12 shadow-lg p-4 mx-auto my-4 bg-gray-100"
                onClick={toggleAccordion}
            >
                <span className="font-semibold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
                <span className="text-xl font-bold">
                    {isOpen ? "-" : "+"}
                </span>
            </div>
            {isOpen && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategory;
