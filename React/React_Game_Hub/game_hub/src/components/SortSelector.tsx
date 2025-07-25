import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string;
}

const SortSelector = ({onSelectSortOrder, selectedSortOrder} : Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(sortOrder => sortOrder.value === selectedSortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       Order By: {currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem onClick={() => onSelectSortOrder(sortOrder.value)} key={sortOrder.value} value={sortOrder.value}>{sortOrder.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
