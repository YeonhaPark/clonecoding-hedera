import DigitItem from "../atoms/DigitItem";
const digits = [
  { digits: "5,679,285", description: "MAINNET\nACCOUNTS CREATED" },
  { digits: "156,598,237", description: "TRANSACTIONS IN\nTHE LAST 24 HOURS" },
  { digits: "$3.50", description: "SECONDS TO\nCONSENSUS FINALITY" },
  { digits: 0.000003, description: "AVERAGE KWH\nPER TRANSACTION" },
];
export default function DigitsSection() {
  return (
    <section className="digits-section">
      <div className="digits-container">
        {digits.map((el) => (
          <DigitItem
            key={el.description}
            digits={el.digits}
            description={el.description}
          />
        ))}
      </div>
    </section>
  );
}
