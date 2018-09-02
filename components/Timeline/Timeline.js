/* eslint-disable max-len */
import React from 'react';
import TimelineEvent from './TimelineEvent/TimelineEvent';
import styles from './Timeline.css';

const Timeline = () => (
  <div className={styles.timeline}>
    <div className={styles.segment}>
      <div className={styles.date}>
        <h3>2012</h3>
      </div>

      <div className={styles.vertLine}>
        <div className={styles.line} />
        <div className={styles.bubble} />
      </div>

      <div className={styles.timelineEvent}>
        <TimelineEvent
          title="It All Started With A Hackathon..."
          content={[
            "Operation Code's founder, and retired U.S. Army Captain, David Molina, attends his first hackathon in New York City. After a weekend learning at ",
            <a href="//angelhack.com" target="_blank" rel="noopener noreferrer">
              AngelHack
            </a>,
            ', he is inspired to pursue software engineering as a post-military occupation. He submits an application to The Flatiron School while on active-duty, only to discover that the program did not accept the "New GI Bill" as payment.',
          ]}
        />
      </div>
    </div>

    <div className={styles.segment}>
      <div className={styles.date}>
        <h3>2013</h3>
      </div>

      <div className={styles.vertLine}>
        <div className={styles.line} />
        <div className={styles.bubble} />
      </div>

      <div className={styles.timelineEvent}>
        <TimelineEvent
          title="One Month Rails"
          content={[
            'Molina exits military service in early 2013 and begins to self-teach Ruby on Rails, a full-stack web development platform for building comprehensive web applications. He also starts attending meetups with ',
            <a href="//bmoreonrails.org" target="_blank" rel="noopener noreferrer">
              &quot;Bmore on Rails&quot;
            </a>,
            ' while finishing ',
            <a href="//onemonth.com" target="_blank" rel="noopener noreferrer">
              One Month&apos;s Rails online course.
            </a>,
          ]}
        />
        <TimelineEvent
          title="The Vision Forms"
          content={[
            'Molina attended ',
            <a href="//railsconf.com" target="_blank" rel="noopener noreferrer">
              RailsConf
            </a>,
            ' as a scholarship fellow. After meeting Rubyists from around the world, he is introduced to the Portland Ruby group.',
          ]}
        />
        <TimelineEvent
          title="Patriot Boot Camp"
          content={[
            'Molina joins ',
            <a href="//techstars.com/patriotbootcamp" target="_blank" rel="noopener noreferrer">
              Patriot Boot Camp (PBC)
            </a>,
            ', presented by Techstars, at George Washington University. During this time, Molina tells Virginia Senator, Tim Kaine, of the inability to use the New GI Bill for coding bootcamps. Before departing D.C., Molina receives advice from U.S. Army Congressional Fellow, Ben Culver, on gathering data to address the problem.',
          ]}
        />
        <TimelineEvent
          title="First Draft"
          content="Molina purchases the domain opcod3.us and worked with fellow Army veteran and software developer, Don Livanec, to finish the first live webpage."
        />
      </div>
    </div>

    <div className={styles.segment}>
      <div className={styles.date}>
        <h3>2014</h3>
      </div>

      <div className={styles.vertLine}>
        <div className={styles.line} />
        <div className={styles.bubble} />
      </div>

      <div className={styles.timelineEvent}>
        <TimelineEvent
          title="Operation Code Is A Go"
          content={[
            'At ',
            <a href="//cascadiarubyconf.com" target="_blank" rel="noopener noreferrer">
              Cascadia Ruby
            </a>,
            ' Molina receives encouragement from fellow Rubyist, Whitney Rose, to launch Operation Code\'s petition using "Launchrock". After lengthy discussions with Kristin Smith, Adam Enbar (representing The Flatiron School), and ',
            <a href="//www.codefellows.org" target="_blank" rel="noopener noreferrer">
              Code Fellows
            </a>,
            ', the first line of code is ',
            <a
              href="//github.com/OperationCode/operationcode"
              target="_blank"
              rel="noopener noreferrer"
            >
              committed to GitHub
            </a>,
            '.',
          ]}
        />
        <TimelineEvent
          title="Dr. Davis Joins The Team"
          content="Louisiana native, Army veteran, and software developer, Dr. James Davis joins Operation Code, supplying substantial website improvements."
        />
        <TimelineEvent
          title="Pairing Begins"
          content="Molina pairs veterans 1-on-1 with developers via the &quot;Software Mentor Protégé Program&quot; where HTML, CSS, JavaScript, and Ruby were taught. Dr. Davis becomes Operation Code's first mentor."
        />
        <TimelineEvent
          title="First Donor"
          content={[
            'Web developer, teacher, entrepreneur and co-founder of ',
            <a href="//www.codefellows.org" target="_blank" rel="noopener noreferrer">
              Code Fellows
            </a>,
            ", Ivan Storck, purchases the domain '",
            <a href="//operationcode.org" target="_blank" rel="noopener noreferrer">
              operationcode.org
            </a>,
            "' becoming our first donor in the process.",
          ]}
        />
        <TimelineEvent
          title="DNSimple Joins The Operation"
          content={[
            <a href="//dnsimple.com" target="_blank" rel="noopener noreferrer">
              {' '}
              DNSimple
            </a>,
            ' joined Operation Code as the sole domain management service provider, ensuring maximum uptime.',
          ]}
        />
        <TimelineEvent
          title="Charles Sipe's Article"
          content={[
            "Army veteran and aspiring software developer, Charles Sipe, writes a viral, Veteran's Day article called ",
            <a
              href="//www.switchup.org/blog/why-veterans-will-make-excellent-programmers"
              target="_blank"
              rel="noopener noreferrer"
            >
              &apos;Why Will Make Excellent Programmers&apos;
            </a>,
            '.',
          ]}
        />
        <TimelineEvent
          title="HackHands Co-Founders And The Logo"
          content={[
            'HackHands co-founders, Forest Good and Geraldo Ramos, join Operation Code, designing our logo and providing veterans free access to ',
            <a href="//hacksummit.org" target="_blank" rel="noopener noreferrer">
              hack.summit()
            </a>,
            " a virtual conference to learn from the world's most renowned programmers.",
          ]}
        />
      </div>
    </div>

    <div className={styles.segment}>
      <div className={styles.date}>
        <h3>2015</h3>
      </div>

      <div className={styles.vertLine}>
        <div className={styles.line} />
        <div className={styles.bubble} />
      </div>

      <div className={styles.timelineEvent}>
        <TimelineEvent
          title="Scaling New Heights"
          content="Software developer, Chris Hough, joins Operation Code providing software architecture advice, improving application functionality and speed. OperationCode website code becomes open source via public GitHub repository."
        />
        <TimelineEvent
          title="Jay Bloom Joins Advisory Team"
          content="Former President and CEO of United Way of Columbia-Willamette, Jay Bloom, as well as former Assistant Secretary of Veterans Affairs, John Garcia, join the Operation Code Advisory Team."
        />
        <TimelineEvent
          title="Ruby On Ales"
          content={[
            <a href="//ruby.onales.com" target="_blank" rel="noopener noreferrer">
              Ruby on Ales
            </a>,
            ' - located in Bend, Oregon - becomes the first software developer industry conference to support veterans with Ruby development classes.',
          ]}
        />
        <TimelineEvent
          title="Teresa Mahoney Joins The Operation"
          content="Columbia Journalism School graduate and former Mint reporter, Teresa Mahoney, joins Operation Code to interview veterans from across the country, crafting our story with professional media to drive more public awareness."
        />
        <TimelineEvent
          title="Social Media Engagement"
          content={[
            "Operation Code changes it's Twitter handle to ",
            <a href="//twitter.com/operation_code" target="_blank" rel="noopener noreferrer">
              {' '}
              @operation_code
            </a>,
            ' for more effective branding. ',
            <a href="//instagram.com/operation_code" target="_blank" rel="noopener noreferrer">
              {' '}
              Instagram
            </a>,
            ' and ',
            <a href="//facebook.com/operationcode.org" target="_blank" rel="noopener noreferrer">
              {' '}
              Facebook
            </a>,
            ' accounts are created.',
          ]}
        />
        <TimelineEvent
          title="Launch Party"
          content={[
            <a href="//calagator.org/events/1250468219" target="_blank" rel="noopener noreferrer">
              Formal launch of Operation Code
            </a>,
            ". The event hosts dozens of veterans, software developers, media representatives, and staff members from U.S. Senator Ron Wyden and Congressman Blumenauer's offices.",
          ]}
        />
        <TimelineEvent
          title="Slack Team Founded"
          content={[
            'Army veteran and software engineer, Fernando Paredes, joins Operation Code, expanding the Software Mentor Protégé Program using ',
            <a href="//operation-code.slack.com/" target="_blank" rel="noopener noreferrer">
              our newly created Slack Team
            </a>,
            '. Veterans now have real-time access to a helpful coding community and one-on-one software mentorship at their fingertips.',
          ]}
        />
        <TimelineEvent
          title="Contributing Guide Created"
          content={[
            "Fernando Paredes, Nell Shamrell, and Eric McKenna improve Operation Code's participation in open source development with our first ",
            <a
              href="//github.com/OperationCode/operationcode/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              contributing guide
            </a>,
            '.',
          ]}
        />
        <TimelineEvent
          title="AirBnB Sponsorship"
          content={[
            'Global hospitality provider, ',
            <a href="//www.airbnb.com/" target="_blank" rel="noopener noreferrer">
              Airbnb
            </a>,
            ' sponsors lodging for Operation Code members attending SignalConf in San Francisco. ',
            <a
              href="//www.instagram.com/p/21p5bFxUjd/?taken-by=davidcmolina"
              target="_blank"
              rel="noopener noreferrer"
            >
              They also invited our members to tour their headquarters
            </a>,
            '! Airbnb forges their partnership with Operation Code in steel by offering sponsored lodgings for veterans interviewing for a career in tech.',
          ]}
        />
        <TimelineEvent
          title="SignalConf Sponsorship"
          content={[
            <a href="//www.twilio.com/signal/2015" target="_blank" rel="noopener noreferrer">
              SignalConf
            </a>,
            ' provides multiple Operation Code members with sponsored tickets. ',
            <a href="//www.twilio.com/" target="_blank" rel="noopener noreferrer">
              Twilio
            </a>,
            " - the conference's main sponsor - hosts an insightful tour of their headquarters.",
          ]}
        />
        <TimelineEvent
          title="21st Amendment Meetup"
          content="Molina hosts a meetup in San Francisco, introducing Elmer Thomas (SendGrid), Laura Gómez (Atipica), Nick Frost (Navy Veteran), and Pete Runyon (Marine Veteran) to Operation Code."
        />
        <TimelineEvent
          title="Board Of Directors Formed"
          content={[
            'To meet growth demands, Operation Code ',
            <a
              href="//twitter.com/operation_code/status/614443994769027072"
              target="_blank"
              rel="noopener noreferrer"
            >
              separates from its financial supporter
            </a>,
            ". The Cogostar Foundation - Operation Code's current sponsor - helps to reorganize a new governing Board of Directors, comprised of Josh Carter, Aimee Knight, Nick Frost, Pete Runyon, Laura Gómez, Fernando Paredes, and Elmer Thomas. Operation Code incorporates as an Oregon non-profit organization.",
          ]}
        />
        <TimelineEvent
          title="Stickers Distributed"
          content={[
            <a href="//www.stickermule.com/" target="_blank" rel="noopener noreferrer">
              {' '}
              Sticker Mule
            </a>,
            ' provides free stickers to all members! Laptops around the nation equip our logo.',
          ]}
        />
        <TimelineEvent
          title="Open For Donations"
          content="Operation Code begins accepting online donations."
        />
        <TimelineEvent
          title="Jared Zoneraich And Mark Kerr Join The Operation"
          content={[
            'Jared Zoneraich, founder of ',
            <a href="//www.hackbca.com/hackBCA" target="_blank" rel="noopener noreferrer">
              hackBCA
            </a>,
            ' joins the Operation Code advisory team. Mark Kerr - attorney, entrepreneur, and ex-Army Captain - joins the Operation Code board of directors. He is elected chair of the board, and the board begins having regular conference calls focusing on infrastructure, processes/procedures, and fundraising strategy.',
          ]}
        />
      </div>
    </div>

    <div className={styles.segment}>
      <div className={styles.date}>
        <h3>2016</h3>
      </div>

      <div className={styles.vertLine}>
        <div className={styles.line} />
        <div className={styles.bubble} />
      </div>

      <div className={styles.timelineEvent}>
        <TimelineEvent
          title="Hack Summit"
          content={[
            <a href="//hacksummit.org/" target="_blank" rel="noopener noreferrer">
              hack.summit()
            </a>,
            ' adds Operation Code to its list of coding non-profits.',
          ]}
        />
        <TimelineEvent
          title="Speakeasy"
          content={[
            <a href="//speakeasy.com/" target="_blank" rel="noopener noreferrer">
              Speakeasy
            </a>,
            ' joins as the Operation Code conference sponsor.',
          ]}
        />
        <TimelineEvent
          title="501(c)(3) Application Approved"
          content="Operation Code files for and receives 501(c)(3) status as a federally recognized non-profit organization. Thanks go to Marine Veteran and Board Secretary/Treasurer Pete Runyon, who graciously donated $850 for the fee."
        />
      </div>
    </div>

    <div className={styles.segment}>
      <div className={styles.date}>
        <h3>2017</h3>
      </div>

      <div className={styles.vertLine}>
        <div className={styles.line} />
        <div className={styles.bubble} />
      </div>

      <div className={styles.timelineEvent}>
        <TimelineEvent
          title="O'Reilly Open Source Convention"
          content="Multiple Operation Code veterans attend OSCON to advertise the open source development opportunity in Operation Code's planned website redesign."
        />
        <TimelineEvent
          title="Website Redesign"
          content="In an effort to give Operation Code members an outlet to practice professional development, our website is overhauled. We go live with just a minimum viable product in the interest of attracting support from the open source community ."
        />
        <TimelineEvent
          title="2000th Slack Member"
          content={[
            'On Independence Day, the ',
            <a
              href="//twitter.com/operation_code/status/882280600920616960"
              target="_blank"
              rel="noopener noreferrer"
            >
              2000th Operation Code member joined our Slack Team
            </a>,
            '.',
          ]}
        />
      </div>
    </div>
  </div>
);

export default Timeline;
