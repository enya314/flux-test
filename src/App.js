import { useState } from "react";
import styled from "@emotion/styled";

const SubMenu = styled.div`
  width: 300px;
  background-color: gray;
  > div {
    width: 300px;
    display: ${(props) => (props.name !== props.expand ? "none" : "block")};
  }
`;

const Item = styled.div`
  background-color: lightgray;
`;

const App = () => {
  const [expand, setExpand] = useState(); // ・・・ ★①
  const onClick = (e) => {
    // ・・・ ★②
    setExpand(e.target.attributes.getNamedItem("name").value);
  };
  // ↓ ・・・ ★③
  return (
    <div>
      <SubMenu name="sub_1" expand={expand} onClick={onClick}>
        サブメニュー1
        <Item>アイテム1</Item>
        <Item>アイテム2</Item>
      </SubMenu>
      <SubMenu name="sub_2" expand={expand} onClick={onClick}>
        サブメニュー2
        <Item>アイテム3</Item>
        <Item>アイテム4</Item>
      </SubMenu>
      <SubMenu name="sub_3" expand={expand} onClick={onClick}>
        サブメニュー3
        <Item>アイテム5</Item>
        <Item>アイテム6</Item>
      </SubMenu>
    </div>
  );
};

export default App;
