import React, { useEffect, useState } from "react";
import InputLabel from "@common/InputLabel/InputLabel";
import { urls } from "@constant/values";
import { useRecoilState } from "recoil";
import { adminState } from "@src/store/admin";

import * as style from "./RegistModalContent.style";
import PrimaryButton from "@common/Button/PrimaryButton";
import {
  UpdateUser,
  DeleteUser,
  FindUserAll,
} from "@src/action/hooks/authHooks";
import DeleteButton from "@src/present/common/Button/DeleteButton";

type UserInfo = {
  data: {
    userId: string;
    userName: string;
    userPosition: string;
    userPhoneNumber: string;
    imageSrc: string;
  };
  onClose: () => void;
};

const EditModalContent = ({ data, onClose }: UserInfo) => {
  const [userId, setUserId] = useState<string>(data?.userId || "");
  const [userName, setName] = useState<string>(data.userName || "");
  const [userPosition, setPosition] = useState<string>(data.userPosition || "");
  const [userPhoneNumber, setPhone] = useState<string>(
    data.userPhoneNumber || ""
  );
  const [fileName, setFileName] = useState<any | null>(
    `${urls.API}/${data.imageSrc}`
    );
    const [profile, setProfile] = useState<any | null>("");
    const [users, setUsers] = useRecoilState(adminState);

  const saveProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(event.target.files[0]);
    setFileName(URL.createObjectURL(event.target.files[0]));
  };

  const submitRegist = () => {
    const user = {
      userId,
      userName,
      userPosition,
      userPhoneNumber,
    };

    const formData = new FormData();
    if (profile !== "") {
      formData.append("profile", profile);
    } else {
      formData.append("profile", "");
    }
    const userBlob = new Blob([JSON.stringify(user)], {
      type: "application/json",
    });

    formData.append("user", userBlob, "user.json");

    UpdateUser(formData).then((res) => {
      FindUserAll().then((res) => {
        setUsers({ users: res.result });
      });
    });
    onClose();
  };

  const clickDelete = () => {
    DeleteUser(userId).then(() => {
      FindUserAll().then((res) => {
        setUsers({ users: res.result });
      });
    });
    onClose();
  };
  
  const nullError = !!userId && !!userName && !!userPhoneNumber && !!userPosition
 
  const submitError = nullError

  return (
    <style.ModalBox>
      <style.ModalTitle>정보 수정 하기</style.ModalTitle>
      <style.ContentBox>
        <style.ProfileBox>
          <style.ProfileImage src={fileName}></style.ProfileImage>
          <style.SaveLabel htmlFor="file">
            {fileName ? "사진 교체" : "사진 업로드"}
          </style.SaveLabel>
          <style.SaveInput
            type="file"
            id="file"
            name="files"
            accept="image/png, image/jpg, image/jpeg"
            onChange={saveProfile}
            multiple
          />
        </style.ProfileBox>
        <style.DataBox>
          <InputLabel
            placeholder="직원번호"
            width="100%"
            height="30px"
            value={userId}
            fontSize="1vw"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            type="text"
            errorMessage=""
            errorFontSize="0.5vw"
            readonly={true}
          />
          <InputLabel
            placeholder="이름"
            width="100%"
            height="30px"
            value={userName}
            fontSize="1vw"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            errorMessage=""
            errorFontSize="0.5vw"
          />
          <InputLabel
            placeholder="직책"
            width="100%"
            height="30px"
            type="text"
            value={userPosition}
            fontSize="1vw"
            onChange={(e) => {
              setPosition(e.target.value);
            }}
            errorMessage=""
            errorFontSize="0.5vw"
          />
          <InputLabel
            placeholder="전화번호( - 포함 작성 )"
            width="100%"
            height="30px"
            type="text"
            value={userPhoneNumber}
            fontSize="1vw"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            errorMessage=""
            errorFontSize="0.5vw"
          />
        </style.DataBox>
      </style.ContentBox>
      <style.UnderButton>
        <DeleteButton content={"삭제 하기"} handler={clickDelete} />
        <PrimaryButton
          content={"수정 하기"}
          isArrow={true}
          handler={submitRegist}
          disabled={!submitError}
        />
      </style.UnderButton>
    </style.ModalBox>
  );
};

export default EditModalContent;