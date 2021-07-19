import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) =>
    props.flexDirection === "column" ? "column" : "row"};
  flex: ${(props) => props.flex || ""};
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

  border: ${(props) => props.border || ""};
  border-bottom: ${(props) => props.borderBottom || ""};
  border-right: ${(props) => props.borderRight || ""};
  border-radius: ${(props) => props.borderRadius || ""};

  color: ${(props) => props.color || ""};
  font-size: ${(props) => props.fontSize || ""};
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
  word-break: ${(props)=> props.wordBreak || ""};
  white-space: ${(props)=> props.whiteSpace || ""};
  
  position: ${(props) => props.position || ""};
  top: ${(props) => props.top || ""};
  right : ${(props) => props.right || ""};
  left : ${(props) => props.left || ""};
  z-index: ${(props) => props.zIndex || ""};

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
    float: ${(props) => props.float || ""};
    box-sizing: ${(props) => props.boxSizing || "border-box"};
    z-index: ${(props) => props.zIndex || ""};
    flex: ${(props) => props.flex || ""};
    
    ${(props) => props.selectImage? 
     `&::after{
      content: "";
      display: block;
      bottom: 0%;
      height: 4px;
      background-color: rgb(50, 108, 249);
      }
     `
      : ""};
`

// input 스타일!
// const InputC = styled.input`
//   width: ${(props) => (props.width ? props.width : "100%")};
//   border: ${(props) => (props.border ? props.border : "none;")};
//   padding: 2px 4px;
//   ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
// `;

export { Grid, Text, ListCont, List, DetailList, Image };
