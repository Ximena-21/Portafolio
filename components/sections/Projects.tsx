import React, { useRef } from 'react';
import Image from 'next/image';
import { Icon } from '@components/icons';


export default function Projects({ data }: any) {

    const revealTitle = useRef(null);
    const revealProjects : any = useRef([]);


    return (
        <section id='projects'>
            <h2 className="numbered-heading" ref={revealTitle}>
                Proyectos
            </h2>

            <ul className='projectsGrid'>
                {data &&
                    data.reverse().map((node: any, i: number) => {
                        const { title, external, github, description, mockup, image, tecnologies } = node

                        return (

                            <li className="project" key={i} ref={el => (revealProjects.current[i] = el)}>
                                <div className="project-content">
                                    <div>
                                        <p className="project-overline">Featured Project</p>

                                        <h3 className="project-title">
                                            <a href={external} target='_blank' rel='noreferrer' >{title}</a>
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
                                                <a href={github} rel='noreferrer' target='_blank' aria-label="GitHub Link">
                                                    <Icon name="GitHub" />
                                                </a>
                                            )}
                                            {
                                                mockup && (
                                                    <a href={mockup} rel='noreferrer' target='_blank' aria-label="Mockup Link">
                                                        <Icon name="Figma" />
                                                    </a>
                                                )
                                            }
                                            {external && (
                                                <a href={external} rel='noreferrer' target='_blank' aria-label="External Link" className="external">
                                                    <Icon name="External" />
                                                </a>
                                            )}
                                        </div>

                                    </div>
                                </div>




                                <div className="project-image">
                                    <a className='notHover' target='_blank' rel='noreferrer' href={external ? external : github ? github : ""}>
                                        <Image src={image} alt={title} className="img" width={500} height={380} />
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
