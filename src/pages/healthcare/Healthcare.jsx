import CategoryLayout from "../../components/CategoryLayout";

function Healthcare() {

  const data = [

    {
      heading: "Medical Devices",
      items: [
        { name: "Respiratory", link: "/healthcare/respiratory" },
        { name: "Medical Imaging", link: "/healthcare/imaging" },
        { name: "Syringes", link: "/healthcare/syringes" },
        { name: "Surgical", link: "/healthcare/surgical" },
        { name: "Hospital Disposables", link: "/healthcare/disposable" },
      ],
    },

    {
      heading: "Biotechnology",
      items: [
        { name: "Genomics", link: "#" },
        { name: "Stem Cells", link: "#" },
        { name: "Biomaterials", link: "#" },
      ],
    },

    {
      heading: "Healthcare Services",
      items: [
        { name: "Optical", link: "#" },
        { name: "Dental", link: "#" },
        { name: "Surgical Procedures", link: "#" },
        { name: "Wound Care", link: "#" },
      ],
    },

    {
      heading: "Diagnostics",
      items: [
        { name: "IVD", link: "#" },
        { name: "Molecular", link: "#" },
        { name: "Lab Testing", link: "#" },
      ],
    },

  ];

  return (
    <CategoryLayout
      title="Healthcare"
      data={data}
      viewAll="/healthcare"
    />
  );
}

export default Healthcare;
