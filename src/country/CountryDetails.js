import { useLocation } from "react-router";
export default function CountryDetails()
{
    let location = useLocation();
    return(
        <h1>{location.data.item.name}</h1>
    )
}