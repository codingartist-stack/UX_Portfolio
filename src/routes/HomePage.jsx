import artMuseum from '../assets/images/ArtMuseum/artProject.png';

export default function HomePage() {
  return (
    <>
      <h1>Hi, I'm Sarah Larsen.</h1>
      <p>
        As a UX designer and artist, I employ a blend of creative and logical
        approaches, allowing me to address both the emotional and practical
        aspects of interface usability.
      </p>
      <img src={artMuseum} alt="art Museum project" className="heroImage" />
      <div>box 2</div>
      <div>box 3</div>
    </>
  );
}
