export const activity = [
  {
    date: "December 1st, 2023",
    entry: "Noticed in my gif for Dice Goblin that creating a new die doesn't immediately open the show panel for that die, which I found to be less than ideal. So, I fixed it! I reworked the Bootstrap Accordion component so that I could programmatically control it with a state variable, and added toggle functionality to the end of the new die function. Then I sort of fell down a rabbit hole where I want to have a local default image if an image url wasn't provided and all of a sudden I'm in the Sinatra docs. It's late, I'm just going to table this until the morning..."
  },
  {
    date: "November 30th, 2023",
    entry: `Turned in my take home solutions, documented with JsDoc syntax and comments to explain my process. I almost wrote tests for them (all I got to work from was a .txt file), but I'm a little rusty at Jest and I didn't want to take too long on these. The first problem involved cleaning invalid and duplicate data from an array of objects and sorting conditionally by two different attributes. I had to refamiliarize myself with the <code>.reduce()</code> method, using it as a means to filter objects with the same 'id' and 'name' attributes so that only the one with the highest value in a third attribute was retained. The second problem was just writing a function that performed CRUD actions on a hard-coded, internally scoped array. Nothing too crazy, but it was still fun! I also attended a virtual job fair today, but it was really nothing to write home about. Lastly, I brainstormed some ideas to improve Pokédex Master based on some user feedback. I'm going to see about adding a dropdown to the answer form that will suggest Pokémon names as the user types. This should help to alleviate spelling woes, and taking it away could be another component of playing in 'Hard' mode.`
  },
  {
    date: "November 29th, 2023",
    entry: "Interviewing on the phone is a skill all on its own... It's crazy how nervous I get over an old-fashioned phone chat as opposed to a video call! I was pacing and my voice was trembling; I was a wreck. I got more comfortable as it went on, but I definitely need more practice. At the very least it didn't sound rehearsed! Got a take home assessment to do, so I'll knock that out in lieu of LeetCode tonight."
  },
  {
    date: "November 28th, 2023",
    entry: "Staying busy with job applications, LeetCode, and attending webinars. My personal projects have fallen by the wayside as of late, so I've started a new branch in Word of Mouth to apply what I've learned of TypeScript and Tanstack Query. I created a scaffold with Vite and opted for SWC over Babel, so there's two more new things right there. Gonna spend a few days on this overhaul before trying to dive into React Native."
  },
  {
    date: "November 26th, 2023",
    entry: `Finished a handful of <a href="https://leetcode.com/" target="_blank">LeetCode</a> problems while watching football, then closed out the day by reading up on JsDoc and the type-inference it provides. Documentation in general is something I'm going place more emphasis on as I continue writing code, as it is a very real skill that my future self and co-workers will thank me for.`
  },
  {
    date: "November 25th, 2023",
    entry: `Continued running through the 'Top Interview 150' problems on <a href="https://leetcode.com/studyplan/top-interview-150/" target="_blank">LeetCode</a>. The first was a simple three-line solution, finding the length of the last word of a string. Some of the test cases had extra whitespace on the end, so I had to use the <code>.trim()</code> method and run my solution a grand total of two times to pass. Next, I had to find the longest common prefix among an array of strings. At first, I misread the problem (it's late!) and wrote a solution for finding the longest shared prefix that <em>most frequently</em> appeared across an array of strings, but not necessarily one that was shared by <em>every</em> word. After failing, correcting my answer was only a matter of changing the iterators of my nested for loops and repurposing one of my declared variables to be a boolean. I'm getting better at attacking these!`
  },
  {
    date: "November 24th, 2023",
    entry: "Did the problems where you convert a Roman numeral to an integer and vice-versa. I crafted a solution for conversion into a Roman numeral that would cover integers up to 9999, but it exceeded the time limit. Since technically the highest integer that can be expressed in Roman numerals is 3999, I turned instead to a solution featuring 4 arrays of hard-coded string values for thousands, hundreds, tens, and ones. Work smarter, not harder; code to the constraints."
  },
  {
    date: "November 23rd, 2023",
    entry: "Traveled across state lines yesterday; I'm visiting with family for the holiday weekend. I still was able to carve out some time to do a few LeetCode problems last night and this morning. Is there anything a loop can't solve? Anyway, I've been thinking about learning React Native, and a relative of mine wants an app for their business. Sounds like a great chance to build upon and sharpen my skills!"
  },
  {
    date: "November 21st, 2023",
    entry: `Today's report: I got back into the TanStack Query docs and made two pumpkin pies. Full day. 🥧`
  },
  {
    date: "November 20th, 2023",
    entry: `Got pretty busy today (as I do most Mondays), so I didn't do much outside of a handful of LeetCode problems. All of the ones I tackled today had to do with modifying arrays in place with JavaScript, so I had to dust off my <code>.sort()</code> method and for loop skills. Ended my session by finishing in the 99th percentile in terms of runtime on the first solution I crafted for a problem. It probably means nothing, but it still feels good. 😛`
  },
  {
    date: "November 19th, 2023",
    entry: `Started off my morning reading the TanStack Query docs, but then quickly fell into watching football and doing <a href="https://www.immaculategrid.com/football" target="_blank">these NFL grid puzzles</a>. Something like this would be a fun project to do in a new language... Anyway, essentially had a day off. I'll still do my LeetCode though. Ruby this time!`
  },
  {
    date: "November 18th, 2023",
    entry: `I finally got around to checking out <a href="https://leetcode.com/" target="_blank">LeetCode</a>, doing a couple of easy-breezy "medium" JavaScript problems. The performance stats are super helpful; I enjoy refactoring to try and find the optimal solution. Setting a goal of at least two problems every day from here on out.`
  },
  {
    date: "November 16th, 2023",
    entry: `Dedicated yesterday and today to the job search and Flatiron Career Week events. Then I excitedly sat down to start <a href="https://query.gg/" target="_blank">this TanStack Query course</a>, only to get to the bottom of the page and find out that it hasn't been released yet. That would have been great information to put at the very top, y'all. Clean design though, I'll admit.`
  },
  {
    date: "November 14th, 2023",
    entry: "Just got back from another great Dallas Software Developers meetup, featuring 6 outstanding speakers with JavaScript-centric topics. I was at least tangentially familiar with each technology that was discussed; it's extremely encouraging to be able to follow along with what an industry professional is demonstrating (and sometimes even call a couple of moves in advance). I belong! Met some cool people, unsurprisingly. Must be a dev thing, being cool. Biggest takeaway? I'm going to include TanStack Query as part of my Word of Mouth project overhaul."
  },
  {
    date: "November 13th, 2023",
    entry: `Had a great chat with a recently employed Flatiron grad. Super cool guy! I came away with some actionable advice from someone that learned the same tech stack that I did, and hearing about his job search experience was ultra inspiring. I've probably said this before, but now I'm ready to really start trying. What? I mean it! Got page transitions set up on the site pretty quickly, opting for a simple fade-in. I'm going to play around with some different stuff in the morning though, and I'm also thinking of overhauling the Portfolio page. Maybe a 3D scroll through the project cards... I've sort of been against over-the-top 3D animations for portfolio sites, but this can be tasteful. 😛<br/>I'll be sure to set CSS rules for <code>prefers-reduced-motion</code>.`
  },
  {
    date: "November 12th, 2023",
    entry: `Today was for resume updates, networking, and watching football. I didn't want to have a zero-code day, so I also did some preliminary research on how I might use <a href="https://www.framer.com/motion/" target="_blank">Framer Motion</a> to add some page transitions to this site. Going to try and do that tomorrow, between networking chats and Flatiron Career Week events.`
  },
  {
    date: "November 11th, 2023",
    entry: `Created an S3 bucket and connected to it with ease. Done. Next, I wanted to limit the type of files that could be uploaded to a handful of image extensions. Two quick Google searches and I'm setting the <code>accept</code> attribute on my html forms and using the <a href="https://github.com/igorkasyanchuk/active_storage_validations" target="_blank">active_storage_validations</a> gem to validate the size and file extensions of potential image attachments. Done! Next thing I know, I'm updating environment variables on Render and merging my image uploads branch... aaand done! In the space of 30 minutes, Tossed & Found with optional image upload functionality is <a href="https://tossed-and-found.onrender.com/" target="_blank">live</a>! If I had known it was this easy, I wouldn't have waited so long to do it! Word of Mouth is up next.<br/>
    <b>Update:</b> It seems Word of Mouth is going to be somewhat of a different process, with the nested forms and the fact that I need to update a review in two different places in my Redux store. I'm going to table this until I can carve out some more time to brush up on my Thunks and fix the tangled Redux mess that past me created. It'll be fun!`
  },
  {
    date: "November 10th, 2023",
    entry: "It was a bit of a weird day today, so I didn't get around to finishing my S3 bucket business. I did my research and I will hit the ground running in the morning. I made a goofy header image for my LinkedIn, so there's something!"
  },
  {
    date: "November 9th, 2023",
    entry: "Successfully got the image upload functionality working locally. I kept the image URL attribute on the disc model so that my seed data still works for the app demo. I also took the opportunity to set the default image to the sparkling new disc logo that I made, since uploading an image on disc creation is optional. I know it's not exactly an optimal setup, so I'll keep tinkering with it. I'll do some more learning on AWS S3 and get my production storage set up tomorrow. Made another LinkedIn post, attended a couple of virtual workshops; I did a little bit of everything today!"
  },
  {
    date: "November 8th, 2023",
    entry: `Today I learned that the color banding in the gifs of my projects that use gradients is the result of the file format only supporting 256 colors. This IN ADDITION to having an official pronunciation that is wrong?! I switched to a screen recorder that allows dithering to make a new gif for Dice Goblin and it looks <em>a little</em> better. In terms of things under the surface, I began working on implementing Active Storage in Tossed and Found. It being a Rails project, most of what I had to do was just uncommenting out certain lines. I will need to make some changes to the Disc model though... and learn how to send a file upload from the frontend... and then I'll be expanding my horizons further with something called Amazon S3... Sounds like a good day!`
  },
  {
    date: "November 7th, 2023",
    entry: `Tried to create a new hero image for Dice Goblin today using a bunch of different AI image generators. I ended up burning through all of my free credits without getting anything particularly useful. I was about to give up, thinking that prompt engineering for images was simply a different beast that I would need to research more in order to tame it. But then I found out that Microsoft has <a href="https://www.bing.com/create" target="_blank">DALL-E 3</a> -- for free! Instantly I was able to garner much better results, but after all of that... my vision still was not realized. I would much rather dictate what I am looking for to a real, human artist. Not only would I feel better about it, but I would undoubtedly get a better result every single time. I got some fun assets to potentially use for Dice Goblin, but they will be nothing more than placeholders until I can commission something authentic.`
  },
  {
    date: "November 6th, 2023",
    entry: "Trying to find a nice balance between networking, applying for jobs, and continuing to code. It's tough going so far, because I really just want to be in the lab all day. I'll hit my networking stride soon though; I'm just being my typical, methodical self. On the code front, I've been looking into using Active Storage in my Rails apps to handle image uploads, with an AWS S3 bucket for use with my deploys. I want to focus more on JavaScript development, but file upload functionality in those projects is something I've wanted for a while now. I'll get that done, and then work on the UIs on the side as I start my next big project."
  },
  {
    date: "November 4th, 2023",
    entry: `I know I said I wasn't worried about the off-center button icons, but it was only a two-second fix with flexbox. Recorded the new demo video in what could be my lowest number of takes ever. Couldn't have been more than 50! Made the LinkedIn post too. Not a ton of engagement so far, but that's to be expected with a relatively small network like mine. I'm finally ready to start putting in some real effort on that front, no more feeling like I have nothing to contribute! If you're reading this, let's <a href="https://www.linkedin.com/in/donteladatto/" target="_blank">connect</a>!`
  },
  {
    date: "November 3rd, 2023",
    entry: `Wrote a shell script file for Pokédex Master so that the static frontend files can be rebuilt with every auto-deploy. I also added different style rules for mobile landscape orientation and increased the font size of text inputs to 16px to prevent the dreaded auto-zoom behavior. Now the biggest issue on mobile is the <a href="https://react-icons.github.io/react-icons" target="_blank">React Icons</a> not being centered inside of their buttons (at least not on iOS Chrome and Safari). Not super concerned with that at this point in time, instead I'm going to focus on making a new demo video and then sharing the project with a LinkedIn post tomorrow!`
  },
  {
    date: "November 2nd, 2023",
    entry: `Made some changes to the personal site today (this one), starting with the Kanban section. I had to to ditch the <code>justify-content: safe center</code> on the task containers because 'safe' doesn't have wide enough support, most notably on <em>zero</em> iOS mobile browsers. So between having the tasks vertically centered or being able to see all of them all of the time, I chose the latter. I then went ahead and updated Pokédex Master's project card with new images and the link to the deploy. I also noticed that this site doesn't even show up on Google. I want it to be top 3 when searching my name, so I will soon be delving into the wonderful world of SEO to make that happen.`
  },
  {
    date: "November 1st, 2023",
    entry: `So after searching through countless tutorials where people were deploying their MERN frontends and backends separately, I finally got the bright idea to look at the <a href="https://create-react-app.dev/docs/deployment" target="_blank">Create-React-App docs</a> on deployment and found exactly what I needed. My Node server can serve up my static frontend, because why wouldn't it be able to? I should trust my instincts more before I just start tutorial surfing. 🤦🏽 I still need to create a <code>build.sh</code> file and write it into a build script so Render can auto-deploy my frontend changes, but Pokédex Master is live! Now I want to fix some immediate mobile issues, like removing the auto-zoom on input focus and adding landscape mode media queries, before I share my magnum opus.`
  },
  {
    date: "October 31st, 2023",
    entry: "It's Halloween and Github spooked me by changing the green squares of my contribution log to some festive fall colors. Fun! Spent most of my free time today researching all the different ways that I can deploy my MERN stack app. Probably gonna go with a single web service on Render for now, as I've got the the backend server and DB connection part working on there already. Guess I just need a build script for the frontend, like I would have done for my React + Rails projects. I'll figure it out tomorrow. Dev Ops: spooky stuff."
  },
  {
    date: "October 30th, 2023",
    entry: "Went to the office (coffee shop) to do some work today, coding alongside my friends and fellow Flatiron graduates. I managed to finish building out my refreshed Pokédex reset functionality and remove the old Bootstrap modal I was using before. It's finally ready to deploy! I'm definitely not done improving the app, but it's playable and looks decent enough to share, so why not gather some external feedback?"
  },
  {
    date: "October 29th, 2023",
    entry: "Mostly took it easy today, doing some more light styling work. Found out about registering properties in CSS and using them to set transitions on values that you typically cannot, like the colors in a gradient. Definitely something I might play around with in the UI redesigns I've got on the docket."
  },
  {
    date: "October 28th, 2023",
    entry: `Learned about the CSS <code>:has()</code> selector today, and it's incredible. Being able to style an element's parent is cool, but it's what you can do with adjacent siblings that makes this selector really powerful. Browser support is almost fully there (get with the program, Firefox!), so I'm going to keep <code>:has()</code> in mind as I continue sprucing up my projects. This one is really going to save me from a lot of future headaches! I highly recommend <a href="https://www.youtube.com/watch?v=OGJvhpoE8b4" target="_blank">this video</a> from Kevin Powell if you want to learn more about this new-ish CSS feature.`
  },
  {
    date: "October 27th, 2023",
    entry: `Continued working on styling today. On one of my pages, I have a Master Ball occasionally roll across the bottom via CSS animation. I had run into an issue where the transparent corners of the image were causing the page to scroll along the Y-axis as they rotated. I then proceeded to try <em>everything else</em> before finding the answer: switching the <code>position: absolute;</code> line to <code>position: fixed;</code> in the image's class. In my defense, setting a moving object to be fixed doesn't exactly leap to the front of the mind, semantically speaking. Silly thing to get tripped up on, but now that it's happened once, I surely <a href="https://www.youtube.com/watch?v=UDfAdHBtK_Q" target="_blank"> won't get fooled again</a>.`
  },
  {
    date: "October 26th, 2023",
    entry: `I watched a video on hero page designs last night, and was inspired to make an attractive landing page of my own for Pokédex Master. I'm no professional artist, but I was able to style some HTML elements to look like an old school Gameboy with buttons to render the log in and sign up forms to the little screen. Throw in a <a href="https://app.haikei.app/" target="_blank">Haikei</a> .svg element, and I think I ended up with something super cool. A pro UI/UX designer would probably be able to spruce it up more and really make it production-grade, but I'm pretty proud of what I was able to produce on my own. Can't wait to deploy and share, getting close!`
  },
  {
    date: "October 25th, 2023",
    entry: `Registered for another Flatiron Career Week today, and updated my <a href="https://huntr.co/p/donte-ladatto">Huntr profile</a>. What's with all that empty white space in the header? I wanna fix it. I'm constantly zeroing in on things like that in UIs now, and it's crazy just how many sites have faulty or even completely unusable forms. Hey Liberty Mutual, your sticky navigation bar is a bit jarring on scroll up in Chrome... let me help you with that! 😜<br /> One of my own UIs received a welcome improvement today (and yesterday), as I finally got the 'Play' page of Pokédex Master to look semi-decent. I made a toolbar component to contain the toggles for difficulty and hints, and smoothly animated each change with Javascript and CSS transitions. I grow stronger by the day!`
  },
  {
    date: "October 23rd, 2023",
    entry: `My free PostgreSQL instance on <a href="https://render.com/" target="_blank">Render</a> expired yesterday, so I spent ten minutes this morning creating a new one for my two Render-deployed projects to connect to. It seemed like such a daunting prospect the first time I had to do it, I can't help but laugh at how easy it actually is. Speaking of deploys, why haven't I linked mine on this site yet? Those free Render instances take a while to spin up, and I don't want that to reflect poorly on the performance of my apps... but I <em>guess</em> I still link to them in other places... Eh, why not, I'm on it. Revisited Word of Mouth today for some small CSS tweaks, but I feel like it could use a complete overhaul. Sounds like a nice opportunity to practice Tailwind or Sass!`
  },
  {
    date: "October 22nd, 2023",
    entry: "I made some slight changes to the Toolbox section today. I worry that the colors might be too similar for everybody to differentiate between, but I'll keep it for now while I seek second opinions. Originally I thought I would animate the skill tags to continuously scroll through, but I didn't like the look in this particular case. Still, I gained valuable experience from building the feature out, even if I ultimately decided against including it. Just another thing to file away for later. Tonight, I will start migrating Pokédex Master to Next.js. I couldn't find a comprehensive guide, so I'm just going to reference the docs to figure out file structure and routing. Who knows, maybe I write my own walkthrough."
  },
  {
    date: "October 21st, 2023",
    entry: `Watched a bunch of videos today, learning more about Sass and PostCSS and discovering the clamp property and container queries, among other things. Pretty low-code day otherwise, just toying with a few new ideas on Pokédex Master and on this site. I expect at least one big change will go live tomorrow.`
  },
  {
    date: "October 20th, 2023",
    entry: `Currently playing around with shifting elements off the page and smoothly sliding the remaining elements into the vacated space with the CSS transition-transform combo. I want the user to be able to banish the Pokédex Master instructions paragraph (which takes up a good chunk of space) and bring it back with the click of a button. That on its own is a piece of cake, but I also want it to look <em>good</em>. Tried a couple of different ways so far, but haven't found one I'm truly satisfied with yet. I'm spending more time on this app than I originally thought I would, but I think that this will be something that people can really enjoy, so I want to engineer the best user experience possible. <br/>
    Tweaked the resume a bit more today as well, and gained some insights that I feel will significantly impact my job seeking strategy for the better. Stoked. 😤`
  },
  {
    date: "October 19th, 2023",
    entry: "Worked on some more dynamic styling for Pokédex Master yesterday, making the background color of a save file match the type of the last caught Pokémon. Today I made a sliding toggle switch for changing the game's difficulty, replacing the invisible checkboxes I was using before. It's a small thing, but I think it looks pretty neat! I used my Master Ball graphic as the slider, and actually used the CSS transition property for the first time (what have I been doing with my life) for a silky smooth toggle motion. Between this switch and the progress bar I built yesterday, my library of reusable, highly customizable React components is growing rapidly. No longer do I reach for Bootstrap or Semantic UI when I need something; now I just make it myself."
  },
  {
    date: "October 17th, 2023",
    entry: "Did some LinkedIn skill assessments today. Does anybody put any stock into those? The Ruby on Rails one had a bunch of questions relating to views (which I've never used Rails for), but I was still able to intuit my way to a badge. I usually love collecting accolades, but the few of these I completed before growing bored weren't very fulfilling. I don't feel like I proved anything. SHRUG. Continued working on Pokédex Master, creating another backend route to update the save files in the session when the user wants to switch saves. This was to ensure that the most recent progress was displayed on the save file selection page, because that info is rendered from the user object in the session. I also created a spinning Master Ball loader component, but I'm still not sure how I want to manage loading state. I read up on React Suspense today, so I might just migrate the app from CRA to Next.js and go that route."
  },
  {
    date: "October 16th, 2023",
    entry: "Read the docs on React's useMemo and useCallback hooks. Went in looking for a solution to my ES lint warnings regarding useEffect dependencies, came out with a bigger picture understanding of optimizing performance between component renders. Learning and becoming more resourceful all the time. Got all of Pokédex Master to be responsive. Tomorrow I get fancy with the save file styling."
  },
  {
    date: "October 15th, 2023",
    entry: "Finished up in the Node.js branch of Pokédex Master! I love the way my GitHub contributions map lights up after a good merge. Next up, a fresh, responsive UI. Then deployment! I also really want to build something from scratch. And maybe I should reach out in the EqualEd Discord to see if anyone wants to start working on that... it's shaping up to be a busy Monday!"
  },
  {
    date: "October 14th, 2023",
    entry: "Successfully made it so that a user has 3 save files. Now I just need to figure out how to store the current save file in the session so that the user doesn't have to choose again on page reload. Got everything else working smoothly, including error handling. The plan is to add some more passable styling, an updated README, and take care of the save-file-in-session thing before merging tomorrow. Then I'll think about adding more features!"
  },
  {
    date: "October 13th, 2023",
    entry: "Learned a lot more about Mongoose today, including how to create virtuals (properties not persisted to the database) and include them in the JSON-ified response to a query. Very similar to how I would use custom methods in Active Model Serializers when using Rails. All of the backend routes that I need for now are working as desired, but no doubt I'll be revisiting my code in the near future when I'm stronger with MongoDB & Mongoose."
  },
  {
    date: "October 12th, 2023",
    entry: `Finally used the Postman VS Code <a href="https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode" target="_blank">extension</a> today. I've had it installed for weeks, but I was still using the desktop app. Opening a new tab in my editor is marginally more convenient than switching to another window, but a small upgrade is still an upgrade. Plus I don't have to look at the gnarly orange of Postman's typical UI (says the guy with a similarly orange project in his portfolio). Got my user session object looking the way I want it to, just have to figure out how I want to handle the user's Pokédex. Once that part is squared away, the frontend logic and components will be a cakewalk.`
  },
  {
    date: "October 11th, 2023",
    entry: `Updated the ol' resume today, and sent off my first application in a while. Put some real time into it, trying the quality over quantity thing. I also successfully integrated <a href="https://www.npmjs.com/package/express-session" target="_blank">express-session</a> and <a href="https://www.npmjs.com/package/connect-mongodb-session" target="_blank">connect-mongodb-session</a> into Pokédex Master, along with login and signup routes. Now I just need to get my schemas sorted and do some quick frontend work and I'll be ready to merge the Node.js branch to main and work on a deploy.`
  },
  {
    date: "October 10th, 2023",
    entry: "Did some research on session-based authentication in Node.js and data relationships in Mongoose. Planning to add a User model to Pokédex Master and then deploy it."
  },
  {
    date: "October 9th, 2023",
    entry: `Started a Next.js tutorial project from <a href="https://vercel.com/guides/nextjs-prisma-postgres">Vercel</a>, but quickly got tired of the issues with outdated dependencies and having to fix errors in the code snippets they would give me to use. Gained a little bit of experience with Prisma; creating dummy data with Prisma Studio was an interesting little diversion. Ultimately, the end goal of a simple blog app wasn't captivating enough for me to want to expend extra effort to wrestle through what seemed to be an out-of-date or otherwise largely untested tutorial. Still learned a few things though.`
  },
  {
    date: "October 8th, 2023",
    entry: `Learned enough about Kubernetes to know that it's not something I need to worry about messing with at this point in time. Container orchestration is just a <em>little</em> bit out of scope for an aspiring entry level developer, I think. I'll gladly learn it if the need arises, but there's no use spreading myself too thin right now. On a related note: I believe Docker missed an opportunity when they didn't call their own tool OrcaStrate. Y'know, because of the whole whale aesthetic.`
  },
  {
    date: "October 7th, 2023",
    entry: `Learned the basics of Docker today. Not sure yet if I prefer using the CLI or Docker Desktop. Going to try and tackle Kubernetes between football games tomorrow. Also going to begin migrating all of the projects I created using create-react-app to Next.js or Vite. Better that than constantly having to find workarounds for the dependencies of a defunct project.`
  },
  {
    date: "October 6th, 2023",
    entry: `Added <a href="https://github.com/Limeload/EqualEd" target="_blank">EqualEd</a> to the portfolio page! Also spruced up the place with an svg background image created with <a href="https://app.haikei.app/" target="_blank">Haikei</a>. Pretty neat tool, might go back to that well when I finally sit down to improve the looks of Tossed and Found & Word of Mouth.`
  },
  {
    date: "October 5th, 2023",
    entry: "Final Hackathoughts: All in all, I enjoyed the experience. I was the project manager for my first hackathon, and we ended up being one of the few teams to produce a demo of a working application (every team did have a wonderful presentation though, I definitely took some notes). I learned a lot, and got to brainstorm with and operate alongside some talented developers and designers. The differing, busy schedules got in the way a bit, but I'm proud of what we were able to offer up at the deadline. Plus, nothing is stopping us from continuing to build it into something greater, and I'm hopeful we will. I'm absolutely interested in finding another hackathon to join; I feel that with what I know now I could get off to an even faster start. Or, you know, I could land a job. Might try that. Presentation version of the project goes in the portfolio tomorrow."
  },
  {
    date: "October 4th, 2023",
    entry: `After more research yesterday, I came to realize that making calls with our API key in the frontend wasn't the safest idea. Duh. I went back to the <a href="https://github.com/alexrudall/ruby-openai" target="_blank">ruby-openai gem</a>, scoured the internet for what scarce resources I could find to help me implement my exact vision (there was nothing close), and finally stumbled my way into producing a pretty solid solution. Then I stayed up all night and into the morning making small frontend changes and recording a million demo video takes. Looking forward to seeing what all the other teams came up with tomorrow. As for right now, I could go for a full REST.`
  },
  {
    date: "October 2nd, 2023",
    entry: "I'm still here! Just busy with the Hackathon. Wrote all of the Redux logic, connected it to our backend, and handled errors and loading state all of yesterday and today. Also took it upon myself to do some light styling and a logo, just in case we can't get the full on design in time. I will gladly make the site purple. 😈"
  },
  {
    date: "September 29th, 2023",
    entry: "Getting used to the Git workflow of working in branches, creating pull requests, reviewing and merging. Codebase is coming together quickly now! Also decided it best to integrate OpenAI API functionality in the frontend, through React."
  },
  {
    date: "September 28th, 2023",
    entry: `Found a better <a href="https://github.com/alexrudall/ruby-openai" target="_blank">gem</a>. Looking forward to implementing it during this hackathon! Today I finished up the groundwork for our frontend, complete with a Redux store and slices. Just waiting on the design and some backend stuff to get done. I'm so used to doing everything, so this waiting is killing me! Guess I'll think on some more accessibility features. There's always something to do.`
  },
  {
    date: "September 26th, 2023",
    entry: `Looked into ChatGPT Ruby gems today, and shockingly didn't find all that much. Here's <a href="https://github.com/nagstler/chatgpt-ruby" target="_blank">one</a> that's kind of current, but I think I might like to try my hand at making one myself once this Hackathon is in the rear-view.`
  },
  {
    date: "September 25th, 2023",
    entry: `Decided on <a href="https://userway.org/widget/" target="_blank">UserWay's accessibility widget</a> to cover the AI-driven accessibility criteria for my team's application. It almost feels like cheating though, with how complete and simple to integrate it is. Going to run it by Flatiron personnel tomorrow, but if all is good we'll be able to focus on collaborating and doing all the things we know how to do. Can't wait to write code for a mockup from actual designers!`
  },
  {
    date: "September 24th, 2023",
    entry: `Learned that React Router NavLinks have an 'end' prop today. I had run into an issue where two NavLinks had similar enough paths (/courses and /courses/new) that they would both appear active when only one of them was. Adding the 'end' prop to the Courses NavLink changed the matching logic so that only the end of the end of the path would be matched, and only the correct button received the "active" class. Kind of a slow day.`
  },
  {
    date: "September 23rd, 2023",
    entry: "Started working on a barebones React frontend, just to get a feel for what CSR could look like if nothing else. With the modular nature of React components, I'm sure there will be a few that we can just port over to the actual project repo, if not the whole thing."
  },
  {
    date: "September 22nd, 2023",
    entry: `Not too much to report on the Hackathon front; attended Flatiron's kickoff presentation and got assigned to a team. I started a Discord server for us, but it's an asynchronous hackathon so we're still waiting on some people to check in before getting down to brass tacks. Taking another research night!`
  },
  {
    date: "September 21st, 2023",
    entry: `Went over <a href="https://wcag.com/developers/" target="_blank">Web Content Accessibility Guidelines</a> today in preparation of tomorrow's Hackathon kickoff meeting. Also read up on some AI tool suites like <a href="https://accessibe.com/" target="_blank">Accessibe</a> and <a href="https://userway.org/" target="_blank">Userway</a>. I've got a good enough base to build on top of, but there's a lot of info on project goals and available resources that I won't know until tomorrow. Looking forward to that, and to linking up with my teammates!`
  },
  {
    date: "September 20th, 2023",
    entry: "I'm going to do a Hackathon. Flatiron's Hacktember, to be exact. It's going to run from the 22nd to October 5th, and the build will feature the use of emerging AI technologies to bolster accessibility for diverse learners on an educational platform. Taking today and tomorrow to study up a bit."
  },
  {
    date: "September 19th, 2023",
    entry: `Went through the <a href="https://nextjs.org/learn/basics/create-nextjs-app" target="_blank">Next.js tutorial</a> today. I really love the way client-side routing is implemented. Picked up a couple of new node packages along the way as well: <b>gray-matter</b> for parsing YAML front matter, and <b>remark</b> to parse Markdown files into renderable HTML (which didn't actually work properly in the tutorial). Ready to start working on a Next.js app of my own.`
  },
  {
    date: "September 18th, 2023",
    entry: `PHP is unlike anything I've ever seen! I must learn it... but not now. I'll just add it to my brand new <a href="#/kanban">Kanban</a> board! It's nice to be able to visualize all the things I want to do, simultaneously displaying them for the world to see (so <em>you</em> can hold me accountable!). Task number one is get a job, of course. But I also want to keep learning and improving myself. The board is a great way for me to increase my focus and track my progress.`
  },
  {
    date: "September 17th, 2023",
    entry: "Got my little Swift certificate. Going to cool down on the new language learning for now (I mean it this time, I swear), but I definitely plan to learn SwiftUI and get cracking on an application or two. As for the rest of today, I'm going to update project descriptions and create a sort of 'projects + technologies' to-do list for myself. There's just so much that I want to do and learn; a bit of structure could be just what the doctor ordered to keep me from spreading myself too thin."
  },
  {
    date: "September 16th, 2023",
    entry: `Okay, I really like Swift. It has the shortest print method I've seen since <code>puts</code>, which is nice because these lessons are 50% printing stuff to the console. Then you have the added switch statement features, the use of inclusive ranges, and my favorite so far, the oh-so-clean stride function syntax for iteration. I'm gonna let the whole 'let' thing slide.`
  },
  {
    date: "September 15th, 2023",
    entry: `Hit the end of the Go course. I like how you can add a struct to the fields of another struct to anonymously access the fields of the first struct through the second struct (I found that lesson to be particularly inSTRUCTive). Was that confusing? How about this then: <em>constant</em> variables in Swift are declared using the <em>let</em> keyword. Hi, JavaScript developer here, WHAT?! Yes, I'm learning how to be a Swiftie (is that the right term?), capitalizing on the ol' <a href='https://www.codecademy.com/learn' target="_blank">Codecademy</a> free trial that ends on the 20th. Now I am become dev, the collector of programming languages.`
  },
  {
    date: "September 14th, 2023",
    entry: "Had a 1-on-1 networking conversation today, and heard from some Flatiron alumni that now work in the industry as well. I'm always glad to hear others share their experiences. They can be eye-opening, or simply reassuring. There's always value to be had in a conversation, be it an array of advice or even just a slice. Sometimes, just staying in the loop is nice. Guess what I learned in Go today?"
  },
  {
    date: "September 13th, 2023",
    entry: `Finished the first of <a href='https://www.codecademy.com/learn' target="_blank">Codecademy</a>'s courses on Go. The whole time I was thinking things like "Where are the loops?", "What about arrays?", and "How am I almost done with this already?". Well now I know. There's more! Going to dive into Loops, Arrays, Maps, and something called Structs tomorrow. Should be fun. While I was working through the material, I noticed that the code blocks in the lecture portions for some reason had white backgrounds, which matched the background of the container element and rendered some of the text unreadable (selecting barely helped). My first thought was <em>somebody somewhere has goofed</em>, but then I thought to just open the browser's dev tools and change the element's background to black myself. Look at me, I'm a web developer!`
  },
  {
    date: "September 12th, 2023",
    entry: `<img src="https://go.dev/images/gophers/ladder.svg" alt="Go Gopher" class="entry-pic" />Free trial got extended 7 days, so I'll be taking a look at Golang. Liking what I see so far, especially how clean and concise importing and aliasing multiple packages looks. I'm going to take it slow with this one so I can also carve out time to code in the other languages I've picked up this week.<br/><br/>Attended a virtual event through Flatiron today that provided a glimpse into the world of data visualization, complete with a swift demonstration of some advanced Tableau operations. It appeared to be a low-code gig for the most part, but the case statement syntax did resemble something of a cross between a switch statement and a SQL command. Regardless of whether or not I can see myself becoming a data analyst, it's pretty cool to gain perspective on different technical fields and specializations. The Dallas Software Developers meetup was equally enlightening, with DFW area hiring managers and recruiters from different tech disciplines on the panel to provide insights into what stands out to them in an applicant. I felt validated in some of the things I'm doing, but I also came away with a few new tactics that I'm eager to implement into my own personal strategy. I'm super grateful to the guests and the group organizers for donating their time and sharing their wisdom to help prop up the tech community as a whole. Excited for the next one!`
  },
  {
    date: "September 11th, 2023",
    entry: `Nothing too big to take away from today. I am a little more clear on when to merge and when to rebase with Git, but most everything else was just review. Last part of the course has me making a contribution to the <a href='https://github.com/Codecademy/docs' target="_blank">Codecademy Docs</a> on Github. I'm going to try to get that done tomorrow, but I also will be attending a couple of virtual events as part of Flatiron's Career Week, as well as an in-person Dallas Software Developers meetup. Should be an exciting, busy day.`
  },
  {
    date: "September 10th, 2023",
    entry: `Closed out the Java course, with the last section being about 2D array traversal. Row-major order was second nature to me at this point, but I'd never used column-major order before, so it threw me for a bit of a loop... get it? I just need to remember that converting to column-major traversal is as simple as flipping the terminating conditions of the nested loops AND the accessor indices. Two days left in my <a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a> trial, but I think I'll refrain from trying to cram another language into my brain... for now. Next up: a course on Git and Github.`
  },
  {
    date: "September 9th, 2023",
    entry: `Nearly finished up Java today. Everything I covered today was at least vaguely familiar to me from my time learning JavaScript and Ruby through Flatiron. Seeing core programming concepts executed through slightly different means only serves to reinforce my understanding of them, even if I don't end up programming in Java a whole bunch. I'll be honest though, defining an Array by wrapping it in curly braces elicited a visceral reaction from me. Off to bed now, where I will continue to type <code>public static void main(String[] args){}</code> in my dreams.`
  },
  {
    date: "September 8th, 2023",
    entry: `Slight pivot in plans; decided to make the most of my <a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a> free trial and started a Java course! So I'm addicted to learning, sue me. But going from TypeScript to another compiled language just made sense! There was a bit of a learning curve at first (I must have forgotten something like 2,147,483,647 semicolons), but by the end of the Object Oriented section I was breezing through. Looking forward to day 2!`
  },
  {
    date: "September 7th, 2023",
    entry: `Wrapped up the <a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a> TypeScript course today. Finally got to learn about the interfaces I've been seeing when I look at TS code. As I suspected, they are most heavily used in OOP, and are very much the 'type' counterpart of a class. I've got my little certificate that says I took the time to learn TS; now it's time for me to prove that I know TS. I might watch a few more videos, then try to convert 'Word of Mouth' to use TypeScript, Redux and all. <br/><br/>Also got to meet and chat with a mobile developer at the coffee shop after they recognized the <a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a> code editor on my screen. Super nice guy. It's always awesome when you encounter other developers in the wild -- and make new LinkedIn connections!`
  },
  {
    date: "September 6th, 2023",
    entry: "TypeScript is cool! Learned about nearly all the types and their annotations today (starting on union types tomorrow). On completion of this course, I expect I'll be going through my repos and making sure everything is type-safe, like an expectant parent babyproofing their house."
  },
  {
    date: 'September 5th, 2023',
    entry: `Today was mostly for job applications after stress testing my shiny new portfolio site (had to fix one link after switching to HashRouter). I did find some time to hop over to <a href="https://www.codecademy.com/learn" target="_blank">Codecademy</a> and start learning some TypeScript, though. The utility of types has been apparent to me from the jump, but actually sitting down and working with the TypeScript compiler has me super motivated to continue learning and start updating some of my projects to use TS.`
  },
  {
    date: 'September 4th, 2023',
    entry: "Finally put the finishing touches on this little portfolio site. Spent a lot of time agonizing over CSS, but I feel that it was worth it. The next time I undertake something similar, I'll be able to move a lot faster. I certainly became stronger at using flexbox! Programmatically disabling scroll using component state (when rendering the video player) was something new for me as well. Site goes live tonight!"
  }
]