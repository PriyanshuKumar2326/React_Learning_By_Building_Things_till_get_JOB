export default function MenuList({
  title,
  data,
  selectedValue,
  setSelectedValue,
  name,
}) {
  return (
    <div>
      <h2 className="text-white mb-2">{title}</h2>

      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <label
            key={index}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={item}
              checked={selectedValue === item}
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}