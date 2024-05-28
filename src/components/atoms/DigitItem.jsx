export default function DigitItem({ digits, description }) {
  return (
    <div className="text-center">
      <div className="text-[42px] text-green-600 tracking-[-3.28px]">
        {digits}
      </div>
      <div className="digits-item-desc text-gray-900">
        <strong className="whitespace-pre">{description}</strong>
      </div>
    </div>
  );
}
