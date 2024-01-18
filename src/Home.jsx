import { Link } from "react-router-dom";

export function Style() {
  return (
    <ul className="menu gap-1 absolute top-0 right-0">
      <li className="btn btn-primary items-start">Primary</li>
      <li className="btn btn-secondary items-start">Secondary</li>
      <li className="btn btn-accent items-start">Accent</li>
      <li className="btn btn-neutral items-start">Neutral</li>
      <li className="btn btn-info items-start">Info</li>
      <li className="btn btn-success items-start">Success</li>
      <li className="btn btn-warning items-start">Warning</li>
      <li className="btn btn-error items-start">Error</li>
    </ul>
  );
}

export function Hello() {
  return (
    <section id="Hello" className=" h-screen gap-2 justify-center ">
      <p className="text-primary">Hi, my name is</p>
      <h1 className="text-4xl font-bold mt-4 md:text-6xl lg:text-8xl">
        Zachary Maynor.
      </h1>
      <h2 className="text-3xl  lg:text-5xl">I make responsive websites!</h2>
      <p className=" mt-4 max-w-lg">
        I practice every day to create sleek and responsive websites. I
        currently work as a line cook and make delicious food! My journey to
        learn and hone my skills as a Front End Developer never stops! I enjoy
        every minute.
      </p>
      <button className="btn btn-outline btn-primary w-fit px-8 mt-4">
        Let's Talk!
      </button>
    </section>
  );
}

export function About() {
  return (
    <section id="About" className="gap-8 h-screen">
      <p className="text-primary font-bold md:text-xl">About Me</p>
      <div className="flex">
        <div className="max-w-xl md:w-1/2">
          <div className="flex flex-col gap-2">
            <p>
              Hey! So a few things about me: I love nature, I like to pretend
              I'm an avid reader, I enjoy making websites for people, and I
              collect Pokemon Cards!
            </p>
            <p>
              I grew up in the state of NJ and travelled up to Maine to go to
              college. I graduated with my bachelors in Botany! I decided that
              botany was more of my hobby rather my passion. My true passion is
              to make art with science! What better way to do that than Front
              End Web Development?!
            </p>
            <p>
              Fast forward through tutorial after tutorial and I end up taking
              META's Front End Certification to concentrate all that I taught
              myself into one certification. Now I venture forward into the
              world of tech to hone my skills and help build beautiful websites!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Her are some technologies I've been working with:</p>
            <div className="grid grid-cols-2 ">
              <ul className="list-inside list-disc ">
                <li>Javascript</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
              <ul className="list-inside list-disc">
                <li>Firebase</li>
                <li>DaisyUI</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:block aspect-square w-1/2 pl-20">
          <img className="aspect-square rounded-lg" src="/profile.JPG"></img>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const projectList = [
    {
      imgURL: "/projects/dndCardCreator.jpeg",
      title: "DnD Spell Card Creator",
      description:
        "A web app designed for Dungeons and Dragon players. Lookup 5th Edition spells and add them to a collection. Customise your collections for specific classes or however you want. Then print your collection in a perfectly formatted arrangment that makes cutting them out easy!",
      languages: ["React", "Tailwind CSS", "DaisyUI", "Firebase", "API"],
      src: "https://github.com/Lucycat0511/dnd_card_creator",
      link: "https://dnd-card-creator.netlify.app/",
    },
    {
      imgURL: "/projects/WebsiteClone.png",
      title: "Plantify (eCommerce  Clone)",
      description:
        "This is a 1 dimensional clone website of https://www.thesill.com/. It mimics the same responsive layout as an eCommerce website.",
      languages: ["React", "Tailwind CSS"],
      src: "https://github.com/Lucycat0511/Plantify",
      link: "https://main--chic-truffle-3a5fa4.netlify.app/",
    },
  ];
  return (
    <section id="Projects" className="gap-8">
      <p className="text-primary font-bold md:text-xl">Projects I've Made</p>
      <div className="flex flex-col gap-16  ">
        {projectList.map((project, index) => {
          return (
            <div className="flex flex-col gap-8 p-8 rounded-lg bg-neutral md:bg-transparent md:outline-1 md:outline md:outline-primary">
              <h3 className="font-bold text-xl">{project.title}</h3>
              <div className="flex gap-8 ">
                <div className="flex flex-col gap-8 md:w-3/5 ">
                  <div className=" md:p-6 bg-neutral rounded-md">
                    <p>{project.description}</p>
                  </div>
                  <ul className="flex gap-x-4 gap-y-2 flex-wrap">
                    {project.languages.map((language) => {
                      return <li>{language}</li>;
                    })}
                  </ul>
                  <div className="flex gap-4">
                    <Link to={project.src} target="_blank">
                      <i className=" link-primary fa-brands fa-github fa-lg"></i>
                    </Link>
                    <Link to={project.link} target="_blank">
                      <i className="link-primary fa-solid fa-arrow-up-right-from-square"></i>
                    </Link>
                  </div>
                </div>
                <img
                  src={project.imgURL}
                  className="hidden md:block rounded-lg outline outline-neutral w-2/5 lg:w-1/2 h-full  self-start"
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="Contact"
      className=" h-screen justify-center items-center text-center"
    >
      <div className="flex flex-col gap-8 items-center outline max-w-md p-8 rounded-md outline-primary">
        <h2 className="text-3xl md:text-5xl font-bold">Let's Talk!</h2>
        <p>
          Feel free to email with any questions you may have! I am currently
          loooking for all kinds of work.
        </p>
        <button className="btn btn-primary btn-outline w-fit px-8">
          Email Me
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col px-12 lg:px-56 gap-12">
      <Hello />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
