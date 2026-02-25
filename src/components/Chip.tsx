type ChipProps = {
  text: string;
};

function Chip({text}: ChipProps) {
  return (
    <div className="px-4 py-2 rounded-full text-white bg-neutral-800">
        {text}
    </div>
  )
}

export default Chip;