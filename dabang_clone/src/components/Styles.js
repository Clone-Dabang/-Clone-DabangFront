import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection === "column" ? "column" : "row"};
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor};` : ""}
  width: ${(props) => (props.width ? props.width : "100%")};
  min-width: 50px;
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
  flex: ${(props) => props.flex || ""};
  font-family: ${(props) => props.fontFamily || ""};
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
  margin: 0px;
  font-size: 1.5em;
  text-align: center;
  ${(props) => (props.bold ? `font-weight: bold;` : "")}
`;
const P = styled.p`
  ${(props) =>
    props.fontSize ? `font-size: ${props.fontSize};` : "font-size: 1em"}
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : "")}
  line-height: ${(props) => props.lineHeight || ""};
  &:hover {
    color: ${(props) => props.hoverColor || ""};
    background-color: ${(props) => props.hoverBackgroundColor || ""};
  }
  cursor: ${(props) => props.cursor || ""};
`;
const Span = styled.span`
  margin: 0px;
  font-size: 0.4em;
  color: #888;
`;

// input 스타일!
// const InputC = styled.input`
//   width: ${(props) => (props.width ? props.width : "100%")};
//   border: ${(props) => (props.border ? props.border : "none;")};
//   padding: 2px 4px;
//   ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
// `;

export { Grid, Text };
