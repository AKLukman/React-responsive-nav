import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: "gym001",
      name: "FitZone Fitness Center",
      features: [
        "Cardio Machines",
        "Weightlifting Area",
        "Group Classes",
        "Personal Training",
      ],
      price: "$50",
    },
    {
      id: "gym002",
      name: "FlexFit Gym",
      features: ["CrossFit Area", "Yoga Studio", "Indoor Track", "Sauna"],
      price: "$70",
    },
    {
      id: "gym003",
      name: "PowerUp Gym",
      features: [
        "Basketball Court",
        "Swimming Pool",
        "Spinning Classes",
        "Nutrition Counseling",
      ],
      price: "$60",
    },
    {
      id: "gym004",
      name: "IronStrong Fitness Club",
      features: [
        "Powerlifting Zone",
        "Pilates Studio",
        "Boxing Ring",
        "Massage Therapy",
      ],
      price: "$80",
    },
    {
      id: "gym005",
      name: "CoreFit Health Club",
      features: [
        "TRX Training",
        "Zumba Classes",
        "Steam Room",
        "Physical Therapy",
        "Physical Therapy",
        "Physical Therapy",
      ],
      price: "$65",
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl mb-12">Best Price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
