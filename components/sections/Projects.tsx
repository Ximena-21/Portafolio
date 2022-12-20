import React, { useRef } from 'react';
import Image from 'next/image';
import { Icon } from '@components/icons';
// import img from '../../public/uploads/download.jpeg'



export default function Projects({ data }: any) {

    const revealTitle = useRef(null);
    const revealProjects = useRef([]);


    return (
        <section id='projects'>
            <h2 className="numbered-heading" ref={revealTitle}>
                Proyectos
            </h2>

            <ul className='projectsGrid'>
                {data &&
                    data.reverse().map((node: any, i: number) => {
                        const { title, external, github, description, mockup, image, tecnologies } = node

                        // const img = getImage(image);
                        // const urlImg = '../../public/uploads/download.jpeg';
                        // <Image src={image}/>;
                        // console.log('image, urlImg');
                        

                        return (

                            // <h1 key="162762g">section projects</h1>
                            <li className="project" key={i} ref={el => (revealProjects.current[i] = el)}>
                                <div className="project-content">
                                    <div>
                                        <p className="project-overline">Featured Project</p>

                                        <h3 className="project-title">
                                            {/* <Image src={image} alt={title}> */}
                                                <a href={external || urlImg} target='_blank' rel='noreferr' >{title}</a>
                                            {/* </Image> */}
                                        </h3>

                                        <div className="project-description" dangerouslySetInnerHTML={{ __html: description }}></div>

                                        {tecnologies.length && (
                                            <ul className="project-tech-list">
                                                {tecnologies.map((tech: any, i: number) => (
                                                    <li key={i}>{tech}</li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="project-links">
                                            {github && (
                                                <a href={github} rel='noreferr' target='_blank' aria-label="GitHub Link">
                                                    <Icon name="GitHub" />
                                                </a>
                                            )}
                                            {
                                                mockup && (
                                                    <a href={mockup} rel='noreferr' target='_blank' aria-label="Mockup Link">
                                                        <Icon name="Figma" />
                                                    </a>
                                                )
                                            }
                                            {external && (
                                                <a href={external} rel='noreferr' target='_blank' aria-label="External Link" className="external">
                                                    <Icon name="External" />
                                                </a>
                                            )}
                                        </div>

                                    </div>
                                </div>




                                <div className="project-image">
                                    <a className='notHover' target='_blank' href={external ? external : github ? github : ""}>
                                        {/* <Image src={urlImg} alt={title} className="img" /> */}
                                    </a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};