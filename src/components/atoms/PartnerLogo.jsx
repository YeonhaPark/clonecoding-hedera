export default function PartnerLogo({ url, name }) {
  return (
    <div key={name} className="w-[calc((100%/4)-10px)]">
      <img
        className="h-auto w-auto max-h-[150px] max-w-full object-center object-contain"
        src={url}
        alt={name}
      />
    </div>
  );
}
