import React, { memo, useState } from "react";
import SideBar from "@common/SideBar/SideBar";
import SideContent from "@layout/SideContent/SideContent";
import SelectBuilding from "@src/present/layout/SelectBuilding/SelectBuilding";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import AddButton from "@src/present/common/Button/AddButton";
import Dropdown from "@src/present/common/Dropdown/Dropdown";

const testBuildings = [
  "A 건물",
  "B 건물",
  "C 건물",
  "D 건물",
  "E 건물", 
  "A 건물",
  "B 건물",
  "C 건물",
  "D 건물",
  "E 건물", 
]

const Drone = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideContent isOpen={isOpen}>
        <div className="center Drone">
          <SelectBuilding />
          <Dropdown content={"건물 이름"} options={testBuildings}/>
          <AddButton content={"건물 추가하기"} />
          <div>
            <PrimaryButton content={"촬영하기"} isArrow={true} />
          </div>
        </div>
      </SideContent>
    </>
  );
};

export default memo(Drone);
