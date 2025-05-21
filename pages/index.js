import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Perfect Artistic Frog</title>
          <meta property="og:title" content="Perfect Artistic Frog" />
        </Head>
        <Navbar8
          page4Description={
            <Fragment>
              <span className="home-text100">
                Engage in discussions with fellow community members.
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text101">Join Now</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text102">#community-history</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text103">Home</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text104">#home</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text105">Discussion Forum</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text106">Community History</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text107">#discussion-forum</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text108">
                Welcome to our Diaspora Community!
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text109">
                Explore the rich history of our community.
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text110">#events</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text111">Events</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text112">
                Stay updated on upcoming events.
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text113">Start a Discussion</span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action2={
            <Fragment>
              <span className="home-text114">Learn More</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text115">Join Now</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text116">
                Welcome to Our Diaspora Community
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text117">
                Join us in celebrating our rich cultural heritage and connecting
                with fellow community members around the world.
              </span>
            </Fragment>
          }
        ></Hero17>
        <Features24
          feature3Description={
            <Fragment>
              <span className="home-text118">
                Stay updated with the latest news and events happening in our
                community.
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text119">News and Events</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text120">
                Engage in meaningful discussions with fellow community members
                on various topics.
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text121">Welcoming Homepage</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text122">
                Experience a modern and welcoming homepage that invites you to
                explore our community.
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text123">Discussion Forum</span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          heading1={
            <Fragment>
              <span className="home-text124">
                Join Our Diaspora Community Today
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text125">
                Connect with fellow community members, share stories, and stay
                updated on events and news.
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text126">Sign Up Now</span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature3Description={
            <Fragment>
              <span className="home-text127">
                Engage with fellow community members, share stories, ask
                questions, and foster meaningful discussions.
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text128">
                Explore the rich history of our diaspora community, from its
                origins to present day.
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text129">Events Calendar</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text130">Community History</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text131">
                Stay updated on upcoming events, gatherings, and celebrations
                within our community.
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text132">Discussion Forum</span>
            </Fragment>
          }
        ></Features25>
        <Pricing14
          plan3Price={
            <Fragment>
              <span className="home-text133">$49/mo</span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text134">Get started</span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text135">Basic plan</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text136">Get started</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text137">Enterprise plan</span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="home-text138">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text139">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text140">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="home-text141">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="home-text142">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text143">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text144">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text145">Feature text goes here</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text146">or $299 yearly</span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text147">Get started</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text148">Get started</span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text149">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text150">Feature text goes here</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text151">$200/yr</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text152">Business plan</span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text153">Feature text goes here</span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text154">Get started</span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text155">Feature text goes here</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text156">
                Choose the perfect plan for you
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text157">Feature text goes here</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text158">Pricing plan</span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text159">Feature text goes here</span>
            </Fragment>
          }
          plan1={
            <Fragment>
              <span className="home-text160">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text161">Business plan</span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text162">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text163">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature5={
            <Fragment>
              <span className="home-text164">Feature text goes here</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text165">or $29 monthly</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text166">$29/mo</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text167">or $49 monthly</span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text168">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text169">Feature text goes here</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text170">or $20 monthly</span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text171">$299/yr</span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text172">or $499 yearly</span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text173">Feature text goes here</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text174">$499/yr</span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text175">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text176">Feature text goes here</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text177">or $200 yearly</span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text178">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text179">Feature text goes here</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text180">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text181">Get started</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text182">$20/mo</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text183">Enterprise plan</span>
            </Fragment>
          }
        ></Pricing14>
        <Steps2
          step1Description={
            <Fragment>
              <span className="home-text184">
                Define the purpose and goals of your diaspora community website.
                Identify the target audience and what features will best serve
                their needs.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text185">
                Gather historical information about your community, create
                engaging content for the timeline, news section, and
                cultural/language resources.
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text186">Design and Development</span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text187">
                Create a modern and mobile-friendly design for your website.
                Develop the necessary features such as news, events calendar,
                discussion forum, and member directory.
              </span>
            </Fragment>
          }
          step1Title={
            <Fragment>
              <span className="home-text188">Plan Your Community</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text189">Content Creation</span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text190">
                Test your website thoroughly before launching. Promote it
                through social media, community events, and word of mouth to
                attract members and volunteers.
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text191">Launch and Promotion</span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          author2Position={
            <Fragment>
              <span className="home-text192">Volunteer</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text193">Community Member</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text194">John Doe</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text195">Alice Johnson</span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text196">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text197">Jane Smith</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text198">Event Organizer</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text199">Michael Brown</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text200">
                Read what our community members have to say about their
                experiences with us.
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text201">Supporter</span>
            </Fragment>
          }
          review1={
            <Fragment>
              <span className="home-text202">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero in dui fermentum, sit amet ultricies purus
                ultricies.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text203">Testimonials</span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text204">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Proin nec odio nunc.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text205">
                Sed nec justo auctor, tincidunt sapien vel, ultricies nunc. Sed
                id justo eget ex tincidunt tincidunt.
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text206">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="home-text207">
                Visit us at our main office location
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text208">Contact Us</span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text209">
                Send us an email for inquiries and support
              </span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text210">
                123 Diaspora Street, City Name, Country
              </span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text211">
                contact@diasporacommunity.com
              </span>
            </Fragment>
          }
        ></Contact10>
        <Footer4
          link5={
            <Fragment>
              <span className="home-text212">Contact Us</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text213">Privacy Policy</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text214">Community Guidelines</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text215">/terms</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text216">Terms of Use</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text217">Cookies Policy</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text218">/cookies</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text219">/privacy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
          }
          .home-text218 {
            display: inline-block;
          }
          .home-text219 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
