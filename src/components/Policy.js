import React, {Component} from 'react';


class AboutPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className={'page_top_root'}>
                    <img className={'page_top_img'} src={'/images/abouttop.jpg'} alt={''}/>
                    <div className={'page_top_bg'}>
                        <span className={'page_top_text'}>Privacy Policy</span>
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    display: 'block',
                    paddingLeft: '20%',
                    paddingRight: '20%'
                }}>
                    <h1>Terms Of Service</h1>

                    <h4>1. Terms</h4>
                    <p>
                        By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions
                        of
                        Use, all applicable laws and regulations, and agree that you are responsible for compliance with
                        any
                        applicable local laws. If you do not agree with any of these terms, you are prohibited from
                        using or
                        accessing this site.</p><p> The materials contained in this web site are protected by applicable
                    copyright
                    and trademark law.</p>

                    <h4>2. Use License</h4>

                    <p> Permission is granted to temporarily download one copy of the materials (information or
                        software) on
                        Green Point Systems,LTD.</p><p>'s web site for personal, non-commercial transitory viewing only.
                    This is
                    the grant of a license, not a transfer of title, and under this license you may not:
                    modify or copy the materials;</p>

                    <p>use the materials for any commercial purpose, or for any public display (commercial or
                        non-commercial);</p>
                    <p>attempt to decompile or reverse engineer any software contained on Green Point Systems,LTD.'s web
                        site;remove any copyright or other proprietary notations from the materials;
                        transfer the materials to another person or "mirror" the materials on any other server.</p>
                    ​

                    <p>This license shall automatically terminate if you violate any of these restrictions and may be
                        terminated by Green Point Systems,LTD. at any time.</p><p> Upon terminating your viewing of
                    these materials
                    or upon the termination of this license, you must destroy any downloaded materials in your
                    possession whether in electronic or printed format.</p>

                    <h4>3. Disclaimer</h4>

                    ​

                    <p>The materials on Green Point Systems,LTD.'s web site are provided "as is". Green Point
                        Systems,LTD.
                        makes no warranties, expressed or implied, and hereby disclaims and negates all other
                        warranties,
                        including without limitation, implied warranties or conditions of merchantability, fitness for a
                        particular purpose, or non-infringement of intellectual property or other violation of
                        rights.</p>
                    <p>Further, Green Point Systems,LTD. does not warrant or make any representations concerning the
                        accuracy, likely results, or reliability of the use of the materials on its Internet web site or
                        otherwise relating to such materials or on any sites linked to this site.</p>

                    <h4>4. Limitations</h4>

                    <p>In no event shall Green Point Systems,LTD. or its suppliers be liable for any damages (including,
                        without limitation, damages for loss of data or profit, or due to business interruption,)
                        arising
                        out of the use or inability to use the materials on Green Point Systems,LTD.'s Internet site,
                        even
                        if Green Point Systems,LTD. or a Green Point Systems,LTD. authorized representative has been
                        notified orally or in writing of the possibility of such damage. Because some jurisdictions do
                        not
                        allow limitations on implied warranties, or limitations of liability for consequential or
                        incidental
                        damages, these limitations may not apply to you.</p>

                    <h4>5. Revisions and Errata</h4>

                    <p>The materials appearing on Green Point Systems,LTD.'s web site could include technical,
                        typographical, or photographic errors. Green Point Systems,LTD. does not warrant that any of the
                        materials on its web site are accurate, complete, or current. Green Point Systems,LTD. may make
                        changes to the materials contained on its web site at any time without notice. Green Point
                        Systems,LTD. does not, however, make any commitment to update the materials.
                    </p>

                    <h4>6. Links</h4>

                    <p>Green Point Systems,LTD. has not reviewed all of the sites linked to its Internet web site and is
                        not responsible for the contents of any such linked site. The inclusion of any link does not
                        imply
                        endorsement by Green Point Systems,LTD. of the site. Use of any such linked web site is at the
                        user's own risk.</p>

                    <h4>7. Site Terms of Use Modifications</h4>

                    <p>Green Point Systems,LTD. may revise these terms of use for its web site at any time without
                        notice.
                        By using this web site you are agreeing to be bound by the then current version of these Terms
                        and
                        Conditions of Use.</p>

                    <h4>8. Governing Law</h4>

                    <p>Any claim relating to Green Point Systems,LTD.'s web site shall be governed by the laws of the
                        State
                        of Israel without regard to its conflict of law provisions.</p>

                    <h4>General Terms and Conditions applicable to Use of a Web Site.</h4>

                    <h1>Privacy Policy</h1>

                    <p>Your privacy is very important to us. Accordingly, we have developed this Policy in order for you
                        to
                        understand how we collect, use, communicate and disclose and make use of personal information.
                        The
                        following outlines our privacy policy.</p>

                    <p> Before or at the time of collecting personal information, we will identify the purposes for
                        which
                        information is being collected.</p><p>
                    We will collect and use of personal information solely with the objective of fulfilling those
                    purposes specified by us and for other compatible purposes, unless we obtain the consent of the
                    individual concerned or as required by law.</p>
                    <p>
                        We will only retain personal information as long as necessary for the fulfillment of those
                        purposes.
                        We will collect personal information by lawful and fair means and, where appropriate, with the
                        knowledge or consent of the individual concerned.</p><p>
                    Personal data should be relevant to the purposes for which it is to be used, and, to the extent
                    necessary for those purposes, should be accurate, complete, and up-to-date.</p><p>
                    We will protect personal information by reasonable security safeguards against loss or theft, as
                    well as unauthorized access, disclosure, copying, use or modification.</p><p>
                    We will make readily available to customers information about our policies and practices relating to
                    the management of personal information.</p>

                </div>
            </div>
        );
    }
}

export default AboutPage;