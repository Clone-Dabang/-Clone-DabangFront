import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) =>
    props.flexDirection === "column" ? "column" : "row"};
  flex: ${(props) => props.flex || ""};
  ${(props) => (props.flexWrap ? `flex-wrap: ${props.flexWrap};` : "")}
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};

  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || ""};
  height: ${(props) => props.height || "100%"};
  max-height: ${(props) => props.maxHeight || "100%"};
  margin: ${(props) => props.margin || ""};
  padding: ${(props) => props.padding || ""};

  box-sizing: border-box;
  box-shadow: ${(props) => props.boxShadow || ""};

  position: ${(props) => props.position || ""};
  top: ${(props) => props.top || ""};
  left: ${(props) => props.left || ""};
  z-index: ${(props) => props.zIndex || ""};
  overflow: ${(props) => props.overflow || ""};
  transform: ${(props) => props.transform || ""};
  transition-duration: ${(props) => props.transitionDuration || ""};
  transition-timing-function: ${(props) => props.transitionTimingFunction || ""};

  background-color: ${(props) => props.backgroundColor || ""};

  cursor: ${(props) => props.cursor || ""};

  border: ${(props) => props.border || ""};
  border-bottom: ${(props) => props.borderBottom || ""};
  border-top: ${(props) => props.borderTop || ""};
  border-right: ${(props) => props.borderRight || ""};
  border-radius: ${(props) => props.borderRadius || ""};

  color: ${(props) => props.color || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
  
  font-family: ${(props) => props.fontFamily || ""};
  white-space: ${(props) => props.whiteSpace || ""};
  ${(props) => (props.textAlign ? `text-align: center;` : "")}
  
  ${(props) => (props.is_root ? `width: 100vw; height: 100vh;` : "")}
  ${(props) =>
    props.hover ? `&:hover{cursor: pointer; background-color: #44444455;}` : ""}

`;

const ListCont = styled.ul`
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor};` : ""}
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: ${(props) => props.borderRadius || ""};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}

  ${(props) => (props.display ? `display: ${props.display};` : "")}
  ${(props) => (props.flexDirection ? `flex-direction: ${props.flexDirection};` : "")}
  ${(props) => (props.justifyContent ? `justify-content: ${props.justifyContent};` : "")}
  ${(props) => (props.flexWrap ? `flex-wrap: ${props.flexWrap};` : "")}
  ${(props) => (props.borderTop ? `border-top: ${props.borderTop};` : "")}
  ${(props) => (props.boxSizing ? `box-sizing: ${props.boxSizing};` : "")}
  ${(props) => (props.ListStyleType ? `list-style-type: ${props.ListStyleType};`:"" )}
`;

const List = styled.li`
  color: ${(props) => props.color || ""};
  font-size: ${(props) => props.fontSize || ""};
  line-height: ${(props) => props.lineHeight || ""};
  position: ${(props) => props.position || ""};
  list-style: none;
  font-family: ${(props) => props.fontFamily || ""};
  &:before {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: rgb(34, 34, 34);
    position: absolute;
    top: 10px;
    left: -10px;
  }
`;

const DetailList = styled.li`
  width: ${(props) => props.width || "25%"};
  height: ${(props) => props.height || "50px"};
  display: ${(props) => props.display || "flex"};
  align-items: ${(props) => props.alignItems || "center"};
  border-bottom: ${(props) => props.borderBottom || "1px solid rgb(235, 235, 235)"};
  &::before {
    content: "·";
    color: rgb(34, 34, 34);
    margin-right: 7px;
  }

`

