import React from "react"
import "../../styles/AboutUs.css"
import "../../styles/Responsive.css"
// import { CONTACTNUM } from "../../variables"

function AboutusNew(props) {
  const commonFunction = (img, name, role) => {
    return (
      <div className="combineOne">
        <img className="investerStyle" src={img} alt="abhinav" />
        <p className="investerName">{name}</p>
        <p className="investerRole">{role}</p>
      </div>
    )
  }

  const percentEvent = (percentText, ratesDrop) => {
    return (
      <section className="upperGap">
        <p className="percentageText">{percentText}</p>
        <div className="DropInFd">{ratesDrop}</div>
      </section>
    )
  }
  const commonFounderEvent = (FounderN, FounderD, Role, Clg, About, href) => {
    return (
      <div className="roleAndDesignation">
        <p className="big-text">{FounderN}</p>
        <section>
          <p className="Designation">{FounderD}</p>
          <p className="role">{Role}</p>
          <p className="Designation">{Clg}</p>
        </section>
        <div className="small-text">{About}</div>
        <a href={href}
          target="_blank"
          rel="noopener noreferrer"
         >
          LinkedIn
          <img
            src={require("../../images/product/linkedInArrow.svg")}
            alt="Arrow"
          />
        </a>
      </div>
    )
  }
  const joinUsEvent = (img, textD, href, aTag) => {
    return (
      <div className="WrapStyle">
        <img
          className="emailStyle"
          style={{ width: "35px", height: "35px" }}
          src={img}
          alt="Email"
        />
        <div className="wrapConnectUs">
          <p className="WhatsappUs">{textD}</p>
          <a className="ClickableLink" href={href}>
            {aTag}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="whiteBackground">
      <div>
        <div className="firstClass">
          <img
            className="keyStyle"
            src={require("../../images/product/key.svg")}
            alt="logo"
          />
          <img
            className="LockStyle"
            src={require("../../images/product/lock.svg")}
            alt="logo"
          />
        </div>
        <div className="InvestStyle">
          <p className="DemocratisingText">Democratizing Debt</p>
          <p className="DemocratisingInvestment">Investments in India</p>
        </div>
      </div>
      <div className="textPercentStyle">
        <p className="textStyle">
          There is a huge need for investment options that lie in between low
          risk - low return, like Fixed Deposits & Debt Mutual Funds, and high
          risk - high return, like stocks and equity mutual funds.
          <br />
          <br />
          Return rates provided by Fixed Deposits have been dropping
          significantly in the last few years, and now are no longer good enough
          to beat inflation. Performance by debt mutual funds has also been
          suboptimal.
        </p>
        <div className="leftText">
          {percentEvent("8.6% to 5.2%", "Drop in FD rates from 2014 to 2021")}
          <div className="imgDiv"></div>
        </div>
      </div>

      <div className="textPercentStyle">
        <p className="textStyle">
          But at the same time, not everyone has high risk-appetite to invest in
          equities, which provide higher returns.
          <br />
          <br />
          This is where we, at Wint Wealth, come in.
          <br />
          <br />
          We realised that there were a certain set of high yield debt
          instruments that were only accessible at very high minimum investment
          amounts (~ ₹1Crore). Only financial institutions or high net worth
          individuals invested in them. It was inaccessible for general retail
          investors and hence they had no knowledge about them.
          <br />
          <br />
          We figured out a way to bring the minimum investment amount down in
          these opportunities (to as low as ₹10,000). Also, we try to properly
          educate the investors about them. since these debt products are
          relatively different from what everyday investors are used to.
          <br />
          <br />
          Feel free to explore the other sections of the website where we
          simplify these structured complex products and show all its
          characteristics with 100% transparency.
        </p>
        <div className="leftText">
          {percentEvent(
            "~ ₹ 1Crore",
            "Min investment before (₹10k now at Wint Wealth)"
          )}
          <div className="imgDiv"></div>
          {percentEvent("9% to 11%", "Returns offered by Wint Wealth’s assets")}
        </div>
      </div>
      <div className="MeetFounders">
        <p className="text-align">Meet the Founders</p>
        <img
          className="FounderStyle"
          src={require("../../images/product/WintFounders.png")}
          alt="Founder"
        />
        <div className="CommonStyle">
          {commonFounderEvent(
            "Ajinkya Kulkarni",
            "CEO",
            "Ex-Vice President | mSwipe",
            "IIT Gandhinagar",
            "Ajinkya headed the Merchant Lending business at mSwipe, where he built a portfolio of Rs 25Cr+. His personal finance insights won him the coveted, LinkedIn Top Voices badge in 2020.",
            "https://www.linkedin.com/in/ajinkyamkulkarni"
          )}
          {commonFounderEvent(
            "Abhik Patel",
            "CPO",
            "Ex-D2C Business Head | Shop 101",
            "IIT Gandhinagar",
            "Abhik led growth and operations at Shop 101. He led a large team to solidify the trajectory of the company. He also co-founded Creditperiod a fintech startup, which was later acquired by Flexiloans.",
            "https://www.linkedin.com/in/abhik-patel-1616ba4b/"
          )}
          {commonFounderEvent(
            "Shashank Chimaladari",
            "CTO",
            "Ex-Android & iOS Lead | Shop 101",
            "IIT Bombay",
            "Shashank was the Tech lead for the mobile team at Shop101. He was one of the earliest team members at Shop101 and played a pivotal role in scaling their tech. He carries a rich 7 years of technical experience with him.",
            "https://www.linkedin.com/in/chshashank/"
          )}
          {commonFounderEvent(
            "Anshul Gupta",
            "CIO",
            "Ex-Director | Northern Arc",
            "IIT Roorkee",
            "Anshul has conceptualised and launched many innovative financial products. He was the head of Product Development at Northern Arc Capital where he has structured 250+ transactions worth more than Rs 25,000 Crores.",
            "https://www.linkedin.com/in/anshul-gupta-2a096811/"
          )}
        </div>
      </div>
      <div className="TopInvesters">
        <p className="text-align">Backed by India's top industry leaders</p>
        <div className="ImageGap">
          <div className="setOfThree">
            {commonFunction(
              require("../../images/product/Nithin_Kamath.jpg"),
              "Nithin Kamath",
              "Zerodha (Rainmatter)"
            )}
            {commonFunction(
              require("../../images/product/Kunal_Shah.jpg"),
              "Kunal Shah",
              "Founder, CRED"
            )}
            {commonFunction(
              require("../../images/product/Pravin_Jadhav.jpg"),
              "Pravin Jadhav",
              "Founder, Ex MD & CEO, Paytm Money"
            )}
          </div>
          <div className="setOfTwo">
            {commonFunction(
              require("../../images/product/Deepak_Abbot.jpg"),
              "Deepak Abott",
              "Co-Founder, indiagold"
            )}
            {commonFunction(
              require("../../images/product/Nischal_Shetty.jpg"),
              "Nischal Shetty",
              "Founder, WazirX + Crowdfire"
            )}
          </div>
        </div>
        <div className="ImageGap">
          <div className="setOfThree">
            {commonFunction(
              require("../../images/product/Ganesh_Rao.jpg"),
              "Ganesh Rao",
              "Co-Founder, Suryoday Small Finance Bank"
            )}
            {commonFunction(
              require("../../images/product/Vaibhav_Domkundwar.jpeg"),
              "Vaibhav Domkundwar",
              "Founder and CEO, Better Capital"
            )}
            {commonFunction(
              require("../../images/product/Lalit_Keshre.jpg"),
              "Lalit Keshre",
              "Co-Founder and CEO, Groww"
            )}
          </div>
          <div className="setOfTwo">
            {commonFunction(
              require("../../images/product/Nitin_Gupta.jpg"),
              "Nitin Gupta",
              "Founder, Uni & CEO, PayU"
            )}
            {commonFunction(
              require("../../images/product/Nitin_Misra.jpg"),
              "Nitin Misra",
              "Co-Founder, indiagold"
            )}
          </div>
        </div>
        <div className="ImageGap">
          <div className="setOfThree">
            {commonFunction(
              require("../../images/product/Amit_Choudhary.jpeg"),
              "Amit Choudhary",
              "ex-Partner Motilal Oswal Private Equity"
            )}
            {commonFunction(
              require("../../images/product/Abhinav_Jain.jpg"),
              "Abhinav Jain",
              "Co-Founder, Shop101 and Dash101"
            )}
            {commonFunction(
              require("../../images/product/Sayali_Karanjkar.jpg"),
              "Sayali Karanjikar",
              "Co-Founder and CBO, PaySense"
            )}
          </div>
          <div className="setOfTwo">
            {commonFunction(
              require("../../images/product/Sumit_Maniyar.jpeg"),
              "Sumit Maniyar",
              "CEO, Rupeek"
            )}
            {commonFunction(
              require("../../images/product/Kalpak_Chhajed.jpg"),
              "Kalpak Chhajed",
              "Co-Founder, Shop101 and Dash101"
            )}
          </div>
        </div>
        <div className="ImageGap">
          <div className="setOfThree">
            {commonFunction(
              require("../../images/product/Sanat_Rao.jpg"),
              "Sanat Rao",
              "Managing Partner, Gamma Point Capital"
            )}
            {commonFunction(
              require("../../images/product/Aakash_Gehani.jpg"),
              "Akash Gehani",
              "Co-Founder, Instamojo"
            )}
            {commonFunction(
              require("../../images/product/Ramakant_Sharma.jpg"),
              "Ramakant Sharma",
              "Founder and COO, Livspace"
            )}
          </div>
          <div className="setOfTwo">
            {commonFunction(
              require("../../images/product/Vasanth_Kamath.jpg"),
              "Vasanth Kamath",
              "Founder and CEO, smallcase"
            )}
            {commonFunction(
              require("../../images/product/Anugrah_Shrivastava.jpg"),
              "Anugrah Shrivastava",
              "Founder, smallcase"
            )}
          </div>
        </div>
        <div className="ImageGap">
          <div className="setOfThree">
            {commonFunction(
              require("../../images/product/Aakrit_Vaish.jpg"),
              "Aakrit Vaish",
              "Co-Founder and CEO, Haptik"
            )}
            {commonFunction(
              require("../../images/product/Sanjay_Ramakrishnan.jpg"),
              "Sanjay Ramakrishnan",
              "Founder, Multiply Ventures"
            )}
            {commonFunction(
              require("../../images/product/Rohan_Gupta.jpg"),
              "Rohan Gupta",
              "Founder, smallcase"
            )}
          </div>
          <div className="setOfTwo">
            {commonFunction(
              require("../../images/product/unnikrishnan.jpg"),
              "Unnikrishnan I",
              "Managing Director, Yogloans"
            )}
            {commonFunction(
              require("../../images/product/Devashish_Chakravarty.jpg"),
              "Devashish Chakravarty",
              "Founder, Qverify"
            )}
          </div>
        </div>
      </div>
      <div className="whiteBackground">
        <div className="JoinUs">
          <p className="text-align-join">
            Want to know more about us? Want to join the team? Get in Touch
          </p>
          <div className="FlexClass">
            {joinUsEvent(
              require("../../images/product/Email.svg"),
              "Know More",
              "mailto:hello@wintwealth.com?subject=Hi%20Wint%20Wealth&body=Hi%20Wint%20Wealth%20Team,%20I%20have%20a%20question%20and%20would%20like%20to%20get%20in%20touch%20with%20you",
              "hello@wintwealth.com"
            )}
            <img
              className="verticalHide"
              src={require("../../images/product/verticalLine.svg")}
              alt="Drop"
            />
            {joinUsEvent(
              require("../../images/product/whatsapp.svg"),
              "Whatsapp Us",
              `https://api.whatsapp.com/send?phone=${CONTACTNUM}&text=Hi%20Wint%20Wealth%20Team,%20I%20have%20a%20question%20and%20would%20like%20to%20get%20in%20touch%20with%20you.&source=&data=`,
              "click here"
            )}
            <img
              className="verticalHide"
              src={require("../../images/product/verticalLine.svg")}
              alt="Drop"
            />
            {joinUsEvent(
              require("../../images/product/Email.svg"),
              "Join Us",
              "mailto:doepicshit@wintwealth.com?subject=Hi%20Wint%20Wealth&body=Hi%20Wint%20Wealth%20Team,%20I%20have%20a%20question%20and%20would%20like%20to%20get%20in%20touch%20with%20you",
              "doepicshit@wintwealth.com"
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutusNew
