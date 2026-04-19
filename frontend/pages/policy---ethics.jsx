import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const policyethics = () => {
  return (
    <div>
      <Header/>
      <div className="w-full lg:w-[60%] p-4 lg:p-10 mx-auto">
          <h1 className="font-black text-3xl mb-8">Publication Policies</h1>
          <h2 className="font-bold text-xl mb-6">
            Authors can check publication policies of JAPO Publishers as follows:
          </h2>
          <ul className="ml-4 md:ml-8 list-disc text-base md:text-lg space-y-4 mb-8">
            <li className="hover:underline cursor-pointer">Authorship Policy</li>
            <li className="hover:underline cursor-pointer">Conflicts of Interest Policy</li>
            <li className="hover:underline cursor-pointer">Copyright and Licensing Policy</li>
            <li className="hover:underline cursor-pointer">Open Access Policy</li>
            <li className="hover:underline cursor-pointer">Peer Review Policy</li>
            <li className="hover:underline cursor-pointer">Plagiarism Policy</li>
            <li className="hover:underline cursor-pointer">Archiving Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Service</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Cancellation/Refund Policy</li>
          </ul>

          <h1 className="text-3xl font-bold mb-4">Publication Ethics</h1>
          <p className="mb-4">
            The publication of an article in a peer-reviewed journal is a direct reflection of the quality of the work of the authors.
            Peer-reviewed articles improve the quality of publication and enhance scientific techniques.
            Hence all parties involved in the act of publishing: the author, the journal editor, the peer reviewer, the publisher should follow the publication ethics.
          </p>

          <h1 className="text-xl ">Responsibilities of the Publisher</h1>
          <ol className="list-disc ml-10 mb-4">
            <li>The important role of the publisher is to appoint an Editor-In-Chief for the journal and also support the efforts made by them in maintaining the integrity of the scholarly record.</li>
            <li>In proper communication with Editor-In-Chief of journal, publisher may invite guest or executive editor to publish special issues or conference proceedings in the journal.</li>
            <li>We are committed to ensuring that the potential for advertising, reprint or other commercial revenue has no impact or influence on editorial decisions.</li>
          </ol>

          <h1 className="text-xl font-[500]">Responsibilities of Editor in Chief and Editorial Board Members</h1>
          <ol className="list-disc ml-10 mb-4">
            <li>Editor in Chief with assigned editorial board members shall responsible for changes require in content and template of the manuscripts submitted to the journal.</li>
            <li>Submitted review/research manuscript must be reviewed by double blind review process, and if required editor can take additional opinion. The editor shall ensure that the peer review process is fair, unbiased, and timely.</li>
            <li>All submitted manuscript for review must keep as confidence and do not disclose any information to anyone other than the corresponding author, reviewers and the publisher.</li>
            <li>Editor-In-Chief cannot publish his own review/research paper in the journal and must not be involved in decisions about papers written by family members.</li>
            <li>Editors shall conduct proper and fair investigation into ethical complaints.</li>
          </ol>

          <h1 className="text-xl font-[500]">Responsibility of Reviewers</h1>
          <ol className="list-disc ml-10 mb-4">
            <li>Revive process must keep as confidential by the reviewer and manuscript received for review or information about the paper must not share with anyone.</li>
            <li>Reviewers should provide details of review and his opinion about paper with supporting arguments in the format provided by editor.</li>
            <li>Reviewers should complete their reviews within the journal stipulated timefJAPO.</li>
            <li>Reviewers should not review manuscripts in which they have conflicts of interest resulting from competitive, collaborative, or other relationships or connections with any of the authors, companies, or institutions connected to the papers.</li>
          </ol>

          <h1 className="text-xl font-[500]">Responsibilities of Authors</h1>
          <ol className="list-disc ml-10 mb-4">
            <li>All manuscripts must be the original work of authors and not plagiarism.</li>
            <li>Authors must accept an authorship of a manuscript and should have significant contributions from all authors.</li>
            <li>Authors must appropriately and precisely recognize the work of others.</li>
            <li>Authors should clearly mention any financial or other substantive conflict of interest that may impact the results or interpretation of their manuscript and acknowledge individuals or organizations that have provided financial support for research.</li>
            <li>Authors may be asked to provide additional content or material related to submitted manuscripts during peer review which is required to open publicly if possible.</li>
            <li>All manuscripts must be previously unpublished, and not under consideration for publication elsewhere.</li>
          </ol>
        </div>
      <Footer/>
    </div>
  )
}

export default policyethics