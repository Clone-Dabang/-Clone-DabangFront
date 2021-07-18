import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  box-sizing: border-box;
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) =>
    props.flexDirection === "column" ? "column" : "row"};
  flex: ${(props) => props.flex || ""};
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor};` : ""}
  width: ${(props) => (props.width ? props.width : "100%")};
  max-width: ${(props) => props.maxWidth || ""};
  white-space: ${(props) => props.whiteSpace || ""};

  height: ${(props) => (props.height ? props.height : "100%")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.is_root ? `width: 100vw; height: 100vh;` : "")}
  ${(props) =>
    props.hover ? `&:hover{cursor: pointer; background-color: #44444455;}` : ""}
  ${(props) => (props.color ? `color:${props.color};` : "")}
  ${(props) => (props.textAlign ? `text-align: center;` : "")}
  border-bottom: ${(props) => props.borderBottom || ""};
  border-right: ${(props) => props.borderRight || ""};
  font-size: ${(props) => props.fontSize || ""};
  
  flex: ${(props) => props.flex || ""};
  font-family: ${(props) => props.fontFamily || ""};
  border-radius: ${(props) => props.borderRadius || ""};
  box-shadow: ${(props) => props.boxShadow || ""};
`;

const ListCont = styled.ul`
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor};` : ""}
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: ${(props) => props.borderRadius || ""};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
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
`;
const Span = styled.span`
  font-size: ${(props) => props.fontSize || ""};
  color: ${(props) => props.color || ""};
`;

const Icon = styled.div`
    width:  ${(props) => props.width || ""};
    height:  ${(props) => props.height || ""};
    background-image: url(${(props) => props.url || ""});
    background-size: cover;
    margin: ${(props) => props.margin || ""};
    padding: ${(props) => props.padding || ""};
`

// input 스타일!
// const InputC = styled.input`
//   width: ${(props) => (props.width ? props.width : "100%")};
//   border: ${(props) => (props.border ? props.border : "none;")};
//   padding: 2px 4px;
//   ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
// `;

export { Grid, Text, ListCont, List, Icon };
