import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const guidelines = () => {
    return (
        <div className='flex flex-col w-full min-h-screen  '>
            <Header />
            <div className=" font-[poppins-regular] p-4 w-[80%] mx-auto">
                <h1 className='text-2xl font-bold mb-4'>Author Guidelines</h1>

                <h2 className='text-xl font-semibold mb-1'>1. Types of Paper</h2>
                <p className='mb-4'>Research paper and review paper. Please ensure that you select the appropriate article type from the list of options when making your submission.</p>

                <h2 className='text-xl font-semibold mb-1'>2. Submission Checklist</h2>
                <p>You can use this list to carry out a final check of your submission before you send it to the journal for review. Please check the relevant section in this Guide for Authors for more details.</p>
                <p>Ensure that the following items are present:</p>
                <p>One author has been designated as the corresponding author with contact details:</p>
                <ul className='list-disc pl-5 mb-2'>
                    <li>E-mail Address</li>
                    <li>Affiliation of all authors with country</li>
                </ul>
                <p>Manuscript:</p>
                <ul className='list-disc pl-5 mb-2'>
                    <li>Include Keywords</li>
                    <li>All figures (include relevant captions)</li>
                    <li>All tables (including titles, description, footnotes)</li>
                    <li>Ensure all figure and table citations in the text match the files provided • Supplemental files (where applicable)</li>
                </ul>
                <p>Further Considerations:</p>
                <ul className='list-disc pl-5 mb-4'>
                    <li> Manuscript has been 'spell checked' and 'grammar checked'</li>
                    <li>All references mentioned in the Reference List are cited in the text, and vice versa</li>
                    <li> Permission has been obtained for use of copyrighted material from other sources (including the Internet)</li>
                    <li>A competing interests statement is provided, even if the authors have no competing interests to declare</li>
                </ul>

                <h2 className='text-xl font-bold mb-1 '>3. Ethics in Publishing</h2>
                <p className='mb-4'>Please see our information pages on Ethics in publishing and policies of JAPO Publishers.</p>
                <ol type="a" className='list-[upper-alpha] ml-5 mb-4'>
                    <li className='font-bold'>Plagiarism and Digital Object Identifier (DOI)<br />
                       <span className='font-normal'> All manuscripts submitted to our journals will be subject to rigorous plagiarism detection by iThenticate through Informatics Publishing Limited. Also all accepted paper for publication in the journal will assigned as Digital Object Identifier (DOI) by Crossref in association with Informatics Publishing Limited. Author must take care that the submitted paper should have zero similarity index and no copyrighted material have been used in the manuscript without permission.</span></li>
                    <li className='font-bold'>Authorship <br />
                       <span className='font-normal'> Every author of submitted manuscript should have significant contribution to the work reported. Every author should take responsibility of matter included in the manuscript is their own work and they want to share with the readers. Each author, co-author and corresponding author must satisfy the criteria for authorship and ensure appropriate acknowledgements made in the manuscript. Authors from different organizations or from different countries must ensure their affiliation mentioned in the manuscript. Authors should ensure that their manuscript as submitted is not under consideration (or accepted for publication) elsewhere. Where sections of the manuscript overlap with published or submitted content, this should be acknowledged and cited.</span></li>
                    <li className='font-bold'>Licensing and Copyright <br />
                       <span className='font-normal'> All articles published by JAPO Publishers will be distributed under the terms and conditions of the Creative Commons Attribution License (CC-BY). So anyone is allowed to copy, distribute, and transmit the article on condition that the original article and source is correctly cited.
                       The manuscript published in JAPO Publishers journal will be copyrighted, so authors are allowed to use their own articles for non-commercial purposes without seeking permission from JAPO Publishers.</span></li>
                    <li className='font-bold'>Conflict of Interest and Acknowledgement <br />
                        <span className='font-normal'>Authors should declare any potential conflicts of interest relating to a specific article. Author should acknowledge the support given for his research work from any funding agency or from host institution or any individual.                       
                        Also reviewers should specify clearly the conflicts of interest while contacted by editor for review of manuscript</span>.</li>
                    <li className='font-bold'>Publication Malpractice<br />
                       <span className='font-normal'> The responsibility of Editor is to make fair and unbiased decisions and ensure a fair and appropriate peer review process. The editor can ask author to provide supporting data if found data fabrication in the manuscript. An article may be rejected if the supporting data provided is not satisfactory and considered as a publication malpractice.</span></li>
                    <li className='font-bold'>Open access <br />
                        <span className='font-normal'>All research articles published in JAPO Publishers journals are fully open access: immediately freely available to read, download and share. Articles are published under the terms of a Creative Commons license which permits use, distribution and reproduction in any medium, provided the original work is properly cited.</span></li>
                </ol>

                <h2 className='text-xl font-bold'>4. Submission</h2>
                <p className='mb-4'>Manuscripts to be considered for publication have to be submitted online. If you are experiencing difficulties during the submission process, please send your paper on email id editor.ijaefea@JAPO.org.in. <br />
                    Author should prepare paper as per journal template for submission in journal attached here. Before submitting manuscript to the journal, authors must ensure that their paper is free from plagiarism. We consider only unpublished paper or extended version of published paper for submission. Submitted papers must be written in English language.</p>

                <h2 className='text-xl font-bold'>5. Peer Review</h2>
                <p className='mb-4'>This journal operates a double blind review process. All submission will be initially assessed by the editor for suitability for the journal. Papers deemed suitable are then typically sent to a minimum of two independent reviewers to assess the scientific quality of the paper. The Editor is responsible for the final decision regarding acceptance or rejection of articles. The Editor's decision is final.</p>

                <h2 className='text-xl font-bold'>6. Use of word processing software</h2>
                <p className='mb-4'>It is important that the file be saved in the native format of the word processor used. The text should be in double-column format. Keep the layout of the text as simple as possible. Most formatting codes will be removed and replaced on processing the article. In particular, do not use the word processor's options to justify text or to hyphenate words. However, do use bold face, italics, subscripts, superscripts etc. When preparing tables, if you are using a table grid, use only one grid for each individual table and not a grid for each row. If no grid is used, use tabs, not spaces, to align columns. The electronic text should be prepared in a way very similar to that of conventional manuscripts. Note that source files of figures, tables and text graphics will be required whether or not you embed your figures in the text. See also the section on Electronic artwork.
                    To avoid unnecessary errors you are strongly advised to use the 'spell-check' and 'grammar-check' functions of your word processor.</p>

                <h2 className='text-xl font-bold text-red-500'>Structure of Paper</h2>
                <p><span className='text-lg font-bold'>Title. </span> 
                Concise and informative. Titles are often used in information-retrieval systems. Avoid abbreviations and formulae where</p>
                <p><span  className=' font-bold'>Author names and affiliations.</span> 
                Please clearly indicate the full name of each author and check that all names are accurately spelled. For communication regarding publication process and for further notifications, Email id of author(s) must write below the name. Also present the authors' affiliation addresses (department, organization) including country below the names and indicate all affiliations with a superscript number (1,2) immediately after the author's name and in front of the appropriate address.     </p>
                <p><span  className=' font-bold'>Corresponding author.</span>
                    Clearly indicate who will handle correspondence at all stages of refereeing and publication, also post-publication. This responsibility includes answering any future queries about Methodology and Materials. It is mandatory to provide email id of corresponding author.</p>
                <p><span  className=' font-bold'>Abstract. </span>
                The abstract should state briefly the purpose of the research, the principal results and major conclusions.
                </p>
                <p className='mb-4'><span className=' font-bold '>Keywords.</span> Author should write maximum 5 keywords exactly below the abstract which will be relevant work described in paper and can easily be searchable for getting more citation</p>
                <p className='mb-4'><span className='text-lg font-bold'>1. Introduction</span> <br />
                    State the objectives of the work and provide an adequate background, avoiding a detailed literature survey or a summary of the results. Your goal is to simulate the usual appearance of papers in a Journal Publications of the JAPO Publishers. We are requesting that you follow these guidelines as closely as possible. A. Full-Sized Camera-Ready (CR) Copy Prepare your CR paper in full-size format, on A4 paper (210 x 297 mm, 8.27 x 11.69 in). No header or footer, no page number. Type sizes and typefaces: Follow the type sizes specified in Table I. As an aid in gauging type size, 1 point is about 0.35 mm. The size of the lowercase letter “j” will give the point size. Times New Roman has to be the font for main text. Paper should be 1.5 line spaced. Margins: top = 30mm (1.18 in), bottom, left and right = 20 mm (0.79 in). The column width is 82mm (3.23 in). The space between the two columns is 6mm (0.24 in). Paragraph indentation is 3.7 mm (0.15 in). Left- and right-justify your columns. Use tables and figures to adjust column length. On the last page of your paper, adjust the lengths of the columns so that they are equal. Use automatic hyphenation and check spelling. Digitize or paste down figures. For the Title use 24-point Times New Roman font, an initial capital letter for each word. Its paragraph description should be set so that the line spacing is single with 6-point spacing before and 6-point spacing after. Use two additional line spacings of 10 points before the beginning of the double column section, as shown above.</p>

             <div className="mb-4">
             <table border="1" className='border'>
  <thead>
    <tr>
      <th rowspan="2" className='border'>Type Size (pt)</th>
      <th colspan="3" className='border'>Appearance</th>
    </tr>
    <tr>
      <th className='border'>Regular</th>
      <th className='border'>Bold</th>
      <th className='border'>Italic</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='border'>6</td>
      <td className='border'>	
      Table captions,a table superscripts</td>
      <td className='border'></td>
      <td className='border'></td>
    </tr>

    <tr className=''>
        <td className='border'>8</td>
        <td className='border'>Section titles, tables, table names, first letters in table captions, figure captions, footnotes, text subscripts, and superscripts</td>
        <td className='border'></td>
        <td className='border'></td>
    </tr>

    <tr>
        <td className='border'>9</td>
        <td className='border'>	
        References, authors’ biographies</td>
        <td className='border'>Abstract</td>
        <td className='border'></td>
    </tr>

    <tr>
        <td className='border'>10</td>
        <td className='border'>Authors’ affiliations, main text, equations, first letters in section titles</td>
        <td className='border'></td>
        <td className='border'>Subheading</td>
    </tr>
    <tr>
        <td className='border'>11</td>
        <td className='border'>Author's name</td>
        <td className='border'></td>
        <td className='border'></td>
    </tr>
    <tr>
        <td className='border'>24</td>
        <td className='border'>Paper Title</td>
        <td className='border'></td>
        <td className='border'></td>
    </tr>
  </tbody>
</table>

</div>



                <p className='mb-4'>Each major section begins with a Heading in 10 point Times New Roman font centered within the column and numbered using Roman numerals (except for Acknowledgement and References), followed by a period, two spaces, and the title using an initial capital letter for each word. The remaining letters are in small capitals (8 point). The paragraph description of the section heading line should be set for 12 points before and 6 points after.
                    Subheadings should be 10 point, italic, left justified, and numbered with letters (A, B, …), followed by a period, two spaces, and the title using an initial capital letter for each word. The paragraph description of the subheading line should be set for 6 points before and 3 points after.
                    For main text, paragraph spacing should be single spaced, no space between paragraphs. Paragraph indentation should be 3.7mm/0.21in, but no indentation for abstract & index terms.
                    As always with a conversion to PDF, authors should very carefully check a printed copy.</p>
                <p className='text-lg font-bold mb-2'>2. Helpful Hints</p>
                <ul className='list-[upper-alpha] pl-5'>
                    <li className='font-bold'> <span >Figures and Tables </span> <br />
                        <span className='font-normal'>Position figures and tables at the tops and bottoms of columns. Avoid placing them in the middle of columns. Large figures and tables may span across both columns. Leave sufficient room between the figures/tables and the main text. Figure captions should be centered below the figures; table captions should be centered above. Avoid placing figures and tables before their first mention in the text. Use the abbreviation “Fig. 1,” even at the beginning of a sentence.
                        To figure axis labels, use words rather than symbols. Do not label axes only with units. Do not label axes with a ratio of quantities and units. Figure labels should be legible, about 9-point type.
                        Color figures will be appearing only in online publication. All figures will be black and white graphs in print publication.</span></li>
                    <li className='font-bold'> <span >References</span> <br />
                        <span className='font-normal'>Number citations consecutively in square brackets [1]. Punctuation follows the bracket [2]. Use “Ref. [3]” or “Reference [3]” at the beginning of a sentence:
                        <img src="/fig.png" alt=""  className='mx-auto'/>
                        Figure 1. Note how the caption is centered in the column.
                        Give all author's names; use “et al.” if there are six authors or more. Papers that have not been published, even if they have been submitted for publication, should be cited as “unpublished”</span>



                    </li>

                    <li className='font-bold'>Footnotes <br />
                        <span className='font-normal'>Number footnotes separately in superscripts 1, 2, …. Place the actual footnote at the bottom of the column in which it was cited, as in this column. See first page footnote as an example.</span></li>
                    <li className='font-bold'>Abbreviations and Acronyms <br />
                       <span className='font-normal'> Define abbreviations and acronyms the first time they are used in the text, even after they have been defined in the abstract. Do not use abbreviations in the title unless they are unavoidable.</span></li>
                    <li className='font-bold'>Equations. <br />
                     <span className='font-normal'>   Equations should be centered in the column. The paragraph description of the line containing the equation should be set for 6 points before and 6 points after. Number equations consecutively with equation numbers in parentheses flush with the right margin, as in (1). Italicize Roman symbols for quantities and variables, but not Greek symbols. Punctuate equations with commas or periods when they are part of a sentence, as in.
                        . a + b = c . (1)
                        Symbols in your equation should be defined before the equation appears or immediately following. Use “(1),” not “Eq. (1)” or “equation (1),” except at the beginning of a sentence: “Equation (1) is ...”</span></li>
                    <li className='font-bold mb-4'>Other Recommendations <br />
                       <span className='font-normal'> Use either SI (MKS) or CGS as primary units. (SI units are encouraged.) If your native language is not English, try to get a native English-speaking colleague to proofread your paper. Do not add page numbers.</span></li>
                </ul>

                <p className='mb-4'><span className='font-bold text-lg'>3. Results and Discussion</span> <br />
                   Results should be clear and concise. Discussion should explore the significance of the results of the work, not repeat them. A combined Results and Discussion section is often appropriate. Avoid extensive citations and discussion of published literature.
                </p>

                <p className='mb-4'><span className='font-bold text-lg'>4. Conclusions</span><br />
                    <span>The authors can conclude on the topic discussed and proposed. Future enhancement can also be briefed here.
                    Appendix A Appendix Title
                    Appendixes, if needed, is numbered by A, B, C... Use two spaces before Appendix Title.
                    Acknowledgment
                    The authors wish to thank A, B, C. This work was supported in part by a grant from XYZ.</span>
                </p>

                <p className='mb-4'><span className='font-bold text-lg'>References</span> <br />
                    Please ensure that every reference cited in the text is also present in the reference list (and vice versa). Use of the DOI in reference is highly encouraged to link with cited papers. The references can be used to cite in text as research/review paper, book, book chapter, website and unpublished article. It is not encourage to cite unpublished article but can be used by writing a word “unpublished” in reference. Reference style is preferred to use as IEEE.
                    Reference management software <br />
                    JAPO Publishers journals are preferred to use IEEE reference style available in all reference management software products. Mendeley is the reference management software is encourage to use to prepare automatic citations and bibliographies in the journal (IEEE) style. Mendeley plug- ins in Microsoft Word is the best practice to prepare reference in your manuscript.
                    Some examples to write references are as follows:

                </p>
                <ol className='list-decimal pl-5 mb-4 flex flex-col gap-[10px]'>
                    <li> G. Eason, B. Noble, and I. N. Sneddon, “On certain integrals of Lipschitz-Hankel type involving products of Bessel functions,” Phil. Trans. Roy. Soc. London, vol. A247, pp. 529–551, April 1955. https://doi.org/10.1016/j.egypro.2012.01.263</li>
                    <li>J. Clerk Maxwell, A Treatise on Electricity and Magnetism, 3rd ed., vol. 2. Oxford: Clarendon, 1892, pp.68–73.</li>
                    <li> I. S. Jacobs and C. P. Bean, “Fine particles, thin films and exchange anisotropy,” in Magnetism, vol. III, G. T. Rado and H. Suhl, Eds. New York: Academic, 1963, pp. 271–350. https://doi.org/10.4236/ijcns.2010.34044</li>
                    <li>K. Elissa, “Title of paper if known,” unpublished.</li>
                    <li>R. Nicole, “Title of paper with only first word capitalized”, J. Name Stand. Abbrev., in press.</li>
                    <li>Y. Yorozu, M. Hirano, K. Oka, and Y. Tagawa, “Electron spectroscopy studies on magneto-optical media and plastic substrate interface,” IEEE Transl. J. Magn. Japan, vol. 2, pp. 740–741, August 1987 [Digests 9th Annual Conf. Magnetics Japan, p. 301, 1982].</li>
                    <li>M. Young, The Technical Writer's Handbook. Mill Valley, CA: University Science, 1989
                    </li>
                    <li>G. Eason, B. Noble, and I. N. Sneddon, “On certain integrals of Lipschitz-Hankel type involving products of Bessel functions,” Phil. Trans. Roy. Soc. London, vol. A247, pp. 529–551, April 1955.</li>
                    <li>J. Clerk Maxwell, A Treatise on Electricity and Magnetism, 3rd ed., vol. 2. Oxford: Clarendon, 1892, pp.68–73.</li>
                    <li>I. S. Jacobs and C. P. Bean, “Fine particles, thin films and exchange anisotropy,” in Magnetism, vol. III, G. T. Rado and H. Suhl, Eds. New York: Academic, 1963, pp. 271–350.</li>
                    <li>K. Elissa, “Title of paper if known,” unpublished.</li>
                    <li>R. Nicole, “Title of paper with only first word capitalized”, J. Name Stand. Abbrev., in press.</li>
                    <li>Y. Yorozu, M. Hirano, K. Oka, and Y. Tagawa, “Electron spectroscopy studies on magneto-optical media and plastic substrate interface,” IEEE Transl. J. Magn. Japan, vol. 2, pp. 740–741, August 1987 [Digests 9th Annual Conf. Magnetics Japan, p. 301, 1982].</li>
                    <li>M. Young, The Technical Writer's Handbook. Mill Valley, CA: University Science, 1989</li>
                    <li>G. Eason, B. Noble, and I. N. Sneddon, “On certain integrals of Lipschitz-Hankel type involving products of Bessel functions,” Phil. Trans. Roy. Soc. London, vol. A247, pp. 529–551, April 1955.</li>
                    <li>J. Clerk Maxwell, A Treatise on Electricity and Magnetism, 3rd ed., vol. 2. Oxford: Clarendon, 1892, pp.68–73.</li>
                    <li>I. S. Jacobs and C. P. Bean, “Fine particles, thin films and exchange anisotropy,” in Magnetism, vol. III, G. T. Rado and H. Suhl, Eds. New York: Academic, 1963, pp. 271–350.</li>
                    <li>K. Elissa, “Title of paper if known,” unpublished.</li>
                    <li> R. Nicole, “Title of paper with only first word capitalized”, J. Name Stand. Abbrev., in press.</li>
                    <li>Y. Yorozu, M. Hirano, K. Oka, and Y. Tagawa, “Electron spectroscopy studies on magneto-optical media and plastic substrate interface,” IEEE Transl. J. Magn. Japan, vol. 2, pp. 740–741, August 1987 [Digests 9th Annual Conf. Magnetics Japan, p. 301, 1982].</li>
                    <li> M. Young, The Technical Writer's Handbook. Mill Valley, CA: University Science, 1989</li>
                    <li>Cancer Research UK, Cancer statistics reports for the UK. http://www.cancerresearchuk.org/aboutcancer/statistics/cancerstatsreport/, 2003 (accessed 13 March 2003).</li>
                </ol>
            </div>
            <Footer />
        </div>
    )
}

export default guidelines