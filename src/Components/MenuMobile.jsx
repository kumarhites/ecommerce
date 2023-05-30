import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const data = [
  { id: 1, name: "All", url: "/" },
  { id: 2, name: "Men", url: "/men" },
  { id: 3, name: "Women", url: "/women" },
  { id: 4, name: "Brands", subMenu: true },
];

const subMenuData = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Vans" },
  { id: 3, name: "Adidas" },
  { id: 4, name: "Reebok" },
  { id: 5, name: "Converse" },
];

const MenuMobile = ({ showCategory, setShowCategory, setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-semibold absolute top-[50px] left-0 w-full h-[100vh] bg-white border-t text-gray-900">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={() => setShowCategory(!showCategory)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <HiChevronDown size={20} />
                </div>
                {showCategory && (
                  <ul className="bg-black/[0.05] -mx-5 m-4 -mb-4">
                    {subMenuData.map((subMenu) => (
                      <NavLink
                        to="/"
                        key={subMenu.id}
                        className="h-12 flex px-3 hover:bg-black/[0.03] rounded-lg"
                        onClick={() => {
                          setShowCategory(false);
                          setMobileMenu(false);
                        }}
                      >
                        <li className="py-4 px-8 flex justify-between">
                          {subMenu.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer py-4 px-5 border-b flex flex-com relative">
                <NavLink to={item?.url} onClick={() => setMobileMenu(false)}>{item.name}</NavLink>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
