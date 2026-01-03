import { useRef ,useEffect } from "react";

const Navbar =({
    setSearch ,setType ,setParking
})=> {
    const searchRef =useRef();
}
useEffect(()=>{
    searchRef.current.focus();
},[]);

return(
    <div className="navbar"> 
        <input
        ref ={searchRef}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.values)
        }/>

        <select onChange ={(e) =>setType(e.target.values)}>
        <option value></option>
        </select>
        </div>
);