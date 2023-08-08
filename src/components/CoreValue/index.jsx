import BgIllustration from "../../assets/images/core-values-illustration.svg";

const data = [
  {
    title: "Dedication",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  },
  {
    title: "Intellectual Honesty",
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
  },
  {
    title: "Curiosity",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
];

export default function CoreValue() {
  return (
    <div className="overflow-hidden">
      <div className="container relative pt-14 px-[25px] lg:px-0">
        <h2 className="whitesmoke-900 text-blue-700 text-4xl font-medium text-center leading-[30px] mb-6">
          Our Core Values
        </h2>
        <p className="text-base text-gray-700 tracking-[.16px] mb-4">
          Ridiculus laoreet libero pretium et, sit vel elementum convallis
          fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
          etiam sit.
        </p>
        <p className="text-base text-gray-700 tracking-[.16px]">
          In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
          amet enim.
        </p>
        <ul className="mt-[34px] grid gap-y-6">
          {data.map((item) => {
            return (
              <li
                key={data.title}
                className="relative pl-10 before:w-6 before:h-0.5 before:bg-gray-800 before:absolute before:left-0 before:top-4"
              >
                <h3 className="text-black text-2xl mb-1.5">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-end relative -right-20 mt-9">
        <img src={BgIllustration} alt="background illustration" />
      </div>
    </div>
  );
}
