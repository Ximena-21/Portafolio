import {readFileSync} from "fs"
import matter from 'gray-matter'

export default function TestPage (props: any) {

    console.log(props)

    // getStaticProps()
    return (
        <div>
            <h1>hola!!</h1>
            <p>{props.parseData?.title}</p>
            <p>{props.parseData?.description}</p>
        </div>
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

