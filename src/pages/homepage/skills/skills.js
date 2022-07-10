import React from 'react'
import './style.css'

export const Skils = () => {
    return (
      <>
        <div className='skill'>
            <table>
                <td>
                    <ul className='tech'>
                        <b>Technical Skills</b>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>Android</li>
                            <li>C/C++</li>
                        </ul>
                    </ul>
                </td>

                <td>
                    <ul className='nontech'>
                        <b>Non-Technical Skills</b>
                        <ul>
                            <li>Good and active Listener</li>
                            <li>Fast learner</li>
                            <li>Good in connecting with other people</li>
                        </ul>
                    </ul>
                </td>
            </table>
        </div>
      </>
    )
  }
  