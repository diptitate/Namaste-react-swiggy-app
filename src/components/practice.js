
useEffect(() => {
    fetchData();
}, []);

const fetchData = async() =>{
    const data = await fetch(API_URL);
    const jsonData = await data?.json();

    const restaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    console.log(`restaurants: ${restaurants}`);
}

