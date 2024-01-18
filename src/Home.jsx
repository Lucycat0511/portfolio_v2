export function Style() {
  return (
    <ul className="menu gap-1">
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
    <section className="gap-2 justify-center ">
      <p className="text-accent">Hi, my name is</p>
      <h1 className="text-4xl font-bold mt-4 md:text-6xl lg:text-8xl">
        Zachary Maynor.
      </h1>
      <h2 className="text-3xl text-gray-400 font-bold lg:text-5xl">
        I make responsive websites!
      </h2>
      <p className="text-gray-400 mt-4 max-w-lg">
        I practice every day to create sleek and responsive websites. I
        currently work as a line cook and make delicious food! My journey to
        learn and hone my skills as a Front End Developer never stops! I enjoy
        every minute.
      </p>
      <button className="btn btn-outline btn-accent w-fit px-8 mt-4">
        Let's Talk!
      </button>
    </section>
  );
}

export function About() {
  return (
    <section className="gap-8">
      <p className="text-accent font-bold md:text-xl">About Me</p>
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
  const projectList = [];
  return (
    <section className="gap-8">
      <p className="text-accent font-bold md:text-xl">Projects I've Made</p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 p-8 rounded-lg bg-neutral">
          <h3 className="font-bold text-xl">DnD Spell Card Creator</h3>
          <p>
            A web app designed for Dungeons and Dragon players. Lookup 5th
            Edition spells and add them to a collection. Customise your
            collections for specific classes or however you want. Then print
            your collection in a perfectly formatted arrangment that makes
            cutting them out easy!
          </p>
          <ul className="flex gap-2">
            <li>API</li>
          </ul>
          <div className="flex gap-4">
            <p>src</p>
            <p>link</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col px-12 lg:px-56">
      <Hello />
      <About />
      <Projects />
    </div>
  );
}
