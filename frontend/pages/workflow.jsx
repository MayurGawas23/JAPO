import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const workflow = () => {
  return (
   
      <div className='flex flex-col w-full min-h-screen  '>
        <Header />
        <div className="mx-[100px]">
          <h1 className='text-2xl font-[poppins-semibold] my-4'>Submission of Publication Workflow</h1>
          <img src="/workflow.jpg" alt="" className='mb-4 ' />
          <p className='mb-4'>The Author/Reviewer/Editor system and publisher services are designed specifically to run end-to-end open access publishing workflows.</p>

          <h2 className='font-semibold text-xl tracking-wider mb-2'>Flexible Submissions</h2>
          <ul className='list-disc pl-5 mb-4'>
            <li>Simple, intuitive submission process.</li>
            <li>Clear indication of progress.</li>
            <li>Extendable to include additional metadata fields.</li>
            <li>Options include collecting funder information through integration with funder registry, addition of ORCiD at submission.</li>
            <li>Self-service tools allow configuration of administrative settings, such as setting up teams and sections.</li>
            <li>Manuscripts ingestible following exchange standards.</li>
          </ul>

          <h2 className='font-semibold text-xl tracking-wider mb-2'>Editorial Screening</h2>
          <ul className='list-disc ml-5 mb-4'>
            <li>Editorial Screening checks and escalation: iThenticate and plagiarism X checker, suspicious keywords, suppression lists, author verification (publication record), citation analysis </li>
          </ul>

          <h2 className='font-semibold text-xl tracking-wider mb-2'>Peer Review Management </h2>
          <ul className='mb-4 pl-5 list-disc'>
            <li>Three main editorial models:Chief Editor/Managing Editor with final decision; Chief Editor/Managing Editor without final decision; Section Editors.</li>
            <li>Manuscripts assigned manually via Editor or automatically via taxonomy.</li>
            <li>Currently supports double-blind peer review</li>
            <li>Reviewers can be invited on your behalf, suggested by Editor.</li>
            <li>Manuscripts exportable following exchange standards.</li>
          </ul>

          <h2 className='font-semibold text-xl tracking-wider mb-2'>Post Peer Review Screening
          </h2>
          <ul className='list-disc ml-5 mb-4'>
            <li>Post-accept screening check and escalation.</li>
            <li>Mandating ORCiD for submitting author and verifying its validity.</li>
            <li>Manuscript file checks, reviewer checks, post-acceptance material and quality checks.</li>
          </ul>

          <h2 className='font-semibold text-xl tracking-wider mb-2'>APC Billing and Collection </h2>
          <ul className='list-disc ml-5 mb-4'>
            <li>Invoice created post article acceptance.</li>
            <li>Authors can split payments and assign an invoice to their institution or pay it themselves via bank transfer or payment gateway.</li>
            <li>Management of institutional and funder discounts.</li>
            <li>Auto and manual management of waivers.</li>
          </ul>

          <h2 className='font-semibold text-xl tracking-wider mb-2'>Production Management </h2>
          <ul className='list-disc ml-5 mb-4'>
            <li>Manuscripts tracked at each stage of the production process, enabling reporting on workloads and turnaround times.</li>
            <li>Manuscripts marked up for style and graphics are checked for house style and re-drawn.</li>
            <li>Manuscripts are typeset and copy edited.</li>
            <li>Authors havhe access to proofing system for corrections through email.</li>
            <li>Final Article versions created in html and Archival PDF format.</li>
          </ul>

          <h2 className='font-semibold text-xl tracking-wider mb-2'>Publication </h2>
          <ul className='list-disc mb-4 ml-5'>
            <li>Abstracting and indexing services</li>
            <li>Journal websites can be customized from a template and served on a choosen domain.</li>
            <li>JAPO.org.in can be used as a hosting domain whilst reflecting your journal identity.</li>
            <li>Final files can be delivered to your current journal platform.</li>
          </ul>

        </div>


        <Footer />
      </div>
   
  )
}

export default workflow