const Text = (props) => {
  if (props.type === "title") {
    return <H1 {...props}>{props.children}</H1>;
  }
  if (props.type === "label") {
    return <Span {...props}>{props.children}</Span>;
  }

  return <P {...props}>{props.children}</P>;
};
const H1 = styled.h1`
  text-align: center;
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
  line-height: ${(props) => props.lineHeight || ""};
  color: ${(props) => props.color || ""};
  position: ${(props) => props.position || ""};
  height: ${(props) => props.height || ""};
  border-bottom: ${(props) => props.borderBottom || ""};
  width: ${(props) => props.width || ""};
`;
const P = styled.p`
  ${(props) =>
    props.fontSize ? `font-size: ${props.fontSize};` : "font-size: 1em;"}
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.flex ? `flex: ${props.flex};` : "")}

  line-height: ${(props) => props.lineHeight || ""};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
  &:hover {
    color: ${(props) => props.hoverColor || ""};
    background-color: ${(props) => props.hoverBackgroundColor || ""};
  }
  cursor: ${(props) => props.cursor || ""};

  font-family: ${(props) => props.fontFamily || ""};
  display: ${(props) => props.display || ""};
  align-items: ${(props) => props.alignItems || ""};;
  word-break: ${(props)=> props.wordBreak || ""};
  white-space: ${(props)=> props.whiteSpace || ""};
  
  position: ${(props) => props.position || ""};
  top: ${(props) => props.top || ""};
  right : ${(props) => props.right || ""};
  left : ${(props) => props.left || ""};
  z-index: ${(props) => props.zIndex || ""};

  border-top: ${(props) => props.borderTop || ""};


`;
const Span = styled.span`
  font-size: ${(props) => props.fontSize || ""};
  color: ${(props) => props.color || ""};
`;

const Image = styled.div`
    width:  ${(props) => props.width || "100%"};
    height:  ${(props) => props.height || "100%"};

    background-image: url(${(props) => props.url || ""});
    background-size: cover;

    margin: ${(props) => props.margin || ""};
    padding: ${(props) => props.padding || ""};

    display: ${(props) => props.display || ""};
    float: ${(props) => props.float || ""};
    box-sizing: ${(props) => props.boxSizing || "border-box"};
    z-index: ${(props) => props.zIndex || ""};
    flex: ${(props) => props.flex || ""};
    position: ${(props) => props.position || ""};
    top: ${(props) => props.top || ""};
    bottom: ${(props) => props.bottom || ""};
    right: ${(props) => props.right || ""};
    left: ${(props) => props.left || ""};

    text-align: ${(props) => props.textAlign || ""};
    line-height:  ${(props) => props.lineHeight || ""};;

    color:  ${(props) => props.color || ""};

    cursor: ${(props) => props.cursor || ""};

    ${(props) => props.selectImage? 
     `&::after{
      content: "";
      display: block;
      bottom: 0%;
      height: 4px;
      position: absolute;
      width: 140px;
      background-color: rgb(50, 108, 249);
      }
     `
      : ""};

    ${(props) => props.showAllBG? 
     `
      &::before{
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      width: 280px;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.75);
      }
       
     `
      : ""};
    ${(props) => props.showAllText? 
     `
      position: absolute;
      top: 80px;
      text-align: center;
      color: white;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
     `
      : ""};
      
`

const A = styled.a`
  text-decoration: none;
  color: black;
`

const Table = styled.table`
  width: 850px;
  box-sizing: border-box;
  border-top: 1px solid rgb(204, 204, 204);
  border-bottom: 1px solid rgb(204, 204, 204);
  margin: 30px auto 0px;
  border-collapse: collapse;
`
const Tbody = styled.tbody`
`
const Tr = styled.tr`
  color: ${(props) => props.color || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
  height: ${(props) => props.height || ""};
  line-height: ${(props) => props.lineHeight || ""};
`
const Td_lineOne = styled.td`
  text-align: center;
  color: rgb(34, 34, 34);
  font-size: 15px;
  font-weight: 400;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgb(231, 231, 231);
  border-left:
   ${(props)=>props.borderLeft?
   " 1px solid rgb(231, 231, 231);" : ""};
`
const Td_lineTwo = styled.td`
  color: rgb(101, 101, 101);
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  line-height: 22px;
  border-left:
  ${(props)=>props.borderLeft?
   " 1px solid rgb(231, 231, 231);" : ""};
`

const ToggleBtn = styled.button`
    color: rgb(34, 34, 34);
    border: 1px solid rgb(223, 223, 223);
    border-radius: 2px;
    background-color: rgb(255, 255, 255);
    padding: 0px 8px;
    height: 24px;
    font-size: 11px;
    white-space: nowrap;
    cursor: pointer;
`


// input 스타일!
// const InputC = styled.input`
//   width: ${(props) => (props.width ? props.width : "100%")};
//   border: ${(props) => (props.border ? props.border : "none;")};
//   padding: 2px 4px;
//   ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
// `;

export { Grid, Text, ListCont, List, DetailList, Image, Table, Tbody, Tr, Td_lineOne, Td_lineTwo, A, ToggleBtn };
