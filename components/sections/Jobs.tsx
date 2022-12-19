import React, { useRef, useState, useEffect } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

// import {translateDate, transformDate} from '@utils'

function transformDate(date:string): string {
  return new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"short"})
}


export default function Jobs({ data }: any) {
  const revealContainer = useRef(null);


  const [activatedJob, setActivatedJob] = useState(data[0]);

  return (
    <section id="jobs" className='jobs' ref={revealContainer}>
      <h2 className="numbered-heading">Dónde he trabajado</h2>

      <div className="inner">

        <div className="tabList" role="tablist" aria-label="Job tabs">
          {data &&
            data.reverse().map((node: any) => {

              const { company } = node;
              return (
                <button
                  key={node.name}
                  className={`tabButton ${activatedJob.id === node.id ? 'active' : ''} `}
                  onClick={() => { setActivatedJob(node) }}
                  role="tab"
                >
                  <span>{company}</span>
                </button>
              )
            })
          }
        </div>

        <div className="tabPanels">
          {data &&
            <div
              className="tabPanel"
              role="tabpanel"
            >
              <h3>
                <span>{activatedJob.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={activatedJob.url} className="inline-link" target='_blank' rel='noreferrer' >
                    {activatedJob.company}
                  </a>
                </span>
              </h3>

              <p className="range">{transformDate(activatedJob.dateRange.init)} - {transformDate(activatedJob.dateRange.finish) ? (transformDate(activatedJob.dateRange.finish)) : 'actualidad'}</p>

              <div className='activities'>
                <ul>
                  {activatedJob.activities &&
                    activatedJob.activities.map((act, i) => {
                      return (
                        <li key={i}>{act.activity}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          }
        </div>


      </div>

    </section >
  )
}
