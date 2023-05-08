import InputLabel from "@common/InputLabel/InputLabel";
import { DataInput } from "@src/action/hooks/Effectiveness";
import * as style from "@src/present/component/Main/ModalContent.style";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import { LoginUser, LoginDrone, LoginAdmin } from "@src/action/hooks/authHooks";
import { useRecoilState } from "recoil";
import { authState } from "@store/auth";
import { useNavigate } from "react-router-dom";

const ModalContent = () => {
  const naviate = useNavigate();
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [pwd, setPwd, pwdError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );

  const [auth, setAuth] = useRecoilState(authState);

  const clickLogin = (event) => {
    event.preventDefault();
    if (id.slice(0,1) === "u") {
      LoginUser(id, pwd).then((res) => {
        if (res.isSuccess === true) {
          setAuth({
            isAuthenticated: true,
            user: res.result,
            userType: 1,
          });
        }
        naviate("/flightinfo");
      }).catch((err)=>{
        console.log(err);
        
      });
    } else if (id.slice(0,1)  === "d") {
      LoginDrone(id, pwd).then((res) => {
        if (res.isSuccess === true) {
          setAuth({
            isAuthenticated: true,
            user: res.result,
            userType: 2,
          });
        }
        naviate("/drone");
      }).catch((err)=>{
        console.log(err);
        
      });
    } else if (id === "skyadmin") {
      LoginAdmin(id, pwd).then((res) => {
        if (res.isSuccess === true) {
          setAuth({
            isAuthenticated: true,
            user: res.result,
            userType: 0,
          });
        }
        naviate("/admin");
      }).catch((err)=>{
        console.log(err);
        
      });
    }
  };

  const nullError = !!id && !!pwd;
  const effectiveError = idError && pwdError;
  const submitError = nullError && effectiveError;

  return (
    <style.LoginModalWrap>
      <style.ModalTitle>로그인</style.ModalTitle>
      <style.LoginForm>
        <InputLabel
          placeholder="직원번호"
          width="100%"
          height="40%"
          type="text"
          value={id}
          fontSize="1vw"
          onChange={setId}
          errorFontSize="13px"
          errorMessage={
            idError ? "" : "영어와 숫자로만 입력해주세요( 5~20 글자 )"
          }
        ></InputLabel>
        <InputLabel
          placeholder="비밀번호"
          width="100%"
          height="40%"
          type="password"
          value={pwd}
          fontSize="1vw"
          onChange={setPwd}
          errorFontSize="13px"
          errorMessage={
            pwdError
              ? ""
              : "영어,숫자 특수문자를 하나이상 입력해주세요( 9~16 글자 )"
          }
        ></InputLabel>
        <style.ButtonBox>
          <PrimaryButton
            content={"로그인"}
            isArrow={true}
            handler={clickLogin}
            disabled={!submitError}
          />
        </style.ButtonBox>
      </style.LoginForm>
    </style.LoginModalWrap>
  );
};

export default ModalContent;