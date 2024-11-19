import emily_avatar from "../assets/images/image-emily.jpg";
import thomas_avatar from "../assets/images/image-thomas.jpg";
import jennie_avatar from "../assets/images/image-jennie.jpg";

const testimonialData = [
  {
    id: 1,
    avatar_src: emily_avatar,
    comment:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    designation: "Marketing Director",
  },
  {
    id: 2,
    avatar_src: thomas_avatar,
    comment:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    designation: "Chief Operating Officer",
  },
  {
    id: 3,
    avatar_src: jennie_avatar,
    comment:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    designation: "Business Owner",
  },
];

export default function Testimonials() {
  return (
    <section>
      <h2>Client testimonials</h2>
      <ul>
        {testimonialData.map((testimonial) => (
          <li key={testimonial.id}>
            <figure>
              <img
                src={testimonial.avatar_src}
                alt={`${testimonial.name}'s avatar`}
              />
              <blockquote>
                <p>{testimonial.comment}</p>
              </blockquote>
              <figcaption>
                <div>{testimonial.name}</div>
                <div>{testimonial.designation}</div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
