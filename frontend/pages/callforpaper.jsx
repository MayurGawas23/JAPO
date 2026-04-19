import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const callforpaper = () => {
  return (
    <div className='w-full min-h-screen'>
        <section className='w-full h-screen flex flex-col items-center'>
            <Header/> 
            <div className="w-[80%] mx-auto h-screen flex flex-col   ">
                    <h1>Call for Paper</h1>
                    <p>Authors should submit the manuscripts which have been carefully read and polished. Before submitting, your paper is preferably be prepared using the journal paper template. This will ensure fast processing for publication. Acceptance or rejection notification will be sent to the contributors or authors.</p>

                    <p>We are instructed to check for the online plagiarism of paper before submitting it to the journal. We accept extended version of papers previously published in conferences and/or journals. Submitted papers must be written in English. Submitted papers need to be in MS Word format with file extension doc or docx.</p>

                    <p>The Editorial Board welcomes authors for submission of papers as per the scope of journal. The authors will be responsible for the content of the manuscript and its submission for publication in the journal. All the Manuscripts should be submitted by online through manuscript submission portal.</p>

                    <table>
                        <thead>
                            <tr>
                                <th>Name of Journal</th>
                                <th>Paper Submission</th>
                                <th>Paper Template</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Int. J. of Analytical, Experimental and Finite Element Analysis</td>
                                <td className='text-blue-600 hover:underline'>Submit Online</td>
                                <td className='text-blue-600 hover:underline'>Click here</td>
                            </tr>
                            <tr>
                                <td>Int. J. of Computational and Electronics Aspects in Engineering</td>
                                <td className='text-blue-600 hover:underline'>Submit Online</td>
                                <td className='text-blue-600 hover:underline'>Click here</td>
                            </tr>
                            <tr>
                                <td>Journal of Thermal and Fluid Science</td>
                                <td className='text-blue-600 hover:underline'>Submit Online</td>
                                <td className='text-blue-600 hover:underline'>Click here</td>
                            </tr>
                            <tr>
                                <td>Journal of Production and Industrial Engineering</td>
                                <td className='text-blue-600 hover:underline'>Submit Online</td>
                                <td className='text-blue-600 hover:underline'>Click here</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <Footer/>
        </section>
    </div>
  )
}

export default callforpaper