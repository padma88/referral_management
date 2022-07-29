import styled from "styled-components";

const FooterSection = styled.footer`
    position: fixed;
    bottom: 0;
    right: 0;
    height: fit-content;
    width: 100%;
    padding: 1%;
    z-index: 3;
    left: 12em;
    padding: 0 1em;
    border-top: 1px solid #80808033;
    background: #fff
`
function Footer () {
    return <FooterSection>
        <span>Ref+</span>
    </FooterSection>
}

export default Footer;