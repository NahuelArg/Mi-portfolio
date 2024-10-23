import React from "react";
function NavBar() {
    return (
        <nav className = "bg-grag-800 text-white p-4">
            <div className = "container mx-auto flex justify-between items-center">
                <div className = "text-2xl font-bold">My Website</div>
                <ul className = "flex space-x-4">
                    <li><a href = "#">Home</a></li>
                    <li><a href = "#">About</a></li>
                    <li><a href = "#">Services</a></li>
                    <li><a href = "#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;