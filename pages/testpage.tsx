import {readFileSync} from "fs"
import matter from 'gray-matter'
import styled from "styled-components"
// import { Pepe } from "../styles/Layout"

export default function TestPage (props: any) {

    console.log(props)

    // getStaticProps()
    return (
        // <Pepe color="pink">
            <div className="fillHeight"></div>
        //     <BUTTON color="white">Prueba</BUTTON>
        //     <BUTTON color="red">Prueba</BUTTON>
        //     <BUTTON >Prueba</BUTTON>
        //     <h1>hola!!</h1>
        //     <p>{props.parseData?.title}</p>
        //     <p>{props.parseData?.description}</p>
        // </Pepe>
    )
}

export async function getStaticProps() {
    const fileContent = readFileSync("content/projects/trivia-name.md", {encoding: "utf-8"})

    const parseData = matter(fileContent).data

    // console.log(fileContent);

    return {
        props: {
            fileContent,
            parseData
        }
    }
}

interface IBtn {
    color?: string,
    submit?: boolean,
    pay?: string
}

const BUTTON = styled.button<IBtn>`
  border: 1px ${(props: any) => props.submit ? 'solid' : 'dotted'} yellow;
  background: ${(props:any) => props.color || "orange"};
  color: black;
  font-weight: ${(props:any)  => props.pay === "shopping" ? 'bold' : 500};
`