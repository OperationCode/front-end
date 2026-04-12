export interface Episode {
  name: string;
  image: string;
  source: string;
  story: string;
}

const episodes: Episode[] = [
  {
    name: 'Karla Gil, JavaScript programmer',
    image: '/podcast/images/karla-gil-javascript-programmer.jpg',
    source: '/podcast/audio/karla-gil-javascript-programmer.mp3',
    story:
      "She was always attracted to coding and pursued her interest while still in the service. Upon getting out, she went to the General Assembly coding school. She spent a year helping someone with their website and then landed a job at a startup in Des Moines, Iowa, which has a worker-safety system, with a badge that workers wear and a cloud service. Karla has a lot to say about resilience, self-confidence, and under-promising and over-delivering. Her story should be an inspiration to anyone who thinks they'd like to get into software but isn't sure they can do it. She did it and maybe you can, too!",
  },
  {
    name: 'Vincent Abruzzo, Marine',
    image: '/podcast/images/vincent-abruzzo-marine.jpg',
    source: '/podcast/audio/vincent-abruzzo-marine.mp3',
    story:
      'Vincent started programming in the mid-90s when he stumbled across AOL punters and similar tools. At the age of 18, he joined the Marine Corps. His specialty for the Corps was "data network specialist." Vincent spent time in Bahrain and Djibouti, Africa, where he won a Navy and Marine Corps achievement medal for building the first defense message system network in the field. He was honorably discharged at the rank of Sergeant after 4 years. After being discharged Vincent pursued a career in academia. He was awarded a Master\'s degree in 2012 in philosophy and cognitive science and went on to a Ph.D. program at UMass, Amherst where he taught philosophy classes and did research for his dissertation. He decided to leave academia in 2015 and return to programming professionally. Since returning to programming he has worked as a software engineer and lead instructor for the General Assembly web development immersive course and the React part-time course. He is now a senior software engineer at First Look Media. He loves to teach and spends a lot of time in the Operation Code Slack channels where he sometimes mentors. He also volunteers for Codebar, Code Nation, and Back On My Feet, where he exercises with homeless veterans and will be headed to Puerto Rico in March to help with disaster relief with All Hearts All Hands.',
  },
  {
    name: 'Ali Taylor-Cipolla',
    image: '/podcast/images/ali-taylor-cipolla.jpg',
    source: '/podcast/audio/ali-taylor-cipolla.mp3',
    story:
      "Ali Taylor-Cipolla is married to an Air Force vet of 14 years. Among her jobs prior to studying at the Microsoft Military Spouse Training Academy, Ali was the head chef at a fraternity at Mississippi State University, and a cook at a Popeye's on a military base in Germany. She and her future husband drove from London to Ulan Bator in Mongolia, which is 10,000 miles, in a $500 car. She's now learning the Microsoft cloud infrastructure and graduates very soon.",
  },
  {
    name: 'Seth Lewis, 9 years Air Force',
    image: '/podcast/images/seth-lewis-9-years-air-force.jpg',
    source: '/podcast/audio/seth-lewis-9-years-air-force.mp3',
    story:
      "Seth spent 9 years in the Air Force, flying on transport planes to every continent but Australia. He spent his downtime on the flights studying technology, and after separating, went to Lambda School and then Hack Reactor. He's now applying his skills, especially Docker and Kubernetes, at one of the biggest names in technology. If you've ever wondered what students learn in a code school, Seth explains that in considerable depth.",
  },
  {
    name: 'Silas Avilez',
    image: '/podcast/images/silas-avilez.jpg',
    source: '/podcast/audio/silas-avilez.mp3',
    story:
      "Silas enlisted in the Army at age 17, served in logistics, and was deployed to Afghanistan. While he was in, he studied accounting, finance, and investing on his own, and when he separated, he was ready. He enrolled in the Veteran Capital program and built his sales and networking skills, and now he's just starting a new job at Lucid Dream VR in North Carolina.",
  },
  {
    name: 'Jeff Kenworthy',
    image: '/podcast/images/jeff-kenworthy.jpg',
    source: '/podcast/audio/jeff-kenworthy.mp3',
    story:
      "Jeff is an Army vet who's had some tough times but he prefers to think about how far he's come. One day after moving into a Salvation Army shelter with his wife and two kids, they found out she was pregnant with twins! But now he's got a job helping victims of ransom attacks and moved his family into their own place. Jeff is also in a degree program with the University of Maryland. (Note: you will hear some background kid noise in spots. This is just Jeff's life right now.)",
  },
  {
    name: 'Keith Fosmire',
    image: '/podcast/images/keith-fosmire.jpg',
    source: '/podcast/audio/keith-fosmire.mp3',
    story:
      'Keith Fosmire spent 10 years in the Air Force as a satellite technician and then volunteered for combat duty in the Army. He got his degree in Computer Science, is married, and now works for CoveyCS in upstate New York. He works with electronics in his spare time and his great ambition is to work in Linux Kernel development!',
  },
  {
    name: 'Gary Krause',
    image: '/podcast/images/gary-krause.jpg',
    source: '/podcast/audio/gary-krause.mp3',
    story:
      "Gary is an active-duty Navy cryptologic technician, getting out of the Navy in a few months. He's a Chief Petty Officer who is now interning at SIXGEN, which is a company that does all sorts of cybersecurity tasks. Gary has a deep background in cybersecurity and knows Ruby on Rails and Python, and is also fluent in Mandarin! (I test him on this at 4:00)",
  },
  {
    name: 'Rod Levy, Code Platoon',
    image: '/podcast/images/rod-levy-code-platoon.jpg',
    source: '/podcast/audio/rod-levy-code-platoon.mp3',
    story:
      "Rod Levy and Alicia Boddy of Code Platoon, a code school for veterans, active duties, and military spouses join us for a panel discussion. Kelly Macleod, an Army veteran and Operation Code (OC) member represents the OC community. Code Platoon has recently been certified for VET-TEC, an exciting new program where the student doesn't even have to use their GI Bill benefits! Rod and Alicia tell us all about Code Platoon's history, how the VET-TEC program works, and why hiring veterans is just smart business.",
  },
  {
    name: 'Josh Carter',
    image: '/podcast/images/josh-carter.jpg',
    source: '/podcast/audio/josh-carter.mp3',
    story:
      "Josh Carter Joined with David Molina and others to launch Operation Code. Together they led the campaign to make code schools eligible for GI Bill payments, enabling our vets to train for good, high-paying jobs without college. Josh tells us how that happened, and also traces his career path from art school to the Navy, to a job pulling cable for a telecomm company, to his current roles as entrepreneur and CEO. We also talk about the changing face of software development, and how hiring veterans isn't charity -- it's just smart business.",
  },
  {
    name: 'Katie Swisher',
    image: '/podcast/images/katie-swisher.jpg',
    source: '/podcast/audio/katie-swisher.mp3',
    story:
      "Katie is a military spouse; her husband is on active duty in the Army. She works from home for a mobile app development company, as a Product Manager! in this interview Katie tells us her career history and how she came to be moving across the country to an area where she didn't know anyone, as a newlywed. Fortunately her company in Pennsylvania offered to keep her on as a remote worker, and we get to hear how that's worked out for her. Katie also has advice for military spouses and others thinking about moving into high tech (spoiler: jump right in!)",
  },
  {
    name: 'Mike Rodriguez',
    image: '/podcast/images/mike-rodriguez.jpg',
    source: '/podcast/audio/mike-rodriguez.mp3',
    story:
      "Mike Rodriguez is an former Marine who became a Windows XP administrator in the service, and he's stayed with it. He wanted to be a tank crewman, but unfortunately his partial color blindness limited the jobs he could perform inside a tank, so he had to take a different career path, and now here he is! There are all kinds of ways people come to computers. Mike was deployed to Iraq in 2005. Now he works for Teradata as an Application Security Analyst.",
  },
  {
    name: 'Dick Sonderegger',
    image: '/podcast/images/dick-sonderegger.jpg',
    source: '/podcast/audio/dick-sonderegger.mp3',
    story:
      "Dick Sonderegger has a much different story than most of our veterans -- he learned computers in the Marines during the Vietnam era. His story of HOW he got into computers is probably the best one I've ever heard, and you'll just have to listen to find it out! We shared an office for a few months on the Xerox Star project in the late 70's, and then I lost track of him. In this interview we talk about his Harvard and Marines experiences, his time at Data General during the \"Soul of a New Machine\" era (he knew those people), the Xerox Star effort and the big lightning storm that fried the local Ethernet, and much more.",
  },
  {
    name: 'Rami Mouro',
    image: '/podcast/images/rami-mouro.jpg',
    source: '/podcast/audio/rami-mouro.mp3',
    story:
      'Rami Mouro was born in Syria, and came to the US in his teens. He served in the National Guard in between going to the University of Colorado at Boulder, and is currently finishing up his degree. He has an internship coming up at Qualcomm, and is especially interested in embedded systems and cybersecurity. In this interview, we hear about Capture the Flag contests at hacker conferences, and also what it was like growing up in Damascus!',
  },
  {
    name: 'Emilie Schario',
    image: '/podcast/images/emilie-schario.jpg',
    source: '/podcast/audio/emilie-schario.mp3',
    story:
      "Emilie is a data analyst with GitLab, and is married to an active duty military officer. She came to the profession in a non-standard way -- via a degree in Political Science from Princeton! Being a military spouse meant that she needed the ability to work remotely, since she might be moving constantly. At GitLab, ALL employees are remote, so it's perfect. She had a natural ability to think critically and use data to make decisions, and she was able to pick up coding from books and online resources. If you're interested in Data Science, this is the interview for you, since we go into a lot of detail on how she thinks and what a data scientist actually does day to day.",
  },
  {
    name: 'Robert E. Woods III',
    image: '/podcast/images/robert-e-woods-iii.jpg',
    source: '/podcast/audio/robert-e-woods-iii.mp3',
    story:
      "Robert is an Air Force veteran who's now in grad school at Columbia.  He's running Banneret, a company working to create opportunities for vets by making on-the-job training eligible for GI Bill benefits. In this interview, he traces his path through ROTC, active duty in the Air Force, and current work with Banneret. He talks about his program and other non-college paths to a post-military career, the unique strengths that veterans bring to the job, and the importance of having non-negotiable goals in your life.",
  },
  {
    name: 'Kelly MacLeod',
    image: '/podcast/images/kelly-macleod.jpg',
    source: '/podcast/audio/kelly-macleod.mp3',
    story:
      'Kelly served in the Guard in Iraq and Afghanistan, learned to code via online courses and self-teaching, worked as a freelancer, and is now with Topcoder, a crowdsourcing solutions company. She talks about her career path through college, military service, getting out and being an Admin, and deciding she could do even more. So she used the free resources on the Web and some of the online academies to learn to code, worked as a freelance developer, and now has a full time job with Topcoder.com. Kelly also talks about the challenges facing military spouses and how "freelance developer" is a great career that they can practice anywhere there\'s Internet.',
  },
  {
    name: 'Colleen Schnettler',
    image: '/podcast/images/colleen-schnettler.jpg',
    source: '/podcast/audio/colleen-schnettler.mp3',
    story:
      "Colleen is the wife of an active-duty pilot with 17 years in the service. She was getting frustrated with the career difficulties that come with the military's constant moves, and so she taught herself Ruby On Rails! Now she works from home with a variety of clients, and she could practice her new career from anywhere there's Internet. Colleen describes how she got into coding, what her clients are like, and how much she loves what she's doing. She also recounts her first contribution to Operation Code's open source codebase and what a difference a supportive community makes for a beginner.",
  },
  {
    name: 'David Silvia Interview',
    image: '/podcast/images/david-silvia-interview.jpg',
    source: '/podcast/audio/david-silvia-interview.mp3',
    story:
      "David had no particular interest in Computer Science when he left the Marines, but he went to Mass Bay Community College and caught the bug. He transferred to Northeastern's co-op program and did two co-op gigs, one of which led to an offer for a full-time job. David talks about his journey to being a computer scientist, what languages he likes, what skills military veterans bring to a potential employer, and how Operation Code is helping him & others like him.",
  },
  {
    name: 'James Fitzer Interview',
    image: '/podcast/images/james-fitzer-interview.jpg',
    source: '/podcast/audio/james-fitzer-interview.mp3',
    story:
      "In this interview, James tells us about his path into computer software from a 10-year Army career, including a stint as Drill Instructor (hear how the movie Full Metal Jacket continues to influence DI's!). James also has a fairly unusual hobby: he wrestles professionally, in an independent organization in Dallas.",
  },
  {
    name: 'Kyle Holmberg, Part 1',
    image: '/podcast/images/kyle-holmberg-part-1.jpg',
    source: '/podcast/audio/kyle-holmberg-part-1.mp3',
    story:
      "Kyle was a developer with AutoGravity in Sept. 2018 when we conducted this interview. Since then he's moved on to a different job, which is why we titled this \"Part 1.\" We're looking forward to catching up with him when he's settled in his new job! Kyle was enrolled in ROTC in college, but never actually went on active duty. He's also working actively on Operation Code's own website. Many, or even most of Kyle's colleagues at AutoGravity attended code schools, and we talk about that in depth. The job market is so hot now that some of them receive job offers before they even finish!",
  },
  {
    name: 'Lito Villanueva interview',
    image: '/podcast/images/lito-villanueva-interview.jpg',
    source: '/podcast/audio/lito-villanueva-interview.mp3',
    story:
      'Lito served in the Air Force and then did two terms as a contractor in networking at forward operating bases in Afghanistan. In this interview he tells what it was like maintaining the network while coming under mortar fire every day, and what his startup Battle Buddy is aiming to do for veterans coming back from service.',
  },
  {
    name: 'David Molina interview',
    image: '/podcast/images/david-molina-interview.jpg',
    source: '/podcast/audio/david-molina-interview.mp3',
    story:
      'Ep. 002 - David Molina is the founder of Operation Code. In this interview, he describes his Army career, how he found his way into the tech industry with no prior training, and how he started Operation Code to help veterans like him learn software and code the future.',
  },
  {
    name: 'Conrad Hollomon interview',
    image: '/podcast/images/conrad-hollomon-interview.jpg',
    source: '/podcast/audio/conrad-hollomon-interview.m4a',
    story:
      'Ep. 001 - Conrad Hollomon went to Berklee School of Music and originally wanted to write scores for film and TV. Finding that a tough career to enter, he moved over into video games and technology, joined ROTC, went to Afghanistan for the National Guard, and is now Executive Director of Operation Code! In this interview, Conrad recounts his career and the work Operation Code is doing to help veterans, active duty personnel and military spouses.',
  },
];

export default episodes;
