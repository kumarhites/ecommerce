import React, { useContext } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../contexts/FilterContext";

const data = [
  { id: 1, name: "All", url: "" },
  { id: 2, name: "Men", url: "men" },
  { id: 3, name: "Women", url: "women" },
  { id: 4, name: "Brands", subMenu: true },
];

const subMenuData = [
  { id: 1, brandName: "Nike" },
  { id: 2, brandName: "Puma" },
  { id: 3, brandName: "Adidas" },
  { id: 4, brandName: "Reebok" },
  { id: 5, brandName: "Jordan" },
];

const MenuMobile = ({ showCategory, setShowCategory, setMobileMenu }) => {
  const { dispatch } = useContext(FilterContext);
  const navigate = useNavigate();
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
                      <div
                        key={subMenu.id}
                        className="h-12 flex px-3 hover:bg-black/[0.03] rounded-lg"
                        onClick={() => {
                          setShowCategory(false);
                          setMobileMenu(false);
                          dispatch({
                            type: "GET_BRAND_DETAILS",
                            payload: subMenu.brandName,
                          });
                          navigate("/products");
                        }}
                      >
                        <li className="py-4 px-8 flex justify-between">
                          {subMenu.brandName}
                        </li>
                      </div>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer py-4 px-5 border-b flex flex-com relative">
                <div
                  onClick={() => {
                    setShowCategory(false);
                    setMobileMenu(false);
                    navigate("/products");
                  }}
                >
                  {item.name}
                </div>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
