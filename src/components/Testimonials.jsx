import emilyAvatar from "../assets/images/image-emily.jpg";
import thomasAvatar from "../assets/images/image-thomas.jpg";
import jennieAvatar from "../assets/images/image-jennie.jpg";

const testimonialData = [
  {
    id: 1,
    avatarSrc: emilyAvatar,
    name: "Emily R.",
    designation: "Marketing Director",
    comment:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    id: 2,
    avatarSrc: thomasAvatar,
    name: "Thomas S.",
    designation: "Chief Operating Officer",
    comment:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
  },
  {
    id: 3,
    avatarSrc: jennieAvatar,
    name: "Jennie F.",
    designation: "Business Owner",
    comment:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section>
      <h2>Client testimonials</h2>
      <ul>
        {testimonialData.map(
          ({ id, avatarSrc, name, designation, comment }) => (
            <li key={id}>
              <figure>
                <img src={avatarSrc} alt={`${name}'s avatar`} />
                <blockquote>
                  <p>{comment}</p>
                </blockquote>
                <figcaption>
                  <div>{name}</div>
                  <div>{designation}</div>
                </figcaption>
              </figure>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
