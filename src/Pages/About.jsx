import Card from "../Components/Card";

function About() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card
        title="Our Mission"
        subtitle="To inspire creativity and innovation through technology."
        image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800"
      />
      <Card
        title="Our Vision"
        subtitle="A world where ideas connect and grow freely."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
      />
      <Card
        title="Our Values"
        subtitle="Passion, Growth, and Collaboration."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"
      />
    </div>
  );
}

export default About;
