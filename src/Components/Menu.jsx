import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const data = [
  { id: 1, name: "All", url: "/" },
  { id: 1, name: "Men", url: "/men" },
  { id: 1, name: "Women", url: "/women" },
  { id: 1, name: "Brands", subMenu: true },
];

const subMenuData = [
  { id: 1, name: "Nike" },
  { id: 1, name: "Vans" },
  { id: 1, name: "Adidas" },
  { id: 1, name: "Reebok" },
];

const Menu = ({ showCategory, setShowCategory }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 text-black font-semibold">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCategory(true)}
                onMouseLeave={() => setShowCategory(false)}
              >
                {item.name}
                <HiChevronDown size={20} />
                {showCategory && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[200px] px-1 text-black shadow-lg py-1 rounded-lg">
                    {subMenuData.map((subMenu) => (
                      <NavLink
                        to="/"
                        key={subMenu.id}
                        className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-lg"
                        onClick={() => setShowCategory(false)}
                      >
                        {subMenu.name}
                        <span className="opacity-50 text-sm">
                          {subMenu.doc_count}
                        </span>
                      </NavLink>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <NavLink to={item?.url}>{item.name}</NavLink>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
